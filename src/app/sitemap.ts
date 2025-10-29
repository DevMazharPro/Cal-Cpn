import { MetadataRoute } from "next";

// Your live site URL
const siteUrl = "https://cal-cpn.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "/",
    "/about",
    "/services",
    "/production",
    "/calculate",
  ];

  // THE FIX: Explicitly type 'routes' as 'MetadataRoute.Sitemap'
  const routes: MetadataRoute.Sitemap = staticRoutes.map((route) => {
    return {
      url: `${siteUrl}${route}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly", // This is now correctly type-checked
      priority: route === "/" ? 1.0 : 0.8,
    };
  });

  return routes;
}
