import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { BUSINESS } from "@/lib/constants";
import { Phone, MessageCircle, MapPin, Mail, Clock, Send, CheckCircle } from "lucide-react";
import ContactForm from "./ContactForm";

export const metadata: Metadata = generatePageMetadata({
  title: "Contact RSG Refrigeration — Book AC Service in Hyderabad",
  description:
    "Contact RSG Refrigeration for AC repair, service, and installation in Hyderabad. Call 7815901302 or WhatsApp for same-day service booking.",
  path: "/contact",
  keywords: ["contact rsg refrigeration", "book ac service hyderabad", "ac repair booking hyderabad"],
});

export default function ContactPage() {
  const breadcrumb = breadcrumbSchema([{ name: "Contact", url: "/contact" }]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* Hero */}
      <section className="bg-hero pt-24 pb-20 md:pt-32 md:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern" />
        <div className="container-custom relative z-10 text-center">
          <div className="badge text-white/70 border border-white/20 bg-white/8 mx-auto mb-5">Get in Touch</div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Book AC Service or{" "}
            <span className="text-[#F5A623]">Get a Free Quote</span>
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Reach RSG Refrigeration via call, WhatsApp, or email. Same-day service available.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="white" className="w-full">
            <path d="M0 40L720 10L1440 40V40H0V40Z"/>
          </svg>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-5">
              <div>
                <h2 className="text-xl font-bold text-[#111827] mb-5">Contact Information</h2>
                <div className="space-y-4">
                  {[
                    {
                      icon: Phone,
                      label: "Phone / WhatsApp",
                      value: BUSINESS.phoneDisplay,
                      href: BUSINESS.callUrl,
                      color: "text-[#0B1F66]",
                    },
                    {
                      icon: Mail,
                      label: "Email",
                      value: BUSINESS.email,
                      href: `mailto:${BUSINESS.email}`,
                      color: "text-[#0B1F66]",
                    },
                    {
                      icon: MapPin,
                      label: "Address",
                      value: BUSINESS.address.full,
                      href: BUSINESS.googleMapsUrl,
                      color: "text-[#0B1F66]",
                    },
                    {
                      icon: Clock,
                      label: "Working Hours",
                      value: BUSINESS.workingHours,
                      href: undefined,
                      color: "text-[#22C55E]",
                    },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-4 p-5 rounded-2xl bg-[#f8faff] border border-gray-100 shadow-xs">
                      <div className="w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center shrink-0 shadow-sm">
                        <item.icon size={18} className={item.color} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs text-gray-400 mb-0.5">{item.label}</div>
                        {item.href ? (
                          <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="text-sm font-medium text-gray-800 hover:text-[#0B1F66] transition-colors break-words">
                            {item.value}
                          </a>
                        ) : (
                          <div className="text-sm font-medium text-gray-800 break-words leading-relaxed">{item.value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick CTAs */}
              <div className="space-y-3 pt-2">
                <a
                  href={BUSINESS.callUrl}
                  className="btn-primary w-full py-4 justify-center text-sm md:text-base rounded-2xl"
                  style={{ display: "flex" }}
                  id="contact-quick-call"
                >
                  <Phone size={18} />
                  Call Now
                </a>
                <a
                  href={BUSINESS.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full py-4 justify-center text-sm md:text-base rounded-2xl"
                  style={{ display: "flex" }}
                  id="contact-quick-whatsapp"
                >
                  <MessageCircle size={18} />
                  WhatsApp Us
                </a>
              </div>

              {/* Trust note */}
              <div className="rounded-2xl bg-[#f8faff] border border-gray-100 p-5">
                <h3 className="font-bold text-[#111827] text-sm mb-3">What to Expect</h3>
                {[
                  "Response within 30 minutes of inquiry",
                  "Same-day service for most requests",
                  "Free inspection and upfront pricing",
                  "No work starts without your approval",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-gray-600 mb-2">
                    <CheckCircle size={14} className="text-[#22C55E] shrink-0 mt-0.5" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="card-premium p-8">
                <h2 className="text-xl font-bold text-[#111827] mb-2">Send Us a Message</h2>
                <p className="text-gray-500 text-sm mb-6">We'll get back to you within 30 minutes.</p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
