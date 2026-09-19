import Link from "next/link";

export default function AutomotiveGate(){
 return <section className="kz-showroom-entry">
   <div className="kz-showroom-lines" aria-hidden="true"><i/><i/><i/></div>
   <div className="kz-showroom-brand">
     <span>K&Z AUTOMOTIVE</span>
     <h2>THE AUTOMOTIVE<br/>EXPERIENCE</h2>
     <p>Premium Cars&nbsp;&nbsp;•&nbsp;&nbsp;Automotive Services&nbsp;&nbsp;•&nbsp;&nbsp;Finance Support</p>
     <Link href="/automotive" className="kz-showroom-button">ENTER SHOWROOM <b>→</b></Link>
     <small>K&Z ELITE BUSINESS · MUSCAT, OMAN</small>
   </div>
   <div className="kz-showroom-display" aria-hidden="true">
     <div className="kz-car-shadow"/>
     <div className="kz-car-glass"/>
     <div className="kz-car-shell"><span className="lamp l"/><span className="grille"/><span className="lamp r"/></div>
     <div className="kz-car-tyre left"/><div className="kz-car-tyre right"/>
   </div>
 </section>
}