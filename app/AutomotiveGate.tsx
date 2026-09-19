"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AutomotiveGate(){
 const [opening,setOpening]=useState(false);
 const router=useRouter();
 const enter=()=>{
   if(opening) return;
   setOpening(true);
   window.setTimeout(()=>router.push("/automotive"),1050);
 };
 return <section className={"kz-entry-gate"+(opening?" is-opening":"")}>
   <div className="kz-entry-frame">
     <div className="kz-entry-sign"><b>K&Z</b><span>AUTOMOTIVE</span><small>ONE NAME • MANY SOLUTIONS</small></div>
     <div className="kz-entry-inside" aria-hidden="true"><img src="/kz-showroom.jpg" alt=""/></div>
     <div className="kz-door kz-door-left"><i/><em/></div>
     <div className="kz-door kz-door-right"><i/><em/></div>
     <button className="kz-entry-button" onClick={enter} disabled={opening}>
       <span>{opening?"WELCOME TO K&Z":"ENTER SHOWROOM"}</span><b>→</b>
     </button>
     <div className="kz-entry-caption">PREMIUM CARS&nbsp;&nbsp;•&nbsp;&nbsp;TRUSTED DEALS&nbsp;&nbsp;•&nbsp;&nbsp;AUTOMOTIVE SERVICES</div>
   </div>
 </section>
}