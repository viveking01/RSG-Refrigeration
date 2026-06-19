"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 5000, suffix: "+", label: "Happy Customers", color: "text-[#F5A623]" },
  { value: 7, suffix: "+", label: "Years Experience", color: "text-[#22C55E]" },
  { value: 4.9, suffix: "★", label: "Average Rating", color: "text-[#F5A623]", isDecimal: true },
  { value: 20, suffix: "+", label: "Expert Technicians", color: "text-[#22C55E]" },
  { value: 40, suffix: "+", label: "Areas Covered", color: "text-[#F5A623]" },
  { value: 100, suffix: "%", label: "Satisfaction Guarantee", color: "text-[#22C55E]" },
];

function Counter({ value, suffix, isDecimal }: { value: number; suffix: string; isDecimal?: boolean }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const duration = 1800;
    const start = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(isDecimal ? Math.round(value * eased * 10) / 10 : Math.round(value * eased));
      if (progress >= 1) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, value, isDecimal]);

  return (
    <span ref={ref}>
      {isDecimal ? count.toFixed(1) : count.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="py-14 bg-gradient-to-br from-[#0B1F66] to-[#1a3a8f] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            RSG Refrigeration by the Numbers
          </h2>
          <p className="text-white/50 mt-2">Hyderabad's trusted AC service partner</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-5 rounded-2xl bg-white/6 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className={`text-3xl font-bold mb-1 ${stat.color}`}>
                <Counter value={stat.value} suffix={stat.suffix} isDecimal={stat.isDecimal} />
              </div>
              <div className="text-white/60 text-xs font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
