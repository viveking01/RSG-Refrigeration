import { Metadata } from "next";
import { BUSINESS } from "@/lib/constants";

interface GenerateMetadataOptions {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogImage?: string;
  noIndex?: boolean;
}

export function generatePageMetadata({
  title,
  description,
  path,
  keywords = [],
  ogImage = "/og-image.jpg",
  noIndex = false,
}: GenerateMetadataOptions): Metadata {
  const canonicalUrl = `${BUSINESS.siteUrl}${path}`;
  const fullTitle = title.includes(BUSINESS.name)
    ? title
    : `${title} | ${BUSINESS.name}`;

  return {
    title: fullTitle,
    description,
    keywords: [
      ...keywords,
      "AC repair Hyderabad",
      "AC service Hyderabad",
      "RSG Refrigeration",
      "air conditioning service Hyderabad",
    ].join(", "),
    authors: [{ name: BUSINESS.name, url: BUSINESS.siteUrl }],
    creator: BUSINESS.name,
    publisher: BUSINESS.name,
    robots: noIndex
      ? "noindex, nofollow"
      : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "website",
      url: canonicalUrl,
      siteName: BUSINESS.name,
      title: fullTitle,
      description,
      images: [
        {
          url: `${BUSINESS.siteUrl}${ogImage}`,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [`${BUSINESS.siteUrl}${ogImage}`],
    },
    other: {
      "geo.region": "IN-TG",
      "geo.placename": "Bandlaguda Jagir, Hyderabad",
      "geo.position": `${BUSINESS.coordinates.lat};${BUSINESS.coordinates.lng}`,
      ICBM: `${BUSINESS.coordinates.lat}, ${BUSINESS.coordinates.lng}`,
    },
  };
}

export const defaultMetadata: Metadata = {
  metadataBase: new URL(BUSINESS.siteUrl),
  title: {
    default: `${BUSINESS.name} | AC Repair & Service in Hyderabad`,
    template: `%s | ${BUSINESS.name}`,
  },
  description:
    "RSG Refrigeration — Fast, reliable & affordable AC repair, installation, gas charging and maintenance services across Hyderabad. Same-day service, verified technicians.",
  keywords:
    "AC repair Hyderabad, AC service Hyderabad, AC installation Hyderabad, split AC repair, gas charging Hyderabad, RSG Refrigeration",
  authors: [{ name: BUSINESS.name, url: BUSINESS.siteUrl }],
  creator: BUSINESS.name,
  publisher: BUSINESS.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: BUSINESS.name,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    site: "@rsgrefrigeration",
  },
  verification: {
    google: "AWy_9cmDCkGiJ2BPe2YX6QJu5m3Wd03dgShsIZv6bfA",
  },
  other: {
    "geo.region": "IN-TG",
    "geo.placename": "Hyderabad, Telangana",
  },
};
