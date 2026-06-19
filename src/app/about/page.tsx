import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { BUSINESS } from "@/lib/constants";
import { Phone, MessageCircle, Award, Users, Clock, ShieldCheck, CalendarCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = generatePageMetadata({
  title: "About RSG Refrigeration — Trusted AC Service Company in Hyderabad",
  description:
    "Learn about RSG Refrigeration (Royal Refrigeration System Group) — Hyderabad's trusted AC repair and service company. 7+ years experience, 5000+ customers, verified technicians.",
  path: "/about",
  keywords: ["about rsg refrigeration", "ac service company hyderabad", "hvac company hyderabad"],
});

export default function AboutPage() {
  const breadcrumb = breadcrumbSchema([{ name: "About", url: "/about" }]);

  const milestones = [
    { year: "2018", title: "Founded", desc: "RSG Refrigeration established in Bandlaguda Jagir with a mission to deliver premium AC services." },
    { year: "2019", title: "100 Customers", desc: "Reached first 100 satisfied customers through word-of-mouth referrals." },
    { year: "2021", title: "Expanded Team", desc: "Grew to 10+ certified technicians covering more areas across Hyderabad." },
    { year: "2022", title: "AMC Launch", desc: "Launched Annual Maintenance Contract plans for residential and commercial clients." },
    { year: "2023", title: "2000+ Customers", desc: "Crossed 2000 customers with expansion into IT corridors and commercial complexes." },
    { year: "2024", title: "5000+ Customers", desc: "Now serving 5000+ customers across 40+ areas with 4.9★ average rating." },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* Hero */}
      <section className="bg-hero py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <div className="badge text-white/70 border border-white/20 bg-white/8 mb-5">About Us</div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">
              About{" "}
              <span className="text-[#F5A623]">RSG Refrigeration</span>
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-2xl">
              Royal Refrigeration System Group — Hyderabad's most trusted air conditioning
              service company, delivering premium AC repair, installation, and maintenance
              services since 2018.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { value: "7+", label: "Years Experience" },
                { value: "5000+", label: "Customers Served" },
                { value: "4.9★", label: "Average Rating" },
                { value: "40+", label: "Areas Covered" },
              ].map((stat) => (
                <div key={stat.label} className="glass rounded-2xl p-4 text-center">
                  <div className="text-2xl font-bold text-[#F5A623]">{stat.value}</div>
                  <div className="text-white/60 text-xs mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="white" className="w-full">
            <path d="M0 40L720 10L1440 40V40H0V40Z"/>
          </svg>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <span className="accent-line" />
              <h2 className="text-2xl md:text-3xl font-bold text-[#111827] mb-5">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  RSG Refrigeration was founded in 2018 with a clear mission: to provide Hyderabad residents
                  and businesses with professional, honest, and affordable air conditioning services. Based in
                  Bandlaguda Jagir, we started as a small team of certified AC technicians serving our
                  immediate neighborhood.
                </p>
                <p>
                  Over the years, we've grown through the trust of our customers — word of mouth being
                  our strongest marketing tool. Today, RSG Refrigeration serves 5,000+ customers across
                  40+ areas in Hyderabad with a team of 20+ certified technicians.
                </p>
                <p>
                  We specialize in residential, commercial, and industrial HVAC services — covering
                  split ACs, cassette ACs, ductable systems, and VRF/VRV multi-zone installations.
                  Our commitment to quality, transparency, and customer satisfaction has made us one
                  of Hyderabad's most trusted AC service providers.
                </p>
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{ height: "400px" }}>
              <Image
                src="/images/team-hyderabad.png"
                alt="RSG Refrigeration technician team in Hyderabad - Certified AC service professionals"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <div className="text-white font-bold text-lg">Our Expert Team</div>
                <div className="text-white/70 text-sm">20+ certified HVAC technicians across Hyderabad</div>
              </div>
            </div>
          </div>

          {/* Mission & Values */}
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {[
              { title: "Our Mission", content: "To provide Hyderabad's residents and businesses with fast, reliable, and affordable AC services with complete transparency and customer satisfaction.", color: "from-blue-500 to-blue-700" },
              { title: "Our Vision", content: "To be Hyderabad's most trusted HVAC service company, recognized for technical excellence, ethical practices, and outstanding customer care.", color: "from-purple-500 to-purple-700" },
              { title: "Our Values", content: "Honesty in diagnosis and pricing. Quality in workmanship. Speed in response. Respect for your home and property. Accountability for our work.", color: "from-emerald-500 to-emerald-700" },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl overflow-hidden">
                <div className={`bg-gradient-to-br ${item.color} p-4 text-white font-bold text-lg`}>{item.title}</div>
                <div className="p-5 bg-gray-50 border border-gray-100 rounded-b-2xl">
                  <p className="text-gray-600 leading-relaxed text-sm">{item.content}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Milestones */}
          <div className="mb-16">
            <div className="text-center mb-10">
              <span className="accent-line mx-auto" />
              <h2 className="text-2xl font-bold text-[#111827]">Our Journey</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {milestones.map((m, i) => (
                <div key={i} className="p-5 rounded-2xl bg-[#f8faff] border border-gray-100">
                  <div className="text-[#F5A623] font-bold text-lg mb-2">{m.year}</div>
                  <div className="font-bold text-[#111827] mb-1">{m.title}</div>
                  <div className="text-gray-500 text-sm leading-relaxed">{m.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* What we don't do */}
          <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6 mb-12">
            <h3 className="font-bold text-amber-900 mb-3">📋 Our Service Scope</h3>
            <p className="text-amber-800 text-sm leading-relaxed">
              RSG Refrigeration specializes exclusively in <strong>residential, commercial, and industrial HVAC systems</strong>.
              We service split ACs, cassette ACs, ductable ACs, and VRF/VRV systems. We do NOT provide
              automobile or car air conditioning services.
            </p>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-[#0B1F66] to-[#1a3a8f] rounded-3xl p-8 md:p-10 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to Experience Premium AC Service?</h2>
            <p className="text-white/60 mb-6">Join 5,000+ satisfied customers across Hyderabad.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={BUSINESS.callUrl} className="btn-secondary"><Phone size={17} /> Call Now</a>
              <a href={BUSINESS.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-whatsapp"><MessageCircle size={17} /> WhatsApp</a>
              <Link href="/contact" className="btn-outline"><CalendarCheck size={17} /> Book Service</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
