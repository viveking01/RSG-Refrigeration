"use client";

import Link from "next/link";
import { Phone, CalendarCheck } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { motion } from "framer-motion";

export default function MobileCTABar() {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.5, duration: 0.4, ease: "easeOut" }}
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden px-4 pb-4 pt-2 bg-gradient-to-t from-black/80 via-black/50 to-transparent pointer-events-none"
    >
      <div className="max-w-md mx-auto bg-[#07132e]/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl flex items-center justify-between px-2 py-2 pointer-events-auto relative">
        {/* Left: Book Service */}
        <Link
          href="/contact"
          className="flex-1 flex flex-col items-center justify-center gap-1 py-2 text-white/80 hover:text-[#F5A623] active:scale-95 transition-all"
          id="mobile-cta-book"
        >
          <div className="p-2 rounded-xl bg-white/5 text-[#F5A623] shadow-inner">
            <CalendarCheck size={20} />
          </div>
          <span className="text-[10px] font-medium tracking-wide">Book AC Service</span>
        </Link>

        {/* Center: WhatsApp Now (Highlighted & Floating) */}
        <div className="flex-1 flex justify-center -mt-6 relative z-10">
          <a
            href={BUSINESS.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center active:scale-95 transition-all"
            id="mobile-cta-whatsapp"
          >
            <div className="w-14 h-14 rounded-full bg-[#22C55E] flex items-center justify-center text-white shadow-[0_8px_20px_rgba(34,197,94,0.4)] border-4 border-[#07132e] hover:bg-[#1eb052] transition-colors relative">
              <span className="absolute inset-0 rounded-full bg-[#22C55E] animate-ping opacity-25"></span>
              <WhatsAppIcon size={28} className="text-white relative z-10" />
            </div>
            <span className="text-[10px] font-bold text-[#22C55E] mt-1 tracking-wide">WhatsApp Us</span>
          </a>
        </div>

        {/* Right: Call Now */}
        <a
          href={BUSINESS.callUrl}
          className="flex-1 flex flex-col items-center justify-center gap-1 py-2 text-white/80 hover:text-[#22C55E] active:scale-95 transition-all"
          id="mobile-cta-call"
        >
          <div className="p-2 rounded-xl bg-white/5 text-white shadow-inner">
            <Phone size={20} />
          </div>
          <span className="text-[10px] font-medium tracking-wide">Call Expert</span>
        </a>
      </div>
    </motion.div>
  );
}
