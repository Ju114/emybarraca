import type { MetadataRoute } from "next";
import { books, SITE_URL, stories } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/sobre-emy",
    "/novelas",
    "/relatos",
    "/contacto",
    "/aviso-legal",
    "/politica-de-privacidad",
    "/politica-de-cookies",
  ].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const novelRoutes = books.map((book) => ({
    url: `${SITE_URL}/novelas/${book.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const storyRoutes = stories
    .filter((story) => story.mode === "text")
    .map((story) => ({
      url: `${SITE_URL}/relatos/${story.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));

  return [...staticRoutes, ...novelRoutes, ...storyRoutes];
}
