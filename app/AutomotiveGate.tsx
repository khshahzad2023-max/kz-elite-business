"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AutomotiveGate(){
 const [opening,setOpening]=useState(false);
 const router=useRouter();
 const enter=()=>{
   if(opening) return;
   setOpening(true);
   window.setTimeout(()=>router.push("/automotive"),1100);
 };
 return <section className={"kz-facade"+(opening?" is-opening":"")}>
   <div className="kz-facade-view">
     <img src="/kz-showroom.jpg?v=20260919-new" alt="K&Z Automotive showroom"/>
   </div>
   <div className="kz-glass-door kz-glass-left" aria-hidden="true"><i/><span/></div>
   <div className="kz-glass-door kz-glass-right" aria-hidden="true"><i/><span/></div>
   <button className="kz-facade-enter" onClick={enter} disabled={opening}>
     {opening?"WELCOME TO K&Z":"ENTER SHOWROOM"} <b>→</b>
   </button>
   <div className="kz-facade-foot">QUALITY CARS <i/> TRUSTED DEALS <i/> AUTOMOTIVE SERVICES</div>
 </section>
}