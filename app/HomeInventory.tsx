"use client";
import {useEffect,useMemo,useState} from "react";
import Link from "next/link";
type Car={id:string;title:string;price:number|null;status:string;images:string[];specs:string;location:string;mileage:string};
export default function HomeInventory(){
 const [cars,setCars]=useState<Car[]>([]);
 const [query,setQuery]=useState("");
 const [filter,setFilter]=useState<"available"|"sold">("available");
 const [loading,setLoading]=useState(true);
 useEffect(()=>{let active=true;fetch("/api/cars").then(r=>r.ok?r.json():[]).then(data=>{if(active)setCars(Array.isArray(data)?data:[])}).catch(()=>{}).finally(()=>{if(active)setLoading(false)});return()=>{active=false}},[]);
 const shown=useMemo(()=>cars.filter(c=>c.status===filter&&(!query||[c.title,c.specs,c.location].some(v=>(v||"").toLowerCase().includes(query.toLowerCase())))).slice(0,6),[cars,filter,query]);
 if(!loading&&!cars.some(c=>c.status==="available"))return null;
 return <section id="featured-inventory" className="kz-inventory-home">
  <div className="container">
   <div className="kz-inventory-heading"><div><small>K&Z AUTOMOTIVE</small><h2>Find your next drive.</h2><p>Browse our latest listings, directly from the K&Z inventory.</p></div><Link href="/cars" className="kz-inventory-all">VIEW ALL CARS ↗</Link></div>
   <div className="kz-inventory-tools"><div className="kz-inventory-tabs"><button type="button" aria-pressed={filter==="available"} onClick={()=>setFilter("available")}>Available Cars</button><button type="button" aria-pressed={filter==="sold"} onClick={()=>setFilter("sold")}>Sold Cars</button></div><label className="kz-inventory-search"><span className="sr-only">Search car listings</span><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search make, model or location…" type="search"/></label></div>
   {loading?<p className="kz-inventory-empty">Loading vehicle listings…</p>:shown.length?<div className="kz-inventory-grid">{shown.map(car=><article className="kz-inventory-card" key={car.id}><div className="kz-inventory-photo">{car.images?.[0]?<img src={car.images[0]} alt={car.title} loading="lazy"/>:<div className="kz-inventory-placeholder">K&Z ELITE BUSINESS</div>}<span className="kz-inventory-status">{car.status==="sold"?"SOLD":"AVAILABLE"}</span></div><div className="kz-inventory-details"><h3>{car.title}</h3><p>{[car.mileage,car.location].filter(Boolean).join(" • ")}</p><p className="kz-inventory-specs">{car.specs}</p><div className="kz-inventory-bottom"><strong>{car.price==null?"Price on request":car.price.toLocaleString()+" OMR"}</strong><Link href={"/cars/listing/"+encodeURIComponent(car.id)}>DETAILS ↗</Link></div></div></article>)}</div>:<div className="kz-inventory-empty"><h3>{filter==="sold"?"No sold listings published yet":"Our inventory is being updated"}</h3><p>{query?"Try another search.":"We only show vehicles with a confirmed inventory status."}</p>{filter==="available"&&<a href="https://api.whatsapp.com/send?phone=96878967229">Ask about available cars ↗</a>}</div>}
  </div>
 </section>;
}
