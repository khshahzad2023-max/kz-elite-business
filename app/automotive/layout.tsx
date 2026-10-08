import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Automotive Services in Muscat, Oman | K&Z ELITE BUSINESS",
  description: "Explore car buying, selling, garage and vehicle care service coordination in Muscat through K&Z ELITE BUSINESS.",
  alternates: { canonical: "https://www.kzelitebusiness.com/automotive" },
};

export default function SectionLayout({ children }: { children: React.ReactNode }) {
  return children;
}
