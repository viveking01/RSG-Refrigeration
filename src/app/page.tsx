import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";
import { HOME_FAQS } from "@/lib/data/faqs";
import { REVIEWS } from "@/lib/data/reviews";
import { reviewSchema } from "@/lib/schema";
import HeroSection from "@/components/sections/HeroSection";
import WhyChooseSection from "@/components/sections/WhyChooseSection";
import ServicesSection from "@/components/sections/ServicesSection";
import PopularServicesSection from "@/components/sections/PopularServicesSection";
import BrandsSection from "@/components/sections/BrandsSection";
import ServiceAreasSection from "@/components/sections/ServiceAreasSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import FAQSection from "@/components/sections/FAQSection";
import EmergencyCTASection from "@/components/sections/EmergencyCTASection";
import StatsSection from "@/components/sections/StatsSection";

export const metadata: Metadata = generatePageMetadata({
  title: "AC Repair & Service in Hyderabad | RSG Refrigeration",
  description:
    "RSG Refrigeration — Fast, reliable & affordable AC repair, installation, gas charging and maintenance services across Hyderabad. Same-day service, verified technicians. Call: 7815901302.",
  path: "/",
  keywords: [
    "ac repair hyderabad",
    "ac service hyderabad",
    "best ac service hyderabad",
    "ac installation hyderabad",
    "ac gas charging hyderabad",
    "split ac repair hyderabad",
    "ac repair near me hyderabad",
  ],
});

export default function HomePage() {
  const faqSchemaData = faqSchema(HOME_FAQS);
  const breadcrumbData = breadcrumbSchema([{ name: "Home", url: "/" }]);
  const reviewSchemaData = reviewSchema(REVIEWS);

  return (
    <>
      {/* Additional page-level schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchemaData) }}
      />

      <HeroSection />
      <StatsSection />
      <WhyChooseSection />
      <ServicesSection />
      <PopularServicesSection />
      <BrandsSection />
      <ServiceAreasSection />
      <ReviewsSection />
      <FAQSection />
      <EmergencyCTASection />
    </>
  );
}
