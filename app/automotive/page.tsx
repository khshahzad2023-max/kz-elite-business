"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

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
  useEffect(()=>{const t=window.setTimeout(()=>setIntro(false),1450);return()=>window.clearTimeout(t)},[]);
  return <main className="kz-showroom-world">
    {intro && <div className="kz-logo-intro">
      <div className="kz-intro-flare"/>
      <img src="/kz-master-logo.png" alt="K&Z Elite Business"/>
      <div className="kz-intro-name">K&Z AUTOMOTIVE</div>
      <small>ONE NAME • MANY SOLUTIONS</small>
    </div>}

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
      <div className="kz-lobby-strip"><span>BUY</span><i/> <span>SELL</span><i/> <span>TRADE</span><i/> <span>FINANCE</span><i/> <span>SERVICE</span></div>
    </section>

    <section id="showroom-floor" className="kz-floor">
      <div className="kz-floor-head"><div><span>THE SHOWROOM FLOOR</span><h2>Available Vehicles</h2></div><p>Real vehicles. Real photos. Direct K&Z support.</p></div>
      <div className="kz-floor-grid">{cars.map((car,i)=><article className="kz-display-bay" key={car.name}>
        <Link href={car.href} className="kz-display-photo"><img src={car.image} alt={car.name}/><span>{String(i+1).padStart(2,"0")}</span></Link>
        <div className="kz-display-info"><small>AVAILABLE NOW</small><h3>{car.name}</h3><p>{car.meta}</p><div><Link href={car.href}>VIEW CAR →</Link><a href={"https://api.whatsapp.com/send?phone=96878967229&text="+encodeURIComponent("Hello K&Z Elite Business, I am interested in the "+car.name+". Please send me more details.")} target="_blank" rel="noopener noreferrer">WHATSAPP</a></div></div>
      </article>)}</div>
    </section>

    <section className="kz-service-departments">
      <div className="kz-service-head"><span>COMPLETE AUTOMOTIVE CARE</span><h2>Enter a K&Z Service Department</h2><p>From buying your car to keeping it at its best — K&Z has you covered.</p></div>
      <div className="kz-service-grid">
        {[
          ["01","GARAGE & MAINTENANCE","Mechanical, electrical, AC and general vehicle care.","/automotive/garage","⚙"],
          ["02","TYRES & BATTERIES","Tyres, batteries, fitting and replacement support.","/automotive/tyres-batteries","◉"],
          ["03","ACCESSORIES & DECORATION","Interior and exterior accessories and car decoration.","/automotive/accessories","✦"],
          ["04","WINDOW TINTING","Professional automotive tinting and appearance upgrades.","/automotive/tinting","◐"],
          ["05","POLISHING & DETAILING","Exterior polishing, interior detailing and finish restoration.","/automotive/detailing","◆"],
          ["06","CAR WASH","Professional vehicle cleaning and wash services.","/automotive/car-wash","≈"],
          ["07","DENTING & PAINTING","Body repair, dent correction and automotive painting.","/automotive/denting-painting","▰"],
        ].map(s=><Link href={s[3]} className="kz-service-bay" key={s[0]}>
          <div className="kz-service-number">{s[0]}</div><div className="kz-service-icon">{s[4]}</div>
          <h3>{s[1]}</h3><p>{s[2]}</p><b>ENTER DEPARTMENT →</b>
        </Link>)}
      </div>
    </section>

    <section className="kz-showroom-cta"><span>CAN'T FIND THE CAR YOU WANT?</span><h2>Tell K&Z what you're looking for.</h2><p>Send us your preferred make, model and budget. We can help source suitable options.</p><div><Link href="/find-a-car">FIND A CAR</Link><a href="https://api.whatsapp.com/send?phone=96878967229" target="_blank" rel="noopener noreferrer">WHATSAPP K&Z</a></div></section>
  </main>
}
