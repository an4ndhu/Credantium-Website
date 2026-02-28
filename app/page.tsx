import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { HeroSection } from "@/components/hero-section"
import { Footer } from "@/components/footer"
import { AuroraBackground } from "@/components/aurora-background"
import dynamic from "next/dynamic"

const WhatWeDeliver = dynamic(() => import("@/components/what-we-deliver").then((mod) => mod.WhatWeDeliver), {
  loading: () => <section id="services" className="py-14 md:py-28" aria-hidden="true" />,
})

const LogoMarquee = dynamic(() => import("@/components/logo-marquee").then((mod) => mod.LogoMarquee), {
  loading: () => <section className="py-10" aria-hidden="true" />,
})

const EngagementModel = dynamic(() => import("@/components/engagement-model").then((mod) => mod.EngagementModel), {
  loading: () => <section className="py-16 sm:py-20" aria-hidden="true" />,
})

const ProblemSolutionSection = dynamic(
  () => import("@/components/problem-solution-section").then((mod) => mod.ProblemSolutionSection),
  {
    loading: () => <section id="about" className="py-12 sm:py-24" aria-hidden="true" />,
  },
)

const ProcessFlowchart = dynamic(() => import("@/components/process-flowchart").then((mod) => mod.ProcessFlowchart), {
  loading: () => <section id="process" className="py-16 sm:py-28" aria-hidden="true" />,
})

const CountriesSection = dynamic(() => import("@/components/countries-section").then((mod) => mod.CountriesSection), {
  loading: () => <section className="py-16 sm:py-24" aria-hidden="true" />,
})

const FeaturesSection = dynamic(() => import("@/components/features-section").then((mod) => mod.FeaturesSection), {
  loading: () => <section id="features" className="py-16 sm:py-24" aria-hidden="true" />,
})

const TestimonialsSection = dynamic(
  () => import("@/components/testimonials-section").then((mod) => mod.TestimonialsSection),
  {
    loading: () => <section id="testimonials" className="pt-14 pb-16" aria-hidden="true" />,
  },
)

const CTASection = dynamic(() => import("@/components/cta-section").then((mod) => mod.CTASection), {
  loading: () => <section id="contact" className="py-10 px-4 sm:px-6 lg:px-8 mb-24 sm:mb-32" aria-hidden="true" />,
})

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <main className="min-h-screen relative overflow-hidden">
        <div className="fixed inset-0 w-full h-full pointer-events-none" aria-hidden="true">
          <AuroraBackground />
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
