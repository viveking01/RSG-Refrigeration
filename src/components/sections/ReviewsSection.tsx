import Link from "next/link";
import { Star, Quote, ArrowRight, ThumbsUp } from "lucide-react";
import { REVIEWS, AGGREGATE_RATING } from "@/lib/data/reviews";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={13}
          fill={i <= rating ? "#F5A623" : "none"}
          stroke={i <= rating ? "#F5A623" : "#d1d5db"}
        />
      ))}
    </div>
  );
}

function getInitials(name: string) {
  return name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
}

const avatarColors = [
  "bg-blue-500", "bg-purple-500", "bg-emerald-500",
  "bg-amber-500", "bg-rose-500", "bg-teal-500",
  "bg-indigo-500", "bg-orange-500", "bg-pink-500",
  "bg-cyan-500", "bg-lime-500", "bg-violet-500",
];

export default function ReviewsSection() {
  return (
    <section className="section-padding bg-section-alt">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="badge badge-secondary mx-auto mb-4">
            Customer Reviews
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
            What Our{" "}
            <span className="gradient-text">Customers Say</span>
          </h2>

          <div className="inline-flex items-center gap-4 bg-white rounded-2xl px-6 py-4 shadow-lg border border-gray-100 mt-2">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#0B1F66]">{AGGREGATE_RATING.ratingValue}</div>
              <div className="text-xs text-gray-400 mt-0.5">out of 5</div>
            </div>
            <div className="h-12 w-px bg-gray-200" />
            <div>
              <div className="flex gap-0.5 mb-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={18} fill="#F5A623" className="text-[#F5A623]" />
                ))}
              </div>
              <div className="text-sm text-gray-500">{AGGREGATE_RATING.reviewCount}+ verified reviews</div>
            </div>
            <div className="h-12 w-px bg-gray-200" />
            <div className="flex items-center gap-2 text-[#22C55E]">
              <ThumbsUp size={18} />
              <span className="text-sm font-semibold text-gray-700">98% satisfaction</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {REVIEWS.slice(0, 9).map((review, index) => (
            <div
              key={review.id}
              className="card-premium p-6 relative flex flex-col h-full"
            >
              <Quote size={28} className="absolute top-4 right-5 text-[#0B1F66]/6" />

              <div className="flex items-start gap-3 mb-4">
                <div className={`w-11 h-11 rounded-full ${avatarColors[index % avatarColors.length]} flex items-center justify-center text-white font-bold text-sm shrink-0`}>
                  {getInitials(review.name)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-[#111827] text-sm truncate">{review.name}</div>
                  <div className="text-xs text-gray-400 truncate">{review.location}</div>
                  <StarRating rating={review.rating} />
                </div>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-4 flex-1">
                &ldquo;{review.text}&rdquo;
              </p>

              <div className="flex items-center justify-between pt-3 border-t border-gray-50 mt-auto">
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

        <div className="text-center">
          <Link href="/reviews" className="inline-flex items-center gap-2 btn-outline-primary">
            View All 320+ Reviews <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
