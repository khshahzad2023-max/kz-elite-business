import type { NextConfig } from "next";

const legacyPaths = [
  "/rent-a-car",
  "/automotive",
  "/automotive-services",
  "/building-maintenance",
  "/properties",
  "/advertising",
  "/services",
  "/about",
];

const nextConfig: NextConfig = {
  async redirects() {
    return [
      ...legacyPaths.map((source) => ({ source, destination: "/cars", permanent: true })),
      { source: "/automotive/:path*", destination: "/cars", permanent: true },
    ];
  },
};

export default nextConfig;
