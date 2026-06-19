import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { BLOG_POSTS } from "@/lib/data/blog-posts";
import { BUSINESS } from "@/lib/constants";
import Link from "next/link";
import { ArrowRight, Clock, Tag } from "lucide-react";

export const metadata: Metadata = generatePageMetadata({
  title: "AC Maintenance & Repair Blog — Expert Tips | RSG Refrigeration",
  description:
    "Expert AC maintenance tips, repair guides, and buying advice from RSG Refrigeration's certified technicians. Stay informed about AC care in Hyderabad.",
  path: "/blog",
  keywords: ["ac repair tips hyderabad", "ac maintenance guide", "ac service blog hyderabad"],
});

const categoryColors: Record<string, string> = {
  "Maintenance": "bg-blue-50 text-blue-700 border-blue-100",
  "Troubleshooting": "bg-red-50 text-red-700 border-red-100",
  "Buying Guide": "bg-purple-50 text-purple-700 border-purple-100",
  "AMC": "bg-emerald-50 text-emerald-700 border-emerald-100",
  "Energy Saving": "bg-amber-50 text-amber-700 border-amber-100",
};

export default function BlogPage() {
  const breadcrumb = breadcrumbSchema([{ name: "Blog", url: "/blog" }]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <section className="bg-hero py-14 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern" />
        <div className="container-custom relative z-10 text-center">
          <div className="badge text-white/70 border border-white/20 bg-white/8 mx-auto mb-5">AC Knowledge Base</div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            AC Maintenance &amp;{" "}
            <span className="text-[#F5A623]">Repair Guides</span>
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Expert tips from RSG Refrigeration's certified technicians to help you get the best from your AC.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="white" className="w-full">
            <path d="M0 40L720 10L1440 40V40H0V40Z"/>
          </svg>
        </div>
      </section>

      <section className="py-16 bg-[#f8faff]">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOG_POSTS.map((post, index) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group card-premium overflow-hidden"
              >
                {/* Color header */}
                <div className="h-2 bg-gradient-to-r from-[#0B1F66] to-[#1a3a8f]" />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${categoryColors[post.category] || "bg-gray-50 text-gray-600 border-gray-100"}`}>
                      <Tag size={10} className="inline mr-1" />
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <Clock size={11} />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="font-bold text-[#111827] text-base leading-snug mb-3 group-hover:text-[#0B1F66] transition-colors line-clamp-3">
                    {post.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                    <span className="text-xs text-gray-400">
                      {new Date(post.publishedAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                    </span>
                    <div className="flex items-center gap-1 text-[#0B1F66] text-sm font-medium group-hover:gap-2 transition-all">
                      Read More <ArrowRight size={13} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
