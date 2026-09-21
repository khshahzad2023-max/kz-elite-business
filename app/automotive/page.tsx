"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { soldCars } from "../sold-cars/soldCars";

const cars = [
  {name:"Hyundai Veloster 2016", image:"/cars/Hyundai-Veloster-2016/1.jpg", meta:"81,000 KM • GCC • Wadi Kabir", href:"/cars/Hyundai-Veloster-2016"},
  {name:"Haval Dargo 2024", image:"/cars/haval-drago-2024/1.jpg", meta:"Below 40,000 KM • 4WD • Qurum", href:"/cars/haval-drago-2024"},
  {name:"GAC GS3 2021", image:"/cars/Gac-GS3-2021/1.jpg", meta:"120,248 KM • GCC • Azaiba", href:"/cars/Gac-GS3-2021"},
  {name:"Ford Explorer 2016", image:"/cars/Ford-Explorer-2016/1.jpg", meta:"3.5L V6 • 4WD • Mahbela", href:"/cars/Ford-Explorer-2016"},
  {name:"Honda Civic 2007", image:"/cars/Honda-Civic-2007/1.jpg", meta:"GCC • Full Option • Wadi Kabir", href:"/cars/Honda-Civic-2007"},
  {name:"Hyundai Santa Fe 2015", image:"/cars/Hyundai-Santa-Fe-2015/1.jpg", meta:"2.4L • 4WD • 7 Seater", href:"/cars/Hyundai-Santa-Fe-2015"},
  {name:"Mercedes-Benz GLC 300 2019", image:"/cars/Mercedes-Benz-GLC300-2019/1.jpg", meta:"US Specs • Premium • Ghoubra", href:"/cars/Mercedes-Benz-GLC300-2019"},
  {name:"Mitsubishi Eclipse Cross 2018", image:"/cars/Mitsubishi-Eclipse-Cross-ES-2018/1.jpg", meta:"1.5L • Automatic • Muscat", href:"/cars/Mitsubishi-Eclipse-Cross-ES-2018"},
  {name:"Nissan Rogue SV 2018", image:"/cars/Nissan-Rogue-SV-2018/1.jpg", meta:"118,000 Miles • SV • Ruwi", href:"/cars/Nissan-Rogue-SV-2018"},
  {name:"Nissan Versa SV 2020", image:"/cars/Nissan-Versa-SV-2020/1.jpg", meta:"85,000 KM • Automatic • Al Hail", href:"/cars/Nissan-Versa-SV-2020"},
  {name:"Toyota RAV4 2019", image:"/cars/Toyota-RAV4-2019/1.jpg", meta:"213,206 KM • AWD • Azaiba", href:"/cars/Toyota-RAV4-2019"},
];

export default function AutomotiveWorld(){
  const [intro,setIntro]=useState(true);
  const [glcFrame,setGlcFrame]=useState(0);
  const [dragX,setDragX]=useState<number|null>(null);
  const glcFrames=Array.from({length:9},(_,i)=>`/cars/Mercedes-Benz-GLC300-2019/${i+1}.jpg`);
  const moveGlc=(x:number)=>{if(dragX===null)return;const delta=x-dragX;if(Math.abs(delta)>34){setGlcFrame(v=>(v+(delta<0?1:8))%9);setDragX(x)}};
  useEffect(()=>{const t=window.setTimeout(()=>setIntro(false),1450);return()=>window.clearTimeout(t)},[]);
  return <main className="kz-showroom-world">
    {intro && <div className="kz-logo-intro">
      <div className="kz-intro-flare"/>
      <img src="/kz-master-logo.png" alt="K&Z Elite Business"/>
      <div className="kz-intro-name">K&Z AUTOMOTIVE</div>
      <small>ONE NAME • MANY SOLUTIONS</small>
    </div>}

    <section className="kz-cinematic-hero">
      <div className="kz-cinematic-grid" aria-hidden="true"/>
      <div className="kz-cinematic-glow" aria-hidden="true"/>
      <div className="kz-cinematic-top">
        <Link href="/" className="kz-cinematic-brand"><img src="/kz-master-logo.png" alt="K&Z"/><span><b>K&Z AUTOMOTIVE</b><small>ONE NAME • MANY SOLUTIONS</small></span></Link>
        <span>PREMIUM DIGITAL SHOWROOM • MUSCAT</span>
      </div>
      <div className="kz-cinematic-copy">
        <span>WELCOME TO K&Z AUTOMOTIVE</span>
        <h1>DRIVE INTO<br/><em>THE EXPERIENCE.</em></h1>
        <p>Explore our vehicles, automotive services and complete K&Z car experience.</p>
        <div><a href="#showroom-floor">EXPLORE CARS →</a><Link href="/sell-your-car">SELL YOUR CAR</Link></div>
      </div>
      <div className="kz-hero-car kz-hero-360"
        onMouseDown={e=>setDragX(e.clientX)} onMouseMove={e=>moveGlc(e.clientX)} onMouseUp={()=>setDragX(null)} onMouseLeave={()=>setDragX(null)}
        onTouchStart={e=>setDragX(e.touches[0].clientX)} onTouchMove={e=>moveGlc(e.touches[0].clientX)} onTouchEnd={()=>setDragX(null)}>
        <div className="kz-hero-car-halo"/>
        <img src={glcFrames[glcFrame]} alt={"Mercedes-Benz GLC 300 angle "+(glcFrame+1)} draggable={false}/>
        <div className={"kz-car-cover "+(glcFrame>5?"kz-cover-off":"")}><i/><b>K&Z</b></div>
        <div className="kz-rotate-hint">↔ DRAG TO ROTATE & REVEAL</div>
        <Link href="/cars/Mercedes-Benz-GLC300-2019" className="kz-hero-car-label"><small>FEATURED VEHICLE</small><b>MERCEDES-BENZ GLC 300</b><span>2019 • VIEW CAR →</span></Link>
      </div>
      <div className="kz-cinematic-scroll">SCROLL TO EXPLORE ↓</div>
    </section>

    <section className="kz-lobby">
      <div className="kz-lobby-overlay"/>
      <div className="kz-lobby-top">
        <Link href="/" className="kz-lobby-brand"><img src="/kz-master-logo.png" alt="K&Z"/><span><b>K&Z AUTOMOTIVE</b><small>PREMIUM CARS • TRUSTED PEOPLE</small></span></Link>
        <span>11 VEHICLES AVAILABLE • MUSCAT, OMAN</span>
      </div>
      <div className="kz-lobby-copy">
        <span>WELCOME TO THE SHOWROOM</span>
        <h1>Find Your Next <em>Drive.</em></h1>
        <p>Explore K&Z vehicles in a premium digital showroom. View real photos, vehicle details and contact us directly.</p>
        <div><a href="#showroom-floor" className="kz-lobby-btn">EXPLORE VEHICLES ↓</a><Link href="/find-a-car" className="kz-lobby-link">FIND A CAR →</Link></div>
      </div>
      <div className="kz-lobby-strip"><a href="#showroom-floor">AVAILABLE CARS</a><i/><a href="#sold-showroom">SOLD CARS</a><i/><a href="#service-center">SERVICES</a><i/><Link href="/find-a-car">FIND A CAR</Link><i/><Link href="/sell-your-car">SELL YOUR CAR</Link></div>
    </section>

    <section id="automotive-hub" className="kz-auto-hub">
      <div className="kz-auto-hub-head"><span>K&Z AUTOMOTIVE</span><h2>Where do you want to go?</h2><p>Choose a destination and enter the K&Z automotive experience.</p></div>
      <div className="kz-auto-destinations">
        <a href="#showroom-floor" className="kz-auto-destination kz-dest-available">
          <img src="/cars/haval-drago-2024/1.jpg" alt="Available K&Z vehicles"/>
          <div className="kz-dest-shade"/><div className="kz-dest-count">11 <small>AVAILABLE</small></div>
          <div className="kz-dest-copy"><span>01 • THE SHOWROOM</span><h3>Available<br/>Cars</h3><p>Explore real vehicles currently available through K&Z.</p><b>ENTER SHOWROOM →</b></div>
        </a>
        <a href="#sold-showroom" className="kz-auto-destination kz-dest-sold">
          <img src={soldCars[0]?.images[0]} alt="Vehicles sold by K&Z"/>
          <div className="kz-dest-shade"/><div className="kz-dest-count">{soldCars.length} <small>SOLD</small></div>
          <div className="kz-dest-copy"><span>02 • K&Z DELIVERY HISTORY</span><h3>Sold<br/>Cars</h3><p>See vehicles successfully sold through K&Z ELITE BUSINESS.</p><b>VIEW SOLD CARS →</b></div>
        </a>
        <a href="#service-center" className="kz-auto-destination kz-dest-services">
          <img src="/kz-showroom.jpg?v=20260919-new" alt="K&Z automotive services"/>
          <div className="kz-dest-shade"/><div className="kz-dest-count">07 <small>DEPARTMENTS</small></div>
          <div className="kz-dest-copy"><span>03 • COMPLETE CAR CARE</span><h3>Automotive<br/>Services</h3><p>Garage, tyres, batteries, tinting, detailing, wash, bodywork and more.</p><b>ENTER SERVICE CENTER →</b></div>
        </a>
        <Link href="/find-a-car" className="kz-auto-destination kz-dest-find">
          <img src="/cars/Mercedes-Benz-GLC300-2019/1.jpg" alt="Find a car with K&Z"/>
          <div className="kz-dest-shade"/><div className="kz-dest-mark">K&Z</div>
          <div className="kz-dest-copy"><span>04 • PERSONAL CAR SOURCING</span><h3>Find<br/>a Car</h3><p>Tell us your budget and preferred vehicle. K&Z will help you search.</p><b>START YOUR SEARCH →</b></div>
        </Link>
      </div>
    </section>

    <section id="service-center" className="kz-service-premium kz-service-v2">
      <div className="kz-service-hero">
        <div><span>AUTOMOTIVE SERVICE CENTER</span><h2>Complete Car Care<br/><em>Under One Roof</em></h2><p>Professional. Reliable. Affordable.</p></div>
        <div className="kz-service-trust"><b>⚙ Skilled Technicians</b><b>♢ Quality Service</b><b>◷ On-Time Delivery</b><b>♧ Customer Satisfaction</b></div>
      </div>
      <div className="kz-service-mosaic">
        {[
          ["GARAGE & MAINTENANCE","Mechanical, Electrical, AC and Complete Vehicle Care.","/automotive/garage","/automotive-services/garage.jpg","garage"],
          ["TYRES & BATTERIES","Tyres, Batteries, Fitting and Replacement.","/automotive/tyres-batteries","/automotive-services/tyres-batteries.jpg","tyres"],
          ["ACCESSORIES & DECORATION","Interior & Exterior Accessories.","/automotive/accessories","/automotive-services/accessories.jpg","accessories"],
          ["WINDOW TINTING","Professional Tinting & Appearance Upgrades.","/automotive/tinting","/automotive-services/window-tinting.jpg","tint"],
          ["POLISHING & DETAILING","Exterior Polish, Interior Detailing and Finish Restoration.","/automotive/detailing","/automotive-services/detailing.jpg","detail"],
          ["CAR WASH","Professional Cleaning and Washing Services.","/automotive/car-wash","/automotive-services/car-wash.jpg","wash"],
          ["DENTING & PAINTING","Body Repair, Dent Correction and Automotive Painting.","/automotive/denting-painting","/automotive-services/denting-painting.jpg","paint"],
        ].map((s,i)=><Link href={s[2]} className={"kz-mosaic-card kz-mosaic-"+s[4]} key={s[0]}>
          <img src={s[3]} alt={s[0]}/><div className="kz-service-privacy-mask" aria-hidden="true"/><div className="kz-mosaic-shade"/>
          <div className="kz-mosaic-copy"><small>◆ &nbsp; SERVICE DEPARTMENT</small><h3>{s[0]}</h3><p>{s[1]}</p><b>ENTER DEPARTMENT →</b></div>
        </Link>)}
      </div>
      <div className="kz-service-values"><span>◇ <b>Quality Work</b><small>You Can Trust</small></span><span>◉ <b>Affordable</b><small>Service Packages</small></span><span>♢ <b>Professional Tools</b><small>Quality Service</small></span><span>◷ <b>Fast & Reliable</b><small>Turnaround</small></span><a href="https://api.whatsapp.com/send?phone=96878967229&text=Hello%20K%26Z%2C%20I%20want%20to%20book%20an%20automotive%20service." target="_blank" rel="noopener noreferrer">BOOK A SERVICE →</a></div>
    </section>

    <section id="showroom-floor" className="kz-floor">
      <div className="kz-floor-head"><div><span>THE SHOWROOM FLOOR</span><h2>Available Vehicles</h2></div><p>Real vehicles. Real photos. Direct K&Z support.</p></div>
      <div className="kz-floor-grid">{cars.map((car,i)=><article className="kz-display-bay" key={car.name}>
        <Link href={car.href} className="kz-display-photo"><img src={car.image} alt={car.name}/><span>{String(i+1).padStart(2,"0")}</span></Link>
        <div className="kz-display-info"><small>AVAILABLE NOW</small><h3>{car.name}</h3><p>{car.meta}</p><div><Link href={car.href}>VIEW CAR →</Link><a href={"https://api.whatsapp.com/send?phone=96878967229&text="+encodeURIComponent("Hello K&Z Elite Business, I am interested in the "+car.name+". Please send me more details.")} target="_blank" rel="noopener noreferrer">WHATSAPP</a></div></div>
      </article>)}</div>
    </section>

    <section id="sold-showroom" className="kz-floor kz-sold-floor">
      <div className="kz-floor-head"><div><span>K&Z DELIVERY HISTORY</span><h2>Sold Vehicles</h2></div><p>Vehicles successfully sold through K&Z ELITE BUSINESS.</p></div>
      <div className="kz-floor-grid">{soldCars.map((car,i)=><article className="kz-display-bay kz-sold-bay" key={car.name+car.year}>
        <div className="kz-display-photo"><img src={car.images[0]} alt={car.imageAlt}/><span>{String(i+1).padStart(2,"0")}</span><b className="kz-sold-stamp">SOLD</b></div>
        <div className="kz-display-info"><small>SUCCESSFULLY SOLD</small><h3>{car.name} {car.year}</h3><p>{car.details.join(" • ")}</p><div><Link href="/sold-cars">VIEW SOLD CARS →</Link></div></div>
      </article>)}</div>
    </section>

    <section className="kz-showroom-cta"><span>CAN'T FIND THE CAR YOU WANT?</span><h2>Tell K&Z what you're looking for.</h2><p>Send us your preferred make, model and budget. We can help source suitable options.</p><div><Link href="/find-a-car">FIND A CAR</Link><a href="https://api.whatsapp.com/send?phone=96878967229" target="_blank" rel="noopener noreferrer">WHATSAPP K&Z</a></div></section>
  </main>
}
