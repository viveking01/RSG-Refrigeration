import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { POPULAR_SERVICES } from "@/lib/data/services";

export default function PopularServicesSection() {
  return (
    <section className="py-14 bg-white border-y border-gray-100">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#111827] mb-2">
            Popular AC Services in Hyderabad
          </h2>
          <p className="text-gray-500 text-sm md:text-base">
            Most searched AC services — book instantly
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
          {POPULAR_SERVICES.map((svc) => (
            <Link
              key={svc.slug}
              href={svc.slug}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#0B1F66]/15 text-sm font-medium text-[#111827] hover:bg-[#0B1F66] hover:text-white hover:border-[#0B1F66] transition-all duration-200 shadow-sm whitespace-nowrap"
            >
              {svc.title}
              <ArrowRight size={13} className="opacity-60" />
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border-2 border-[#0B1F66] text-[#0B1F66] hover:bg-[#0B1F66] hover:text-white transition-all text-sm font-bold shadow-sm"
          >
            View All Services <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
