"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Phone, MessageCircle, CheckCircle, ArrowRight,
  Clock, IndianRupee, ShieldCheck, Wrench,
  ChevronRight, Star,
} from "lucide-react";
import { BUSINESS, BRANDS } from "@/lib/constants";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { FAQ } from "@/lib/data/faqs";
import FAQSection from "@/components/sections/FAQSection";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface RelatedService {
  title: string;
  slug: string;
}

interface Process {
  step: number;
  title: string;
  desc: string;
}

interface ServicePageTemplateProps {
  title: string;
  breadcrumbs: { name: string; href: string }[];
  description: string;
  heroSubtitle: string;
  benefits: string[];
  commonProblems?: string[];
  process?: Process[];
  priceRange?: string;
  duration?: string;
  faqs?: FAQ[];
  relatedServices?: RelatedService[];
  category: string;
  categorySlug: string;
}

function InlineFAQ({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
            openIndex === index ? "border-[#0B1F66]/30 shadow-lg" : "border-gray-100"
          }`}
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-start justify-between gap-4 p-5 text-left"
          >
            <span className={`font-semibold text-sm leading-relaxed ${openIndex === index ? "text-[#0B1F66]" : "text-[#111827]"}`}>
              {faq.question}
            </span>
            <ChevronDown
              size={18}
              className={`shrink-0 mt-0.5 transition-transform duration-300 text-gray-400 ${openIndex === index ? "rotate-180 text-[#0B1F66]" : ""}`}
            />
          </button>
          <AnimatePresence initial={false}>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-4">
                  {faq.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

export default function ServicePageTemplate({
  title,
  breadcrumbs,
  description,
  heroSubtitle,
  benefits,
  commonProblems,
  process,
  priceRange,
  duration,
  faqs,
  relatedServices,
  category,
  categorySlug,
}: ServicePageTemplateProps) {
  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-[#f8faff] py-3 border-b border-gray-100">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-sm text-gray-500" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#0B1F66] transition-colors">Home</Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={crumb.href} className="flex items-center gap-2">
                <ChevronRight size={14} className="text-gray-300" />
                {i === breadcrumbs.length - 1 ? (
                  <span className="text-[#0B1F66] font-medium">{crumb.name}</span>
                ) : (
                  <Link href={crumb.href} className="hover:text-[#0B1F66] transition-colors">{crumb.name}</Link>
                )}
              </span>
            ))}
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-hero py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="badge mb-4 text-white/70 border border-white/20 bg-white/8"
            >
              {category}
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight"
            >
              {title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-white/70 text-lg leading-relaxed mb-8 max-w-2xl"
            >
              {heroSubtitle}
            </motion.p>

            {/* Quick info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              {priceRange && (
                <div className="flex items-center gap-2 bg-white/8 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white/80">
                  <IndianRupee size={14} className="text-[#F5A623]" />
                  <span>Starting {priceRange}</span>
                </div>
              )}
              {duration && (
                <div className="flex items-center gap-2 bg-white/8 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white/80">
                  <Clock size={14} className="text-[#22C55E]" />
                  <span>{duration}</span>
                </div>
              )}
              <div className="flex items-center gap-2 bg-white/8 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white/80">
                <ShieldCheck size={14} className="text-[#F5A623]" />
                <span>90-Day Warranty</span>
              </div>
              <div className="flex items-center gap-2 bg-white/8 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white/80">
                <Star size={14} fill="#F5A623" className="text-[#F5A623]" />
                <span>4.9★ Rated</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="cta-buttons-container justify-start"
            >
              <a href={BUSINESS.callUrl} className="btn-secondary" id="service-page-cta-call">
                <Phone size={17} />
                Call Now
              </a>
              <a href={BUSINESS.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-whatsapp" id="service-page-cta-whatsapp">
                <WhatsAppIcon size={17} />
                WhatsApp
              </a>
              <Link href="/contact" className="btn-outline" id="service-page-cta-book">
                Book Service
              </Link>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="white" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 40L720 10L1440 40V40H0V40Z"/>
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <span className="accent-line" />
                <h2 className="text-2xl font-bold text-[#111827] mb-4">About This Service</h2>
                <p className="text-gray-600 leading-relaxed text-lg">{description}</p>
              </motion.div>

              {/* Benefits */}
              {benefits.length > 0 && (
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <span className="accent-line" />
                  <h2 className="text-2xl font-bold text-[#111827] mb-5">Key Benefits</h2>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors">
                        <CheckCircle size={17} className="text-[#22C55E] shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Common Problems */}
              {commonProblems && commonProblems.length > 0 && (
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <span className="accent-line" />
                  <h2 className="text-2xl font-bold text-[#111827] mb-5">Common Problems We Fix</h2>
                  <div className="space-y-2.5">
                    {commonProblems.map((problem, i) => (
                      <div key={i} className="flex items-center gap-3 p-3.5 rounded-xl border border-red-50 bg-red-50/50 hover:bg-red-50 transition-colors">
                        <Wrench size={15} className="text-red-400 shrink-0" />
                        <span className="text-gray-700 text-sm">{problem}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Process */}
              {process && process.length > 0 && (
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <span className="accent-line" />
                  <h2 className="text-2xl font-bold text-[#111827] mb-6">Our Process</h2>
                  <div className="relative">
                    <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-[#0B1F66] to-[#22C55E] hidden md:block" />
                    <div className="space-y-5">
                      {process.map((step) => (
                        <div key={step.step} className="flex items-start gap-5 group">
                          <div className="w-12 h-12 rounded-full bg-[#0B1F66] text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-lg group-hover:bg-[#F5A623] group-hover:text-[#07132e] transition-colors z-10">
                            {step.step}
                          </div>
                          <div className="flex-1 pt-3">
                            <h3 className="font-bold text-[#111827] mb-1">{step.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Brands */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <span className="accent-line" />
                <h2 className="text-2xl font-bold text-[#111827] mb-5">Brands We Service</h2>
                <div className="flex flex-wrap gap-2">
                  {BRANDS.map((brand) => (
                    <span key={brand} className="inline-block px-4 py-2 rounded-full border border-[#0B1F66]/15 text-[#0B1F66] text-sm font-medium hover:bg-[#0B1F66] hover:text-white transition-all cursor-default">
                      {brand}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* FAQs */}
              {faqs && faqs.length > 0 && (
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <span className="accent-line" />
                  <h2 className="text-2xl font-bold text-[#111827] mb-6">Frequently Asked Questions</h2>
                  <InlineFAQ faqs={faqs} />
                </motion.div>
              )}

              {/* Related Services */}
              {relatedServices && relatedServices.length > 0 && (
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <span className="accent-line" />
                  <h2 className="text-2xl font-bold text-[#111827] mb-5">Related Services</h2>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {relatedServices.map((svc) => (
                      <Link
                        key={svc.slug}
                        href={`/services/${categorySlug}/${svc.slug}`}
                        className="flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:border-[#0B1F66]/30 hover:bg-blue-50 transition-all group"
                      >
                        <span className="text-sm font-medium text-gray-700 group-hover:text-[#0B1F66]">{svc.title}</span>
                        <ArrowRight size={14} className="text-gray-400 group-hover:text-[#0B1F66] group-hover:translate-x-1 transition-all" />
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-5">
                {/* Book CTA */}
                <div className="rounded-2xl bg-gradient-to-br from-[#0B1F66] to-[#1a3a8f] p-6 text-white shadow-xl">
                  <div className="text-lg font-bold mb-1">Book This Service</div>
                  <p className="text-white/60 text-sm mb-5">Same-day service available. Certified technicians.</p>

                  {priceRange && (
                    <div className="flex items-center justify-between mb-5 p-3 rounded-xl bg-white/8 border border-white/15">
                      <span className="text-white/70 text-sm">Estimate</span>
                      <span className="text-[#F5A623] font-bold">{priceRange}</span>
                    </div>
                  )}

                   <div className="space-y-3">
                    <a href={BUSINESS.callUrl} className="btn-secondary w-full py-3.5 justify-center">
                      <Phone size={17} />
                      Call: {BUSINESS.phoneDisplay}
                    </a>
                    <a href={BUSINESS.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-whatsapp w-full py-3.5 justify-center">
                      <WhatsAppIcon size={17} />
                      WhatsApp Now
                    </a>
                    <Link href="/contact" className="btn-outline w-full py-3.5 justify-center">
                      Book Online
                    </Link>
                  </div>
                </div>

                {/* Trust */}
                <div className="rounded-2xl border border-gray-100 p-6 bg-[#f8faff]">
                  <h3 className="font-bold text-[#111827] mb-4">Why Choose RSG?</h3>
                  <ul className="space-y-3">
                    {[
                      "Verified & background-checked technicians",
                      "Genuine OEM spare parts",
                      "90-day service warranty",
                      "Transparent upfront pricing",
                      "Same-day service available",
                      "All major AC brands covered",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle size={15} className="text-[#22C55E] shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Service area note */}
                <div className="rounded-2xl border border-[#22C55E]/20 bg-[#22C55E]/5 p-5">
                  <div className="font-semibold text-gray-800 text-sm mb-2">📍 Service Area</div>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    Available across Bandlaguda Jagir, Narsingi, Kokapet, Gachibowli, Madhapur, Hitech City,
                    Financial District, Kondapur, Rajendranagar, Attapur and 40+ more areas in Hyderabad.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Emergency CTA */}
      <section className="py-14 bg-dark-section">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Need <span className="text-[#F5A623]">{title}</span> Right Now?
          </h2>
          <p className="text-white/60 mb-6">Same-day service, certified technicians, genuine parts.</p>
          <div className="cta-buttons-container justify-center">
            <a href={BUSINESS.callUrl} className="btn-secondary">
              <Phone size={17} />
              Call: {BUSINESS.phoneDisplay}
            </a>
            <a href={BUSINESS.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <WhatsAppIcon size={17} />
              WhatsApp Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
