import React from "react";
import {
  FaClipboardList,
  FaHeadset,
  FaShieldAlt,
  FaUsers,
} from "react-icons/fa";

export default function About() {
  return (
    <section className="py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Page Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900">
            About Angelin Care
          </h1>
          <span className="mt-4 inline-block text-sm font-medium text-teal-600 uppercase tracking-widest">
            Managed Home Care & Structured Staffing Consultancy
          </span>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Angelin Care is a professionally managed home care and domestic
            staffing consultancy serving Malayali families across Kerala and
            major Indian cities.
          </p>
        </div>

        {/* Who We Are */}
        <div className="mt-20 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              Who We Are
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We understand that inviting someone into your home to care for
              your loved ones is a decision built entirely on trust. Angelin
              Care was founded to bring structure, accountability, and
              professionalism into the home staffing space.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Unlike informal placement networks, Angelin Care operates through
              a structured and accountable system — including professional
              screening, coordinated deployment, salary structure management,
              and ongoing client communication.
            </p>
          </div>

          <div className="bg-white border border-gray-100 p-10 rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.05)]">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">
              Our Core Principles
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li>✔ Carefully screened and verified professionals</li>
              <li>✔ Transparent service structure</li>
              <li>✔ Professional salary coordination</li>
              <li>✔ Long-term client relationship focus</li>
            </ul>
          </div>
        </div>
        <div className="mt-24 border-t border-gray-200 pt-24"></div>

        {/* Our Mission */}
        <div className="mt- max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">
            Our Mission
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Our mission is to provide families with peace of mind by delivering
            reliable home nursing and domestic staffing services supported by
            structured management and responsible coordination.
          </p>
        </div>

        {/* Why Families Choose Angelin */}
        <div className="mt-24">
          <h2 className="text-3xl font-semibold text-center text-gray-900 mb-12">
            Why Families Choose Angelin
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="group p-8 bg-white rounded-2xl border border-gray-200 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-teal-50 text-teal-700 group-hover:bg-teal-700 group-hover:text-white transition-all duration-300">
                  <FaShieldAlt size={20} />
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">
                    Verified & Screened Staff
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Every professional is carefully reviewed and verified before
                    deployment, ensuring trust and safety.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group p-8 bg-white rounded-2xl border border-gray-200 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-teal-50 text-teal-700 group-hover:bg-teal-700 group-hover:text-white transition-all duration-300">
                  <FaUsers size={20} />
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">
                    Managed Staffing System
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    We coordinate salary structures and service flow to ensure
                    clarity, consistency, and accountability.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group p-8 bg-white rounded-2xl border border-gray-200 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-teal-50 text-teal-700 group-hover:bg-teal-700 group-hover:text-white transition-all duration-300">
                  <FaClipboardList size={20} />
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">
                    Structured Consultation Process
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Every placement begins with a detailed consultation to
                    understand family requirements clearly.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group p-8 bg-white rounded-2xl border border-gray-200 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-teal-50 text-teal-700 group-hover:bg-teal-700 group-hover:text-white transition-all duration-300">
                  <FaHeadset size={20} />
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">
                    Dedicated Client Support
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    We remain accessible and responsive throughout the service
                    period, ensuring continued satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
