# Credantium Website

Next.js 14 app for Credantium marketing pages and lead capture form.

## Requirements

- Node.js 20+ (Node 22 recommended)
- npm 10+ or npm 11+

## Local setup

1. Install dependencies:

```bash
npm ci
```

2. Create environment file:

```bash
cp .env.example .env.local
```

3. Fill required values in `.env.local`:

- `RESEND_API_KEY`
- `CONTACT_EMAIL_TO`
- Optional: `CONTACT_EMAIL_FROM`
- Optional anti-spam tuning:
  - `CONTACT_RATE_LIMIT_WINDOW_MS`
  - `CONTACT_RATE_LIMIT_MAX`
  - `CONTACT_MIN_SUBMIT_MS`

4. Start dev server:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Scripts

- `npm run dev` - start local dev server
- `npm run lint` - run ESLint
- `npx tsc --noEmit` - run TypeScript checks
- `npm run build` - production build
- `npm run start` - run production server locally

## AWS Amplify deployment

This repo is configured for Amplify using `amplify.yml`.

1. Connect your Git repository and branch in Amplify.
2. Keep the build spec as repository `amplify.yml`.
3. Add environment variables in Amplify:
   - `RESEND_API_KEY`
   - `CONTACT_EMAIL_TO`
   - `CONTACT_EMAIL_FROM` (recommended)
   - Optional anti-spam vars from `.env.example`
4. Trigger deploy.

Amplify build uses:

- `npm ci`
- `npm run build`
- artifacts from `.next`

## Post-deploy validation checklist

- Pages load: `/`, `/services`, `/privacy`, `/terms`
- Contact form submits successfully
- Lead email arrives at configured inbox
- API validation works:
  - missing required fields returns `400`
  - spam/rate-limited requests are blocked

## Troubleshooting

- If the app renders as plain HTML during dev:
  1. Stop dev server
  2. Delete `.next`
  3. Run `npm run dev` again
- If emails are not sent:
  - verify Resend domain/sender
  - verify `RESEND_API_KEY` and `CONTACT_EMAIL_TO`
  - check `/api/contact` response in browser devtools network tab

## Security note

A Resend API key was previously shared during development chat. Rotate that key in Resend before production and update all environments with the new key.
