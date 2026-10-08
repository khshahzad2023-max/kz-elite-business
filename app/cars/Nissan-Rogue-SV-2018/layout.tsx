import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nissan Rogue SV 2018 for Sale in Muscat | K&Z ELITE BUSINESS",
  description: "View photos and vehicle details for the Nissan Rogue SV 2018 listed with K&Z ELITE BUSINESS in Muscat, Oman. Contact us to enquire about availability and price.",
  alternates: { canonical: "https://www.kzelitebusiness.com/cars/Nissan-Rogue-SV-2018" },
};

export default function VehicleLayout({ children }: { children: React.ReactNode }) {
  return children;
}
