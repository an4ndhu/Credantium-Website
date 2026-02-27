"use client"

import { useEffect, useRef, useState } from "react"

// UAE Flag
const UAEFlag = () => (
  <svg viewBox="0 0 36 36" className="w-full h-full">
    <rect fill="#00732F" width="36" height="12" />
    <rect fill="#FFFFFF" y="12" width="36" height="12" />
    <rect fill="#000000" y="24" width="36" height="12" />
    <rect fill="#FF0000" width="10" height="36" />
  </svg>
)

// UK Flag
const UKFlag = () => (
  <svg viewBox="0 0 36 36" className="w-full h-full">
    <rect fill="#012169" width="36" height="36" />
    <path fill="#FFFFFF" d="M0 0 L36 36 M36 0 L0 36" stroke="#FFFFFF" strokeWidth="6" />
    <path fill="#FFFFFF" d="M18 0 V36 M0 18 H36" stroke="#FFFFFF" strokeWidth="6" />
    <path fill="#C8102E" d="M18 0 V36 M0 18 H36" stroke="#C8102E" strokeWidth="4" />
    <path fill="#C8102E" d="M0 0 L36 36 M36 0 L0 36" stroke="#C8102E" strokeWidth="2.5" />
  </svg>
)

// Singapore Flag
const SingaporeFlag = () => (
  <svg viewBox="0 0 36 36" className="w-full h-full">
    <rect fill="#FF0000" width="36" height="18" />
    <rect fill="#FFFFFF" y="18" width="36" height="18" />
    <circle fill="#FFFFFF" cx="9" cy="9" r="5" />
    <path fill="#FF0000" d="M9 4.5 A4.5 4.5 0 0 1 9 13.5 A3.5 3.5 0 0 0 9 4.5" />
    <g fill="#FFFFFF">
      <polygon points="18,3 18.5,4.5 20,4.5 18.8,5.5 19.2,7 18,6 16.8,7 17.2,5.5 16,4.5 17.5,4.5" />
      <polygon points="24,5 24.5,6.5 26,6.5 24.8,7.5 25.2,9 24,8 22.8,9 23.2,7.5 22,6.5 23.5,6.5" />
      <polygon points="28,9 28.5,10.5 30,10.5 28.8,11.5 29.2,13 28,12 26.8,13 27.2,11.5 26,10.5 27.5,10.5" />
      <polygon points="30,14 30.5,15.5 32,15.5 30.8,16.5 31.2,18 30,17 28.8,18 29.2,16.5 28,15.5 29.5,15.5" />
    </g>
  </svg>
)

// India Flag
const IndiaFlag = () => (
  <svg viewBox="0 0 36 36" className="w-full h-full">
    <rect fill="#FF9932" width="36" height="12" />
    <rect fill="#FFFFFF" y="12" width="36" height="12" />
    <rect fill="#138808" y="24" width="36" height="12" />
    <circle fill="none" stroke="#000080" strokeWidth="0.8" cx="18" cy="18" r="4" />
    <g fill="#000080">
      {[...Array(24)].map((_, i) => (
        <rect key={i} x="17.8" y="14.5" width="0.4" height="2" transform={`rotate(${i * 15} 18 18)`} />
      ))}
    </g>
  </svg>
)

export function CountriesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

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

  const countries = [
    { name: "UAE", Flag: UAEFlag },
    { name: "UK", Flag: UKFlag },
    { name: "Singapore", Flag: SingaporeFlag },
    { name: "India", Flag: IndiaFlag },
  ]

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-10 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-6">Physical Consultants Available In</h3>
            <p className="text-white/70 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
              Meet with our expert consultants in person across four continents
            </p>

            {/* Desktop: 2x2 Grid */}
            <div className="hidden sm:grid grid-cols-4 gap-4">
              {countries.map((country, index) => (
                <div
                  key={country.name}
                  className={`bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-5 hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-pointer group ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-14 h-14 mx-auto mb-3 rounded-full overflow-hidden shadow-lg group-hover:scale-110 transition-transform duration-300 ring-2 ring-white/20">
                    <country.Flag />
                  </div>
                  <span className="text-white font-semibold text-lg">{country.name}</span>
                </div>
              ))}
            </div>

            {/* Mobile: 2x2 Grid */}
            <div className="grid sm:hidden grid-cols-2 gap-5 max-w-xs mx-auto">
              {countries.map((country, index) => (
                <div
                  key={country.name}
                  className={`flex flex-col items-center rounded-xl bg-white/5 border border-white/10 px-4 py-3 transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-white/20 shadow-lg mb-2">
                    <country.Flag />
                  </div>
                  <span className="text-white font-medium text-sm">{country.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
