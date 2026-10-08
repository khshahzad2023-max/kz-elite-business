import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Honda Civic 2007 for Sale in Muscat | K&Z ELITE BUSINESS",
  description: "View photos and vehicle details for the Honda Civic 2007 listed with K&Z ELITE BUSINESS in Muscat, Oman. Contact us to enquire about availability and price.",
  alternates: { canonical: "https://www.kzelitebusiness.com/cars/Honda-Civic-2007" },
};

export default function VehicleLayout({ children }: { children: React.ReactNode }) {
  return children;
}
