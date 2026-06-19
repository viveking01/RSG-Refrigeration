import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, serviceSchema, faqSchema } from "@/lib/schema";
import { LOCATION_DATA, getLocationBySlug, ALL_LOCATION_SLUGS } from "@/lib/data/locations";
import { BUSINESS } from "@/lib/constants";
import Link from "next/link";
import { MapPin, Phone, MessageCircle, CheckCircle, ArrowRight, Clock, Star, ChevronRight } from "lucide-react";
import { POPULAR_SERVICES, AC_CATEGORIES } from "@/lib/data/services";
import { HOME_FAQS } from "@/lib/data/faqs";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ALL_LOCATION_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) return {};

  return generatePageMetadata({
    title: location.metaTitle || `AC Repair & Service in ${location.name} Hyderabad`,
    description: location.metaDescription || `Expert AC repair, service & installation in ${location.name}, Hyderabad. All brands, same-day service. Call RSG Refrigeration: 7815901302.`,
    path: `/service-areas/${slug}`,
    keywords: [
      `ac service ${location.name.toLowerCase()}`,
      `ac repair ${location.name.toLowerCase()}`,
      `ac installation ${location.name.toLowerCase()} hyderabad`,
      `best ac service ${location.name.toLowerCase()}`,
    ],
  });
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) notFound();

  const breadcrumbData = breadcrumbSchema([
    { name: "Service Areas", url: "/service-areas" },
    { name: location.name, url: `/service-areas/${slug}` },
  ]);

  const localServiceSchema = serviceSchema(
    `AC Services in ${location.name}`,
    `Professional AC repair, installation, and service in ${location.name}, Hyderabad by RSG Refrigeration.`,
    `/service-areas/${slug}`
  );

  const faqData = location.faqs ? faqSchema(location.faqs.map(f => ({ question: f.question, answer: f.answer }))) : null;

  const popularServices = [
    { label: `AC Repair ${location.name}`, href: `/services/split-ac/repair` },
    { label: `AC Service ${location.name}`, href: `/services/split-ac/service` },
    { label: `AC Installation ${location.name}`, href: `/services/split-ac/installation` },
    { label: `AC Gas Charging ${location.name}`, href: `/services/split-ac/gas-charging` },
    { label: `AC Deep Cleaning ${location.name}`, href: `/services/split-ac/deep-cleaning` },
    { label: `AC AMC ${location.name}`, href: `/services/split-ac/amc` },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localServiceSchema) }} />
      {faqData && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />}

      {/* Breadcrumb */}
      <div className="bg-[#f8faff] py-3 border-b border-gray-100">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-sm text-gray-500" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#0B1F66]">Home</Link>
            <ChevronRight size={14} className="text-gray-300" />
            <Link href="/service-areas" className="hover:text-[#0B1F66]">Service Areas</Link>
            <ChevronRight size={14} className="text-gray-300" />
            <span className="text-[#0B1F66] font-medium">{location.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-hero py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 border border-white/15 text-white/70 text-sm mb-6">
              <MapPin size={13} />
              Serving {location.name}, Hyderabad
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">
              AC Repair &amp; Service in{" "}
              <span className="text-[#F5A623]">{location.name}</span>
              <br />
              Hyderabad
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-2xl">
              Fast, reliable &amp; affordable AC repair, installation, gas charging and maintenance services
              in {location.name}. Certified technicians, same-day service, genuine spare parts.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <div className="flex items-center gap-2 bg-white/8 border border-white/15 rounded-xl px-4 py-2.5 text-white/80 text-sm">
                <Clock size={14} className="text-[#22C55E]" />
                Same Day Service
              </div>
              <div className="flex items-center gap-2 bg-white/8 border border-white/15 rounded-xl px-4 py-2.5 text-white/80 text-sm">
                <Star size={14} fill="#F5A623" className="text-[#F5A623]" />
                4.9★ Rated Service
              </div>
              <div className="flex items-center gap-2 bg-white/8 border border-white/15 rounded-xl px-4 py-2.5 text-white/80 text-sm">
                <CheckCircle size={14} className="text-[#F5A623]" />
                All Brands Covered
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a href={BUSINESS.callUrl} className="btn-secondary">
                <Phone size={17} /> Call Now
              </a>
              <a href={BUSINESS.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                <MessageCircle size={17} /> WhatsApp
              </a>
              <Link href="/contact" className="btn-outline">Book Service</Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="white" className="w-full">
            <path d="M0 40L720 10L1440 40V40H0V40Z"/>
          </svg>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-12">
              {/* About */}
              <div>
                <span className="accent-line" />
                <h2 className="text-2xl font-bold text-[#111827] mb-4">
                  AC Services in {location.name}
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg mb-4">{location.description}</p>
                <p className="text-gray-600 leading-relaxed">
                  RSG Refrigeration, based in Bandlaguda Jagir, provides comprehensive AC services
                  in {location.name} and surrounding areas. Our team of certified technicians is
                  equipped to handle all types of AC problems — from simple servicing to complex
                  repairs and new installations.
                </p>
              </div>

              {/* Popular Services for this area */}
              <div>
                <span className="accent-line" />
                <h2 className="text-2xl font-bold text-[#111827] mb-5">
                  Popular AC Services in {location.name}
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {popularServices.map((svc) => (
                    <Link
                      key={svc.href}
                      href={svc.href}
                      className="flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:border-[#0B1F66]/25 hover:bg-blue-50 transition-all group"
                    >
                      <span className="text-sm font-medium text-gray-700 group-hover:text-[#0B1F66]">{svc.label}</span>
                      <ArrowRight size={14} className="text-gray-300 group-hover:text-[#0B1F66] group-hover:translate-x-1 transition-all" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* All AC Categories */}
              <div>
                <span className="accent-line" />
                <h2 className="text-2xl font-bold text-[#111827] mb-5">
                  Types of AC Services in {location.name}
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {AC_CATEGORIES.map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/services/${cat.slug}`}
                      className="group p-4 rounded-2xl border border-gray-100 hover:border-[#0B1F66]/25 hover:shadow-md transition-all"
                    >
                      <div className="font-bold text-[#111827] text-sm group-hover:text-[#0B1F66] mb-1">{cat.title}</div>
                      <div className="text-gray-500 text-xs">{cat.description}</div>
                      <div className="flex items-center gap-1 text-[#0B1F66] text-xs mt-2 font-medium">
                        View Services <ArrowRight size={11} />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Landmarks */}
              {location.landmarks && location.landmarks.length > 0 && (
                <div>
                  <span className="accent-line" />
                  <h2 className="text-2xl font-bold text-[#111827] mb-4">
                    Areas We Cover in {location.name}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    We provide AC services across all localities in and around {location.name} including:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {location.landmarks.map((area) => (
                      <span key={area} className="px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#0B1F66] text-sm font-medium">
                        <MapPin size={11} className="inline mr-1" />{area}
                      </span>
                    ))}
                    {location.nearbyAreas?.map((area) => (
                      <span key={area} className="px-3 py-1.5 rounded-full bg-gray-50 border border-gray-100 text-gray-600 text-sm">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Why RSG in this area */}
              <div>
                <span className="accent-line" />
                <h2 className="text-2xl font-bold text-[#111827] mb-5">
                  Why Choose RSG Refrigeration in {location.name}?
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    `Fast response — typically reach ${location.name} within 1–2 hours`,
                    "Certified technicians trained on all AC brands",
                    "Genuine OEM-compatible spare parts",
                    "Transparent pricing — free inspection",
                    "90-day warranty on all repairs",
                    "7 days a week including holidays",
                    "All AC types: split, cassette, ductable, VRF",
                    "AMC plans for annual maintenance",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-gray-50">
                      <CheckCircle size={15} className="text-[#22C55E] shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Area-specific FAQs */}
              {location.faqs && location.faqs.length > 0 && (
                <div>
                  <span className="accent-line" />
                  <h2 className="text-2xl font-bold text-[#111827] mb-5">
                    AC Service FAQs — {location.name}
                  </h2>
                  <div className="space-y-4">
                    {location.faqs.map((faq, i) => (
                      <div key={i} className="p-5 rounded-2xl bg-[#f8faff] border border-gray-100">
                        <h3 className="font-bold text-[#111827] text-sm mb-2">{faq.question}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div>
              <div className="sticky top-28 space-y-5">
                <div className="rounded-2xl bg-gradient-to-br from-[#0B1F66] to-[#1a3a8f] p-6 text-white shadow-xl">
                  <div className="text-lg font-bold mb-1">Book AC Service</div>
                  <div className="text-[#F5A623] font-medium text-sm mb-1">in {location.name}</div>
                  <p className="text-white/60 text-sm mb-5">Same-day service. Certified technicians.</p>
                  <div className="space-y-3">
                    <a href={BUSINESS.callUrl} className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-[#F5A623] text-[#07132e] font-bold">
                      <Phone size={17} /> Call: {BUSINESS.phoneDisplay}
                    </a>
                    <a href={BUSINESS.whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-[#25D366] text-white font-semibold">
                      <MessageCircle size={17} /> WhatsApp Us
                    </a>
                    <Link href="/contact" className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-white/8 border border-white/20 text-white font-semibold">
                      Book Online
                    </Link>
                  </div>
                </div>

                {location.nearbyAreas && (
                  <div className="rounded-2xl border border-gray-100 p-5">
                    <h3 className="font-bold text-[#111827] text-sm mb-3">Nearby Areas We Also Cover</h3>
                    <div className="flex flex-wrap gap-2">
                      {location.nearbyAreas.map((area) => (
                        <Link
                          key={area}
                          href={`/service-areas/${area.toLowerCase().replace(/\s+/g, "-")}`}
                          className="text-xs px-2.5 py-1 rounded-full bg-blue-50 text-[#0B1F66] hover:bg-[#0B1F66] hover:text-white transition-colors"
                        >
                          {area}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                <div className="rounded-2xl border border-[#22C55E]/20 bg-[#22C55E]/5 p-5">
                  <div className="font-semibold text-gray-800 text-sm mb-2">⭐ Customer Rating</div>
                  <div className="flex items-center gap-2">
                    <div className="text-2xl font-bold text-[#0B1F66]">4.9</div>
                    <div>
                      <div className="flex gap-0.5">
                        {[1,2,3,4,5].map(i => <Star key={i} size={12} fill="#F5A623" className="text-[#F5A623]" />)}
                      </div>
                      <div className="text-xs text-gray-500">320+ reviews</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-dark-section">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            AC Repair in <span className="text-[#F5A623]">{location.name}</span>?
          </h2>
          <p className="text-white/60 mb-6">Call RSG Refrigeration — Same-day service, all brands covered.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={BUSINESS.callUrl} className="btn-secondary">
              <Phone size={17} /> Call: {BUSINESS.phoneDisplay}
            </a>
            <a href={BUSINESS.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <MessageCircle size={17} /> WhatsApp Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
