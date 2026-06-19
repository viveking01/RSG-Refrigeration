"use client";

import { motion } from "framer-motion";
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
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="badge badge-accent mx-auto mb-4"
          >
            <MapPin size={12} />
            Service Coverage
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-[#111827] mb-4"
          >
            Serving{" "}
            <span className="gradient-text">40+ Areas</span>{" "}
            Across Hyderabad
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-gray-500 text-lg"
          >
            Based in Bandlaguda Jagir, we provide fast AC services across South, West, East and North Hyderabad.
          </motion.p>
        </div>

        {/* Primary Areas — Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-5 text-center">
            Primary Service Areas
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {PRIMARY_AREAS.map((area, i) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
              >
                <Link
                  href={`/service-areas/${area.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")}`}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#0B1F66] text-white text-sm font-medium hover:bg-[#1a3a8f] transition-all hover:-translate-y-0.5 shadow-md"
                >
                  <MapPin size={12} />
                  {area}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Direction-based coverage */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {(Object.entries(ALL_AREAS) as [keyof typeof ALL_AREAS, readonly string[]][]).map(([dir, areas], index) => {
            const config = directionColors[dir];
            return (
              <motion.div
                key={dir}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
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
                      className={`text-xs px-2.5 py-1 rounded-full bg-white/70 border ${config.border} ${config.text} font-medium`}
                    >
                      {area}
                    </span>
                  ))}
                  {areas.length > 10 && (
                    <span className={`text-xs px-2.5 py-1 rounded-full bg-white/70 border ${config.border} ${config.text} font-medium`}>
                      +{areas.length - 10} more
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
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
        </motion.div>
      </div>
    </section>
  );
}
