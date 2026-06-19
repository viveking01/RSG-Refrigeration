import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import Link from "next/link";
import { DUCTABLE_AC_SERVICES } from "@/lib/data/services";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = generatePageMetadata({
  title: "Ductable AC Services in Hyderabad — Central AC Repair & Installation",
  description:
    "Professional central ductable AC services in Hyderabad — duct layout, system installation, regular maintenance, gas refill, and commercial AMC by RSG Refrigeration.",
  path: "/services/ductable-ac",
  keywords: [
    "ductable ac services hyderabad",
    "central ac repair hyderabad",
    "ductable ac installation hyderabad",
    "ductable ac service hyderabad",
  ],
});

export default function DuctableACPage() {
  const breadcrumbData = breadcrumbSchema([
    { name: "Services", url: "/services" },
    { name: "Ductable AC Services", url: "/services/ductable-ac" },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />

      {/* Hero */}
      <section className="bg-hero py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern" />
        <div className="container-custom relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/50 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white">Services</Link>
            <span>/</span>
            <span className="text-white">Ductable AC</span>
          </nav>
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">
              Ductable AC Services in Hyderabad
              <br />
              <span className="text-[#F5A623]">Central Cooling Systems</span>
            </h1>
            <p className="text-white/70 text-lg mb-8 max-w-2xl">
              From sheet metal duct design and grilles placement to cooling coil diagnostics and AMC contracts.
              We service, install, and repair ductable split and packaged AC systems.
            </p>
            <div className="cta-buttons-container justify-start">
              <a href={BUSINESS.callUrl} className="btn-secondary">
                <Phone size={17} /> Call Now
              </a>
              <a href={BUSINESS.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                <MessageCircle size={17} /> WhatsApp
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="white" className="w-full">
            <path d="M0 40L720 10L1440 40V40H0V40Z"/>
          </svg>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#111827] mb-3">
              All <span className="gradient-text">Ductable AC Services</span>
            </h2>
            <p className="text-gray-500">Select any service for detailed information, pricing, and booking</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {DUCTABLE_AC_SERVICES.map((svc) => (
              <Link
                key={svc.slug}
                href={`/services/ductable-ac/${svc.slug}`}
                className="group p-5 rounded-2xl border border-gray-100 hover:border-[#0B1F66]/30 hover:shadow-lg hover:shadow-blue-50 transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-[#111827] text-sm group-hover:text-[#0B1F66] transition-colors leading-tight pr-2">
                    {svc.title}
                  </h3>
                  <ArrowRight size={15} className="text-gray-300 group-hover:text-[#0B1F66] group-hover:translate-x-1 transition-all shrink-0 mt-0.5" />
                </div>
                <p className="text-gray-500 text-xs leading-relaxed mb-3 line-clamp-2">{svc.description}</p>
                <div className="flex items-center justify-between">
                  {svc.priceRange && (
                    <span className="text-xs font-semibold text-[#22C55E] bg-green-50 px-2.5 py-1 rounded-full">
                      {svc.priceRange}
                    </span>
                  )}
                  {svc.duration && (
                    <span className="text-xs text-gray-400">{svc.duration}</span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
