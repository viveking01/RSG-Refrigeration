"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, MessageCircle, CalendarCheck, Clock, Zap } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export default function EmergencyCTASection() {
  return (
    <section className="py-20 bg-dark-section overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-[#F5A623] opacity-5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-blue-400 opacity-5 blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          {/* Emergency badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-red-500/15 border border-red-500/30 text-red-300 text-sm font-semibold mb-6"
          >
            <Zap size={14} fill="currentColor" />
            Emergency AC Repair — Available Now
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight"
          >
            Need Immediate{" "}
            <span className="text-[#F5A623]">AC Repair?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-white/60 text-lg mb-4"
          >
            Don't sweat it — our emergency AC repair team is ready to help you
            right now, even on weekends and holidays.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-2 text-white/40 text-sm mb-10"
          >
            <Clock size={14} />
            <span>Mon – Sun: 8:00 AM – 8:00 PM | Emergency calls accepted anytime</span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href={BUSINESS.callUrl}
              className="flex items-center gap-3 px-8 py-4 rounded-full bg-[#F5A623] text-[#07132e] font-bold text-base hover:bg-[#f7b84a] transition-all hover:-translate-y-1 shadow-2xl shadow-amber-500/30 animate-pulse-glow"
              id="emergency-cta-call"
            >
              <Phone size={20} />
              Call Now: {BUSINESS.phoneDisplay}
            </a>
            <a
              href={BUSINESS.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 rounded-full bg-[#25D366] text-white font-bold text-base hover:bg-[#22c55e] transition-all hover:-translate-y-1"
              id="emergency-cta-whatsapp"
            >
              <MessageCircle size={20} />
              WhatsApp Us
            </a>
            <Link
              href="/contact"
              className="flex items-center gap-3 px-8 py-4 rounded-full border-2 border-white/25 text-white font-semibold text-base hover:bg-white/10 hover:border-white/50 transition-all"
              id="emergency-cta-book"
            >
              <CalendarCheck size={20} />
              Book Appointment
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
