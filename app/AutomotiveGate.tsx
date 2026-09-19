import Link from "next/link";

export default function AutomotiveGate(){
 return <section className="kz-photo-entry">
   <img className="kz-showroom-photo" src="/kz-showroom.jpg" alt="" aria-hidden="true"/>
   <div className="kz-photo-overlay"/>
   <div className="kz-photo-copy">
     <div className="kz-photo-kicker">K&Z AUTOMOTIVE</div>
     <h2>DRIVE A<br/><span>BETTER</span><br/>TOMORROW</h2>
     <p>PREMIUM CARS • EXPERT SERVICES • FINANCE SUPPORT</p>
     <Link href="/automotive" className="kz-photo-button"><span>ENTER SHOWROOM</span><b>→</b></Link>
     <small>K&Z ELITE BUSINESS | MUSCAT, OMAN</small>
   </div>
   <div className="kz-photo-features">
     <span>QUALITY CARS</span><span>PROFESSIONAL SERVICES</span><span>FINANCE ASSISTANCE</span><span>SELL WITH CONFIDENCE</span>
   </div>
 </section>
}