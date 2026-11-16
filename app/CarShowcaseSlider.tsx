"use client";
import {useEffect,useState} from "react";

const cars=Array.from({length:10},(_,i)=>"/showcase/car-"+String(i+1).padStart(2,"0")+".webp?v=polished-20261116");

export default function CarShowcaseSlider(){
 const [active,setActive]=useState(0);
 useEffect(()=>{
  // Load the next photographs without hiding the first one while preloading.
  const preloaded=cars.map(src=>{const img=new window.Image();img.src=src;return img;});
  const interval=window.setInterval(()=>setActive(i=>(i+1)%cars.length),4500);
  return ()=>{window.clearInterval(interval);void preloaded;};
 },[]);
 return <div className="kz-car-slides" aria-hidden="true">
  {cars.map((src,i)=><img key={src} src={src} alt="" className={"kz-car-slide"+(active===i?" is-active":"")} loading={i===0?"eager":"lazy"}/>)}
 </div>;
}
