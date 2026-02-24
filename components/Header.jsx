"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import Image from "next/image";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleClick = () => {
    if (pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/how-it-works", label: "How It Works" },
    // { path: "/cities", label: "Cities" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-lg border-b border-white/20 shadow">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" onClick={handleClick} className="group flex items-center gap-2">
            <Image
            src="/logo.png"
            alt="Angelin care logo"
            width={50}
            height={50}
            />
            <div className="flex flex-col leading-tight">
              <span className="text-2xl font-semibold text-teal-700 tracking-tight group-hover:text-teal-800 transition-colors">
                Angelin Care
              </span>
              <span className="text-[11px] uppercase tracking-wider text-gray-500">
                Home Care • Staffing • Management
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const active = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={handleClick} 
                  className={`relative text-sm font-medium transition-colors ${
                    active
                      ? "text-teal-700"
                      : "text-gray-600 hover:text-teal-700"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute left-0 -bottom-2 h-0.5 w-full bg-teal-600 rounded-full transform origin-left transition-transform duration-300 ease-out ${
                      active ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </Link>
              );
            })}

            {/* Premium CTA */}
            <Link
              href="/contact"
              className="ml-2 px-5 py-2.5 rounded-full bg-teal-600 text-white text-sm font-semibold shadow-md hover:bg-teal-700 hover:scale-[1.03] active:scale-[0.97] transition-all duration-300"
            >
              Get Consultation
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-teal-700 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <CgClose size={24} />
            ) : (
              <HiOutlineMenuAlt3 size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden h-screen fixed inset-0 bg-white/95 backdrop-blur-lg z-40">
          <nav className="flex flex-col items-center justify-center h-full gap-8 text-lg font-medium">
            <button
              className="absolute top-6 right-6 p-2 rounded-md text-gray-700 hover:text-teal-700 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <CgClose size={24} />
            </button>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`transition-colors ${
                  pathname === link.path
                    ? "text-teal-700 font-semibold"
                    : "text-gray-700 hover:text-teal-700"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-6 px-8 py-3 rounded-full bg-teal-600 text-white font-semibold shadow-lg"
            >
              Get Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
