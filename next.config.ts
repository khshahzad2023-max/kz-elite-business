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
  images: {
    // Photo URLs are read from the K&Z inventory database. Restrict optimization to
    // the approved Supabase bucket and the owner's temporary gallery CDN.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fhowcvwrjpwgeimvcndi.supabase.co",
        pathname: "/storage/v1/object/public/kz-car-photos/**",
      },
      {
        protocol: "https",
        hostname: "d2ol7oe51mr4n9.cloudfront.net",
        pathname: "/user_3Kizw610eeYgEkKSmK3k5QDEn9N/**",
      },
    ],
    formats: ["image/webp"],
    qualities: [75, 85],
    minimumCacheTTL: 86400,
  },
  async redirects() {
    return [
      ...legacyPaths.map((source) => ({ source, destination: "/cars", permanent: true })),
      { source: "/automotive/:path*", destination: "/cars", permanent: true },
    ];
  },
};

export default nextConfig;
