import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./inventory.module.css";

export const metadata: Metadata = {
  title: "Cars for Sale | K&Z ELITE BUSINESS",
  description: "Browse K&Z ELITE BUSINESS car listings in Oman. View full vehicle photos and details, and enquire directly by phone or WhatsApp.",
};

const cars = [
  "Ford Explorer 2016 4WD",
  "GAC GS3",
  "Haval Dargo 2024",
  "Honda Civic 2007 VTi i-VTEC",
  "Hyundai Santa Fe 2015 4WD",
  "Hyundai Veloster 2016",
  "Mercedes-Benz GLC 300 2019",
  "Mitsubishi Eclipse Cross 2018",
  "Nissan Rogue SV 2018",
  "Nissan Versa SV 2020",
  "Toyota RAV4 2019 AWD",
];

export default function CarsPage() {
  return <>
    <section className="page-hero"><div className="container">
      <div className="eyebrow">K&Z Automotive • Oman</div>
      <h1>Cars for Sale</h1>
      <p className="lead">Explore our currently available vehicle listings. Contact us to confirm availability or arrange a viewing.</p>
      <div className="actions">
        <a className="btn btn-primary" href="https://api.whatsapp.com/send?phone=96878967229">WhatsApp +96878967229</a>
        <a className="btn btn-secondary" href="tel:+96878967229">Call +96878967229</a>
        <a className="btn btn-secondary" href="https://api.whatsapp.com/send?phone=96899248431">WhatsApp +96899248431</a>
      </div>
    </div></section>
    <section className="section"><div className="container">
      <div className="section-head">
        <div><div className="eyebrow">Vehicle Inventory</div><h2>Browse our cars</h2></div>
        <p>Current K&Z ELITE BUSINESS vehicle inventory. Prices and availability are subject to confirmation.</p>
      </div>
      <div className={styles.grid}>
        {cars.map((name, index) => {
          const image = `/car${index + 1}.jpg.jpeg`;
          const enquiry = `https://api.whatsapp.com/send?phone=96878967229&text=${encodeURIComponent(`Hello K&Z, I am interested in the ${name}. Is it still available?`)}`;
          return <article className={styles.card} key={name}>
            <a className={styles.banner} href={image} target="_blank" rel="noopener noreferrer" aria-label={`View full ${name} listing banner`}>
              <Image src={image} alt={`${name} — K&Z ELITE BUSINESS vehicle listing`} width={1200} height={1500} sizes="(max-width: 620px) 100vw, (max-width: 900px) 50vw, 33vw" className={styles.image} />
            </a>
            <div className={styles.content}>
              <div className="eyebrow">Available vehicle</div>
              <h3>{name}</h3>
              <a className={styles.details} href={image} target="_blank" rel="noopener noreferrer">View full photos & details ↗</a>
              <div className={styles.actions}>
                <a className="btn btn-primary" href={enquiry}>WhatsApp Enquiry</a>
                <a className="btn btn-secondary" href="tel:+96878967229">Call Now</a>
              </div>
            </div>
          </article>;
        })}
      </div>
      <div className="actions"><Link className="btn btn-secondary" href="/sold-cars">View Sold Cars</Link><Link className="btn btn-secondary" href="/find-a-car">Looking for a different car?</Link></div>
    </div></section>
  </>;
}
