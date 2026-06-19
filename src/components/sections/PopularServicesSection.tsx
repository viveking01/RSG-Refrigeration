"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { POPULAR_SERVICES } from "@/lib/data/services";

export default function PopularServicesSection() {
  return (
    <section className="py-14 bg-white border-y border-gray-100">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8"
        >
          <div>
            <h2 className="text-xl font-bold text-[#111827]">Popular AC Services in Hyderabad</h2>
            <p className="text-gray-500 text-sm mt-1">Most searched AC services — book instantly</p>
          </div>
          <Link href="/services" className="flex items-center gap-1.5 text-[#0B1F66] text-sm font-semibold hover:gap-2.5 transition-all">
            View All Services <ArrowRight size={14} />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap gap-3"
        >
          {POPULAR_SERVICES.map((svc, index) => (
            <motion.div
              key={svc.slug}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Link
                href={svc.slug}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#0B1F66]/15 text-sm font-medium text-[#111827] hover:bg-[#0B1F66] hover:text-white hover:border-[#0B1F66] transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
              >
                {svc.title}
                <ArrowRight size={13} className="opacity-60" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
