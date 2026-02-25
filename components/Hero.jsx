"use client";

import Link from "next/link";
import { IoCall } from "react-icons/io5";

export default function Hero() {
  return (
    <>
      {/* Fixed Background Layer (Stable Version) */}
      <div
        // className="fixed top-0 mt-20 left-0 w-screen h-[100svh] -z-30 bg-cover bg-[40%_30%]"
        className="fixed top-0 left-0 w-screen h-[100svh] -z-30 bg-cover bg-[40%_30%]"
        style={{
          backgroundImage: "url('/heroImage.webp')",
        }}
      />

      {/* Hero Section */}
      {/* <section className="relative  pt-20 flex items-center overflow-hidden"> */}
      <section className="relative h-[100svh] flex items-center overflow-hidden pt-20">

        {/* Overlay */}
        <div className="absolute inset-0 -z-20 bg-gradient-to-br from-black/85 via-black/65 to-black/40" />

        <div className="w-full max-w-screen-xl mx-auto px-6 py-20 md:py-24">
          <div className="max-w-3xl space-y-6 animate-fadeUp">

            <span className="inline-block px-5 py-2 text-[9px] lg:text-[10px] uppercase tracking-[0.25em] font-medium bg-white/10 backdrop-blur-md text-white rounded-full border border-white/20">
              Trusted by Malayali Families Across India
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold leading-[1.05] text-white tracking-tight">
              Managed Home Care & <br />
              Domestic Staffing Services <br />
              <span className="text-white/70">
                for Malayali Families
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl">
              Angelin Care provides verified nurses, baby care providers, and
              domestic staff — supported by structured salary management and
              professional coordination for complete peace of mind.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-xs sm:text-sm font-medium text-white/70">
              <span>✔ Carefully Screened Professionals</span>
              <span className="hidden sm:block text-white/30">•</span>
              <span>✔ Fully Managed Staffing System</span>
              <span className="hidden sm:block text-white/30">•</span>
              <span>✔ Dedicated Client Support</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">

              <Link
                href="/contact"
                className="group relative px-8 py-4 flex items-center justify-center gap-3 text-sm sm:text-base rounded-full bg-teal-600 text-white font-semibold shadow-xl hover:bg-teal-700 transition-all duration-300"
              >
                <span className="relative flex items-center justify-center">
                  <span className="absolute h-8 w-8 rounded-full bg-white/20 animate-ping opacity-50"></span>
                  <IoCall className="relative text-lg group-hover:rotate-12 transition-transform duration-300" />
                </span>
                Get Free Consultation
              </Link>

              <Link
                href="/services"
                className="px-8 py-4 text-sm sm:text-base rounded-full text-white font-semibold border border-white/30 backdrop-blur-sm hover:bg-white hover:text-black transition-all duration-300"
              >
                View Services
              </Link>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}