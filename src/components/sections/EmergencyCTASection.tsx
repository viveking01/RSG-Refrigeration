import Link from "next/link";
import { Phone, CalendarCheck, Clock, Zap } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function EmergencyCTASection() {
  return (
    <section className="py-16 md:py-24 bg-dark-section relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full bg-[#F5A623] opacity-5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-blue-400 opacity-5 blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/15 border border-red-500/30 text-red-300 text-sm font-semibold mb-6">
            <Zap size={13} fill="currentColor" />
            Emergency AC Repair — Available Now
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Need Immediate{" "}
            <span className="text-[#F5A623]">AC Repair?</span>
          </h2>

          <p className="text-white/60 text-base md:text-lg mb-4 leading-relaxed">
            Don&apos;t sweat it — our emergency AC repair team is ready to help you
            right now, even on weekends and holidays.
          </p>

          <div className="flex items-center justify-center gap-2 text-white/40 text-sm mb-10">
            <Clock size={13} />
            <span>Mon – Sat: 9:00 AM – 10:00 PM | Sun: 9:00 AM – 8:00 PM | Emergency calls accepted anytime</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a href={BUSINESS.callUrl} className="btn-secondary w-full sm:w-auto" id="emergency-cta-call">
              <Phone size={18} />
              Call Now: {BUSINESS.phoneDisplay}
            </a>
            <a
              href={BUSINESS.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp w-full sm:w-auto"
              id="emergency-cta-whatsapp"
            >
              <WhatsAppIcon size={18} />
              WhatsApp Us
            </a>
            <Link href="/contact" className="btn-outline w-full sm:w-auto" id="emergency-cta-book">
              <CalendarCheck size={18} />
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
