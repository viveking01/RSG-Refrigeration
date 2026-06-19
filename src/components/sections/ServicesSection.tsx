"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { AirVent, LayoutGrid, Wind, Network, ArrowRight, Wrench, Zap, Package, Settings } from "lucide-react";
import { AC_CATEGORIES, SPLIT_AC_SERVICES } from "@/lib/data/services";

const categoryIcons: Record<string, React.ElementType> = {
  AirVent, LayoutGrid, Wind, Network,
};

// Featured Split AC services to show on homepage
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
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="badge badge-primary mx-auto mb-4"
          >
            Our AC Services
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-[#111827] mb-4"
          >
            Complete{" "}
            <span className="gradient-text">AC Service Solutions</span>
            <br />for Every Need
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-gray-500 text-lg"
          >
            From residential split ACs to large commercial VRF systems — we handle it all.
          </motion.p>
        </div>

        {/* AC Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {AC_CATEGORIES.map((cat, index) => {
            const Icon = categoryIcons[cat.icon] || AirVent;
            return (
              <motion.div
                key={cat.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={`/services/${cat.slug}`}
                  className="card-service group block p-6 h-full"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#0B1F66]/8 flex items-center justify-center mb-5 group-hover:bg-[#0B1F66] transition-colors duration-300">
                    <Icon size={26} className="text-[#0B1F66] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-bold text-[#111827] text-lg mb-2 group-hover:text-[#0B1F66] transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{cat.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">{cat.count}+ Services</span>
                    <div className="flex items-center gap-1 text-[#0B1F66] text-sm font-medium group-hover:gap-2 transition-all">
                      View All <ArrowRight size={14} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Featured Quick Service Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-[#0B1F66] to-[#1a3a8f] rounded-3xl p-8 md:p-10"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Split AC Services</h3>
              <p className="text-white/60 text-sm">Most popular residential AC services — quick booking, same-day service</p>
            </div>
            <Link
              href="/services/split-ac"
              className="mt-4 md:mt-0 flex items-center gap-2 text-[#F5A623] font-semibold text-sm hover:gap-3 transition-all"
            >
              View All 27 Services <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {featuredServices.map((svc, i) => (
              <motion.div
                key={svc.slug}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.08 }}
              >
                <Link
                  href={`/services/split-ac/${svc.slug}`}
                  className="group flex flex-col items-center gap-3 p-4 rounded-2xl bg-white/6 border border-white/10 hover:bg-white/12 hover:border-white/25 transition-all text-center"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#F5A623]/15 flex items-center justify-center group-hover:bg-[#F5A623]/25 transition-colors">
                    <svc.icon size={18} className="text-[#F5A623]" />
                  </div>
                  <span className="text-white/80 text-xs font-medium group-hover:text-white transition-colors">
                    {svc.label}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
