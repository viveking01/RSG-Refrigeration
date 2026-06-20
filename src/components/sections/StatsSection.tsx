"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";

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
    <section className="py-14 bg-hero relative overflow-hidden">
      {/* Grid pattern overlay matching hero */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      {/* Ambient glow blobs */}
      <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-[#F5A623] opacity-5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-blue-400 opacity-5 blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            RSG Refrigeration by the Numbers
          </h2>
          <p className="text-white/60 mt-2">Hyderabad&apos;s trusted AC service partner</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-5 rounded-2xl bg-white/6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm"
            >
              <div className={`text-3xl font-bold mb-1 ${stat.color}`}>
                <Counter value={stat.value} suffix={stat.suffix} isDecimal={stat.isDecimal} />
              </div>
              <div className="text-white/70 text-xs font-semibold uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
