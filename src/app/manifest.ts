import { MetadataRoute } from "next";
import { BUSINESS } from "@/lib/constants";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: BUSINESS.name,
    short_name: "RSG AC",
    description: BUSINESS.tagline,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0B1F66",
    orientation: "portrait",
    icons: [
      {
        src: "/icons/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icons/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
    categories: ["business", "utilities"],
    lang: "en-IN",
    dir: "ltr",
    prefer_related_applications: false,
  };
}
