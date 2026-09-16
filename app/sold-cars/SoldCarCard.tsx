import Image from "next/image";

export type SoldCar = {
  name: string;
  year: string;
  image: string;
  imageAlt: string;
  details: string[];
  summary: string;
};

export default function SoldCarCard({ car }: { car: SoldCar }) {
  return (
    <article className="sold-card">
      <div className="sold-image-wrap">
        <Image
          className="sold-image"
          src={car.image}
          alt={car.imageAlt}
          width={720}
          height={960}
          sizes="(max-width: 620px) 100vw, (max-width: 900px) 50vw, 380px"
        />
        <span className="sold-ribbon">Sold</span>
      </div>
      <div className="sold-content">
        <div className="eyebrow">Successfully Sold</div>
        <h3>{car.name} <span>{car.year}</span></h3>
        <div className="sold-specs">
          {car.details.map((detail) => <span key={detail}>{detail}</span>)}
        </div>
        <p>{car.summary}</p>
        <div className="sold-by">Sold by <strong>K&amp;Z ELITE BUSINESS</strong></div>
      </div>
    </article>
  );
}
