import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mercedes-Benz GLC 300 2019 for Sale in Muscat | K&Z ELITE BUSINESS",
  description: "View photos and vehicle details for the Mercedes-Benz GLC 300 2019 listed with K&Z ELITE BUSINESS in Muscat, Oman. Contact us to enquire about availability and price.",
  alternates: { canonical: "https://www.kzelitebusiness.com/cars/Mercedes-Benz-GLC300-2019" },
};

export default function VehicleLayout({ children }: { children: React.ReactNode }) {
  return children;
}
