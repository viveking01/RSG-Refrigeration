"use client";

import { motion } from "framer-motion";
import {
  Star, Users, IndianRupee, Zap, Award, Eye,
  HeartHandshake, CalendarCheck,
} from "lucide-react";
import { WHY_CHOOSE } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Star, Users, IndianRupee, Zap, Award, Eye, HeartHandshake, CalendarCheck,
};

const colors = [
  "from-blue-500 to-blue-700",
  "from-purple-500 to-purple-700",
  "from-emerald-500 to-emerald-700",
  "from-amber-500 to-amber-700",
  "from-rose-500 to-rose-700",
  "from-teal-500 to-teal-700",
  "from-orange-500 to-orange-700",
  "from-indigo-500 to-indigo-700",
];

export default function WhyChooseSection() {
  return (
    <section className="section-padding bg-section-alt">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="badge badge-primary mx-auto mb-4"
          >
            Why RSG Refrigeration
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-[#111827] mb-4"
          >
            Why Hyderabad Trusts{" "}
            <span className="gradient-text">RSG Refrigeration</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-gray-500 text-lg leading-relaxed"
          >
            We combine technical expertise with genuine customer care to deliver
            the best AC service experience in Hyderabad.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {WHY_CHOOSE.map((item, index) => {
            const Icon = iconMap[item.icon] || Star;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group card-premium p-6 cursor-default"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colors[index]} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="font-bold text-[#111827] text-base mb-2 group-hover:text-[#0B1F66] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
