import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { reviewSchema, breadcrumbSchema } from "@/lib/schema";
import { REVIEWS, AGGREGATE_RATING } from "@/lib/data/reviews";
import { Star, Quote, ThumbsUp, Phone, MessageCircle } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import Link from "next/link";

export const metadata: Metadata = generatePageMetadata({
  title: "Customer Reviews — RSG Refrigeration | 4.9★ Rated AC Service Hyderabad",
  description:
    "320+ verified customer reviews for RSG Refrigeration. 4.9/5 star average rating. Read what Hyderabad customers say about our AC repair and service quality.",
  path: "/reviews",
  keywords: ["rsg refrigeration reviews", "ac service reviews hyderabad", "best ac company hyderabad"],
});

function getInitials(name: string) {
  return name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
}

const avatarColors = [
  "bg-blue-500", "bg-purple-500", "bg-emerald-500",
  "bg-amber-500", "bg-rose-500", "bg-teal-500",
  "bg-indigo-500", "bg-orange-500", "bg-pink-500",
  "bg-cyan-500", "bg-lime-500", "bg-violet-500",
];

export default function ReviewsPage() {
  const breadcrumb = breadcrumbSchema([{ name: "Reviews", url: "/reviews" }]);
  const reviewSchemaData = reviewSchema(REVIEWS);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchemaData) }} />

      {/* Hero */}
      <section className="bg-hero py-14 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern" />
        <div className="container-custom relative z-10 text-center">
          <div className="badge text-white/70 border border-white/20 bg-white/8 mx-auto mb-5">Customer Reviews</div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Customers{" "}
            <span className="text-[#F5A623]">Say About Us</span>
          </h1>
          {/* Aggregate Rating Badge */}
          <div className="inline-flex items-center gap-5 bg-white rounded-2xl px-8 py-4 shadow-xl mt-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#0B1F66]">{AGGREGATE_RATING.ratingValue}</div>
              <div className="text-xs text-gray-400">out of 5</div>
            </div>
            <div className="h-12 w-px bg-gray-200" />
            <div>
              <div className="flex gap-1 mb-1">
                {[1,2,3,4,5].map(i => <Star key={i} size={20} fill="#F5A623" className="text-[#F5A623]" />)}
              </div>
              <div className="text-sm text-gray-500">{AGGREGATE_RATING.reviewCount}+ verified reviews</div>
            </div>
            <div className="h-12 w-px bg-gray-200" />
            <div className="flex items-center gap-2">
              <ThumbsUp size={20} className="text-[#22C55E]" />
              <div>
                <div className="font-bold text-[#111827]">98%</div>
                <div className="text-xs text-gray-400">satisfied</div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="white" className="w-full">
            <path d="M0 40L720 10L1440 40V40H0V40Z"/>
          </svg>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 bg-[#f8faff]">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {REVIEWS.map((review, index) => (
              <div key={review.id} className="card-premium p-6 relative group">
                <Quote size={28} className="absolute top-4 right-5 text-[#0B1F66]/6" />
                <div className="flex items-start gap-3 mb-4">
                  <div className={`w-11 h-11 rounded-full ${avatarColors[index % avatarColors.length]} flex items-center justify-center text-white font-bold text-sm shrink-0`}>
                    {getInitials(review.name)}
                  </div>
                  <div>
                    <div className="font-semibold text-[#111827] text-sm">{review.name}</div>
                    <div className="text-xs text-gray-400">{review.location}</div>
                    <div className="flex gap-0.5 mt-1">
                      {[1,2,3,4,5].map(i => (
                        <Star key={i} size={12} fill={i <= review.rating ? "#F5A623" : "none"} stroke={i <= review.rating ? "#F5A623" : "#d1d5db"} />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">"{review.text}"</p>
                <div className="flex items-center justify-between pt-3 border-t border-gray-50">
                  <span className="inline-block text-xs px-2.5 py-1 rounded-full bg-[#0B1F66]/6 text-[#0B1F66] font-medium">
                    {review.service}
                  </span>
                  <span className="text-xs text-gray-400">
                    {new Date(review.date).toLocaleDateString("en-IN", { month: "short", year: "numeric" })}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-[#0B1F66] to-[#1a3a8f] rounded-3xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-3">Join 5,000+ Happy Customers</h2>
            <p className="text-white/60 mb-6">Experience Hyderabad's most trusted AC service.</p>
            <div className="cta-buttons-container justify-center">
              <a href={BUSINESS.callUrl} className="btn-secondary"><Phone size={17} /> Call Now</a>
              <a href={BUSINESS.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-whatsapp"><WhatsAppIcon size={17} /> WhatsApp</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
