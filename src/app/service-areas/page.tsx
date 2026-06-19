import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import Link from "next/link";
import { MapPin, ArrowRight, Phone, MessageCircle } from "lucide-react";
import { LOCATION_DATA } from "@/lib/data/locations";
import { BUSINESS, ALL_AREAS } from "@/lib/constants";

export const metadata: Metadata = generatePageMetadata({
  title: "AC Service Areas in Hyderabad — 40+ Locations Covered",
  description:
    "RSG Refrigeration covers 40+ areas across Hyderabad for AC repair and service. Find your area and book same-day AC service. Bandlaguda Jagir, Gachibowli, Madhapur, Hitech City and more.",
  path: "/service-areas",
  keywords: ["ac service areas hyderabad", "ac repair near me hyderabad", "ac service coverage hyderabad"],
});

const directionConfig = {
  north: { label: "North Hyderabad", color: "text-blue-700", bg: "bg-blue-50", border: "border-blue-200" },
  east: { label: "East Hyderabad", color: "text-purple-700", bg: "bg-purple-50", border: "border-purple-200" },
  south: { label: "South Hyderabad", color: "text-emerald-700", bg: "bg-emerald-50", border: "border-emerald-200" },
  west: { label: "West Hyderabad", color: "text-amber-700", bg: "bg-amber-50", border: "border-amber-200" },
};

export default function ServiceAreasPage() {
  const breadcrumbData = breadcrumbSchema([{ name: "Service Areas", url: "/service-areas" }]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />

      {/* Hero */}
      <section className="bg-hero py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern" />
        <div className="container-custom relative z-10 text-center">
          <div className="badge text-white/70 border border-white/20 bg-white/8 mx-auto mb-5">
            <MapPin size={12} />
            Coverage Map
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-5">
            AC Service Areas
            <br />
            <span className="text-[#F5A623]">Across Hyderabad</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
            Based in Bandlaguda Jagir, RSG Refrigeration covers 40+ areas across South, West,
            East and North Hyderabad for all AC repair and service needs.
          </p>
          <div className="cta-buttons-container justify-center">
            <a href={BUSINESS.callUrl} className="btn-secondary"><Phone size={17} /> Call Now</a>
            <a href={BUSINESS.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-whatsapp"><MessageCircle size={17} /> WhatsApp</a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="white" className="w-full">
            <path d="M0 40L720 10L1440 40V40H0V40Z"/>
          </svg>
        </div>
      </section>

      {/* Primary Areas with dedicated pages */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#111827] mb-3">
              Primary <span className="gradient-text">Service Areas</span>
            </h2>
            <p className="text-gray-500">Dedicated service pages for our primary coverage areas</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
            {LOCATION_DATA.map((loc) => (
              <Link
                key={loc.slug}
                href={`/service-areas/${loc.slug}`}
                className="group p-6 rounded-2xl border border-gray-100 hover:border-[#0B1F66]/25 hover:shadow-lg hover:shadow-blue-50 transition-all"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0B1F66]/8 flex items-center justify-center group-hover:bg-[#0B1F66] transition-colors">
                    <MapPin size={18} className="text-[#0B1F66] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#111827] group-hover:text-[#0B1F66] transition-colors">AC Service {loc.name}</h3>
                    <div className="text-xs text-gray-400">{loc.nearbyAreas?.slice(0, 2).join(", ")}</div>
                  </div>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-3">{loc.description}</p>
                <div className="flex items-center gap-1 text-[#0B1F66] text-sm font-medium group-hover:gap-2 transition-all">
                  View Details <ArrowRight size={13} />
                </div>
              </Link>
            ))}
          </div>

          {/* Direction-based all areas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {(Object.entries(ALL_AREAS) as [keyof typeof ALL_AREAS, readonly string[]][]).map(([dir, areas]) => {
              const config = directionConfig[dir];
              return (
                <div key={dir} className={`rounded-2xl border ${config.border} ${config.bg} p-6`}>
                  <h2 className={`font-bold text-base mb-4 ${config.color}`}>{config.label}</h2>
                  <div className="flex flex-wrap gap-2">
                    {areas.map((area) => {
                      const slug = area.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
                      const hasPage = LOCATION_DATA.some(l => l.slug === slug);
                      return hasPage ? (
                        <Link
                          key={area}
                          href={`/service-areas/${slug}`}
                          className={`text-xs px-3 py-1.5 rounded-full bg-white/80 border ${config.border} ${config.color} font-medium hover:bg-white transition-colors`}
                        >
                          {area}
                        </Link>
                      ) : (
                        <span
                          key={area}
                          className={`text-xs px-3 py-1.5 rounded-full bg-white/50 border ${config.border} text-gray-500`}
                        >
                          {area}
                        </span>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm">
              Don't see your area? We likely cover it. Call us to confirm:{" "}
              <a href="tel:7815901302" className="text-[#0B1F66] font-semibold hover:underline">7815901302</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
