import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car Rental Enquiries in Muscat, Oman | K&Z ELITE BUSINESS",
  description: "Enquire about daily, weekly and monthly car rental options in Muscat with K&Z ELITE BUSINESS. Availability and terms confirmed on request.",
  alternates: { canonical: "https://www.kzelitebusiness.com/rent-a-car" },
};

export default function SectionLayout({ children }: { children: React.ReactNode }) {
  return children;
}
