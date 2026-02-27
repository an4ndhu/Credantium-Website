import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Dancing_Script, Caveat } from "next/font/google"

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script",
  display: "swap",
})

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Credantium - AI Automation Agency",
  description:
    "Transform your business with intelligent AI automation solutions. Empower your organization to operate at the speed of thought.",
  generator: "v0.app",
  icons: {
    icon: "/images/design-mode/credantium-logo.png",
    apple: "/images/design-mode/credantium-logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans antialiased ${dancingScript.variable} ${caveat.variable}`}>
        {children}
      </body>
    </html>
  )
}
