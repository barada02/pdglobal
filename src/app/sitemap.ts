import type { MetadataRoute } from "next";

const siteUrl = "https://www.pdglobal.net";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/services", "/approach", "/insights", "/contact"];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
