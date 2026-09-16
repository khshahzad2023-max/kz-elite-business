import Image from "next/image";

export type SoldCar = {
  name: string;
  year: string;
  images: string[];
  imageAlt: string;
  details: string[];
  summary: string;
};

export default function SoldCarCard({ car, showGallery = false }: { car: SoldCar; showGallery?: boolean }) {
  return (
    <article className="sold-card">
      <div className="sold-image-wrap">
        <Image
          className="sold-image"
          src={car.images[0]}
          alt={car.imageAlt}
          width={720}
          height={960}
          sizes="(max-width: 620px) 100vw, (max-width: 900px) 50vw, 380px"
        />
        <span className="sold-ribbon">Sold</span>
      </div>
      {showGallery && car.images.length > 1 && (
        <div className="sold-gallery">
          {car.images.slice(1).map((image, index) => (
            <Image
              key={image}
              src={image}
              alt={`${car.imageAlt} – view ${index + 2}`}
              width={480}
              height={360}
              sizes="(max-width: 620px) 50vw, 190px"
            />
          ))}
        </div>
      )}
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
