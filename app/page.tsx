import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { HeroSection } from "@/components/hero-section"
import { WhatWeDeliver } from "@/components/what-we-deliver"
import { LogoMarquee } from "@/components/logo-marquee"
import { EngagementModel } from "@/components/engagement-model"
import { ProcessFlowchart } from "@/components/process-flowchart"
import { CountriesSection } from "@/components/countries-section"
import { ProblemSolutionSection } from "@/components/problem-solution-section"
import Aurora from "@/components/Aurora"
import { FeaturesSection } from "@/components/features-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <main className="min-h-screen relative overflow-hidden">
        <div className="fixed inset-0 w-full h-full">
          <Aurora colorStops={["#475569", "#64748b", "#475569"]} amplitude={1.2} blend={0.6} speed={0.8} />
        </div>
        <div className="relative z-10">
          <GlassmorphismNav />
          <HeroSection />
          <WhatWeDeliver />
          <LogoMarquee />
          <EngagementModel />
          <ProblemSolutionSection />
          <ProcessFlowchart />
          <CountriesSection />
          <FeaturesSection />
          <TestimonialsSection />
          <CTASection />
          <Footer />
        </div>
      </main>
    </div>
  )
}
