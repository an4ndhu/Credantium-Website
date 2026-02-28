"use client"

import dynamic from "next/dynamic"
import { useEffect, useState } from "react"

const Aurora = dynamic(() => import("./Aurora"), {
  loading: () => null,
})

function shouldEnableAurora() {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
  const isSmallOrTouchScreen = window.matchMedia("(max-width: 900px), (pointer: coarse)").matches
  const navWithMemory = navigator as Navigator & { deviceMemory?: number }
  const isLowMemoryDevice = typeof navWithMemory.deviceMemory === "number" && navWithMemory.deviceMemory <= 4

  return !prefersReducedMotion && !isSmallOrTouchScreen && !isLowMemoryDevice
}

export function AuroraBackground() {
  const [useAurora, setUseAurora] = useState(false)

  useEffect(() => {
    setUseAurora(shouldEnableAurora())
  }, [])

  return (
    <>
      <div
        className="absolute inset-0 bg-[radial-gradient(75%_55%_at_50%_5%,rgba(148,163,184,0.2),transparent_68%)]"
        aria-hidden="true"
      />
      {useAurora ? <Aurora colorStops={["#475569", "#64748b", "#475569"]} amplitude={1.2} blend={0.6} speed={0.8} /> : null}
    </>
  )
}
