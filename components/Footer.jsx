"use client";

import Link from "next/link";
import { FaWhatsapp, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
  const whatsappNumber = "7012146398";
  const emailAddress = "angelinconsultancy2019@gmail.com";
  const phoneNumber = "+91 70121 46398";

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Top Grid */}
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-semibold text-white">Angelin Care</h3>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              Professionally managed home care and domestic staffing consultancy
              serving Malayali families across India.
            </p>

            <div className="mt-6 space-y-3 text-sm">
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-teal-400 transition"
              >
                <FaWhatsapp size={10} className="text-teal-400" />
                WhatsApp Support
              </a>

              <a
                href={`mailto:${emailAddress}`}
                className="flex items-center gap-3 hover:text-teal-400 transition"
              >
                <FaEnvelope size={10} className="text-teal-400" />
                {emailAddress}
              </a>

              <a
                href={`tel:${phoneNumber}`}
                className="flex items-center gap-3 hover:text-teal-400 transition"
              >
                <FaPhoneAlt size={10} className="text-teal-400" />
                {phoneNumber}
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="hover:text-teal-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-teal-400 transition"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/how-it-works"
                  className="hover:text-teal-400 transition"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-teal-400 transition">
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-teal-400 transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Our Services
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/services"
                  className="hover:text-teal-400 transition"
                >
                  Home Nursing Care
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-teal-400 transition"
                >
                  Hospital Bystander Support
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-teal-400 transition"
                >
                  Baby Care Providers
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-teal-400 transition"
                >
                  Domestic Assistance
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-teal-400 transition"
                >
                  Residential Care Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Trust / Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Important
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/privacy-terms"
                  className="hover:text-teal-400 transition"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-terms"
                  className="hover:text-teal-400 transition"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>Kerala & Major Indian Cities</li>
              <li>Professional Managed Staffing</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Angelin Care. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
