import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Used Cars for Sale in Muscat, Oman | K&Z ELITE BUSINESS",
  description: "Browse used cars for sale in Muscat with K&Z ELITE BUSINESS. View vehicle photos, specifications and details, and enquire about available cars.",
  alternates: { canonical: "https://www.kzelitebusiness.com/cars" },
};

export default function SectionLayout({ children }: { children: React.ReactNode }) {
  return children;
}
