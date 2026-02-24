"use client";

import Image from "next/image";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      title: "Home Nursing Care",
      image: "/services/nurse.png",
      description:
        "Qualified ANM, GNM, and GDA professionals providing structured medical and patient care at home.",
      features: [
        "Post-hospital care",
        "Medication management",
        "Wound care",
        "Elderly patient support",
        "Medical monitoring",
      ],
      highlight: "ANM • GNM • GDA Certified",
    },
    {
      title: "Hospital Bystander Support",
      image: "/services/bystander.png",
      description:
        "Reliable patient bystanders for hospital stays, ensuring attentive care and assistance during treatment.",
      features: [
        "Day & night hospital duty",
        "Patient hygiene support",
        "Meal assistance",
        "Mobility assistance",
        "Coordination with hospital staff",
      ],
    },
    {
      title: "Baby Care Providers",
      image: "/services/babycare.png",
      description:
        "Experienced caregivers for newborns and infants with structured care routines.",
      features: [
        "Infant care",
        "Feeding support",
        "Sleep routine management",
        "Mother assistance",
      ],
    },
    {
      title: "Home Assistance (Domestic Support)",
      image: "/services/maid.png",
      description:
        "Professional home support staff for daily household operations and maintenance.",
      features: [
        "Cleaning & upkeep",
        "Laundry support",
        "Cooking assistance",
        "Home organization",
      ],
    },
    {
      title: "Residential Care & Assisted Living Support",
      image: "/services/carehome.png",
      description:
        "Support for families seeking structured residential elder care solutions with professional coordination and guidance.",
      features: [
        "Assisted living coordination",
        "Elder supervision support",
        "Long-term care guidance",
        "Facility liaison assistance",
        "Family consultation support",
      ],
    },
    {
      title: "Managed Staffing System",
      image: "/services/management.png",
      description:
        "Structured recruitment, salary coordination, and ongoing supervision for accountability and transparency.",
      features: [
        "Staff verification",
        "Salary structuring",
        "Attendance monitoring",
        "Client coordination support",
      ],
    },
  ];

  return (
    <section className="py-20 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-3xl mb-20">
          <span className="text-xs uppercase tracking-widest text-teal-700 font-semibold">
            Our Services
          </span>

          <h1 className="mt-4 text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
            Structured Home Care & Domestic Staffing Solutions
          </h1>

          <p className="mt-6 text-lg text-gray-500 leading-relaxed">
            Angelin Care delivers professionally managed staffing and care
            solutions designed to ensure reliability, structured coordination,
            and long-term peace of mind for families.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              
              className="group bg-white rounded-2xl border border-gray-200 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-400 overflow-hidden"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-5 md:p-6">

                <div className="h-1 w-10 bg-teal-700 rounded-full mb-4 group-hover:w-14 transition-all duration-300"></div>

                <h3 className="text-lg font-semibold text-gray-900 leading-snug">
                  {service.title}
                </h3>

                {service.highlight && (
                  <div className="mt-1 text-xs font-medium text-teal-700">
                    {service.highlight}
                  </div>
                )}

                <p className="mt-3 text-gray-500 leading-relaxed text-sm">
                  {service.description}
                </p>

                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 bg-teal-700 rounded-full mt-2"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

              </div>
            </div>
          ))}
        </div>

        {/* CTA Block */}
        <div className="mt-24 bg-gradient-to-r from-teal-700 to-teal-600 rounded-3xl p-10 md:p-14 text-center text-white shadow-xl">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Need Assistance Choosing the Right Service?
          </h2>

          <p className="mt-4 text-white/90 max-w-2xl mx-auto">
            Our team will understand your requirements and recommend a
            structured care solution tailored to your family’s needs.
          </p>

          <Link
            href="/contact"
            className="inline-block mt-8 px-8 py-4 hover:scale-102  rounded-full bg-white text-teal-700 font-semibold hover:bg-gray-100 transition-all duration-300"
          >
            Get Free Consultation
          </Link>
        </div>

      </div>
    </section>
  );
}