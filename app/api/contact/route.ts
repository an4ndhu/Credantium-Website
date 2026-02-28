import { NextResponse } from "next/server"
import { Resend } from "resend"

type ContactPayload = {
  name?: string
  email?: string
  phone?: string
  businessName?: string
  website?: string
  formStartedAt?: number
}

const RESEND_API_KEY = process.env.RESEND_API_KEY
const CONTACT_EMAIL_TO = process.env.CONTACT_EMAIL_TO
const CONTACT_EMAIL_FROM = process.env.CONTACT_EMAIL_FROM || "Credantium <onboarding@resend.dev>"
const CONTACT_RATE_LIMIT_WINDOW_MS = Number(process.env.CONTACT_RATE_LIMIT_WINDOW_MS || 10 * 60 * 1000)
const CONTACT_RATE_LIMIT_MAX = Number(process.env.CONTACT_RATE_LIMIT_MAX || 5)
const CONTACT_MIN_SUBMIT_MS = Number(process.env.CONTACT_MIN_SUBMIT_MS || 1500)

const resend = RESEND_API_KEY ? new Resend(RESEND_API_KEY) : null
const rateLimitStore = new Map<string, { count: number; resetAt: number }>()

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function normalizeFromAddress(value: string) {
  const trimmed = value.trim()

  // Prefer "Name <email@domain>" and ignore any accidental trailing tokens.
  const namedMatch = trimmed.match(/^([^<>\r\n]+?)\s*<([^<>\s@]+@[^\s@]+\.[^\s@]+)>/)
  if (namedMatch) {
    const name = namedMatch[1].trim()
    const email = namedMatch[2].trim()
    return name ? `${name} <${email}>` : email
  }

  // Fall back to plain email and ignore trailing tokens.
  const emailMatch = trimmed.match(/^([^<>\s@]+@[^\s@]+\.[^\s@]+)/)
  if (emailMatch) {
    return emailMatch[1].trim()
  }

  return null
}

function getClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for")
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim()
  }
  const realIp = request.headers.get("x-real-ip")
  if (realIp) {
    return realIp.trim()
  }
  return "unknown"
}

function isRateLimited(clientIp: string) {
  const now = Date.now()
  const entry = rateLimitStore.get(clientIp)

  if (!entry || now > entry.resetAt) {
    rateLimitStore.set(clientIp, { count: 1, resetAt: now + CONTACT_RATE_LIMIT_WINDOW_MS })
    return false
  }

  if (entry.count >= CONTACT_RATE_LIMIT_MAX) {
    return true
  }

  entry.count += 1
  rateLimitStore.set(clientIp, entry)
  return false
}

export async function POST(request: Request) {
  const fromAddress = normalizeFromAddress(CONTACT_EMAIL_FROM)

  if (!resend || !CONTACT_EMAIL_TO) {
    return NextResponse.json(
      { error: "Email service is not configured. Add RESEND_API_KEY and CONTACT_EMAIL_TO." },
      { status: 500 },
    )
  }

  if (!fromAddress) {
    return NextResponse.json(
      { error: "Email service is not configured. CONTACT_EMAIL_FROM is invalid." },
      { status: 500 },
    )
  }

  let payload: ContactPayload

  try {
    payload = (await request.json()) as ContactPayload
  } catch {
    return NextResponse.json({ error: "Invalid JSON payload." }, { status: 400 })
  }

  const honeypot = payload.website?.trim() || ""
  if (honeypot) {
    // Silently accept likely bot submissions to avoid giving signals.
    return NextResponse.json({ ok: true })
  }

  const formStartedAt = Number(payload.formStartedAt || 0)
  if (formStartedAt > 0 && Date.now() - formStartedAt < CONTACT_MIN_SUBMIT_MS) {
    return NextResponse.json({ error: "Submission blocked. Please try again." }, { status: 400 })
  }

  const clientIp = getClientIp(request)
  if (isRateLimited(clientIp)) {
    return NextResponse.json(
      { error: "Too many submissions. Please wait a few minutes and try again." },
      { status: 429 },
    )
  }

  const name = payload.name?.trim() || ""
  const email = payload.email?.trim() || ""
  const phone = payload.phone?.trim() || ""
  const businessName = payload.businessName?.trim() || ""

  if (!name || !email || !phone) {
    return NextResponse.json({ error: "Name, email, and phone are required." }, { status: 400 })
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 })
  }

  const safeName = escapeHtml(name)
  const safeEmail = escapeHtml(email)
  const safePhone = escapeHtml(phone)
  const safeBusinessName = escapeHtml(businessName || "Not provided")

  try {
    await resend.emails.send({
      from: fromAddress,
      to: [CONTACT_EMAIL_TO],
      replyTo: email,
      subject: `New Lead Submission - ${name}`,
      html: `
        <h2>New Lead Submission</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Phone:</strong> ${safePhone}</p>
        <p><strong>Business Name:</strong> ${safeBusinessName}</p>
      `,
      text: [
        "New Lead Submission",
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Business Name: ${businessName || "Not provided"}`,
      ].join("\n"),
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("Resend send failed:", error)
    return NextResponse.json({ error: "Failed to send email." }, { status: 502 })
  }
}
