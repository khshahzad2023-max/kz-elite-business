import Link from "next/link";
import SoldCarCard, { type SoldCar } from "./SoldCarCard";
import { soldCars } from "./soldCars";
import { configured, supabase } from "../../lib/kz-db";

export const metadata = {
  title: "Sold Cars in Muscat | K&Z ELITE BUSINESS",
  description: "Explore vehicles successfully sold through K&Z ELITE BUSINESS in Muscat, Oman.",
  alternates: { canonical: "/sold-cars" },
};

type DbCar = {
  title: string; year: number; mileage: string; specs: string;
  location: string; description: string; images: string[];
};

async function dashboardSoldCars(): Promise<SoldCar[]> {
  if (!configured()) return [];
  try {
    const response = await supabase("/rest/v1/kz_cars?select=title,year,mileage,specs,location,description,images&status=eq.sold&order=updated_at.desc&limit=100", {}, true);
    if (!response.ok) return [];
    const data: unknown = await response.json();
    if (!Array.isArray(data)) return [];
    return (data as DbCar[]).filter(car=>Array.isArray(car.images) && car.images.length>0).map(car=>({
      name: car.title,
      year: String(car.year),
      images: car.images,
      imageAlt: car.title+" successfully sold by K&Z ELITE BUSINESS",
      details: [car.mileage, car.location].filter(Boolean),
      summary: car.description?.trim() || car.specs?.trim() || "Successfully sold by K&Z ELITE BUSINESS in Muscat.",
    }));
  } catch { return []; }
}

export default async function SoldCarsPage() {
  const dashboard = await dashboardSoldCars();
  const existingKeys = new Set(dashboard.map(car => (car.name+" "+car.year).toLowerCase().trim()));
  const historical = soldCars.filter(car=>!existingKeys.has((car.name+" "+car.year).toLowerCase().trim()));
  const all = [...dashboard, ...historical];
  return <main>
    <section className="page-hero sold-page-hero">
      <div className="container">
        <div className="eyebrow">OUR SALES RECORD</div>
        <h1>Successfully <span className="gold">Sold Cars</span></h1>
        <p className="lead">Explore vehicles sold with K&Z ELITE BUSINESS. Genuine deals, lasting relationships.</p>
        <div className="actions">
          <Link className="btn btn-primary" href="/cars">Browse Available Cars</Link>
          <Link className="btn btn-secondary" href="/sell-your-car">Sell Your Car</Link>
        </div>
      </div>
    </section>
    <section className="section" aria-label="Sold cars collection">
      <div className="container">
        <div className="eyebrow">K&Z ELITE BUSINESS</div>
        <h2 className="kz-sold-group-title">Our Sold Collection</h2>
        <p>{all.length} cars showcased</p>
        <div className="kz-sold-grid">{all.map((car,i)=><SoldCarCard key={car.name+car.year+i} car={car} />)}</div>
      </div>
    </section>
  </main>;
}
