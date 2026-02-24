"use client";

import Link from "next/link";
import React from "react";
import {
  FaPhoneAlt,
  FaUserCheck,
  FaUsers,
  FaClipboardCheck,
  FaHeadset,
} from "react-icons/fa";

export default function HowItWorks() {
  const steps = [
    {
      icon: <FaPhoneAlt />,
      title: "Contact Us",
      description:
        "Reach out through our contact form, phone, or WhatsApp. Tell us about your requirements and we’ll respond within 24 hours.",
    },
    {
      icon: <FaUserCheck />,
      title: "Consultation",
      description:
        "We schedule a consultation to understand your needs, preferences, and any special care requirements.",
    },
    {
      icon: <FaUsers />,
      title: "Staff Selection",
      description:
        "We match you with qualified professionals. You can review profiles and interview candidates before approval.",
    },
    {
      icon: <FaClipboardCheck />,
      title: "Placement",
      description:
        "After approval, we handle paperwork and coordinate deployment with structured oversight.",
    },
    {
      icon: <FaHeadset />,
      title: "Ongoing Support",
      description:
        "We conduct regular check-ins and remain available for continued coordination and support.",
    },
  ];

  return (
    <section className="py-20 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-teal-700 font-semibold">
            Process
          </span>

          <h1 className="mt-4 text-4xl md:text-5xl font-semibold text-gray-900">
            How It Works
          </h1>

          <p className="mt-6 text-lg text-gray-500 leading-relaxed">
            Our structured 5-step process ensures clarity, trust, and
            professional coordination at every stage.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gray-200"></div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="relative flex items-start gap-8">
                {/* Icon Circle */}
                <div className="relative z-10 h-12 w-12 flex items-center justify-center rounded-full bg-teal-50 text-teal-700 border border-teal-100 shadow-sm">
                  {step.icon}
                </div>

                {/* Content Card */}
                <div className="flex-1 bg-white border border-gray-200 rounded-2xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition duration-300">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {index + 1}. {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* CTA Section */}
        <div className="mt-24 bg-gradient-to-r from-teal-700 to-teal-600 rounded-3xl p-10 md:p-14 text-center text-white shadow-xl">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Ready to Get Started?
          </h2>

          <p className="mt-4 text-white/90 max-w-2xl mx-auto">
            Speak with our team today and let us help you find the right care
            professional for your home.
          </p>

          <Link
            href="/contact"
            className="inline-block mt-8 px-8 py-4 hover:scale-105 rounded-full bg-white text-teal-700 font-semibold hover:bg-gray-100 transition-all duration-300"
          >
            Contact Now
          </Link>
        </div>
      </div>
    </section>
  );
}
