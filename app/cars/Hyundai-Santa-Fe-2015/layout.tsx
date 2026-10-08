import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hyundai Santa Fe 2015 for Sale in Muscat | K&Z ELITE BUSINESS",
  description: "View photos and vehicle details for the Hyundai Santa Fe 2015 listed with K&Z ELITE BUSINESS in Muscat, Oman. Contact us to enquire about availability and price.",
  alternates: { canonical: "https://www.kzelitebusiness.com/cars/Hyundai-Santa-Fe-2015" },
};

export default function VehicleLayout({ children }: { children: React.ReactNode }) {
  return children;
}
