"use client"

import { Users, Cloud, Rocket, ChevronRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const engagementItems = [
  {
    icon: Users,
    title: "Working style",
    description: "Consulting-led, custom-designed solutions aligned to your workflows and tools.",
  },
  {
    icon: Cloud,
    title: "Deployment options",
    description: "Secure cloud, on-premise, or private environments based on your requirements.",
  },
  {
    icon: Rocket,
    title: "Delivery scope",
    description: "End-to-end implementation with continuous optimization after go-live.",
  },
]

export function EngagementModel() {
  const sectionRef = useRef<HTMLElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

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

  // Track scroll position for dot indicators
  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const handleScroll = () => {
      const scrollLeft = scrollContainer.scrollLeft
      const cardWidth = scrollContainer.offsetWidth * 0.88 // 88vw card width
      const newIndex = Math.round(scrollLeft / cardWidth)
      setActiveIndex(Math.min(newIndex, engagementItems.length - 1))
    }

    scrollContainer.addEventListener("scroll", handleScroll, { passive: true })
    return () => scrollContainer.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToCard = (index: number) => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return
    const cardWidth = scrollContainer.offsetWidth * 0.88
    scrollContainer.scrollTo({
      left: cardWidth * index,
      behavior: "smooth",
    })
  }

  return (
    <section ref={sectionRef} className="py-14 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-10 md:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Engagement model
          </h2>
          <p className="text-white/60 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
            How we structure delivery so execution stays clear, secure, and outcome-focused.
          </p>
        </div>
      </div>

      {/* Mobile: Horizontal Snap Scroll */}
      <div
        ref={scrollRef}
        className={`md:hidden flex overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 transition-all duration-1000 delay-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {/* Left spacer for first card centering */}
        <div className="flex-shrink-0 w-[6vw]" />
        
        {engagementItems.map((item) => (
          <div
            key={item.title}
            className="flex-shrink-0 snap-center w-[88vw] px-2"
          >
            <div className="group h-full p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              {/* Icon */}
              <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center mb-5 group-hover:bg-white/20 transition-colors duration-300">
                <item.icon className="w-5 h-5 text-white/80" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-white mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-white/60 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
        
        {/* Right spacer for last card centering */}
        <div className="flex-shrink-0 w-[6vw]" />
      </div>

      {/* Mobile: Dot Indicators & Swipe Hint */}
      <div
        className={`md:hidden flex flex-col items-center gap-3 mt-4 transition-all duration-1000 delay-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        {/* Dots */}
        <div className="flex gap-2">
          {engagementItems.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToCard(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "bg-white w-6"
                  : "bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Swipe hint */}
        <div className="flex items-center gap-1 text-white/30 text-xs">
          <ChevronRight className="w-3 h-3" />
          <span>Swipe</span>
        </div>
      </div>

      {/* Desktop: Grid Layout */}
      <div className="hidden md:block max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`grid grid-cols-3 gap-6 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {engagementItems.map((item, index) => (
            <div
              key={item.title}
              className="group p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-1"
              style={{
                transitionDelay: isVisible ? `${300 + index * 100}ms` : "0ms",
              }}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors duration-300">
                <item.icon className="w-6 h-6 text-white/80" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-white mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-white/60 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
