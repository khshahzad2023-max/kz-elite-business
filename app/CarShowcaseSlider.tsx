"use client";
import {useEffect,useState} from "react";
const cars=Array.from({length:10},(_,i)=>"/showcase/car-"+String(i+1).padStart(2,"0")+".webp");
export default function CarShowcaseSlider(){
 const [ready,setReady]=useState(false);
 const [active,setActive]=useState(0);
 useEffect(()=>{
  let alive=true;
  Promise.all(cars.map(src=>new Promise<boolean>(resolve=>{
   const img=new window.Image();
   img.onload=()=>resolve(true);img.onerror=()=>resolve(false);img.src=src;
  }))).then(found=>{if(alive)setReady(found.every(Boolean));});
  return ()=>{alive=false};
 },[]);
 useEffect(()=>{
  if(!ready)return;
  const id=window.setInterval(()=>setActive(i=>(i+1)%cars.length),4500);
  return ()=>window.clearInterval(id);
 },[ready]);
 if(!ready)return <div className="kz-showcase-car" role="img" aria-label="K&Z automotive showroom"/>;
 return <div className="kz-car-slides" aria-label="K&Z vehicle showcase">
  {cars.map((src,i)=><img key={src} src={src} alt="" aria-hidden={active!==i} className={"kz-car-slide"+(active===i?" is-active":"")} loading={i<2?"eager":"lazy"}/>)}
  <div className="kz-car-progress" aria-hidden="true">{cars.map((_,i)=><span key={i} className={active===i?"on":""}/>)}</div>
 </div>;
}
