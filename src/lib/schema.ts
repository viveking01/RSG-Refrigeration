import { BUSINESS } from "@/lib/constants";
import { AGGREGATE_RATING } from "@/lib/data/reviews";
import { FAQ } from "@/lib/data/faqs";
import { Review } from "@/lib/data/reviews";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    "@id": `${BUSINESS.siteUrl}/#business`,
    name: BUSINESS.name,
    alternateName: BUSINESS.fullName,
    description: "Professional AC repair, installation, service, and maintenance in Hyderabad. Specializing in split AC, cassette AC, ductable AC, and VRF/VRV systems.",
    url: BUSINESS.siteUrl,
    logo: `${BUSINESS.siteUrl}/logo.png`,
    image: `${BUSINESS.siteUrl}/og-image.jpg`,
    telephone: `+91${BUSINESS.phone}`,
    email: BUSINESS.email,
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, UPI, Credit Card, Debit Card",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
        opens: "08:00",
        closes: "20:00",
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.area,
      addressRegion: "Telangana",
      postalCode: BUSINESS.address.pincode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.coordinates.lat,
      longitude: BUSINESS.coordinates.lng,
    },
    areaServed: [
      "Bandlaguda Jagir","Narsingi","Kokapet","Gachibowli","Financial District",
      "Madhapur","Hitech City","Kondapur","Rajendranagar","Attapur","Hydershakote",
      "Manikonda","Shamshabad","Hyderabad","Telangana",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: AGGREGATE_RATING.ratingValue,
      reviewCount: AGGREGATE_RATING.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "AC Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Split AC Repair" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Split AC Service" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Split AC Installation" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "AC Gas Charging" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cassette AC Service" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ductable AC Service" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "VRF VRV AC Service" } },
      ],
    },
    sameAs: [
      BUSINESS.socialMedia.facebook,
      BUSINESS.socialMedia.instagram,
    ],
  };
}

export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BUSINESS.siteUrl}/#website`,
    url: BUSINESS.siteUrl,
    name: BUSINESS.name,
    description: BUSINESS.tagline,
    publisher: { "@id": `${BUSINESS.siteUrl}/#business` },
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: `${BUSINESS.siteUrl}/search?q={search_term_string}` },
      "query-input": "required name=search_term_string",
    },
  };
}

export function serviceSchema(name: string, description: string, url: string, priceRange?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${BUSINESS.siteUrl}${url}`,
    provider: {
      "@type": "HVACBusiness",
      name: BUSINESS.name,
      url: BUSINESS.siteUrl,
      telephone: `+91${BUSINESS.phone}`,
    },
    areaServed: {
      "@type": "City",
      name: "Hyderabad",
      containedInPlace: { "@type": "State", name: "Telangana" },
    },
    ...(priceRange ? { offers: { "@type": "Offer", priceRange, priceCurrency: "INR" } } : {}),
  };
}

export function faqSchema(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${BUSINESS.siteUrl}${item.url}`,
    })),
  };
}

export function reviewSchema(reviews: Review[]) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BUSINESS.name,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: AGGREGATE_RATING.ratingValue,
      reviewCount: AGGREGATE_RATING.reviewCount,
      bestRating: 5,
    },
    review: reviews.slice(0, 5).map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5 },
      reviewBody: r.text,
      datePublished: r.date,
    })),
  };
}

export function articleSchema(title: string, description: string, url: string, publishedAt: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `${BUSINESS.siteUrl}${url}`,
    datePublished: publishedAt,
    dateModified: publishedAt,
    author: {
      "@type": "Organization",
      name: BUSINESS.name,
      url: BUSINESS.siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: BUSINESS.name,
      logo: { "@type": "ImageObject", url: `${BUSINESS.siteUrl}/logo.png` },
    },
  };
}
