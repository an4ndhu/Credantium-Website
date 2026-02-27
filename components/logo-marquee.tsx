"use client"

import { Truck, Landmark, Users, ShoppingBag, HeartPulse, Building2, Briefcase, TrendingUp, Factory, HardHat } from "lucide-react"

const industries = [
  { name: "Logistics", icon: Truck, color: "text-orange-400" },
  { name: "Finance", icon: Landmark, color: "text-green-400" },
  { name: "HR", icon: Users, color: "text-blue-400" },
  { name: "E-commerce", icon: ShoppingBag, color: "text-violet-400" },
  { name: "Healthcare", icon: HeartPulse, color: "text-rose-400" },
  { name: "Facilities", icon: Building2, color: "text-amber-400" },
  { name: "Professional Services", icon: Briefcase, color: "text-indigo-400" },
  { name: "Trading", icon: TrendingUp, color: "text-cyan-400" },
  { name: "Manufacturing", icon: Factory, color: "text-emerald-400" },
  { name: "Construction", icon: HardHat, color: "text-yellow-400" },
]

function IndustryItem({ name, icon: Icon, color }: { name: string; icon: typeof Truck; color: string }) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 mx-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm whitespace-nowrap hover:bg-white/10 transition-colors duration-300">
      <Icon className={`w-4 h-4 ${color}`} />
      <span className="text-white/80 font-medium text-sm">{name}</span>
    </div>
  )
}

export function LogoMarquee() {
  const duplicatedIndustries = [...industries, ...industries]

  return (
    <section className="py-6 relative overflow-hidden">
      <div className="text-center mb-4">
        <p className="text-white/40 text-xs uppercase tracking-widest font-medium">
          Designed for operations-driven teams across multiple industries
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee">
          {duplicatedIndustries.map((industry, index) => (
            <IndustryItem key={`${industry.name}-${index}`} name={industry.name} icon={industry.icon} color={industry.color} />
          ))}
        </div>
      </div>
    </section>
  )
}
