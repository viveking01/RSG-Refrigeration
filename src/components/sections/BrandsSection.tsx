import { BRANDS } from "@/lib/constants";

export default function BrandsSection() {
  const duplicatedBrands = [...BRANDS, ...BRANDS, ...BRANDS];

  return (
    <section className="py-16 bg-[#f8faff] overflow-hidden">
      <div className="container-custom mb-10">
        <div className="text-center">
          <div className="badge badge-primary mx-auto mb-3">Multi-Brand Support</div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#111827] mb-3">
            AC Brands We{" "}
            <span className="gradient-text">Repair &amp; Service</span>
          </h2>
          <p className="text-gray-500">
            Expert technicians trained on all major AC brands available in India
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#f8faff] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#f8faff] to-transparent z-10 pointer-events-none" />

        <div className="marquee-track">
          {duplicatedBrands.map((brand, i) => (
            <div
              key={`${brand}-${i}`}
              className="flex items-center justify-center px-8 py-4 mx-3 rounded-2xl bg-white border border-gray-100 shadow-sm min-w-[140px] shrink-0"
            >
              <span className="font-bold text-[#0B1F66] text-sm tracking-wide whitespace-nowrap">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="container-custom mt-10">
        <div className="flex flex-wrap justify-center gap-3">
          {BRANDS.map((brand) => (
            <div
              key={brand}
              className="px-6 py-3 bg-white border border-[#0B1F66]/10 rounded-full text-[#0B1F66] font-semibold text-sm"
            >
              {brand}
            </div>
          ))}
        </div>
        <p className="text-center text-gray-400 text-sm mt-6">
          Don&apos;t see your brand? We service it too!{" "}
          <a href="tel:7815901302" className="text-[#0B1F66] font-medium hover:underline">
            Call us to confirm →
          </a>
        </p>
      </div>
    </section>
  );
}
