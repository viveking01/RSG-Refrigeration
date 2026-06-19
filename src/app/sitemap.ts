import { MetadataRoute } from "next";
import { BUSINESS } from "@/lib/constants";
import { SPLIT_AC_SERVICES, CASSETTE_AC_SERVICES, DUCTABLE_AC_SERVICES, VRF_AC_SERVICES } from "@/lib/data/services";
import { ALL_LOCATION_SLUGS } from "@/lib/data/locations";
import { BLOG_POSTS } from "@/lib/data/blog-posts";

const baseUrl = BUSINESS.siteUrl;
const now = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/services`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/services/split-ac`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/services/cassette-ac`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${baseUrl}/services/ductable-ac`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${baseUrl}/services/vrf-vrv-ac`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${baseUrl}/service-areas`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/reviews`, lastModified: now, changeFrequency: "weekly", priority: 0.75 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.75 },
    { url: `${baseUrl}/faqs`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];

  const splitAcPages: MetadataRoute.Sitemap = SPLIT_AC_SERVICES.map((svc) => ({
    url: `${baseUrl}/services/split-ac/${svc.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const cassetteAcPages: MetadataRoute.Sitemap = CASSETTE_AC_SERVICES.map((svc) => ({
    url: `${baseUrl}/services/cassette-ac/${svc.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  const ductableAcPages: MetadataRoute.Sitemap = DUCTABLE_AC_SERVICES.map((svc) => ({
    url: `${baseUrl}/services/ductable-ac/${svc.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  const vrfAcPages: MetadataRoute.Sitemap = VRF_AC_SERVICES.map((svc) => ({
    url: `${baseUrl}/services/vrf-vrv-ac/${svc.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  const locationPages: MetadataRoute.Sitemap = ALL_LOCATION_SLUGS.map((slug) => ({
    url: `${baseUrl}/service-areas/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const blogPages: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "yearly",
    priority: 0.65,
  }));

  return [
    ...staticPages,
    ...splitAcPages,
    ...cassetteAcPages,
    ...ductableAcPages,
    ...vrfAcPages,
    ...locationPages,
    ...blogPages,
  ];
}
