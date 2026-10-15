import type { MetadataRoute } from "next";
import { site } from "@/data/profile";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: "2026-10-15",
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
