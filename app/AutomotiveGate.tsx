"use client";
import Link from "next/link";
import { useState } from "react";

export default function AutomotiveGate(){
  const [open,setOpen]=useState(false);
  return <div className={"auto-gate "+(open?"is-open":"")}>
    <div className="gate-reveal">
      <div className="eyebrow">K&Z AUTOMOTIVE</div>
      <h2>Your automotive world starts here</h2>
      <p>Cars • Selling • Sourcing • Garage • Rental • Advertising</p>
      <div className="gate-links"><Link href="/cars">Available Cars</Link><Link href="/sell-your-car">Sell Your Car</Link><Link href="/automotive-services">Automotive Services</Link></div>
    </div>
    <div className="auto-road"><div className="auto-car"><span className="car-roof"/><span className="car-body"/><i/><i/></div></div>
    <div className="gate-panel gate-left"><span>K&Z</span></div>
    <div className="gate-panel gate-right"><span>ELITE</span></div>
    <div className="gate-trigger"><div className="eyebrow">K&Z AUTOMOTIVE</div><strong>PREMIUM AUTOMOTIVE ENTRANCE</strong><button onClick={()=>setOpen(true)}>OPEN THE GATE</button><small>Tap to enter</small></div>
  </div>
}