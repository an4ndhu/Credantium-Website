"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { TestimonialsColumn } from "@/components/ui/testimonials-column"
import { Button } from "@/components/ui/button"
import { Quote, ChevronLeft, ChevronRight, X } from "lucide-react"

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [showModal, setShowModal] = useState(false)
  const [formData, setFormData] = useState({
    description: "",
    name: "",
    position: "",
    company: "",
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".fade-in-element")
            elements.forEach((element, index) => {
              setTimeout(() => {
                element.classList.add("animate-fade-in-up")
              }, index * 300)
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

  // Auto-rotate testimonials on mobile
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormData({
      description: "",
      name: "",
      position: "",
      company: "",
    })
    setShowModal(false)
    alert("Thank you for your review! We'll review it shortly.")
  }

  const testimonials = [
    {
      text: "We were strugling to build a trading community in Dicord. Credantium helped us build it through AI user intereacting bots, Live Market News, etc. Now we have seen a large increase in user interaction and new member joins",
      name: "Vipin V",
      role: "FundedIn - Marketing Head",
    },
    {
      text: "Used to Loose lots of room bookings through call because of staff shortage. Now that we use AI receptionist which works 24/7 we are able take booking for rooms even at midnight.",
      name: "Michle",
      role: "Armani Bar&Hotel - General Manager",
    },
    {
      text: "With Credantium, our conversion rates increased by 85% and boosted our weekend revenue by 40%.",
      name: "Muneer S",
      role: "Brother's Restaurant - Owner",
    },
    {
      text: "Its not just the Automation. I was supprised on how much I'm saving or salaries now. Booking appointments, Resheduling appointments,Managing customers, all were a hassel. Now i save more that triple the money and no hassle ",
      name: "Kamal",
      role: "Ayush Dental - Owner",
    },
    {
      text: "Customer satisfaction scores improved dramatically since implementing AI. Clients love the instant responses and personalized recommendations.",
      name: "David Kim",
      role: "Customer Experience Manager",
    },
  ]

  const goToPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <section id="testimonials" ref={sectionRef} className="relative pt-14 pb-16 px-4 sm:px-6 lg:px-8">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-32">
          <div className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out inline-flex items-center gap-2 text-white/60 text-sm font-medium tracking-wider uppercase mb-6">
            <div className="w-8 h-px bg-white/30"></div>
            Success Stories
            <div className="w-8 h-px bg-white/30"></div>
          </div>
          <h2 className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out text-4xl md:text-6xl lg:text-7xl font-light text-white mb-8 tracking-tight text-balance">
            The businesses we <span className="font-medium italic">empower</span>
          </h2>
          <p className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Discover how leading businesses are transforming their customer engagement with AI-powered chat solutions
          </p>
        </div>

        {/* Desktop: 3-Column Scrolling Layout */}
        <div className="hidden lg:block fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out relative">
          <div className="flex flex-row justify-center items-start gap-6 min-h-[600px] overflow-hidden">
            <div
              className="flex gap-6 max-w-5xl flex-1"
              style={{
                maskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
              }}
            >
              <TestimonialsColumn testimonials={testimonials.slice(0, 2)} duration={15} className="flex-1" />
              <TestimonialsColumn testimonials={testimonials.slice(2, 4)} duration={18} className="flex-1" />
              <TestimonialsColumn testimonials={testimonials.slice(3, 5)} duration={12} className="flex-1" />
            </div>

            <div className="w-96 sticky top-24">
              <div className="p-6 rounded-2xl border border-white/20 bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/15%),theme(backgroundColor.white/5%))] backdrop-blur-xl">
                <h3 className="text-2xl font-light text-white mb-2">Post a Review</h3>
                <p className="text-sm text-white/60 mb-6">Share your experience with us</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-white/80 mb-2">
                      Description
                    </label>
                    <textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent resize-none"
                      placeholder="Tell us about your experience..."
                    />
                  </div>

                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="position" className="block text-sm font-medium text-white/80 mb-2">
                      Position
                    </label>
                    <input
                      type="text"
                      id="position"
                      value={formData.position}
                      onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent"
                      placeholder="Your position"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-white/80 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent"
                      placeholder="Your company"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all duration-300"
                  >
                    Submit Review
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet: Carousel */}
        <div className="lg:hidden max-w-lg mx-auto fade-in-element opacity-0 translate-y-8">
          {/* Carousel Card */}
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-1">
                  <div className="p-5 sm:p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm text-center">
                    {/* Quote Icon */}
                    <Quote className="w-10 h-10 text-white/20 mx-auto mb-4" />
                    
                    {/* Review Text */}
                    <p className="text-white/90 text-[0.95rem] sm:text-base leading-relaxed mb-6">
                      &quot;{testimonial.text}&quot;
                    </p>
                    
                    {/* Avatar */}
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center mb-3">
                        <span className="text-white font-medium text-lg">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <p className="text-white font-semibold">{testimonial.name}</p>
                      <p className="text-white/50 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={goToPrev}
              className="w-11 h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/70 hover:bg-white/20 transition-colors"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeIndex === index ? "bg-white w-6" : "bg-white/30 w-2"
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={goToNext}
              className="w-11 h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/70 hover:bg-white/20 transition-colors"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile CTA */}
          <div className="mt-8 text-center">
            <p className="text-white/50 text-sm mb-4">
              Want to share your experience?
            </p>
            <Button
              onClick={() => setShowModal(true)}
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all duration-300"
            >
              Write a Review
            </Button>
          </div>

          {/* Mobile Review Modal */}
          {showModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
              <div className="w-full max-w-md p-6 rounded-2xl border border-white/20 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl max-h-[90vh] overflow-y-auto">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-light text-white">Post a Review</h3>
                  <button
                    onClick={() => setShowModal(false)}
                    className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-white/20 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-sm text-white/60 mb-4">Share your experience with us</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="mobile-description" className="block text-sm font-medium text-white/80 mb-2">
                      Description
                    </label>
                    <textarea
                      id="mobile-description"
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent resize-none"
                      placeholder="Tell us about your experience..."
                    />
                  </div>

                  <div>
                    <label htmlFor="mobile-name" className="block text-sm font-medium text-white/80 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="mobile-name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="mobile-position" className="block text-sm font-medium text-white/80 mb-2">
                      Position
                    </label>
                    <input
                      type="text"
                      id="mobile-position"
                      value={formData.position}
                      onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent"
                      placeholder="Your position"
                    />
                  </div>

                  <div>
                    <label htmlFor="mobile-company" className="block text-sm font-medium text-white/80 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="mobile-company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent"
                      placeholder="Your company"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all duration-300"
                  >
                    Submit Review
                  </Button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
