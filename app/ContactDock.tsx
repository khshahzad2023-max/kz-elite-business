"use client";
import { useState } from "react";
import { Globe2, Mail, MapPin, MessageCircle, Phone, Instagram, Facebook } from "lucide-react";
const entries=[
 {letter:"C",label:"CALL",icon:Phone,kind:"call"},
 {letter:"O",label:"WHATSAPP",icon:MessageCircle,kind:"whatsapp"},
 {letter:"N",label:"EMAIL",icon:Mail,kind:"email"},
 {letter:"N",label:"INSTAGRAM",icon:Instagram,kind:"instagram"},
 {letter:"E",label:"FACEBOOK",icon:Facebook,kind:"facebook"},
 {letter:"C",label:"WEBSITE",icon:Globe2,kind:"website"},
 {letter:"T",label:"TIKTOK",icon:Globe2,kind:"tiktok"},
] as const;
export default function ContactDock(){
 const [active,setActive]=useState<number|null>(null);
 const links=(kind:string)=>{
  if(kind==="call")return <><a href="tel:+96878967229">+968 78967229</a><a href="tel:+96899248431">+968 99248431</a></>;
  if(kind==="whatsapp")return <><a href="https://api.whatsapp.com/send?phone=96878967229" target="_blank" rel="noreferrer">+968 78967229</a><a href="https://api.whatsapp.com/send?phone=96899248431" target="_blank" rel="noreferrer">+968 99248431</a></>;
  const single:Record<string,[string,string]>={
   email:["info@kzelitebusiness.com","mailto:info@kzelitebusiness.com"],
   instagram:["@kz_elite_business","https://www.instagram.com/kz_elite_business/"],
   facebook:["K&Z ELITE BUSINESS","https://www.facebook.com/share/1H4otouqhj/"],
   website:["kzelitebusiness.com","https://kzelitebusiness.com"],
   tiktok:["@kz_elite_business","https://www.tiktok.com/@kz_elite_business"]
  };
  const [label,href]=single[kind];return <a href={href} target={href.startsWith("http")?"_blank":undefined} rel="noreferrer">{label}</a>;
 };
 return <section className="contact-dock-section" id="connect">
  <div className="container">
   <div className="contact-dock-head"><div><div className="eyebrow">ALWAYS CONNECTED</div><h2>Connect with K&amp;Z</h2></div><div className="contact-location"><MapPin size={17}/> Muscat, Sultanate of Oman</div></div>
   <div className="crystal-connect kz-contact-grid" onMouseLeave={()=>setActive(null)} aria-label="K&Z contact options">
    {entries.map((item,i)=><div key={i} className={`crystal-contact crystal-${item.kind} kz-contact-tile ${active===i?"is-open":""}`} onMouseEnter={()=>setActive(i)}>
     <button type="button" className="kz-contact-trigger" aria-expanded={active===i} onFocus={()=>setActive(i)} onClick={()=>setActive(active===i?null:i)} aria-label={`Show ${item.label} contact options`}>
      <span className="crystal-letter">{item.letter}</span>
     </button>
     {active===i&&<div className="kz-contact-reveal"><item.icon size={24}/><strong>{item.label}</strong><div className="kz-contact-links">{links(item.kind)}</div></div>}
    </div>)}
   </div>
   <div className="crystal-hint">Hover or tap a crystal letter to reveal contact options</div>
  </div>
 </section>
}