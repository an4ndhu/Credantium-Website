"use client"

import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import { Bot, Workflow, MessageSquare, BarChart3, Zap, HeadphonesIcon } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      icon: Bot,
      title: "AI Chatbot Development",
      description:
        "Intelligent chatbots that handle customer inquiries 24/7, improving response times and customer satisfaction.",
      features: ["Multi-channel support", "Natural language processing", "Custom training", "Analytics dashboard"],
    },
    {
      icon: Workflow,
      title: "Workflow Automation",
      description:
        "Streamline your business processes with intelligent automation that reduces manual work and increases efficiency.",
      features: ["Process mapping", "Custom integrations", "Task automation", "Performance monitoring"],
    },
    {
      icon: MessageSquare,
      title: "Customer Engagement",
      description: "Enhance customer interactions with AI-powered engagement tools that drive conversions and loyalty.",
      features: ["Lead qualification", "Personalized responses", "Multi-language support", "CRM integration"],
    },
    {
      icon: BarChart3,
      title: "Business Intelligence",
      description: "Transform data into actionable insights with AI-powered analytics and reporting solutions.",
      features: ["Real-time analytics", "Predictive modeling", "Custom dashboards", "Data visualization"],
    },
    {
      icon: Zap,
      title: "Process Optimization",
      description:
        "Identify and eliminate bottlenecks in your operations with AI-driven process analysis and optimization.",
      features: ["Efficiency analysis", "Cost reduction", "Scalability planning", "Continuous improvement"],
    },
    {
      icon: HeadphonesIcon,
      title: "Ongoing Support & Consultation",
      description:
        "Lifelong partnership with continuous support, updates, and consultation on emerging AI technologies.",
      features: ["24/7 technical support", "Regular updates", "Strategy consultation", "Training sessions"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <GlassmorphismNav />

      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 text-white/60 text-sm font-medium tracking-wider uppercase mb-6">
              <div className="w-8 h-px bg-white/30"></div>
              Our Services
              <div className="w-8 h-px bg-white/30"></div>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-8 tracking-tight">
              Comprehensive <span className="font-medium italic">AI solutions</span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              From initial consultation to ongoing support, we provide end-to-end AI automation services tailored to
              your business needs.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <service.icon className="w-12 h-12 text-white mb-6" />
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-white/70 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-white/60 text-sm">
                      <div className="w-1.5 h-1.5 bg-white/60 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Process Section */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-12">
            <h2 className="text-4xl font-light text-white mb-12 text-center">Our Process</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Study & Analyze</h3>
                <p className="text-white/70">
                  We thoroughly study your business to identify automation opportunities and pain points.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Develop & Deploy</h3>
                <p className="text-white/70">
                  We build and implement custom AI automation solutions tailored to your needs.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Support & Evolve</h3>
                <p className="text-white/70">
                  We provide ongoing consultation and updates on emerging AI tools and technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
