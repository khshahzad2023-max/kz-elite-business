import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car, Property and Business Advertising in Muscat | K&Z ELITE BUSINESS",
  description: "K&Z ELITE BUSINESS offers promotion and advertising support for cars, properties and businesses in Muscat, Oman.",
  alternates: { canonical: "https://www.kzelitebusiness.com/advertising" },
};

export default function SectionLayout({ children }: { children: React.ReactNode }) {
  return children;
}
