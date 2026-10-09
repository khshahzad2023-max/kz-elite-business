"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

type Car = { id:string; title:string;price:number|null;status:string;images:string[];specs:string;location:string;mileage:string; };
export default function DashboardCars(){
 const [cars,setCars]=useState<Car[]>([]);
 useEffect(()=>{fetch("/api/cars").then(x=>x.ok?x.json():[]).then(setCars).catch(()=>{})},[]);
 const available=cars.filter(car=>car.status==="available");
 if(!available.length)return <section className="section"><div className="container"><h2>Our Inventory Is Being Updated</h2><p>Fresh K&Z vehicle listings and verified photos are being added. Contact us to find your next car.</p><a className="btn btn-primary" href="https://api.whatsapp.com/send?phone=96878967229">Enquire on WhatsApp</a></div></section>;
 return <section className="section"><div className="container">
  <div className="eyebrow">LATEST LISTINGS</div><h2>Recently Added Vehicles</h2>
  <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(270px,1fr))",gap:20}}>
  {available.map(car=><article key={car.id} style={{background:"#10233c",border:"1px solid #34465f",borderRadius:15,overflow:"hidden"}}>
   {car.images[0]&&<img src={car.images[0]} alt={car.title} style={{width:"100%",height:210,objectFit:"cover"}}/>}
   <div style={{padding:17}}><strong style={{fontSize:21}}>{car.title}</strong>
    <p style={{color:"#bbc9d8"}}>{car.specs}</p><p>{car.mileage} • {car.location}</p>
    <strong style={{color:"#e5bd65"}}>{car.status==="sold"?"SOLD":car.price===null?"Price on request":car.price.toLocaleString()+" OMR"}</strong>
    <p><Link href={"/cars/listing/"+car.id} style={{display:"inline-block",padding:"10px 15px",background:"#d6aa52",color:"#081629",borderRadius:8,fontWeight:700}}>View Details</Link></p>
   </div>
  </article>)}
  </div>
 </div></section>
}
