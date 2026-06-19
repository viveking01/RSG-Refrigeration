import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";
import { HOME_FAQS } from "@/lib/data/faqs";
import FAQSection from "@/components/sections/FAQSection";
import { BUSINESS } from "@/lib/constants";
import { Phone, MessageCircle } from "lucide-react";

export const metadata: Metadata = generatePageMetadata({
  title: "AC Service FAQs — RSG Refrigeration | Common Questions Answered",
  description:
    "Frequently asked questions about AC repair, service, gas charging, installation, and AMC in Hyderabad. Expert answers from RSG Refrigeration.",
  path: "/faqs",
  keywords: ["ac service faq hyderabad", "ac repair questions", "ac service questions hyderabad"],
});

export default function FAQsPage() {
  const breadcrumb = breadcrumbSchema([{ name: "FAQs", url: "/faqs" }]);
  const faqData = faqSchema(HOME_FAQS);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />

      <section className="bg-hero py-14 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern" />
        <div className="container-custom relative z-10 text-center">
          <div className="badge text-white/70 border border-white/20 bg-white/8 mx-auto mb-5">FAQ</div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions{" "}
            <span className="text-[#F5A623]">About AC Services</span>
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Everything you need to know about AC repair, service, gas charging, and maintenance in Hyderabad.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="white" className="w-full">
            <path d="M0 40L720 10L1440 40V40H0V40Z"/>
          </svg>
        </div>
      </section>

      <FAQSection />

      <section className="py-14 bg-dark-section">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Didn't find your answer?</h2>
          <p className="text-white/60 mb-6">Call or WhatsApp us directly — we're happy to help!</p>
          <div className="cta-buttons-container justify-center">
            <a href={BUSINESS.callUrl} className="btn-secondary"><Phone size={17} /> Call Now</a>
            <a href={BUSINESS.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-whatsapp"><MessageCircle size={17} /> WhatsApp</a>
          </div>
        </div>
      </section>
    </>
  );
}
