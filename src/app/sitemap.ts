import { MetadataRoute } from "next";

// Your live site URL
const siteUrl = "https://cal-cpn.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  // List of all your static pages
  const staticRoutes = [
    "/",
    "/about",
    "/services",
    "/production",
    "/calculate",
  ];

  // Map them to the sitemap format
  const routes = staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as "monthly",
    priority: route === "/" ? 1.0 : 0.8, // Homepage highest priority
  }));

  return routes;
}
