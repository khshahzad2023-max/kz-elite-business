import type { MetadataRoute } from "next";
import { configured, supabase } from "../lib/kz-db";
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
 const base="https://www.kzelitebusiness.com";
 const paths=["/","/cars","/rent-a-car","/automotive","/building-maintenance","/properties","/advertising","/contact","/find-a-car","/sell-your-car"];
 let listings: string[]=[];
 if(configured()){
  try{
   const res=await supabase("/rest/v1/kz_cars?select=id&status=eq.available",{},true);
   if(res.ok) listings=(await res.json()).map((car:{id:string})=>"/cars/listing/"+car.id);
  }catch{}
 }
 return [...paths,...listings].map(p=>({url:base+p,changeFrequency:"weekly",priority:p==="/"?1:p==="/cars"?0.9:0.7}));
}
