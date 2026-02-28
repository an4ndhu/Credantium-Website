import type { ComponentType, ReactNode } from "react"
import Image from "next/image"

interface FooterLink {
  title: string
  href: string
  icon?: ComponentType<{ className?: string }>
}

interface FooterSection {
  label: string
  links: FooterLink[]
}

const footerLinks: FooterSection[] = [
  {
    label: "Company",
    links: [
      { title: "Privacy Policy", href: "/privacy" },
      { title: "Terms of Service", href: "/terms" },
    ],
  },
]

const FOOTER_CREDIT = "Web Development by Credantium"

export function Footer() {
  return (
    <footer className="md:rounded-t-6xl relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center rounded-t-4xl border-t bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)] px-5 sm:px-6 py-12 lg:py-16">
      <div className="bg-foreground/20 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur" />

      <div className="grid w-full gap-8 xl:grid-cols-3 xl:gap-8">
        <AnimatedContainer className="space-y-4">
          <Image
            src="/images/design-mode/credantium-logo.png"
            alt="Credantium Logo"
            width={64}
            height={64}
            className="size-16"
          />
          <div className="text-muted-foreground mt-8 text-sm md:mt-0 md:block hidden">
            <p>© {new Date().getFullYear()} Credantium. All rights reserved.</p>
          </div>
        </AnimatedContainer>

        <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-2 xl:mt-0">
          {footerLinks.map((section) => (
            <AnimatedContainer key={section.label}>
              <div className="mb-10 md:mb-0">
                <h3 className="text-xs">{section.label}</h3>
                <ul className="text-muted-foreground mt-4 space-y-2 text-sm">
                  {section.links.map((link) => (
                    <li key={link.title}>
                      <a
                        href={link.href}
                        className="hover:text-foreground inline-flex items-center transition-all duration-300"
                      >
                        {link.icon && <link.icon className="me-1 size-4" />}
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedContainer>
          ))}
        </div>
      </div>

      <div className="md:hidden mt-8 text-center space-y-2">
        <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} Credantium. All rights reserved.</p>
        <p className="text-muted-foreground text-xs">{FOOTER_CREDIT}</p>
      </div>

      <div className="hidden md:block mt-8 pt-6 border-t border-foreground/10 w-full">
        <p className="text-muted-foreground text-xs text-center">{FOOTER_CREDIT}</p>
      </div>
    </footer>
  )
}

type ViewAnimationProps = {
  className?: string
  children: ReactNode
}

function AnimatedContainer({ className, children }: ViewAnimationProps) {
  return <div className={className}>{children}</div>
}
