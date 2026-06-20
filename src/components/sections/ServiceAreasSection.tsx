import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { ALL_AREAS, PRIMARY_AREAS } from "@/lib/constants";

const directionColors = {
  north: { bg: "bg-blue-50", border: "border-blue-200", text: "text-blue-700", dot: "bg-blue-500", label: "North" },
  east: { bg: "bg-purple-50", border: "border-purple-200", text: "text-purple-700", dot: "bg-purple-500", label: "East" },
  south: { bg: "bg-emerald-50", border: "border-emerald-200", text: "text-emerald-700", dot: "bg-emerald-500", label: "South" },
  west: { bg: "bg-amber-50", border: "border-amber-200", text: "text-amber-700", dot: "bg-amber-500", label: "West" },
};

export default function ServiceAreasSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="badge badge-accent mx-auto mb-4">
            <MapPin size={12} />
            Service Coverage
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
            Serving{" "}
            <span className="gradient-text">40+ Areas</span>{" "}
            Across Hyderabad
          </h2>
          <p className="text-gray-500 text-lg">
            Based in Bandlaguda Jagir, we provide fast AC services across South, West, East and North Hyderabad.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-5 text-center">
            Primary Service Areas
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {PRIMARY_AREAS.map((area) => (
              <Link
                key={area}
                href={`/service-areas/${area.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#0B1F66] text-white text-sm font-medium hover:bg-[#1a3a8f] transition-colors shadow-md"
              >
                <MapPin size={12} />
                {area}
              </Link>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {(Object.entries(ALL_AREAS) as [keyof typeof ALL_AREAS, readonly string[]][]).map(([dir, areas]) => {
            const config = directionColors[dir];
            return (
              <div
                key={dir}
                className={`rounded-2xl border ${config.border} ${config.bg} p-5`}
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className={`w-3 h-3 rounded-full ${config.dot}`} />
                  <span className={`text-xs font-bold uppercase tracking-widest ${config.text}`}>
                    {config.label} Hyderabad
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {areas.slice(0, 10).map((area) => (
                    <span
                      key={area}
                      className={`inline-block text-xs px-2.5 py-1 rounded-full bg-white/70 border ${config.border} ${config.text} font-medium`}
                    >
                      {area}
                    </span>
                  ))}
                  {areas.length > 10 && (
                    <span className={`inline-block text-xs px-2.5 py-1 rounded-full bg-white/70 border ${config.border} ${config.text} font-medium`}>
                      +{areas.length - 10} more
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <p className="text-gray-500 text-sm mb-4">
            Not sure if we cover your area?{" "}
            <a href="tel:7815901302" className="text-[#0B1F66] font-semibold hover:underline">
              Call us at 7815901302
            </a>
          </p>
          <Link
            href="/service-areas"
            className="inline-flex items-center gap-2 text-[#0B1F66] font-semibold hover:gap-3 transition-all"
          >
            View All Service Areas <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
