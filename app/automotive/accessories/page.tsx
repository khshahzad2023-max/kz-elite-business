import Link from "next/link";

const services=["Interior accessories","Exterior accessories","Car decoration upgrades","Lighting & convenience accessories","Vehicle appearance enhancements"];

export default function ServicePage(){
 const whatsapp="https://api.whatsapp.com/send?phone=96878967229&text="+encodeURIComponent("Hello K&Z Elite Business, I need a quote for ACCESSORIES & DECORATION. Please send me more details.");
 return <main className="kz-dept-page">
  <section className="kz-dept-hero">
   <div className="kz-dept-back"><Link href="/automotive">← K&Z AUTOMOTIVE</Link><span>MUSCAT, OMAN</span></div>
   <div className="kz-dept-hero-inner"><div className="kz-dept-icon">✦</div><span>K&Z AUTOMOTIVE SERVICE DEPARTMENT</span><h1>ACCESSORIES & DECORATION</h1><p>Accessories • Interior • Exterior • Decoration</p>
    <div className="kz-dept-actions"><a href={whatsapp} target="_blank" rel="noopener noreferrer">GET A QUOTE ON WHATSAPP</a><a href="tel:+96878967229">CALL +968 78967229</a></div>
   </div>
  </section>
  <section className="kz-dept-services"><div className="kz-dept-title"><span>WHAT WE OFFER</span><h2>Professional support for your vehicle.</h2></div>
   <div className="kz-dept-list">{services.map((s,i)=><div key={s}><b>{String(i+1).padStart(2,"0")}</b><h3>{s}</h3><p>Contact K&Z for availability, pricing and service details.</p></div>)}</div>
  </section>
  <section className="kz-dept-contact"><span>NEED THIS SERVICE?</span><h2>Get a quick quote from K&Z.</h2><p>Send your car make, model, year and required work on WhatsApp for assistance.</p><div><a href={whatsapp} target="_blank" rel="noopener noreferrer">WHATSAPP K&Z</a><a href="tel:+96899248431">CALL +968 99248431</a></div></section>
 </main>
}
