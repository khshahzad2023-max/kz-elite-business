import Link from "next/link";

export default function AutomotiveGate(){
 return <section className="kz-auto-entrance">
   <div className="kz-auto-entrance-shade"/>
   <div className="kz-auto-entrance-content">
     <div className="kz-auto-kicker">K&Z ELITE BUSINESS · AUTOMOTIVE DIVISION</div>
     <h2>ENTER THE<br/><span>AUTOMOTIVE WORLD</span></h2>
     <p>Cars · Services · Finance · Professional Automotive Solutions</p>
     <Link className="kz-auto-enter" href="/automotive"><span>ENTER SHOWROOM</span><b>→</b></Link>
     <small>Premium automotive experience by K&Z</small>
   </div>
   <div className="kz-auto-floor" aria-hidden="true"/>
 </section>
}