"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, BookOpen, Clock, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { BLOG_POSTS } from "@/lib/data/blog-posts";

export default function BlogCarouselSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 5);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.85; // Scroll 85% of viewport width
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
      setTimeout(checkScroll, 400);
    }
  };

  return (
    <section className="py-20 bg-gray-50 overflow-hidden relative">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#0B1F66]/3 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#F5A623]/3 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1F66]/5 border border-[#0B1F66]/10 text-[#0B1F66] text-xs font-semibold mb-3">
              <BookOpen size={12} />
              AC Resource Hub
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 leading-tight">
              Expert AC Maintenance Tips &amp; Guides
            </h2>
            <p className="text-gray-600 mt-2 max-w-xl text-sm md:text-base">
              Learn how to reduce your electricity bills, troubleshoot cooling problems, and maintain your AC systems for longevity.
            </p>
          </div>

          {/* Navigation buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all ${
                canScrollLeft
                  ? "bg-white border-gray-200 text-gray-800 hover:border-[#0B1F66] hover:text-[#0B1F66] shadow-sm active:scale-90"
                  : "bg-gray-100 border-gray-100 text-gray-300 cursor-not-allowed"
              }`}
              aria-label="Scroll left"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all ${
                canScrollRight
                  ? "bg-white border-gray-200 text-gray-800 hover:border-[#0B1F66] hover:text-[#0B1F66] shadow-sm active:scale-90"
                  : "bg-gray-100 border-gray-100 text-gray-300 cursor-not-allowed"
              }`}
              aria-label="Scroll right"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Carousel Content */}
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-8 -mx-4 px-4 md:mx-0 md:px-0"
          style={{ scrollbarWidth: "none" }}
        >
          {BLOG_POSTS.map((post) => (
            <motion.div
              key={post.slug}
              className="min-w-[280px] sm:min-w-[340px] max-w-[380px] flex-shrink-0 snap-start bg-white rounded-3xl border border-gray-100 shadow-lg shadow-black/3 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              whileHover={{ y: -4 }}
            >
              {/* Card top */}
              <div className="p-6 md:p-8">
                {/* Meta row */}
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-[#0B1F66]/5 text-[#0B1F66] text-xs font-semibold">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                    <Clock size={12} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-3 hover:text-[#0B1F66] transition-colors leading-snug">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>

                {/* Excerpt */}
                <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              {/* Card bottom */}
              <div className="px-6 md:px-8 py-5 border-t border-gray-50 flex items-center justify-between bg-gray-50/50">
                <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                  <Calendar size={12} />
                  <span>{new Date(post.publishedAt).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}</span>
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-sm font-bold text-[#0B1F66] hover:text-[#F5A623] inline-flex items-center gap-1 group transition-colors"
                >
                  Read Article
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA to view all blog posts */}
        <div className="text-center mt-6">
          <Link href="/blog" className="text-sm font-semibold text-gray-500 hover:text-[#0B1F66] transition-colors">
            Want more tips? <span className="text-[#0B1F66] underline font-bold">View all blog articles</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
