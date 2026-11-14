import Link from "next/link";
import AutomotiveGate from "./AutomotiveGate";
import DashboardCars from "./DashboardCars";

export default function Home(){
 return <main className="kz-home-v3">
  {/* Preserve the original K&Z opening, background and scroll styling. */}
  <section className="kz-brand-opening kz-intro-v4">
   <div className="kz-muscat-bg" aria-hidden="true"/>
   <div className="kz-brand-lockup kz-brand-split">
    <div className="kz-brand-copy">
     <h1>K&amp;Z<br/><em>ELITE BUSINESS</em></h1>
     <p>ONE NAME • MANY SOLUTIONS</p>
     <div className="kz-home-hero-actions">
      <a href="#car-showroom">DISCOVER OUR SHOWROOM <span>↓</span></a>
      <Link href="/cars" className="kz-home-hero-secondary">EXPLORE CARS ↗</Link>
      <Link href="/sell-your-car" className="kz-home-hero-secondary">SELL YOUR CAR ↗</Link>
     </div>
    </div>
    <div className="kz-brand-mark"><img src="/kz-hero-logo-transparent.png" alt="K&Z ELITE BUSINESS"/></div>
   </div>
   <div className="kz-opening-location">MUSCAT • SULTANATE OF OMAN</div>
  </section>

  <section id="car-showroom" className="section kz-home-auto">
   <div className="container">
    <div className="kz-home-section-label"><span>01</span> K&amp;Z CAR SHOWROOM</div>
    <div className="section-head"><div><div className="eyebrow">BUY • SELL • DRIVE</div><h2>Find your next car with K&amp;Z.</h2><p>Explore our available vehicles in Muscat, Oman, or contact us to sell your car.</p></div><Link className="btn btn-secondary" href="/cars">VIEW ALL CARS ↗</Link></div>
    <AutomotiveGate/>
   </div>
  </section>

  <section id="available-cars" className="kz-home-inventory">
   <DashboardCars/>
   <div className="container" style={{paddingBottom:48,textAlign:"center"}}><Link href="/cars" className="btn btn-primary">BROWSE ALL AVAILABLE CARS ↗</Link></div>
  </section>

  <section className="section alt">
   <div className="container">
    <div className="section-head"><div><div className="eyebrow">OUR CAR SERVICES</div><h2>Everything you need to buy or sell.</h2></div></div>
    <div className="grid">
     <article className="card"><div className="icon">🚘</div><h3>Buy a Car</h3><p>Browse current vehicle listings, specifications, photos and asking prices.</p><Link className="card-link" href="/cars">EXPLORE CARS ↗</Link></article>
     <article className="card"><div className="icon">🔑</div><h3>Sell Your Car</h3><p>Share your vehicle details with K&amp;Z and enquire about sale support.</p><Link className="card-link" href="/sell-your-car">SELL YOUR CAR ↗</Link></article>
     <article className="card"><div className="icon">💬</div><h3>Car Finance Enquiries</h3><p>Ask about finance options for eligible vehicles. Terms and approval depend on the finance provider.</p><a className="card-link" href="https://api.whatsapp.com/send?phone=96878967229&text=Hello%20K%26Z%2C%20I%20would%20like%20to%20ask%20about%20car%20finance.">ENQUIRE ON WHATSAPP ↗</a></article>
    </div>
   </div>
  </section>

  <section className="section">
   <div className="container">
    <div className="section-head"><div><div className="eyebrow">WHY K&amp;Z</div><h2>Cars. Clarity. Direct Communication.</h2><p>We help buyers explore available vehicles and help sellers connect with interested customers in Muscat.</p></div></div>
    <div className="grid">
     <div className="card"><h3>Real Vehicle Details</h3><p>See listed specifications, mileage, location and photos for each vehicle.</p></div>
     <div className="card"><h3>Direct Enquiries</h3><p>Contact K&amp;Z directly to ask questions or arrange a vehicle viewing.</p></div>
     <div className="card"><h3>Local in Muscat</h3><p>Serving car buyers and sellers across Muscat, Sultanate of Oman.</p></div>
    </div>
   </div>
  </section>
 </main>
}