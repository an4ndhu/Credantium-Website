"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function CTASection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessName: "",
    website: "",
  })
  const [formStartedAt, setFormStartedAt] = useState(() => Date.now())
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".fade-in-element")
            elements.forEach((element, index) => {
              setTimeout(() => {
                element.classList.add("animate-fade-in-up")
              }, index * 200)
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")
    setErrorMessage("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          formStartedAt,
        }),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", phone: "", businessName: "", website: "" })
        setFormStartedAt(Date.now())
      } else {
        const data = await response.json().catch(() => null)
        if (data?.error) {
          setErrorMessage(String(data.error))
        } else {
          setErrorMessage("Something went wrong. Please try again.")
        }
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setErrorMessage("Network error. Please try again.")
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }
  return (
    <section id="contact" ref={sectionRef} className="relative py-10 px-4 sm:px-6 lg:px-8 mb-24 sm:mb-32">
      <div className="relative max-w-4xl mx-auto">
        <div className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out text-center p-6 sm:p-8 md:p-10 rounded-3xl border border-white/20 bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/15%),theme(backgroundColor.white/5%))]">
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-white mb-5 sm:mb-6 text-balance leading-tight">
            Ready to uncover how{" "}
            <span className="font-medium italic bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">
              AI can transform your business?
            </span>
          </h3>
          <p className="text-base sm:text-lg text-white/70 mb-7 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            Get a complete AI Audit, we&apos;ll analyze your operations, identify automation opportunities, and give you a
            clear roadmap to save time and increase profit
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
            <Input
              type="text"
              placeholder="Your Name *"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white/40"
            />
            <Input
              type="email"
              placeholder="Email Address *"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white/40"
            />
            <Input
              type="tel"
              placeholder="Phone Number *"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white/40"
            />
            <Input
              type="text"
              placeholder="Business Name (Optional)"
              value={formData.businessName}
              onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white/40"
            />
            <input
              type="text"
              name="website"
              value={formData.website}
              onChange={(e) => setFormData({ ...formData, website: e.target.value })}
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full group inline-flex items-center justify-center gap-3 px-8 py-5 sm:py-6 bg-gradient-to-r from-white to-slate-100 text-slate-900 rounded-full font-semibold text-base sm:text-lg hover:from-slate-50 hover:to-slate-200 transition-all duration-300 hover:scale-105 shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Get Your Free Audit"}
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>

            {submitStatus === "success" && <p className="text-green-400 text-sm">Thank you! We&apos;ll be in touch soon.</p>}
            {submitStatus === "error" && (
              <p className="text-red-400 text-sm">{errorMessage || "Something went wrong. Please try again."}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

