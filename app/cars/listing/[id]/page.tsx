import Link from "next/link";
import type { Metadata } from "next";
import { configured, supabase } from "../../../../lib/kz-db";
import { notFound } from "next/navigation";

type Car = {id:string;title:string;year:number;price:number|null;status:string;images:string[];mileage:string;specs:string;location:string;description:string};
async function getCar(id:string):Promise<Car|null>{
 if(!configured() || !/^[0-9a-f-]{36}$/i.test(id))return null;
 const r=await supabase("/rest/v1/kz_cars?select=*&id=eq."+id+"&status=in.(available,sold)&limit=1",{},true);
 if(!r.ok)return null;
 const rows=await r.json();return rows[0]||null;
}
export async function generateMetadata({params}:{params:Promise<{id:string}>}):Promise<Metadata>{
 const car=await getCar((await params).id);
 if(!car)return{title:"Vehicle not found | K&Z ELITE BUSINESS",robots:{index:false}};
 return {title:car.title+" in Muscat | K&Z ELITE BUSINESS",description:"View verified photos and details for "+car.title+". Contact K&Z ELITE BUSINESS in Muscat to enquire.",alternates:{canonical:"/cars/listing/"+car.id}};
}
export default async function Listing({params}:{params:Promise<{id:string}>}){
 const car=await getCar((await params).id);if(!car)notFound();
 const message=encodeURIComponent("Hello K&Z ELITE BUSINESS, I am interested in "+car.title+". Please send me details.");
 return <main style={{padding:"35px 16px 90px",background:"#07111f",minHeight:"80vh"}}><div style={{maxWidth:1050,margin:"auto"}}>
  <Link href="/cars" style={{color:"#e5bd65"}}>← Back to all cars</Link>
  <h1 style={{fontSize:"clamp(29px,5vw,46px)"}}>{car.title}</h1>
  <p style={{color:"#e5bd65",fontWeight:700,fontSize:21}}>{car.status==="sold"?"SOLD":car.price===null?"Price on request":car.price.toLocaleString()+" OMR"}</p>
  <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:12}}>
    {car.images.map((src,i)=><img key={src} src={src} alt={car.title+" image "+(i+1)} style={{width:"100%",height:255,objectFit:"cover",borderRadius:12}}/>)}
  </div>
  <section style={{marginTop:25,lineHeight:1.8}}>
   <p><strong>Mileage:</strong> {car.mileage||"Ask for details"}</p><p><strong>Location:</strong> {car.location}</p>
   <p style={{whiteSpace:"pre-line"}}>{car.specs}</p><p style={{whiteSpace:"pre-line"}}>{car.description}</p>
   <a href={"https://api.whatsapp.com/send?phone=96878967229&text="+message} target="_blank" rel="noopener noreferrer" style={{display:"inline-block",background:"#d6aa52",color:"#07111f",borderRadius:9,padding:"13px 22px",fontWeight:700}}>Enquire on WhatsApp</a>
  </section>
 </div></main>;
}
