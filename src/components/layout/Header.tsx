"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu, X, Phone, ChevronDown,
  AirVent, Wind, LayoutGrid, Network, MapPin,
} from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import Image from "next/image";

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
            <span>Open: Mon–Sat 9AM–10PM | Sun 9AM–8PM</span>
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
            <Link href="/" className="flex items-center shrink-0">
              <Image
                src="/images/logo.webp"
                alt="RSG Refrigeration Logo"
                width={180}
                height={48}
                className="h-10 md:h-12 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button
                      className={`flex items-center gap-1.5 px-3 xl:px-4 py-2.5 rounded-lg text-xs lg:text-sm font-medium transition-all ${
                        pathname.startsWith("/services")
                          ? "text-[#0B1F66] bg-blue-50"
                          : "text-gray-700 hover:text-[#0B1F66] hover:bg-gray-50"
                      }`}
                    >
                      {link.label}
                      <ChevronDown
                        size={13}
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
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[920px] bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden p-10"
                        >
                          <div className="grid grid-cols-12 gap-10 text-left">
                            {/* Left Side: Services List */}
                            <div className="col-span-8">
                              <div className="text-[11px] font-bold text-[#0B1F66]/60 uppercase tracking-widest mb-5 px-1">
                                Our AC Services
                              </div>
                              <div className="grid grid-cols-2 gap-6">
                                {services.map((s) => (
                                  <Link
                                    key={s.href}
                                    href={s.href}
                                    className="flex items-start gap-4 p-5 rounded-2xl hover:bg-blue-50/50 transition-all group border border-transparent hover:border-blue-100/50"
                                  >
                                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-[#0B1F66] transition-colors mt-0.5">
                                      <s.icon size={18} className="text-[#0B1F66] group-hover:text-white transition-colors" />
                                    </div>
                                    <div className="min-w-0">
                                      <div className="text-sm font-semibold text-gray-800 group-hover:text-[#0B1F66] transition-colors whitespace-normal">
                                        {s.label}
                                      </div>
                                      <div className="text-xs text-gray-400 mt-1 line-clamp-2 leading-relaxed">
                                        {s.desc}
                                      </div>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                              
                              {/* Bottom link to all services */}
                              <div className="mt-8 pt-5 border-t border-gray-100 flex items-center justify-between px-1">
                                <span className="text-xs text-gray-500">Need specific AC repair or installation?</span>
                                <Link 
                                  href="/services" 
                                  className="text-xs font-bold text-[#0B1F66] hover:underline flex items-center gap-1 group/btn"
                                >
                                  View All Services <ChevronDown size={13} className="-rotate-90 group-hover/btn:translate-x-0.5 transition-transform" />
                                </Link>
                              </div>
                            </div>

                            {/* Right Side: CTA Card */}
                            <div className="col-span-4 flex">
                              <div className="w-full bg-gradient-to-br from-[#07132e] to-[#0B1F66] rounded-2xl p-6 text-white flex flex-col justify-between relative overflow-hidden shadow-lg border border-white/5">
                                {/* Decorative circle */}
                                <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-[#F5A623] opacity-10 blur-xl pointer-events-none" />
                                
                                <div>
                                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#F5A623] text-[10px] font-bold uppercase tracking-wider mb-4">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
                                    Quick Booking
                                  </div>
                                  <h4 className="font-bold text-base text-white mb-2 leading-snug">
                                    Book Same-Day AC Service
                                  </h4>
                                  <p className="text-xs text-white/70 leading-relaxed mb-6">
                                    Get instant troubleshooting from certified AC repair specialists near you.
                                  </p>
                                </div>

                                <div className="space-y-3">
                                  <a
                                    href={BUSINESS.callUrl}
                                    className="btn-mega-menu-secondary w-full"
                                  >
                                    <Phone size={13} className="shrink-0" />
                                    <span>Call Now</span>
                                  </a>
                                  <a
                                    href={BUSINESS.whatsappUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-mega-menu-whatsapp w-full"
                                  >
                                    <WhatsAppIcon size={12} className="mr-1 shrink-0" />
                                    <span>WhatsApp Now</span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`px-3 xl:px-4 py-2.5 rounded-lg text-xs lg:text-sm font-medium transition-all ${
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
            <div className="hidden lg:flex items-center gap-2 xl:gap-3.5 shrink-0">
              <a
                href={BUSINESS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-header-whatsapp"
              >
                <WhatsAppIcon size={15} />
                WhatsApp
              </a>
              <a
                href={BUSINESS.callUrl}
                className="btn-header-call"
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
                    className="btn-mobile-secondary w-full justify-center"
                  >
                    <Phone size={15} className="shrink-0" />
                    <span className="truncate">Call Now</span>
                  </a>
                  <a
                    href={BUSINESS.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-mobile-whatsapp w-full justify-center"
                  >
                    <WhatsAppIcon size={15} className="shrink-0" />
                    <span className="truncate">WhatsApp</span>
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
