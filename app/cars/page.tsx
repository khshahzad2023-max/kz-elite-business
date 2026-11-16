import DashboardCars from "../DashboardCars";

export const metadata = {
  title: "Cars for Sale in Muscat | K&Z ELITE BUSINESS",
  description: "Browse available used cars in Muscat, Oman with K&Z ELITE BUSINESS. View photos, prices, mileage and vehicle details.",
  alternates: { canonical: "/cars" },
};

export default function CarsPage() {
  return <main>
    <section className="page-hero"><div className="container">
      <div className="eyebrow">K&Z ELITE BUSINESS • MUSCAT</div>
      <h1>Cars for Sale</h1>
      <p className="lead">Browse our available vehicles. Choose a vehicle category, then filter by model, year or price to find your next car.</p>
    </div></section>
    <DashboardCars />
  </main>;
}
