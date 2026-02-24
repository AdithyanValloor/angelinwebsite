import Link from "next/link";
import { FaShieldAlt, FaUsers, FaExchangeAlt, FaHeadset } from "react-icons/fa";

export default function AboutPreview() {
  return (
    <section className="relative py-24 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-widest text-teal-600 font-semibold">
            Who We Are
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Professional Home Care & Managed Staffing You Can Trust
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Angelin Care is a professionally managed home care and domestic
            staffing consultancy serving Malayali families across Kerala and
            major Indian cities. We go beyond basic placement by coordinating
            staff deployment, salary structure, and ongoing service support.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Our goal is simple — to provide reliable, structured, and
            accountable home care solutions that bring peace of mind to
            families.
          </p>
        </div>

        {/* Highlights */}
        <div className="mt-16 grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="group p-6 bg-white border border-gray-200 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-teal-50 text-teal-700 group-hover:bg-teal-700 group-hover:text-white transition-all duration-300">
                <FaShieldAlt size={16} />
              </div>
              <div className="h-1 w-8 bg-teal-700 rounded-full transition-all duration-300 group-hover:w-12"></div>
            </div>

            <h3 className="font-semibold text-gray-900 mb-2">
              Verified Professionals
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Carefully screened and reviewed staff before every placement.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group p-6 bg-white border border-gray-200 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-teal-50 text-teal-700 group-hover:bg-teal-700 group-hover:text-white transition-all duration-300">
                <FaUsers size={16} />
              </div>
              <div className="h-1 w-8 bg-teal-700 rounded-full transition-all duration-300 group-hover:w-12"></div>
            </div>

            <h3 className="font-semibold text-gray-900 mb-2">
              Managed Staffing Model
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Structured coordination and salary management system.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group p-6 bg-white border border-gray-200 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-teal-50 text-teal-700 group-hover:bg-teal-700 group-hover:text-white transition-all duration-300">
                <FaExchangeAlt size={16} />
              </div>
              <div className="h-1 w-8 bg-teal-700 rounded-full transition-all duration-300 group-hover:w-12"></div>
            </div>

            <h3 className="font-semibold text-gray-900 mb-2">
              Transparent Service Flow
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Clear consultation and requirement-based matching.
            </p>
          </div>

          {/* Card 4 */}
          <div className="group p-6 bg-white border border-gray-200 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-teal-50 text-teal-700 group-hover:bg-teal-700 group-hover:text-white transition-all duration-300">
                <FaHeadset size={16} />
              </div>
              <div className="h-1 w-8 bg-teal-700 rounded-full transition-all duration-300 group-hover:w-12"></div>
            </div>

            <h3 className="font-semibold text-gray-900 mb-2">
              Dedicated Client Support
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Responsive assistance throughout the service period.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16">
          <Link
            href="/about"
            className="inline-block px-6 py-3 rounded-full border border-teal-600 text-teal-700 font-semibold hover:bg-teal-600 hover:text-white transition-all duration-300"
          >
            Learn More About Angelin
          </Link>
        </div>
      </div>
    </section>
  );
}
