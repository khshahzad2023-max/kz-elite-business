import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./inventory.module.css";

export const metadata: Metadata = {
  title: "Cars for Sale | K&Z ELITE BUSINESS",
  description: "Browse K&Z ELITE BUSINESS car listings in Oman. View full vehicle photos and details, and enquire directly by phone or WhatsApp.",
};

// Restore the original inventory banners, preserving supplied details and prices.
const cars = [
  "Nissan Kicks SV 2024", "Nissan Versa SV 2020", "BMW 420i Coupe 2024",
  "Hyundai Palisade 2024", "Hyundai Tucson Ultimate 2021", "Jeep Cherokee Latitude 2020",
  "Haval 4×4 SUV 2024", "Mazda CX-30 2022", "Mazda CX-5 2019",
  "MG HS Trophy 2021", "Kia K5 LXS 2022", "Toyota Yaris 2016",
  "Changan CS95 2023", "Dodge Charger V8 2013", "Hyundai Sonata Limited 2016",
  "Dodge Durango Crew 2013", "Mitsubishi Pajero GLS V6 2016", "Nissan Altima 2012",
  "Nissan Altima SL AWD 2019", "Lexus GS300 2006", "Honda Accord 2013",
  "Hyundai Sonata 2016", "Honda CR-V 2010", "Lexus ES350 2017",
];
const dimensions = [
  [853, 1280], [1122, 1402], [1402, 1122], [1280, 853], [1024, 1536], [1024, 1536],
  [1024, 1536], [1024, 1536], [1024, 1536], [1402, 1122], [1024, 1536], [1254, 1254],
  [1024, 1536], [1024, 1536], [1149, 1369], [1149, 1369], [853, 1280], [1024, 1536],
  [853, 1280], [853, 1280], [1024, 1536], [1024, 1536], [1074, 1280], [1024, 1536],
];

export default function CarsPage() {
  return <>
    <section className="page-hero"><div className="container">
      <div className="eyebrow">K&Z Automotive • Oman</div>
      <h1>Cars for Sale</h1>
      <p className="lead">Explore our vehicle listings with full photos, specifications and advertised prices. Contact us to confirm current availability or arrange a viewing.</p>
      <div className="actions">
        <a className="btn btn-primary" href="https://api.whatsapp.com/send?phone=96878967229">WhatsApp +96878967229</a>
        <a className="btn btn-secondary" href="tel:+96878967229">Call +96878967229</a>
        <a className="btn btn-secondary" href="https://api.whatsapp.com/send?phone=96899248431">WhatsApp +96899248431</a>
      </div>
    </div></section>
    <section className="section"><div className="container">
      <div className="section-head">
        <div><div className="eyebrow">Vehicle Inventory</div><h2>Browse our cars</h2></div>
        <p>Open any banner to view its full details. Prices and availability are subject to confirmation.</p>
      </div>
      <div className={styles.grid}>
        {cars.map((name, index) => {
          const image = `/car${index + 1}.jpg.jpeg`;
          const enquiry = `https://api.whatsapp.com/send?phone=96878967229&text=${encodeURIComponent(`Hello K&Z, I am interested in the ${name} listing (car ${index + 1}). Is it still available?`)}`;
          return <article className={styles.card} key={name}>
            <a className={styles.banner} href={image} target="_blank" rel="noopener noreferrer" aria-label={`View full ${name} listing banner`}>
              <Image src={image} alt={`${name} — original vehicle photos, specifications and advertised price`} width={dimensions[index][0]} height={dimensions[index][1]} sizes="(max-width: 620px) 100vw, (max-width: 900px) 50vw, 33vw" className={styles.image} />
            </a>
            <div className={styles.content}>
              <div className="eyebrow">Vehicle listing</div>
              <h3>{name}</h3>
              <a className={styles.details} href={image} target="_blank" rel="noopener noreferrer">View full photos & details ↗</a>
              <div className={styles.actions}>
                <a className="btn btn-primary" href={enquiry}>WhatsApp Enquiry</a>
                <a className="btn btn-secondary" href="tel:+96878967229" aria-label={`Call +96878967229 about ${name}`}>Call Now</a>
              </div>
            </div>
          </article>;
        })}
      </div>
      <div className="actions"><Link className="btn btn-secondary" href="/sold-cars">View Sold Cars</Link><Link className="btn btn-secondary" href="/find-a-car">Looking for a different car?</Link></div>
    </div></section>
  </>;
}
