"use client"

import { useState, useEffect, useRef } from "react"
import { ArrowRight, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const navigation = [
  { name: "Services", href: "#services" },
  { name: "Problem", href: "#about" },
  { name: "Process", href: "#process" },
  { name: "Reviews", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
]

export function GlassmorphismNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [hasLoaded, setHasLoaded] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasLoaded(true)
    }, 100)

    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        const currentScrollY = window.scrollY

        if (currentScrollY > 50) {
          if (currentScrollY > lastScrollY.current && currentScrollY - lastScrollY.current > 5) {
            setIsVisible(false)
          } else if (lastScrollY.current - currentScrollY > 5) {
            setIsVisible(true)
          }
        } else {
          setIsVisible(true)
        }

        lastScrollY.current = currentScrollY
      }
    }

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar, { passive: true })

      return () => {
        window.removeEventListener("scroll", controlNavbar)
        clearTimeout(timer)
      }
    }

    return () => clearTimeout(timer)
  }, [])

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href)
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
      } else {
        window.location.href = `/${href}`
      }
    } else {
      window.location.href = href
    }
    setIsOpen(false)
  }

  return (
    <>
      <nav
        className={`fixed top-4 md:top-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-20 md:-translate-y-24 opacity-0"
        } ${hasLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        style={{
          transition: hasLoaded ? "all 0.5s ease-out" : "opacity 0.8s ease-out, transform 0.8s ease-out",
        }}
      >
        {/* Main Navigation */}
        <div className="w-[92vw] max-w-lg md:max-w-2xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3 py-2.5 sm:px-4 sm:py-2 md:px-6">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link
                href="/"
                className="flex items-center hover:scale-105 transition-transform duration-200 cursor-pointer"
              >
                <div className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center">
                  <Image
                    src="/images/design-mode/credantium-logo.png"
                    alt="Credantium"
                    width={36}
                    height={36}
                    className="w-full h-full object-contain"
                  />
                </div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-6">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="text-white/80 hover:text-white hover:scale-105 transition-all duration-200 font-medium cursor-pointer"
                  >
                    {item.name}
                  </button>
                ))}
              </div>

              {/* Desktop CTA Button */}
              <div className="hidden md:block">
                <button
                  onClick={() => scrollToSection("#contact")}
                  className="relative bg-white hover:bg-gray-50 text-black font-medium px-5 py-2 rounded-full flex items-center transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer group text-sm"
                >
                  <span className="mr-2">Get Audit</span>
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden text-white p-2 -mr-1 rounded-full hover:bg-white/10 transition-all duration-200 cursor-pointer"
              >
                <div className="relative w-6 h-6">
                  <Menu
                    size={24}
                    className={`absolute inset-0 transition-all duration-300 ${
                      isOpen ? "opacity-0 rotate-180 scale-75" : "opacity-100 rotate-0 scale-100"
                    }`}
                  />
                  <X
                    size={24}
                    className={`absolute inset-0 transition-all duration-300 ${
                      isOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-180 scale-75"
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden relative">
          {isOpen && (
            <div
              className="fixed inset-0 bg-black/20 backdrop-blur-sm transition-all duration-300"
              onClick={() => setIsOpen(false)}
            />
          )}

          {isOpen && (
            <div className="relative z-10 mt-2 w-[92vw] max-w-sm mx-auto transition-all duration-500 ease-out transform-gpu opacity-100 translate-y-0 scale-100">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-2xl">
                <div className="flex flex-col space-y-1">
                  {navigation.map((item, index) => (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className="text-white/80 hover:text-white hover:bg-white/10 rounded-lg px-3 py-3.5 text-left transition-all duration-300 font-medium cursor-pointer animate-mobile-menu-item"
                      style={{
                        animationDelay: `${index * 80 + 100}ms`,
                      }}
                    >
                      {item.name}
                    </button>
                  ))}
                  <div className="h-px bg-white/10 my-2" />
                  <button
                    onClick={() => scrollToSection("#contact")}
                    className="relative bg-white hover:bg-gray-50 text-black font-medium px-6 py-3.5 rounded-full w-full flex items-center justify-center transition-all duration-300 hover:scale-105 cursor-pointer group transform animate-mobile-menu-item"
                    style={{
                      animationDelay: `${navigation.length * 80 + 150}ms`,
                    }}
                  >
                    <span className="mr-2">Get Your Free Audit</span>
                    <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}
