import type { MetadataRoute } from "next";
import { guides } from "@/lib/guides";
import { legalNav, site, trips } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/guides",
    ...guides.map((g) => `/guides/${g.slug}`),
    ...trips.map((t) => `/trips/${t.slug}`),
    "/about",
    ...legalNav.map((n) => n.href),
  ];
  return paths.map((p) => ({ url: `${site.url}${p}` }));
}
