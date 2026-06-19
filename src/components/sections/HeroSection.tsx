"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Phone, CalendarCheck,
  Clock, ShieldCheck, Wrench, Package, AlertCircle,
  Star, CheckCircle,
} from "lucide-react";
import { BUSINESS, TRUST_BADGES } from "@/lib/constants";

const trustIcons: Record<string, React.ElementType> = {
  Clock, ShieldCheck, Wrench, Package, Phone: AlertCircle,
};

const stats = [
  { value: "5,000+", label: "Happy Customers" },
  { value: "7+", label: "Years Experience" },
  { value: "4.9★", label: "Average Rating" },
  { value: "24/7", label: "Emergency Support" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center bg-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-hero-pattern" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Decorative orbs */}
      <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-[#F5A623] opacity-5 blur-3xl animate-float" />
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-blue-400 opacity-5 blur-3xl" style={{ animationDelay: "1s" }} />

      <div className="container-custom relative z-10 py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 border border-white/15 text-white/80 text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
              Hyderabad's Most Trusted AC Service Provider
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-5"
            >
              AC Repair &{" "}
              <span className="text-[#F5A623]">AC Service</span>
              <br />
              in Hyderabad
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-white/70 mb-8 leading-relaxed max-w-xl"
            >
              Fast, Reliable &amp; Affordable AC Repair, Installation, Gas Charging and
              Maintenance Services Across Hyderabad.
            </motion.p>

            {/* Review snippet */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="flex">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} size={16} fill="#F5A623" className="text-[#F5A623]" />
                ))}
              </div>
              <span className="text-white/70 text-sm">
                <strong className="text-white">4.9/5</strong> from 320+ verified reviews
              </span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <a
                href={BUSINESS.callUrl}
                className="btn-secondary"
                id="hero-cta-call"
              >
                <Phone size={18} />
                Call Now
              </a>
              <a
                href={BUSINESS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                id="hero-cta-whatsapp"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp Now
              </a>
              <Link href="/contact" className="btn-outline" id="hero-cta-book">
                <CalendarCheck size={18} />
                Book Service
              </Link>
            </motion.div>

            {/* Quick Checks */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-3"
            >
              {["Free Inspection", "Same Day Service", "Warranty on Repairs"].map((item) => (
                <div key={item} className="flex items-center gap-1.5 text-white/60 text-sm">
                  <CheckCircle size={14} className="text-[#22C55E]" />
                  {item}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Hero Image + Stats */}
          <div className="hidden lg:block">
            {/* Real Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.97 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl mb-5"
              style={{ height: "340px" }}
            >
              <Image
                src="/images/hero-technician.png"
                alt="RSG Refrigeration certified AC technician repairing AC in Hyderabad home"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Overlay badge */}
              <div className="absolute bottom-4 left-4 right-4 glass rounded-xl p-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#22C55E] flex items-center justify-center shrink-0">
                  <CheckCircle size={18} className="text-white" />
                </div>
                <div>
                  <div className="text-white text-sm font-bold">Certified RSG Technician</div>
                  <div className="text-white/60 text-xs">7+ Years Experience • All Brands</div>
                </div>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="grid grid-cols-4 gap-3"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.08 }}
                  className="glass rounded-2xl p-4 text-center"
                >
                  <div className="text-xl font-bold text-[#F5A623] mb-0.5">{stat.value}</div>
                  <div className="text-white/60 text-xs">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Mobile Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="lg:hidden mt-10 grid grid-cols-2 sm:grid-cols-3 gap-3"
        >
          {TRUST_BADGES.map((badge) => {
            const Icon = trustIcons[badge.icon] || ShieldCheck;
            return (
              <div key={badge.label} className="flex items-center gap-2 bg-white/6 border border-white/10 rounded-xl p-3">
                <Icon size={16} className="text-[#F5A623] shrink-0" />
                <span className="text-white/80 text-xs font-medium leading-tight">{badge.label}</span>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60L480 20L960 40L1440 0V60H0Z" fill="white" fillOpacity="1"/>
        </svg>
      </div>
    </section>
  );
}
