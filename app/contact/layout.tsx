import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact K&Z ELITE BUSINESS in Muscat | K&Z ELITE BUSINESS",
  description: "Contact K&Z ELITE BUSINESS for cars, vehicle rentals, automotive services, building maintenance, property and advertising enquiries in Muscat.",
  alternates: { canonical: "https://www.kzelitebusiness.com/contact" },
};

export default function SectionLayout({ children }: { children: React.ReactNode }) {
  return children;
}
