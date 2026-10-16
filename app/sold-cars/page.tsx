import Link from "next/link";

export const metadata = {
  title: "Sold Cars | K&Z ELITE BUSINESS",
  description: "Explore the K&Z ELITE BUSINESS sold vehicles collection in Muscat, Oman.",
};

export default function SoldCarsPage() {
  return (
    <>
      <section className="page-hero sold-page-hero">
        <div className="container">
          <div className="eyebrow">Our Sales Record</div>
          <h1>Successfully <span className="gold">Sold Cars</span></h1>
          <p className="lead">Our sold vehicles showcase is being updated. Check back soon for our latest completed deals.</p>
          <div className="actions">
            <Link className="btn btn-primary" href="/cars">Browse Available Cars</Link>
            <Link className="btn btn-secondary" href="/sell-your-car">Sell Your Car</Link>
          </div>
        </div>
      </section>
      <section className="section" aria-label="Sold cars collection">
        <div className="container" style={{textAlign:"center",paddingBlock:"24px"}}>
          <p className="lead" style={{margin:"0 auto"}}>New sold vehicle showcases coming soon.</p>
        </div>
      </section>
    </>
  );
}
