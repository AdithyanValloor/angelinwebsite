"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { BiPhone } from "react-icons/bi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const ADMIN_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_ADMIN_TEMPLATE_ID;
  const AUTOREPLY_TEMPLATE_ID =
    process.env.NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  const whatsappNumber = "7012146398";
  const emailAddress = "angelinconsultancy2019@gmail.com";
  const phoneNumber = "+91 70121 46398";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", message: "" });

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        type: "error",
        message: "Please fill in all required fields.",
      });
      return;
    }

    try {
      setLoading(true);

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
      };

      // Send to Admin
      await emailjs.send(
        SERVICE_ID,
        ADMIN_TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY,
      );

      // Send Auto Reply (optional)
      if (AUTOREPLY_TEMPLATE_ID) {
        await emailjs.send(
          SERVICE_ID,
          AUTOREPLY_TEMPLATE_ID,
          templateParams,
          PUBLIC_KEY,
        );
      }

      setStatus({
        type: "success",
        message: "Thank you! Your message has been sent successfully.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-widest text-teal-700 font-semibold">
            Contact Us
          </span>

          <h1 className="mt-4 text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
            Let’s Discuss Your Care Requirements
          </h1>

          <p className="mt-6 text-lg text-gray-500 leading-relaxed">
            Reach out for structured and professionally managed care solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-md hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Contact Information
              </h3>

              <div className="space-y-4 text-sm text-gray-600">
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-teal-700 transition"
                >
                  <FaWhatsapp className="text-teal-700" size={22} />
                  WhatsApp
                  <span className="text-xs bg-teal-100 text-teal-700 px-2 py-0.5 rounded-full">
                    Quick Response
                  </span>
                </a>

                <a
                  href={`mailto:${emailAddress}`}
                  className="flex items-center gap-3 hover:text-teal-700 transition"
                >
                  <SiGmail className="text-teal-700" size={20} />
                  {emailAddress}
                </a>

                <a
                  href={`tel:${phoneNumber}`}
                  className="flex items-center gap-3 hover:text-teal-700 transition"
                >
                  <BiPhone className="text-teal-700" size={22} />
                  {phoneNumber}
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="bg-white border border-gray-200 rounded-2xl p-8 md:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] space-y-6"
            >
              {/* Name + Email */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-700/20 focus:border-teal-700 transition-all duration-200"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-700/20 focus:border-teal-700 transition-all duration-200"
                    required
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-700/20 focus:border-teal-700 transition-all duration-200"
                />
              </div>

              {/* Service Dropdown */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Select Service
                </label>

                <div className="relative">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="
                      w-full
                      px-4 py-3
                      rounded-xl
                      bg-gray-50
                      text-gray-700
                      border border-gray-200
                      focus:outline-none
                      focus:ring-2 focus:ring-teal-700/20
                      focus:border-teal-700
                      transition-all duration-200
                      appearance-none
                      cursor-pointer
                    "
                  >
                    <option value="" className="text-gray-400">
                      Choose a Service
                    </option>
                    <option className="text-gray-700">Home Nursing Care</option>
                    <option className="text-gray-700">
                      Hospital Bystander Support
                    </option>
                    <option className="text-gray-700">
                      Baby Care Providers
                    </option>
                    <option className="text-gray-700">Home Assistance</option>
                    <option className="text-gray-700">Residential Care</option>
                  </select>

                  {/* Custom Arrow */}
                  <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-gray-400">
                    <MdOutlineKeyboardArrowDown size={25} />
                  </div>
                </div>
              </div>
              {/* Message */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Your Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-700/20 focus:border-teal-700 transition-all duration-200 resize-none"
                  required
                />
              </div>

              {/* Status */}
              {status.message && (
                <div
                  className={`text-sm p-4 rounded-xl ${
                    status.type === "success"
                      ? "bg-teal-50 text-teal-700 border border-teal-200"
                      : "bg-red-50 text-red-600 border border-red-200"
                  }`}
                >
                  {status.message}
                </div>
              )}

              {/* Button */}
              <button
                type="submit"
                disabled={loading}
                className={`w-full md:w-auto px-10 py-3.5 rounded-full font-semibold text-white transition-all duration-300 ${
                  loading
                    ? "bg-teal-900 cursor-not-allowed"
                    : "bg-teal-700 hover:bg-teal-800 hover:shadow-lg hover:shadow-teal-700/20"
                }`}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
