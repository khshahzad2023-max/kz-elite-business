import Link from "next/link";
import AutomotiveGate from "./AutomotiveGate";

const services=[
 {n:"01",title:"Automotive",text:"Cars • Garage • Car Care",href:"/automotive"},
 {n:"02",title:"Building Maintenance",text:"Electrical • Plumbing • AC • General Care",href:"/building-maintenance"},
 {n:"03",title:"Property",text:"Rooms • Flats • Property Listings",href:"/properties"},
 {n:"04",title:"Business Promotion",text:"Cars • Properties • Business Advertising",href:"/advertising"},
];

export default function Home(){
 return <main className="kz-home-v3">
  <section className="kz-brand-opening kz-intro-v4">
   <div className="kz-muscat-bg" aria-hidden="true"/>
   <nav className="kz-intro-menu" aria-label="K&Z departments">
    <Link href="/cars">BUY &amp; SELL CARS</Link>
    <Link href="/rent-a-car">RENT A CAR</Link>
    <Link href="/automotive">AUTOMOTIVE SERVICES</Link>
    <Link href="/building-maintenance">BUILDING MAINTENANCE</Link>
    <Link href="/properties">PROPERTY SERVICES</Link>
    <Link href="/advertising">BUSINESS ADVERTISING</Link>
    <Link href="/contact">CONTACT</Link>
   </nav>
   <div className="kz-brand-lockup">
    <img src="/kz-master-logo.png" alt="K&Z ELITE BUSINESS"/>
    <h1>K&amp;Z ELITE BUSINESS</h1>
    <p>ONE NAME • MANY SOLUTIONS</p>
    <div className="kz-who"><span>WHO WE ARE</span><strong>Your local connection for cars, automotive care, rentals, building maintenance, property services and business advertising in Oman.</strong></div>
    <a href="#automotive-entry">EXPLORE <span>↓</span></a>
   </div>
   <div className="kz-opening-location">MUSCAT • SULTANATE OF OMAN</div>
  </section>

  <section id="automotive-entry" className="section kz-home-auto">
   <div className="container">
    <div className="kz-home-section-label"><span>01</span> AUTOMOTIVE</div>
    <AutomotiveGate/>
   </div>
  </section>

  <section className="kz-services-ecosystem">
   <div className="container">
    <header className="kz-eco-head"><small>OUR SERVICES</small><h2>Connected by one name.</h2><p>Different departments. One K&amp;Z team.</p></header>
    <div className="kz-eco-stage">
     <div className="kz-eco-lines" aria-hidden="true"><i/><i/><i/><i/></div>
     <div className="kz-eco-core"><img src="/kz-master-logo.png" alt=""/><b>K&amp;Z</b><span>ONE NAME • MANY SOLUTIONS</span></div>
     {services.map((s,i)=><Link href={s.href} className={"kz-eco-service kz-eco-s"+(i+1)} key={s.title}><small>{s.n}</small><h3>{s.title}</h3><p>{s.text}</p><b>EXPLORE ↗</b></Link>)}
    </div>
   </div>
  </section>

  <section className="kz-trust-v3">
   <div className="container">
    <div className="kz-trust-v3-title"><small>WHY K&amp;Z</small><h2>Built around direct service.</h2></div>
    <div className="kz-trust-v3-grid">
     <div><span>01</span><b>LOCAL</b><p>Based in Muscat, Sultanate of Oman.</p></div>
     <div><span>02</span><b>DIRECT</b><p>Speak directly with K&amp;Z for enquiries and coordination.</p></div>
     <div><span>03</span><b>CONNECTED</b><p>Multiple departments under one business identity.</p></div>
     <div><span>04</span><b>ACCESSIBLE</b><p>Call or WhatsApp through two direct contact numbers.</p></div>
    </div>
   </div>
  </section>

  <section className="kz-home-end">
   <div className="container"><img src="/kz-master-logo.png" alt="K&Z"/><div><h2>K&amp;Z ELITE BUSINESS</h2><p>ONE NAME • MANY SOLUTIONS</p></div><Link href="/contact">CONNECT WITH K&amp;Z →</Link></div>
  </section>
 </main>
}