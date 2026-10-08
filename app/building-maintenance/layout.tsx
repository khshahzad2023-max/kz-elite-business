import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Building Maintenance Services in Muscat | K&Z ELITE BUSINESS",
  description: "Enquire about electrical, plumbing, air conditioning, painting and general building maintenance coordination in Muscat.",
  alternates: { canonical: "https://www.kzelitebusiness.com/building-maintenance" },
};

export default function SectionLayout({ children }: { children: React.ReactNode }) {
  return children;
}
