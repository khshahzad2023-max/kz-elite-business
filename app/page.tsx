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

   <div className="kz-brand-lockup kz-brand-split">
    <div className="kz-brand-copy">
     <span className="kz-brand-overline">MUSCAT • SULTANATE OF OMAN</span>
     <h1>K&amp;Z<br/><em>ELITE BUSINESS</em></h1>
     <p>ONE NAME • MANY SOLUTIONS</p>
     <a href="#who-we-are">DISCOVER OUR STORY <span>↓</span></a>
    </div>
    <div className="kz-brand-mark"><img src="/kz-master-logo.png" alt="K&Z ELITE BUSINESS"/></div>
   </div>
   <div className="kz-opening-location">MUSCAT • SULTANATE OF OMAN</div>
  </section>

  <section id="who-we-are" className="kz-who-section">
   <div className="container kz-who-layout">
    <div className="kz-who-title"><small>WHO WE ARE</small><h2>Built from one<br/>shared vision.</h2></div>
    <div className="kz-who-story"><p>K&amp;Z ELITE BUSINESS was born from the vision of two partners, two areas of expertise, and one shared passion: creating reliable services that make life and business easier.</p><span>ONE NAME • MANY SOLUTIONS</span></div>
   </div>
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