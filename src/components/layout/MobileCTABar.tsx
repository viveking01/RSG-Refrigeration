"use client";

import Link from "next/link";
import { Phone, MessageCircle, CalendarCheck } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { motion } from "framer-motion";

export default function MobileCTABar() {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 1, duration: 0.4, ease: "easeOut" }}
      className="mobile-cta-bar md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 8px)" }}
    >
      <a
        href={BUSINESS.callUrl}
        className="flex-1 flex flex-col items-center justify-center gap-1 py-3 text-white/80 hover:text-white hover:bg-white/5 transition-all active:bg-white/10"
        id="mobile-cta-call"
      >
        <Phone size={18} />
        <span className="text-[10px] font-semibold">Call Now</span>
      </a>

      {/* Center — highlighted Book Service */}
      <Link
        href="/contact"
        className="flex-1 flex flex-col items-center justify-center gap-1 py-3 bg-[#F5A623] text-[#07132e] hover:bg-[#f7b84a] transition-all active:scale-95"
        id="mobile-cta-book"
      >
        <CalendarCheck size={18} />
        <span className="text-[10px] font-bold">Book Service</span>
      </Link>

      <a
        href={BUSINESS.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex flex-col items-center justify-center gap-1 py-3 text-white/80 hover:text-white hover:bg-white/5 transition-all active:bg-white/10"
        id="mobile-cta-whatsapp"
      >
        <MessageCircle size={18} />
        <span className="text-[10px] font-semibold">WhatsApp</span>
      </a>
    </motion.div>
  );
}
