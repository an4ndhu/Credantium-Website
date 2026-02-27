import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <GlassmorphismNav />

      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-semibold text-white mb-4">Terms of Service</h1>
            <p className="text-white/70">Last updated: February 27, 2026</p>
          </header>

          <section className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 space-y-8 text-white/80">
            <div>
              <h2 className="text-xl font-semibold text-white mb-3">1. Acceptance of Terms</h2>
              <p>
                By using this website or engaging Credantium for services, you agree to these Terms of Service. If you
                do not agree, please do not use the website or services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-3">2. Services</h2>
              <p>
                Credantium provides AI automation, consulting, and related implementation services. Specific project
                scope, deliverables, pricing, and timelines are defined in separate proposals or service agreements.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-3">3. Client Responsibilities</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate information and timely feedback.</li>
                <li>Ensure lawful use of delivered solutions and third-party tools.</li>
                <li>Maintain security of account credentials and access permissions under your control.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-3">4. Fees and Payments</h2>
              <p>
                Pricing and payment terms are defined in the applicable proposal, invoice, or agreement. Late or
                unpaid balances may result in paused work, limited support, or suspension of service access.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-3">5. Intellectual Property</h2>
              <p>
                Unless otherwise agreed in writing, each party retains ownership of its pre-existing intellectual
                property. Rights to project deliverables are governed by the signed agreement for that engagement.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-3">6. Confidentiality</h2>
              <p>
                We treat non-public business information shared during engagements as confidential and use it only to
                provide services, subject to legal and contractual obligations.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-3">7. Disclaimers</h2>
              <p>
                Services and website content are provided on an &quot;as is&quot; and &quot;as available&quot; basis. AI and automation outcomes
                depend on many factors, and specific business results cannot be guaranteed unless explicitly agreed.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-3">8. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, Credantium is not liable for indirect, incidental, special, or
                consequential damages arising from use of the website or services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-3">9. Termination</h2>
              <p>
                We may suspend or terminate access to services for material breach, misuse, or non-payment, subject to
                applicable agreement terms and law.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-3">10. Changes to Terms</h2>
              <p>
                We may update these Terms from time to time. Updates are effective when posted on this page with a
                revised date.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-3">11. Contact</h2>
              <p>
                For questions about these Terms, contact us through the website form in the Contact section.
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
