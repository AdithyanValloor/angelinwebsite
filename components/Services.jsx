import Link from "next/link";
import { FaUserNurse, FaBaby, FaLayerGroup } from "react-icons/fa";

export default function ServicesPreview() {
  const previewServices = [
    {
      icon: <FaUserNurse />,
      title: "Home Nursing Care",
      desc: "Professional in-home medical and elder care services.",
    },
    {
      icon: <FaBaby />,
      title: "Baby Care Providers",
      desc: "Trusted caregivers for infants and children.",
    },
    {
      icon: <FaLayerGroup />,
      title: "Managed Staffing",
      desc: "Structured recruitment and salary coordination system.",
    },
  ];

  return (
    <section className="py-20 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-widest text-teal-700 font-semibold">
            Our Services
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
            Comprehensive Home Care & Staffing Solutions
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {previewServices.map((service, index) => (
            <div
              key={index}
              className="group p-6 bg-white border border-gray-200 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300"
            >
              {/* Icon */}
              <div className="flex items-center gap-3 mb-5">
                <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-teal-50 text-teal-700 group-hover:bg-teal-700 group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>
                <div className="h-1 w-8 bg-teal-700 rounded-full transition-all duration-300 group-hover:w-12"></div>
              </div>

              <h3 className="text-lg font-semibold text-gray-900">
                {service.title}
              </h3>

              <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16">
          <Link
            href="/services"
            className="inline-block px-8 py-3 rounded-full bg-teal-700 text-white font-semibold hover:bg-teal-800 hover:shadow-lg hover:shadow-teal-700/20 transition-all duration-300"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}