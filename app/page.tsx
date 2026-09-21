
import Link from "next/link";
import AutomotiveGate from "./AutomotiveGate";

const core = [
  {icon:"🚘",title:"Cars for Sale",text:"Browse available vehicles with clear pricing, specifications, mileage, location and finance availability.",href:"/cars"},
  {icon:"💰",title:"Sell Your Car",text:"Send us your vehicle details and let K&Z help advertise and connect you with serious buyers.",href:"/sell-your-car"},
  {icon:"🔎",title:"Find a Car",text:"Tell us your budget, preferred model and requirements. We help source suitable vehicles.",href:"/find-a-car"},
  {icon:"🔑",title:"Rent a Car",text:"Daily, weekly and monthly rental enquiries for individuals, families and businesses.",href:"/rent-a-car"},
  {icon:"🔧",title:"Automotive Services",text:"Mechanical, electrical, denting, painting, tyres, batteries, detailing, washing and decoration.",href:"/automotive-services"},
  {icon:"📢",title:"Car Advertising",text:"Professional car advertising and promotion across multiple online platforms.",href:"/advertising"},
];

const other = [
  {icon:"🏢",title:"Building Maintenance",text:"Electrical, plumbing, AC, painting, cleaning and general maintenance.",href:"/building-maintenance"},
  {icon:"🏠",title:"Rooms & Flats",text:"Rental listings for rooms, flats and other properties.",href:"/properties"},
  {icon:"📣",title:"Advertising Services",text:"Promotion for cars, properties and businesses across online platforms.",href:"/advertising"},
];

export default function Home(){
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="eyebrow">Muscat • Sultanate of Oman</div>
            <h1>BUY • SELL • <span className="gold">ADVERTISE CARS</span></h1>
            <p className="lead">K&Z ELITE BUSINESS puts automotive first — buying, selling, sourcing, rental, garage services and vehicle advertising — with additional property and maintenance services under one trusted brand.</p>
            <div className="actions">
              <Link className="btn btn-primary" href="/cars">Available Cars</Link>
              <Link className="btn btn-secondary" href="/sell-your-car">Sell Your Car</Link>
              <a className="btn btn-secondary" href="https://api.whatsapp.com/send?phone=96878967229">WhatsApp +96878967229</a>
              <a className="btn btn-secondary" href="https://api.whatsapp.com/send?phone=96899248431">WhatsApp +968 99248431</a>
            </div>
            <div className="badge-row">
              <span className="badge">Multiple Services</span>
              <span className="badge">Business Promotion</span>
              <span className="badge">Muscat Based</span>
              <span className="badge">15+ Platform Advertising</span>
            </div>
          </div>
          <div className="hero-card">
            <img src="/kz-master-logo.png" alt="K&Z ELITE BUSINESS master logo"/>
            <div className="stats">
              <div className="stat"><strong>1 Brand</strong><span>Multiple Services</span></div>
              <div className="stat"><strong>Business Network</strong><span>Promote • Connect • Grow</span></div>
              <div className="stat"><strong>Oman Wide</strong><span>Multiple Business Solutions</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section automotive-gate-section"><div className="container"><AutomotiveGate /></div></section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div><div className="eyebrow">Automotive First</div><h2>Everything for your car journey</h2></div>
            <p>From buying your next car to selling your current one, finding rentals, garage services and advertising — K&Z keeps the automotive side at the center of the business.</p>
          </div>
          <div className="grid">
            {core.map(x => <article className="card" key={x.title}>
              <div className="icon">{x.icon}</div><h3>{x.title}</h3><p>{x.text}</p>
              <Link className="card-link" href={x.href}>Explore →</Link>
            </article>)}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container feature home-service-pair">
          <div className="feature-box home-service-box">
            <div className="eyebrow">K&Z Automotive</div>
            <h2>Garage & vehicle care services</h2>
            <div className="list">
              <div>Mechanical Work</div><div>Electrical Work</div><div>Denting & Painting</div>
              <div>Tyres & Batteries</div><div>Car Detailing & Washing</div><div>Car Decoration & Accessories</div>
            </div>
            <div className="actions"><Link className="btn btn-primary" href="/automotive-services">View Automotive Services</Link></div>
          </div>
          <div className="feature-box home-service-box">
            <div className="eyebrow">Beyond Automotive</div>
            <h2>More from K&Z ELITE BUSINESS</h2>
            <div className="list">
              <div>Building Maintenance</div><div>Rooms & Flats for Rent</div><div>Property Advertising</div><div>Business Advertising</div>
            </div>
            <div className="actions"><Link className="btn btn-secondary" href="/services">View Other Services</Link></div>
          </div>
        </div>
      </section>

      <section className="section kz-trust-section">
        <div className="container">
          <div className="kz-trust-head">
            <div className="eyebrow">The K&amp;Z Ecosystem</div>
            <h2>One trusted name.<br/><span>Many solutions.</span></h2>
            <p>Automotive, property, maintenance and promotion — connected through one Muscat-based business network.</p>
          </div>
          <div className="kz-trust-orbit">
            <div className="kz-trust-lines" aria-hidden="true"><i/><i/><i/><i/></div>
            <div className="kz-trust-core">
              <img src="/kz-master-logo.png" alt="K&Z ELITE BUSINESS"/>
              <strong>K&amp;Z ELITE BUSINESS</strong>
              <span>ONE NAME • MANY SOLUTIONS</span>
            </div>
            <Link href="/automotive" className="kz-trust-float kz-trust-auto"><small>01</small><b>Automotive</b><span>Buy • Sell • Source • Finance<br/>Garage &amp; Car Care</span></Link>
            <Link href="/building-maintenance" className="kz-trust-float kz-trust-maint"><small>02</small><b>Building Maintenance</b><span>Electrical • Plumbing • AC<br/>Painting &amp; General Care</span></Link>
            <Link href="/properties" className="kz-trust-float kz-trust-property"><small>03</small><b>Property</b><span>Rooms • Flats<br/>Rental Listings</span></Link>
            <Link href="/advertising" className="kz-trust-float kz-trust-promo"><small>04</small><b>Business Promotion</b><span>Cars • Properties • Businesses<br/>Online Advertising</span></Link>
          </div>
          <div className="kz-trust-strip"><span>DIRECT CONTACT</span><i/> <span>LOCAL SUPPORT</span><i/> <span>MULTIPLE SERVICES</span><i/> <span>ONE BRAND</span></div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head"><div><div className="eyebrow">Other Divisions</div><h2>One name. Many solutions.</h2></div></div>
          <div className="grid">
            {other.map(x => <article className="card" key={x.title}><div className="icon">{x.icon}</div><h3>{x.title}</h3><p>{x.text}</p><Link className="card-link" href={x.href}>Explore →</Link></article>)}
          </div>
        </div>
      </section>
    </>
  )
}
