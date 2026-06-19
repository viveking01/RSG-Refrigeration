"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu, X, Phone, MessageCircle, ChevronDown,
  AirVent, Wind, LayoutGrid, Network, MapPin,
} from "lucide-react";
import { BUSINESS } from "@/lib/constants";

const services = [
  { label: "Split AC Services", href: "/services/split-ac", icon: AirVent, desc: "Installation, repair & maintenance" },
  { label: "Cassette AC Services", href: "/services/cassette-ac", icon: LayoutGrid, desc: "Commercial ceiling units" },
  { label: "Ductable AC Services", href: "/services/ductable-ac", icon: Wind, desc: "Central air systems" },
  { label: "VRF / VRV AC Services", href: "/services/vrf-vrv-ac", icon: Network, desc: "Multi-zone systems" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Reviews", href: "/reviews" },
  { label: "Blog", href: "/blog" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#07132e] text-white/80 text-sm py-2 hidden md:block">
        <div className="container-custom flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href={`tel:${BUSINESS.phone}`} className="flex items-center gap-2 hover:text-[#F5A623] transition-colors">
              <Phone size={13} />
              <span>{BUSINESS.phoneDisplay}</span>
            </a>
            <span className="text-white/30">|</span>
            <div className="flex items-center gap-2">
              <MapPin size={13} />
              <span>Bandlaguda Jagir, Hyderabad</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-white/60">
            <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse inline-block" />
            <span>Open Today: 8:00 AM – 8:00 PM</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/97 backdrop-blur-md shadow-lg shadow-black/5"
            : "bg-white"
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 shrink-0">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#0B1F66] flex items-center justify-center shadow-lg">
                <AirVent size={22} className="text-[#F5A623]" />
              </div>
              <div>
                <div className="font-bold text-[#0B1F66] text-lg md:text-xl leading-tight tracking-tight">
                  RSG Refrigeration
                </div>
                <div className="text-[10px] md:text-xs text-gray-500 leading-tight hidden sm:block">
                  Royal Refrigeration System Group
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button
                      className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        pathname.startsWith("/services")
                          ? "text-[#0B1F66] bg-blue-50"
                          : "text-gray-700 hover:text-[#0B1F66] hover:bg-gray-50"
                      }`}
                    >
                      {link.label}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden p-2"
                        >
                          <Link
                            href="/services"
                            className="block px-4 py-3 rounded-xl bg-gradient-to-r from-[#0B1F66] to-[#1a3a8f] text-white mb-2"
                          >
                            <div className="font-semibold text-sm">All AC Services</div>
                            <div className="text-xs text-white/70 mt-0.5">View complete service catalog</div>
                          </Link>
                          {services.map((s) => (
                            <Link
                              key={s.href}
                              href={s.href}
                              className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors group"
                            >
                              <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-[#0B1F66] transition-colors">
                                <s.icon size={15} className="text-[#0B1F66] group-hover:text-white transition-colors" />
                              </div>
                              <div>
                                <div className="text-sm font-medium text-gray-800">{s.label}</div>
                                <div className="text-xs text-gray-500">{s.desc}</div>
                              </div>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      pathname === link.href
                        ? "text-[#0B1F66] bg-blue-50"
                        : "text-gray-700 hover:text-[#0B1F66] hover:bg-gray-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={BUSINESS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#25D366] text-white text-sm font-semibold hover:bg-[#22c55e] transition-all hover:-translate-y-0.5 shadow-md"
              >
                <MessageCircle size={15} />
                WhatsApp
              </a>
              <a
                href={BUSINESS.callUrl}
                className="btn-primary text-sm px-5 py-2.5"
              >
                <Phone size={15} />
                Call Now
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-gray-100 bg-white overflow-hidden"
            >
              <div className="container-custom py-4 pb-6 space-y-1">
                {navLinks.map((link) => (
                  <div key={link.label}>
                    <Link
                      href={link.href}
                      className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                        pathname === link.href || (link.hasDropdown && pathname.startsWith("/services"))
                          ? "text-[#0B1F66] bg-blue-50"
                          : "text-gray-700 hover:text-[#0B1F66] hover:bg-gray-50"
                      }`}
                    >
                      {link.label}
                    </Link>
                    {link.hasDropdown && (
                      <div className="ml-4 mt-1 space-y-1">
                        {services.map((s) => (
                          <Link
                            key={s.href}
                            href={s.href}
                            className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm text-gray-600 hover:text-[#0B1F66] hover:bg-gray-50 transition-colors"
                          >
                            <s.icon size={15} className="text-[#0B1F66]" />
                            {s.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                {/* Mobile CTAs */}
                <div className="pt-4 grid grid-cols-2 gap-3">
                  <a
                    href={BUSINESS.callUrl}
                    className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#0B1F66] text-white font-semibold text-sm"
                  >
                    <Phone size={15} />
                    Call Now
                  </a>
                  <a
                    href={BUSINESS.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366] text-white font-semibold text-sm"
                  >
                    <MessageCircle size={15} />
                    WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
