import Link from "next/link";
import HomeInventory from "./HomeInventory";

const divisions=[
 {num:"01",name:"Automotive",desc:"Buying, selling, rental enquiries and vehicle care.",href:"/automotive",detail:"CARS & VEHICLE SERVICES"},
 {num:"02",name:"Building Maintenance",desc:"Practical maintenance support for residential and commercial spaces.",href:"/building-maintenance",detail:"PROPERTY CARE"},
 {num:"03",name:"Property Services",desc:"Room, flat and property-related enquiries in Muscat.",href:"/properties",detail:"SPACES & OPPORTUNITIES"},
 {num:"04",name:"Business Promotion",desc:"Advertising, introductions and business lead coordination.",href:"/advertising",detail:"GROWTH & CONNECTIONS"}
];
export default function Home(){
 return <main className="kzc">
  <section className="kzc-hero" aria-labelledby="kzc-title">
   <div className="kzc-hero-photo" aria-hidden="true"/>
   <div className="kzc-hero-wash" aria-hidden="true"/>
   <div className="kzc-wrap kzc-hero-inner">
    <div className="kzc-hero-copy">
     <div className="kzc-overline"><span className="kzc-dot"/> MUSCAT, SULTANATE OF OMAN</div>
     <h1 id="kzc-title">Business, built<br/>around <em>you.</em></h1>
     <p>Automotive, property, maintenance and business solutions. Different expertise, connected through one name.</p>
     <div className="kzc-hero-actions"><Link className="kzc-btn kzc-btn-dark" href="#divisions">Explore our services <span aria-hidden="true">↗</span></Link><Link className="kzc-btn kzc-btn-outline" href="/cars">Browse vehicles <span aria-hidden="true">→</span></Link></div>
    </div>
    <div className="kzc-hero-side"><img src="/kz-master-logo.png" alt="K&Z ELITE BUSINESS original brand logo"/><span>ONE NAME. MANY SOLUTIONS.</span></div>
   </div>
   <div className="kzc-hero-bottom kzc-wrap"><span>INDEPENDENT BUSINESS NETWORK</span><span>01 / 04 — EXPLORE BELOW ↓</span></div>
  </section>

  <section className="kzc-intro kzc-section" id="about">
   <div className="kzc-wrap kzc-intro-grid">
    <div><div className="kzc-kicker">WHO WE ARE <span>— 001</span></div><h2>One name.<br/>More possibilities.</h2></div>
    <div className="kzc-intro-copy"><p>K&amp;Z ELITE BUSINESS brings together automotive, building maintenance, property and business promotion services in Muscat.</p><p>Built on a shared vision, we focus on straightforward communication, practical coordination and helping customers find the right solution — without unnecessary complexity.</p><Link className="kzc-text-link" href="/contact">Get to know K&amp;Z <span>↗</span></Link></div>
   </div>
  </section>

  <section className="kzc-divisions kzc-section" id="divisions">
   <div className="kzc-wrap">
    <div className="kzc-section-head"><div><div className="kzc-kicker">OUR BUSINESS <span>— 002</span></div><h2>What we do.</h2></div><p>Four areas of service. One clear point of contact.</p></div>
    <div className="kzc-divisions-grid">
    {divisions.map(s=><Link className="kzc-division" href={s.href} key={s.num}><div className="kzc-division-top"><span>{s.num} / 04</span><span className="kzc-arrow">↗</span></div><div><small>{s.detail}</small><h3>{s.name}</h3><p>{s.desc}</p></div><div className="kzc-division-bottom">DISCOVER DIVISION <span>→</span></div></Link>)}
    </div>
   </div>
  </section>

  <section className="kzc-auto kzc-section" id="automotive">
   <div className="kzc-wrap kzc-auto-grid">
    <div className="kzc-auto-copy"><div className="kzc-kicker">K&Z AUTOMOTIVE <span>— 003</span></div><h2>Driven by<br/><em>the right choice.</em></h2><p>Explore our vehicle network for buying, selling, rentals and automotive services. Every enquiry starts with a real conversation.</p><div className="kzc-auto-actions"><Link className="kzc-btn kzc-btn-light" href="/cars">View available cars <span>↗</span></Link><Link className="kzc-subtle-link" href="/rent-a-car">Rental enquiries →</Link></div></div>
    <div className="kzc-auto-visual"><div className="kzc-auto-visual-inner"><img src="/kz-master-logo.png" alt="K&Z original logo"/><span>AUTOMOTIVE DIVISION</span><strong>Find the vehicle.<br/>Make the move.</strong><Link href="/automotive">EXPLORE AUTOMOTIVE <span>↗</span></Link></div></div>
   </div>
  </section>

  <HomeInventory/>

  <section className="kzc-process kzc-section">
   <div className="kzc-wrap"><div className="kzc-section-head"><div><div className="kzc-kicker">OUR APPROACH <span>— 004</span></div><h2>Simple. Direct. Considered.</h2></div><p>No complicated process. Start with what you need.</p></div>
   <div className="kzc-process-grid">
    <div><span>01</span><h3>Tell us your requirement.</h3><p>Share what you are looking for — a vehicle, service, property or business solution.</p></div>
    <div><span>02</span><h3>We explore the options.</h3><p>We coordinate available opportunities and clarify the relevant details.</p></div>
    <div><span>03</span><h3>Take the next step.</h3><p>Continue the conversation directly and decide what works for you.</p></div>
   </div></div>
  </section>

  <section className="kzc-cta"><div className="kzc-wrap kzc-cta-grid"><div><div className="kzc-kicker">LET'S CONNECT</div><h2>Have something<br/>in mind?</h2><p>Start with a conversation. We will help you find the right direction.</p></div><div className="kzc-cta-actions"><a className="kzc-btn kzc-btn-white" href="https://api.whatsapp.com/send?phone=96878967229" target="_blank" rel="noopener noreferrer">Message us on WhatsApp <span>↗</span></a><Link className="kzc-btn kzc-btn-border" href="/contact">Other contact options <span>→</span></Link></div></div></section>
 </main>
}