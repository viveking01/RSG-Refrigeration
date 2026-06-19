import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import Link from "next/link";
import { AC_CATEGORIES, SPLIT_AC_SERVICES } from "@/lib/data/services";
import { AirVent, Wind, LayoutGrid, Network, ArrowRight, CheckCircle } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { Phone, MessageCircle } from "lucide-react";

export const metadata: Metadata = generatePageMetadata({
  title: "AC Services in Hyderabad — Split, Cassette, Ductable, VRF",
  description:
    "Complete AC service catalog — split AC, cassette AC, ductable AC, and VRF/VRV systems. Repair, installation, gas charging, AMC and more across Hyderabad.",
  path: "/services",
  keywords: ["ac services hyderabad", "ac repair services hyderabad", "hvac services hyderabad"],
});

const categoryIcons: Record<string, React.ElementType> = {
  AirVent, LayoutGrid, Wind, Network,
};

export default function ServicesPage() {
  const breadcrumbData = breadcrumbSchema([{ name: "Services", url: "/services" }]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />

      {/* Hero */}
      <section className="bg-hero py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern" />
        <div className="container-custom relative z-10 text-center">
          <div className="badge text-white/70 border border-white/20 bg-white/8 mx-auto mb-5">
            AC Services
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-5">
            Complete AC Service Solutions
            <br />
            <span className="text-[#F5A623]">for Every Need</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
            From residential split ACs to enterprise VRF systems — RSG Refrigeration handles
            all types of AC services across 40+ areas in Hyderabad.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={BUSINESS.callUrl} className="btn-secondary">
              <Phone size={17} />
              Call Now
            </a>
            <a href={BUSINESS.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <MessageCircle size={17} />
              WhatsApp
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="white" className="w-full">
            <path d="M0 40L720 10L1440 40V40H0V40Z"/>
          </svg>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#111827] mb-3">
              Our <span className="gradient-text">AC Service Categories</span>
            </h2>
            <p className="text-gray-500">Choose your AC type to explore dedicated service pages</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {AC_CATEGORIES.map((cat) => {
              const Icon = categoryIcons[cat.icon] || AirVent;
              return (
                <div key={cat.slug} className="h-full">
                  <Link href={`/services/${cat.slug}`} className="card-service block p-6 h-full group">
                    <div className="w-14 h-14 rounded-2xl bg-[#0B1F66]/8 flex items-center justify-center mb-5 group-hover:bg-[#0B1F66] transition-colors">
                      <Icon size={26} className="text-[#0B1F66] group-hover:text-white transition-colors" />
                    </div>
                    <h2 className="font-bold text-[#111827] text-lg mb-2">{cat.title}</h2>
                    <p className="text-gray-500 text-sm mb-4">{cat.description}</p>
                    <div className="flex items-center gap-2 text-[#0B1F66] text-sm font-semibold group-hover:gap-3 transition-all">
                      {cat.count}+ Services <ArrowRight size={14} />
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Split AC Quick List */}
          <div className="bg-[#f8faff] rounded-3xl p-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-[#111827]">Popular Split AC Services</h2>
                <p className="text-gray-500 text-sm mt-1">Our most requested residential AC services</p>
              </div>
              <Link href="/services/split-ac" className="text-[#0B1F66] font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                View All <ArrowRight size={14} />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {SPLIT_AC_SERVICES.map((svc) => (
                <Link
                  key={svc.slug}
                  href={`/services/split-ac/${svc.slug}`}
                  className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100 hover:border-[#0B1F66]/25 hover:shadow-md transition-all group"
                >
                  <div>
                    <div className="font-medium text-[#111827] text-sm group-hover:text-[#0B1F66] transition-colors">{svc.title}</div>
                    {svc.priceRange && <div className="text-xs text-[#22C55E] font-medium mt-0.5">{svc.priceRange}</div>}
                  </div>
                  <ArrowRight size={14} className="text-gray-300 group-hover:text-[#0B1F66] group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
