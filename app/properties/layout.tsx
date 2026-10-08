import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rooms, Flats and Property Rentals in Muscat | K&Z ELITE BUSINESS",
  description: "Explore rooms, flats and rental property enquiries and listings in Muscat with K&Z ELITE BUSINESS.",
  alternates: { canonical: "https://www.kzelitebusiness.com/properties" },
};

export default function SectionLayout({ children }: { children: React.ReactNode }) {
  return children;
}
