"use client"

import { Cpu, Brain, Workflow, Lightbulb, ChevronDown } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const deliverables = [
  {
    icon: Cpu,
    title: "Custom AI Systems",
    description:
      "Tailored to your exact use case, data, and operational workflow — including intelligent agents that handle tasks, route requests, update records, and keep processes running automatically.",
  },
  {
    icon: Brain,
    title: "Predictive Intelligence",
    description:
      "Forecast demand, detect risk, optimize decisions, and provide real-time visibility across your operations.",
  },
  {
    icon: Workflow,
    title: "Business Automation",
    description:
      "Multi-step workflows executed across tools and teams through reliable, scalable systems that reduce manual effort, accelerate execution, and ensure consistent follow-ups.",
  },
  {
    icon: Lightbulb,
    title: "Consulting & System Design",
    description:
      "Workflow analysis, opportunity identification, and solution architecture aligned to your business goals and existing technology.",
  },
]

export function WhatWeDeliver() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const toggleExpand = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index))
  }

  return (
    <section id="services" ref={sectionRef} className="py-14 md:py-28 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-10 md:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full mr-2 bg-cyan-400"></span>
            Our Services
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            What We Deliver
          </h2>
          <p className="text-white/60 text-sm sm:text-lg md:text-xl max-w-xl sm:max-w-2xl mx-auto leading-relaxed">
            End-to-end AI systems designed for your business — from intelligent agents to predictive analytics and automated workflows.
          </p>
        </div>

        {/* Desktop: Grid Layout */}
        <div
          className={`hidden md:grid grid-cols-2 gap-6 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {deliverables.map((item, index) => (
            <div
              key={item.title}
              className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-1"
              style={{
                transitionDelay: isVisible ? `${300 + index * 100}ms` : "0ms",
              }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center mb-5 group-hover:bg-white/15 group-hover:border-white/30 group-hover:scale-110 transition-all duration-300">
                <item.icon className="w-7 h-7 text-white/80" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-white mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-white/50 text-base leading-relaxed">
                {item.description}
              </p>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </div>
          ))}
        </div>

        {/* Mobile: Accordion Layout */}
        <div
          className={`md:hidden flex flex-col gap-4 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {deliverables.map((item, index) => {
            const isExpanded = expandedIndex === index
            return (
              <div
                key={item.title}
                className={`rounded-2xl bg-white/5 border backdrop-blur-sm transition-all duration-300 ${
                  isExpanded
                    ? "border-white/20 bg-white/10"
                    : "border-white/10"
                }`}
                style={{
                  transitionDelay: isVisible ? `${300 + index * 100}ms` : "0ms",
                }}
              >
                {/* Accordion Header */}
                <button
                  onClick={() => toggleExpand(index)}
                  className="w-full flex items-center justify-between p-4 text-left"
                >
                  <div className="flex items-center gap-4">
                    {/* Icon */}
                    <div
                      className={`w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center transition-all duration-300 ${
                        isExpanded ? "bg-white/20 border-white/30" : ""
                      }`}
                    >
                      <item.icon className="w-5 h-5 text-white/80" />
                    </div>
                    {/* Title */}
                    <h3 className="text-base font-semibold leading-snug text-white">
                      {item.title}
                    </h3>
                  </div>
                  {/* Chevron */}
                  <ChevronDown
                    className={`w-5 h-5 text-white/50 transition-transform duration-300 ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Accordion Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-4 pb-4 text-white/70 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

