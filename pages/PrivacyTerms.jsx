"use client";

import { FaEnvelope } from "react-icons/fa";

export default function PrivacyTerms() {
  return (
    <section className="py-28 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="text-xs uppercase tracking-widest text-teal-600 font-semibold">
            Legal Information
          </span>

          <h1 className="mt-4 text-4xl md:text-5xl font-semibold text-gray-900">
            Privacy Policy & Terms of Service
          </h1>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Transparency and accountability are core to Angelin Care’s service
            philosophy.
          </p>
        </div>

        <div className="space-y-20">
          {/* Privacy Policy */}
          <div className="bg-white p-10 md:p-14 rounded-3xl border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.05)]">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              Privacy Policy
            </h2>

            <p className="text-sm text-gray-400 mb-6">
              Last Updated: {new Date().toLocaleDateString()}
            </p>

            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                Angelin Care respects your privacy and is committed to
                protecting your personal information. This policy explains how
                we collect, use, and safeguard your data when you engage with
                our home care and staffing services.
              </p>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  1. Information We Collect
                </h3>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Name, phone number, email, and residential address</li>
                  <li>
                    Service requirements and medical care details (if
                    applicable)
                  </li>
                  <li>Communication records and consultation notes</li>
                  <li>
                    Payment-related information processed via secure third-party
                    platforms
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  2. How We Use Your Information
                </h3>
                <ul className="list-disc ml-6 space-y-2">
                  <li>To assess and understand your care requirements</li>
                  <li>To coordinate and deploy verified professionals</li>
                  <li>
                    To manage salary structuring and service accountability
                  </li>
                  <li>
                    To communicate updates, confirmations, and service feedback
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  3. Data Protection & Confidentiality
                </h3>
                <p>
                  We implement reasonable administrative and technical
                  safeguards to protect your personal information from
                  unauthorized access, misuse, or disclosure. Sensitive medical
                  information is handled strictly for service coordination
                  purposes.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  4. Third-Party Disclosure
                </h3>
                <p>
                  We do not sell or rent personal data. Information may be
                  shared only with assigned service professionals or payment
                  providers strictly for operational purposes.
                </p>
              </div>
            </div>
          </div>

          {/* Terms of Service */}
          <div className="bg-white p-10 md:p-14 rounded-3xl border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.05)]">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              Terms of Service
            </h2>

            <p className="text-sm text-gray-400 mb-6">
              Last Updated: {new Date().toLocaleDateString()}
            </p>

            <div className="space-y-6 text-gray-600 leading-relaxed">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  1. Nature of Service
                </h3>
                <p>
                  Angelin Care operates as a professionally managed staffing and
                  coordination consultancy. We facilitate placement and
                  structured service coordination between clients and verified
                  professionals.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  2. Client Responsibilities
                </h3>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Provide accurate and complete service requirements</li>
                  <li>Maintain a safe and respectful work environment</li>
                  <li>Adhere to agreed salary and service structures</li>
                  <li>Communicate concerns promptly for resolution</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  3. Professional Conduct
                </h3>
                <p>
                  All deployed professionals are expected to maintain ethical
                  conduct and service standards. Angelin Care may intervene,
                  reassign, or terminate coordination if service standards are
                  not maintained.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  4. Limitation of Liability
                </h3>
                <p>
                  Angelin Care shall not be liable for indirect or consequential
                  damages arising from service engagements. Our responsibility
                  is limited to structured coordination and managed deployment.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  5. Modifications
                </h3>
                <p>
                  We reserve the right to revise policies and terms. Continued
                  use of services constitutes acceptance of updated terms.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Block */}

          {/* <div className="bg-teal-50 border border-teal-100 p-8 rounded-2xl text-center"> */}
          <div className="mt-24 bg-gradient-to-r from-teal-700 to-teal-600 rounded-3xl p-10 md:p-14 text-center text-white shadow-xl">
            <h3 className="text-3xl font-semibold mb-4">
              Questions About Our Policies?
            </h3>

            <p className="text-white/90 leading-relaxed max-w-2xl mx-auto">
              If you need clarification regarding our privacy practices or
              service terms, feel free to reach out.
            </p>

            <div className="mt-6 flex justify-center">
              <a
                href="mailto:angelinconsultancy2019@gmail.com"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white hover:text-teal-700 transition-all duration-300"
              >
                <FaEnvelope />
                angelinconsultancy2019@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
