import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { configured, supabase } from "../../../../lib/kz-db";
import { notFound } from "next/navigation";

type Car = {id:string;title:string;year:number;price:number|null;status:string;images:string[];mileage:string;specs:string;location:string;description:string;finance_available?:boolean;make?:string;model?:string;variant?:string;engine?:string;transmission?:string;origin_specs?:string;body_type?:string;exterior_color?:string;registration_validity?:string;features?:string};
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
  {car.finance_available && <div className="kz-car-finance-badge" style={{marginBottom:12}}>Finance Option Available on This Car</div>}
  <p style={{color:"#e5bd65",fontWeight:700,fontSize:21}}>{car.status==="sold"?"SOLD":car.price===null?"Price on request":car.price.toLocaleString()+" OMR"}</p>
  <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:12}}>
    {car.images.map((src,i)=><Image key={src} src={src} alt={car.title+" image "+(i+1)} width={900} height={600} sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 340px" quality={85} loading={i===0?"eager":"lazy"} fetchPriority={i===0?"high":"auto"} decoding="async" style={{width:"100%",height:255,objectFit:"cover",borderRadius:12}}/>)}
  </div>
  <section style={{marginTop:25,lineHeight:1.8}}>
   <h2>Vehicle Specifications</h2>
   <div className="kz-car-detail-specs">{([["Brand",car.make],["Model",car.model],["Variant",car.variant],["Year",car.year],["Engine",car.engine],["Transmission",car.transmission],["GCC / Imported",car.origin_specs],["Body Type",car.body_type],["Exterior Colour",car.exterior_color],["Mileage",car.mileage],["Location",car.location],["Registration",car.registration_validity]] as [string,string|number|undefined][]).filter(([,value])=>String(value||"").trim()).map(([label,value])=><div key={label}><span>{label}</span><strong>{value}</strong></div>)}</div>
   {car.features&&<><h2>Features</h2><ul className="kz-car-feature-list">{car.features.split(/\r?\n|•/).map(s=>s.trim()).filter(Boolean).map((s,i)=><li key={i}>{s}</li>)}</ul></>}
   {car.specs&&<><h2>Additional Specifications</h2><p style={{whiteSpace:"pre-line"}}>{car.specs}</p></>}
   {car.description&&<><h2>Vehicle Description</h2><p style={{whiteSpace:"pre-line"}}>{car.description}</p></>}
   <a href={"https://api.whatsapp.com/send?phone=96878967229&text="+message} target="_blank" rel="noopener noreferrer" style={{display:"inline-block",background:"#d6aa52",color:"#07111f",borderRadius:9,padding:"13px 22px",fontWeight:700}}>Enquire on WhatsApp</a>
  </section>
 </div></main>;
}
