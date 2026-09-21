import Link from "next/link";

const departments=[
 {n:"01",title:"Automotive",sub:"Cars • Garage • Car Care",text:"Buy, sell, source and finance vehicles, with garage, detailing, tyres, tinting and complete automotive support.",href:"/automotive",cta:"Enter Automotive"},
 {n:"02",title:"Building Maintenance",sub:"Maintain • Repair • Improve",text:"Electrical, plumbing, AC, painting, cleaning and general maintenance coordinated through K&Z.",href:"/building-maintenance",cta:"Explore Maintenance"},
 {n:"03",title:"Property",sub:"Rooms • Flats • Listings",text:"Property-related listings and rental opportunities presented through one direct K&Z contact point.",href:"/properties",cta:"Explore Property"},
 {n:"04",title:"Business Promotion",sub:"Advertise • Connect • Grow",text:"Digital promotion for cars, properties and businesses across online platforms.",href:"/advertising",cta:"Explore Promotion"},
];

export default function Home(){
 return <main className="kz-company-home">
  <section className="kz-company-hero">
   <div className="kz-company-sky" aria-hidden="true"/>
   <div className="container kz-company-hero-inner">
    <div className="kz-company-kicker">MUSCAT • SULTANATE OF OMAN</div>
    <h1>K&amp;Z<br/><span>ELITE BUSINESS</span></h1>
    <p className="kz-company-statement">Different needs. One trusted business network.</p>
    <p className="kz-company-intro">Automotive, building maintenance, property and business promotion — connected under one name.</p>
    <div className="kz-company-actions">
     <a className="kz-company-primary" href="#departments">EXPLORE DEPARTMENTS <b>↓</b></a>
     <a className="kz-company-quiet" href="https://api.whatsapp.com/send?phone=96878967229">TALK TO K&amp;Z →</a>
    </div>
   </div>
   <div className="kz-company-rail"><span>AUTOMOTIVE</span><i/><span>MAINTENANCE</span><i/><span>PROPERTY</span><i/><span>PROMOTION</span></div>
  </section>

  <section id="departments" className="kz-departments">
   <div className="container">
    <header className="kz-dept-head"><div><small>OUR BUSINESS</small><h2>Four departments.<br/>One K&amp;Z.</h2></div><p>Choose what you need. Each department has its own dedicated experience, while K&amp;Z remains your single point of contact.</p></header>
    <div className="kz-dept-list">
     {departments.map((d,i)=><Link href={d.href} className={"kz-dept kz-dept-"+(i+1)} key={d.title}>
      <small>{d.n}</small><div><span>{d.sub}</span><h3>{d.title}</h3><p>{d.text}</p></div><b>{d.cta} ↗</b>
     </Link>)}
    </div>
   </div>
  </section>

  <section className="kz-company-manifesto">
   <div className="container">
    <small>ONE NAME • MANY SOLUTIONS</small>
    <blockquote>One local team.<br/>More ways to get things done.</blockquote>
    <div className="kz-manifesto-foot"><p>From a vehicle enquiry to property, maintenance or promotion, K&amp;Z brings different services into one straightforward business relationship.</p><Link href="/contact">CONNECT WITH K&amp;Z →</Link></div>
   </div>
  </section>

  <section className="kz-company-close">
   <div className="container"><div><small>BASED IN MUSCAT</small><h2>What can we help<br/>you with today?</h2></div><div className="kz-close-actions"><a href="https://api.whatsapp.com/send?phone=96878967229">WHATSAPP +968 78967229</a><a href="https://api.whatsapp.com/send?phone=96899248431">WHATSAPP +968 99248431</a><Link href="/services">VIEW ALL SERVICES</Link></div></div>
  </section>
 </main>
}