import Link from "next/link";

const zones=[
 {title:"AVAILABLE CARS",sub:"Explore our current inventory",href:"/cars",icon:"◆"},
 {title:"SOLD CARS",sub:"Trusted. Delivered. By K&Z.",href:"/#sold-cars",icon:"✓"},
 {title:"AUTOMOTIVE SERVICES",sub:"Complete vehicle care & support",href:"/automotive-services",icon:"⚙"},
 {title:"FINANCE OFFICE",sub:"Finance assistance & enquiries",href:"/find-a-car",icon:"▣"}
];

export default function AutomotiveWorld(){
 return <main className="auto-world">
  <section className="auto-world-hero">
   <div className="auto-world-top"><Link href="/" className="auto-world-brand"><img src="/kz-master-logo.png" alt="K&Z Elite Business"/><span><b>AUTOMOTIVE DIVISION</b><small>CARS · SERVICES · FINANCE · BEYOND</small></span></Link><div className="auto-world-location">MUSCAT, OMAN</div></div>
   <div className="auto-world-stage">
    <div className="auto-world-copy"><span>WELCOME TO</span><h1>K&Z AUTOMOTIVE</h1><p>Premium automotive solutions. Professional service. One trusted business.</p></div>
    <div className="auto-world-car" aria-hidden="true"><div className="car-glow"/><div className="car-roof"/><div className="car-body"><i/><i/></div><div className="car-wheel left"/><div className="car-wheel right"/></div>
   </div>
   <div className="auto-world-zones">{zones.map(z=><Link href={z.href} className="auto-world-zone" key={z.title}><span className="zone-icon">{z.icon}</span><h2>{z.title}</h2><p>{z.sub}</p><b>ENTER →</b></Link>)}</div>
   <div className="auto-world-trust"><span>15+ ADVERTISING PLATFORMS</span><span>MULTIPLE SERVICES</span><span>MUSCAT BASED</span><span>DIRECT WHATSAPP SUPPORT</span></div>
  </section>
 </main>
}