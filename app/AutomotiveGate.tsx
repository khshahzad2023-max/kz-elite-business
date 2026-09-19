"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function AutomotiveGate(){
  const [open,setOpen]=useState(false);
  const [seen,setSeen]=useState(false);
  useEffect(()=>{ try{setSeen(sessionStorage.getItem("kz-auto-gate")==="seen")}catch{} },[]);
  const enter=()=>{setOpen(true);try{sessionStorage.setItem("kz-auto-gate","seen")}catch{};setTimeout(()=>setSeen(true),850)};
  if(seen) return <div className="auto-quick-entry"><Link href="/cars">Browse Cars</Link><Link href="/sell-your-car">Sell Your Car</Link><Link href="/automotive-services">Automotive Services</Link></div>;
  return <div className={"auto-gate "+(open?"is-open":"")}>
    <div className="auto-road"><div className="auto-car"><span className="car-roof"/><span className="car-body"/><i/><i/></div></div>
    <div className="gate-panel gate-left"><span>K&Z</span></div><div className="gate-panel gate-right"><span>ELITE</span></div>
    <div className="gate-content"><div className="eyebrow">K&Z AUTOMOTIVE</div><h2>Your automotive world starts here</h2><p>Cars • Selling • Sourcing • Garage • Rental • Advertising</p><button onClick={enter}>OPEN THE GATE</button><small>Premium automotive services by K&Z ELITE BUSINESS</small></div>
  </div>
}