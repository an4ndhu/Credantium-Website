import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <GlassmorphismNav />

      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-semibold text-white mb-4">Privacy Policy</h1>
            <p className="text-white/70">Last updated: February 27, 2026</p>
          </header>

          <section className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 space-y-8 text-white/80">
            <div>
              <h2 className="text-xl font-semibold text-white mb-3">1. Who We Are</h2>
              <p>
                Credantium provides AI automation, consulting, and related business services. This Privacy Policy
                explains how we collect, use, and protect your information when you visit our website or contact us.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-3">2. Information We Collect</h2>
              <p className="mb-3">We may collect the following information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Contact details such as name, email address, phone number, and business name.</li>
                <li>Inquiry or project details you submit through forms or messages.</li>
                <li>Basic usage information such as pages visited and device/browser data.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-3">3. How We Use Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to inquiries and provide requested services.</li>
                <li>Deliver proposals, onboarding, support, and service updates.</li>
                <li>Improve site performance, user experience, and service quality.</li>
                <li>Protect against abuse, fraud, and unauthorized access.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-3">4. How Information Is Shared</h2>
              <p className="mb-3">We do not sell personal information. We may share data with:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Service providers that help us run our website, communications, and operations.</li>
                <li>Legal authorities when required by law or to protect rights and safety.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-3">5. Data Retention</h2>
              <p>
                We keep information only as long as needed for business, legal, and operational purposes. Retention
                periods vary based on the type of information and applicable requirements.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-3">6. Security</h2>
              <p>
                We use reasonable administrative, technical, and organizational safeguards to protect personal
                information. No method of transmission or storage is completely secure.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-3">7. Your Choices and Rights</h2>
              <p>
                You may request access, correction, or deletion of your personal information by contacting us. We will
                review and process requests in line with applicable law.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-3">8. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices
                of those sites.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-3">9. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Updates are effective when posted on this page
                with a revised date.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-3">10. Contact</h2>
              <p>
                For privacy-related questions, contact us through the website form on the Contact section of this site.
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
