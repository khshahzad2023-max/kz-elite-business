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
    "/cars/Hyundai-Veloster-2016",
    "/cars/haval-drago-2024",
    "/cars/Gac-GS3-2021",
    "/cars/Ford-Explorer-2016",
    "/cars/Honda-Civic-2007",
    "/cars/Hyundai-Santa-Fe-2015",
    "/cars/Mercedes-Benz-GLC300-2019",
    "/cars/Mitsubishi-Eclipse-Cross-ES-2018",
    "/cars/Nissan-Rogue-SV-2018",
    "/cars/Nissan-Versa-SV-2020",
    "/cars/Toyota-RAV4-2019",
  ];

  return paths.map((path) => ({
    url: new URL(path, baseUrl).toString(),
    changeFrequency: path === "/" || path === "/cars" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path === "/cars" ? 0.9 : 0.7,
  }));
}
