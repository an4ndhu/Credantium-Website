"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import dynamic from "next/dynamic"
import type { ComponentType } from "react"

type RotatingTextProps = {
  texts: string[]
  mainClassName?: string
  staggerFrom?: "first" | "last" | "center" | "random" | number
  initial?: Record<string, unknown>
  animate?: Record<string, unknown>
  exit?: Record<string, unknown>
  staggerDuration?: number
  splitLevelClassName?: string
  transition?: Record<string, unknown>
  rotationInterval?: number
}

const RotatingText = dynamic(() => import("./RotatingText").then((mod) => mod.default as ComponentType<RotatingTextProps>), {
  loading: () => null,
})

export function HeroSection() {
  const [enableHeadlineAnimation, setEnableHeadlineAnimation] = useState(false)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const isSmallOrTouchScreen = window.matchMedia("(max-width: 768px), (pointer: coarse)").matches
    setEnableHeadlineAnimation(!prefersReducedMotion && !isSmallOrTouchScreen)
  }, [])

  const scrollToContact = () => {
    const element = document.querySelector("#contact")
    if (element) {
      const rect = element.getBoundingClientRect()
      const currentScrollY = window.pageYOffset || document.documentElement.scrollTop
      const elementAbsoluteTop = rect.top + currentScrollY
      const navbarHeight = 100
      const targetPosition = Math.max(0, elementAbsoluteTop - navbarHeight)

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-16 sm:py-16 md:py-20 relative">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-medium mb-7 sm:mb-8 mt-8 sm:mt-12">
          <span className="w-2 h-2 rounded-full mr-2 animate-pulse bg-green-400"></span>
          AI, Automation & Consulting
        </div>

        {/* Main Heading */}
        <h1 className="text-[2.15rem] sm:text-5xl md:text-6xl lg:text-7xl leading-tight font-bold text-balance mb-6 sm:mb-6">
          <span className="text-white">Elevate your</span>
          <br />
          <span className="inline-flex items-center justify-center flex-wrap gap-1 sm:gap-2 mt-2 sm:mt-4 md:mt-6 lg:mt-8">
            <span className="text-white">Business</span>
            {enableHeadlineAnimation ? (
              <RotatingText
                texts={["Growth", "Innovation", "Efficiency", "Success"]}
                mainClassName="min-w-[9.5ch] px-1.5 sm:px-2 md:px-3 bg-white text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg shadow-lg"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-1 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            ) : (
              <span className="min-w-[9.5ch] px-1.5 sm:px-2 md:px-3 bg-white text-black py-0.5 sm:py-1 md:py-2 rounded-lg shadow-lg">
                Growth
              </span>
            )}
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 text-balance max-w-md sm:max-w-2xl md:max-w-3xl mx-auto mb-10 sm:mb-8 md:mb-12 leading-relaxed font-light">
          Credantium helps businesses save time and boost revenue with smart AI automation, workflows, and intelligent
          solutions, fully managed for you.
        </p>

        {/* CTA Button */}
        <div className="flex flex-col items-center justify-center w-full px-0 sm:px-0">
          <Button
            size="lg"
            onClick={scrollToContact}
            className="bg-white text-black rounded-full w-full max-w-[18rem] sm:w-auto sm:max-w-none px-8 sm:px-11 py-4 sm:py-[1.125rem] text-lg sm:text-xl font-semibold tracking-tight transition-all duration-300 hover:bg-white/90 hover:scale-105 hover:shadow-2xl hover:shadow-white/20 group cursor-pointer shadow-xl ring-1 ring-white/70"
          >
            Get Started
          </Button>
          <p className="mt-3 text-sm text-white/65">Free Audit, No Commitment</p>
        </div>
      </div>
    </section>
  )
}

