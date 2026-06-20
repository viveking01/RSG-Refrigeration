"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { HOME_FAQS } from "@/lib/data/faqs";
import { BUSINESS } from "@/lib/constants";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="badge badge-primary mx-auto mb-4">
            <HelpCircle size={12} />
            Frequently Asked
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
            Got Questions? <span className="gradient-text">We&apos;ve Got Answers.</span>
          </h2>
          <p className="text-gray-500 text-base md:text-lg mx-auto max-w-xl">
            Find answers to the most common questions about our AC repair, service, and maintenance offerings in Hyderabad.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <div className="bg-gradient-to-br from-[#0B1F66] to-[#1a3a8f] rounded-2xl p-6 text-white">
              <div className="text-lg font-bold mb-2">Still have questions?</div>
              <p className="text-white/70 text-sm mb-4">
                Our team is available 7 days a week to answer your queries.
              </p>
              <div className="space-y-3">
                <a href={BUSINESS.callUrl} className="btn-secondary w-full py-3 justify-center text-sm">
                  📞 Call {BUSINESS.phoneDisplay}
                </a>
                <a
                  href={BUSINESS.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full py-3 justify-center text-sm"
                >
                  <WhatsAppIcon size={16} />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-3">
            {HOME_FAQS.map((faq, index) => (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  openIndex === index
                    ? "border-[#0B1F66]/30 shadow-lg shadow-blue-100"
                    : "border-gray-100 hover:border-gray-200"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-start justify-between gap-4 p-5 text-left"
                  aria-expanded={openIndex === index}
                  id={`faq-btn-${index}`}
                >
                  <span className={`font-semibold text-sm leading-relaxed ${
                    openIndex === index ? "text-[#0B1F66]" : "text-[#111827]"
                  }`}>
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 mt-0.5 transition-transform duration-300 text-gray-400 ${
                      openIndex === index ? "rotate-180 text-[#0B1F66]" : ""
                    }`}
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
        </div>
      </div>
    </section>
  );
}
