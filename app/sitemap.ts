import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.kzelitebusiness.com";
  const paths = [
    "/",
    "/cars",
    "/rent-a-car",
    "/automotive",
    "/building-maintenance",
    "/properties",
    "/advertising",
    "/contact",
  ];

  return paths.map((path) => ({
    url: new URL(path, baseUrl).toString(),
    changeFrequency: path === "/" || path === "/cars" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path === "/cars" ? 0.9 : 0.7,
  }));
}
