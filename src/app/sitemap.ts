import { MetadataRoute } from "next";
import { programs } from "./lib/programs";

const domain = process.env.NEXT_PUBLIC_DOMAIN || "https://www.maad97.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    {
      url: domain,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1.0,
    },
    {
      url: `${domain}/privacy`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.3,
    },
    {
      url: `${domain}/play`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
    {
      url: `${domain}/promo`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
  ];

  const bioPages = programs.map((program) => ({
    url: `${domain}/bio/${program.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...bioPages];
}
