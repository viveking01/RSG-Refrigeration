import Link from "next/link";
import { AirVent, LayoutGrid, Wind, Network, ArrowRight, Wrench, Zap, Package, Settings } from "lucide-react";
import { AC_CATEGORIES } from "@/lib/data/services";

const categoryIcons: Record<string, React.ElementType> = {
  AirVent, LayoutGrid, Wind, Network,
};

const featuredServices = [
  { slug: "installation", label: "Installation", icon: Package },
  { slug: "repair", label: "Repair", icon: Wrench },
  { slug: "service", label: "Servicing", icon: Settings },
  { slug: "gas-charging", label: "Gas Charging", icon: Zap },
  { slug: "deep-cleaning", label: "Deep Cleaning", icon: AirVent },
  { slug: "amc", label: "AMC Plans", icon: Network },
];

export default function ServicesSection() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="badge badge-primary mx-auto mb-4">
            Our AC Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
            Complete{" "}
            <span className="gradient-text">AC Service Solutions</span>
            <br />
            for Every Need
          </h2>
          <p className="text-gray-500 text-base md:text-lg mx-auto max-w-xl">
            From residential split ACs to large commercial VRF systems — we handle it all.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {AC_CATEGORIES.map((cat) => {
            const Icon = categoryIcons[cat.icon] || AirVent;
            return (
              <Link
                key={cat.slug}
                href={`/services/${cat.slug}`}
                className="card-service card-service-item group flex flex-col h-full"
              >
                <div className="flex-1">
                  <div className="w-12 h-12 rounded-2xl bg-[#0B1F66]/8 flex items-center justify-center mb-4 group-hover:bg-[#0B1F66] transition-colors duration-300">
                    <Icon size={22} className="text-[#0B1F66] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-bold text-[#111827] text-base mb-2 group-hover:text-[#0B1F66] transition-colors leading-snug">
                    {cat.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    {cat.description}
                  </p>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-gray-50 mt-auto">
                  <span className="text-xs text-gray-400">{cat.count}+ Services</span>
                  <span className="flex items-center gap-1 text-[#0B1F66] text-xs font-semibold group-hover:gap-2 transition-all">
                    View All <ArrowRight size={13} />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="relative bg-gradient-to-br from-[#07132e] via-[#0B1F66] to-[#1a3a8f] rounded-3xl p-6 md:p-8">
          <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[#F5A623] opacity-5 blur-2xl pointer-events-none" />

          <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <div>
              <h3 className="text-xl font-bold text-white">Split AC Services</h3>
              <p className="text-white/50 text-sm mt-0.5">Quick booking • Same-day service</p>
            </div>
            <Link
              href="/services/split-ac"
              className="inline-flex items-center gap-2 text-[#F5A623] font-semibold text-sm hover:gap-3 transition-all shrink-0"
            >
              View All 27 Services <ArrowRight size={14} />
            </Link>
          </div>

          <div className="relative grid grid-cols-3 sm:grid-cols-6 gap-3">
            {featuredServices.map((svc) => (
              <Link
                key={svc.slug}
                href={`/services/split-ac/${svc.slug}`}
                className="group flex flex-col items-center gap-2.5 p-3.5 rounded-2xl bg-white/6 border border-white/10 hover:bg-white/12 hover:border-white/30 transition-all text-center"
              >
                <div className="w-10 h-10 rounded-xl bg-[#F5A623]/15 flex items-center justify-center group-hover:bg-[#F5A623]/30 transition-colors">
                  <svc.icon size={17} className="text-[#F5A623]" />
                </div>
                <span className="text-white/75 text-xs font-medium group-hover:text-white transition-colors leading-tight">
                  {svc.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
