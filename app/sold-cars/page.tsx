import Link from "next/link";
import SoldCarCard from "./SoldCarCard";
import { soldCars } from "./soldCars";

export const metadata = {
  title: "Sold Cars | K&Z ELITE BUSINESS",
  description: "View vehicles successfully sold by K&Z ELITE BUSINESS in Muscat, Oman.",
};

export default function SoldCarsPage() {
  return (
    <>
      <section className="page-hero sold-page-hero">
        <div className="container">
          <div className="eyebrow">Our Sales Record</div>
          <h1>Successfully <span className="gold">Sold Cars</span></h1>
          <p className="lead">Real vehicles successfully advertised and sold with K&amp;Z ELITE BUSINESS.</p>
          <div className="actions">
            <Link className="btn btn-primary" href="/cars">Browse Available Cars</Link>
            <Link className="btn btn-secondary" href="/sell-your-car">Sell Your Car</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sold-grid">
            {soldCars.map((car) => <SoldCarCard key={`${car.name}-${car.year}`} car={car} showGallery />)}
          </div>
        </div>
      </section>
    </>
  );
}
