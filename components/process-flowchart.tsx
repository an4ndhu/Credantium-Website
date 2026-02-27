"use client"

import { useEffect, useRef, useState } from "react"
import { Search, Code, Rocket, ChevronRight, ChevronLeft } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Discover",
    description: "Define objectives, map workflows, and identify the highest-impact opportunity.",
    icon: Search,
  },
  {
    number: "02",
    title: "Develop",
    description: "Create and validate the AI system and automation logic for your environment.",
    icon: Code,
  },
  {
    number: "03",
    title: "Integrate",
    description: "Deploy into your existing tools, monitor outcomes, and continuously improve performance.",
    icon: Rocket,
  },
]

export function ProcessFlowchart() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [activeStep, setActiveStep] = useState(0)

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

  const goToNext = () => {
    setActiveStep((prev) => Math.min(prev + 1, steps.length - 1))
  }

  const goToPrev = () => {
    setActiveStep((prev) => Math.max(prev - 1, 0))
  }

  return (
    <section id="process" ref={sectionRef} className="py-16 sm:py-28 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-10 sm:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Simple 3-step implementation
          </h2>
          <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto font-light">
            A clear execution path from discovery to integration.
          </p>
        </div>

        {/* Desktop: Grid Layout */}
        <div
          className={`hidden md:grid grid-cols-3 gap-6 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="h-full p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-1">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-5xl font-bold text-white/20">{step.number}</span>
                  <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-white/15 group-hover:border-white/30 transition-all duration-300">
                    <step.icon className="w-6 h-6 text-white/80" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-white/50 text-base leading-relaxed">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="absolute top-1/2 -right-3 w-6 h-px bg-white/20" />
              )}
            </div>
          ))}
        </div>

        {/* Mobile: Stepper */}
        <div className="md:hidden">
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            {/* Progress Bar */}
            <div className="flex items-center justify-center gap-2 mb-8">
              {steps.map((_, index) => (
                <div key={index} className="flex items-center">
                  <button
                    onClick={() => setActiveStep(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index <= activeStep ? "bg-white scale-110" : "bg-white/20"
                    }`}
                    aria-label={`Go to step ${index + 1}`}
                  />
                  {index < steps.length - 1 && (
                    <div
                      className={`w-12 h-0.5 mx-1 transition-all duration-500 ${
                        index < activeStep ? "bg-white" : "bg-white/20"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Step Content */}
            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${activeStep * 100}%)` }}
              >
                {steps.map((step, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-1">
                    <div className="text-center">
                      {/* Icon */}
                      <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mx-auto mb-5">
                        <step.icon className="w-8 h-8 text-white/80" />
                      </div>
                      
                      {/* Step Number */}
                      <div className="text-sm text-white/40 font-medium mb-2">Step {step.number}</div>
                      
                      {/* Title */}
                      <h3 className="text-2xl font-semibold text-white mb-3">{step.title}</h3>
                      
                      {/* Description */}
                      <p className="text-white/50 text-base leading-relaxed max-w-sm mx-auto">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={goToPrev}
                disabled={activeStep === 0}
              className={`flex items-center gap-1 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeStep === 0
                  ? "text-white/20 cursor-not-allowed"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              }`}
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </button>
              
              <button
                onClick={goToNext}
                disabled={activeStep === steps.length - 1}
              className={`flex items-center gap-1 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeStep === steps.length - 1
                  ? "text-white/20 cursor-not-allowed"
                  : "text-white bg-white/10 hover:bg-white/20"
                }`}
              >
                Next Step
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
