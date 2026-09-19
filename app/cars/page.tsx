"use client";

import { useState } from "react";

const cars = [
{
  name: "Hyundai Veloster 2016",
  images: [
    "/cars/Hyundai-Veloster-2016/1.jpg",
    "/cars/Hyundai-Veloster-2016/2.jpg",
    "/cars/Hyundai-Veloster-2016/3.jpg",
  ],
  details: "GCC Spec • 1.6L • Full Option • Panoramic Sunroof",
  mileage: "81,000 KM",
  location: "Wadi Kabir, Muscat",
  href: "/cars/Hyundai-Veloster-2016",
},  
{
    name: "Haval Drago 2024",
    images: [
      "/cars/haval-drago-2024/1.jpg",
      "/cars/haval-drago-2024/2.jpg",
      "/cars/haval-drago-2024/3.jpg",
    ],
    details: "2.0L Turbo • 4WD • GCC Oman Showroom",
    mileage: "Below 40,000 KM",
    location: "Qurum, Muscat",
    href: "/cars/haval-drago-2024",
  },

  {
    name: "GAC GS3 2021",
    images: [
      "/cars/Gac-GS3-2021/1.jpg",
      "/cars/Gac-GS3-2021/2.jpg",
      "/cars/Gac-GS3-2021/3.jpg",
    ],
    details: "GCC Spec • Automatic • Sunroof",
    mileage: "120,248 KM",
    location: "Azaiba, Muscat",
    href: "/cars/Gac-GS3-2021",
  },

  {
    name: "Ford Explorer 2016",
    images: [
      "/cars/Ford-Explorer-2016/1.jpg",
      "/cars/Ford-Explorer-2016/2.jpg",
      "/cars/Ford-Explorer-2016/3.jpg",
    ],
    details: "USA Specs • 3.5L V6 • 4WD • 7 Seater",
    mileage: "240,000 Miles",
    location: "Mahbela, Muscat",
    href: "/cars/Ford-Explorer-2016",
  },
{
  name: "Honda Civic 2007",
  images: [
    "/cars/Honda-Civic-2007/1.jpg",
    "/cars/Honda-Civic-2007/2.jpg",
    "/cars/Honda-Civic-2007/3.jpg",
  ],
  details: "GCC Spec • Full Option No. 1 • Reverse Camera",
  mileage: "Well Maintained",
  location: "Wadi Kabir, Muscat",
  href: "/cars/Honda-Civic-2007",
},
{
  name: "Hyundai Santa Fe 2015",
  images: [
    "/cars/Hyundai-Santa-Fe-2015/1.jpg",
    "/cars/Hyundai-Santa-Fe-2015/2.jpg",
    "/cars/Hyundai-Santa-Fe-2015/3.jpg",
  ],
  details: "GCC Spec • 2.4L • 4WD • 7 Seater",
  mileage: "Well Maintained",
  location: "Azaiba, Muscat",
  href: "/cars/Hyundai-Santa-Fe-2015",
},
{
  name: "Mercedes-Benz GLC 300 2019",
  images: [
    "/cars/Mercedes-Benz-GLC300-2019/1.jpg",
    "/cars/Mercedes-Benz-GLC300-2019/2.jpg",
    "/cars/Mercedes-Benz-GLC300-2019/3.jpg",
  ],
  details: "US Specs • Panoramic Sunroof • Premium Interior",
  mileage: "190,000 KM",
  location: "Ghoubra, Muscat",
  href: "/cars/Mercedes-Benz-GLC300-2019",
},
{
  name: "Mitsubishi Eclipse Cross 2018",
  images: [
    "/cars/Mitsubishi-Eclipse-Cross-ES-2018/1.jpg",
    "/cars/Mitsubishi-Eclipse-Cross-ES-2018/2.jpg",
    "/cars/Mitsubishi-Eclipse-Cross-ES-2018/3.jpg",
  ],
  details: "Imported Spec • 1.5L • Automatic",
  mileage: "159,000 KM",
  location: "Muscat, Oman",
  href: "/cars/Mitsubishi-Eclipse-Cross-ES-2018",
},
{
  name: "Nissan Rogue SV 2018",
  images: [
    "/cars/Nissan-Rogue-SV-2018/1.jpg",
    "/cars/Nissan-Rogue-SV-2018/2.jpg",
    "/cars/Nissan-Rogue-SV-2018/3.jpg",
  ],
  details: "Imported USA • 2.5L Petrol • SV",
  mileage: "118,000 Miles",
  location: "Ruwi, Muscat",
  href: "/cars/Nissan-Rogue-SV-2018",
},
{
  name: "Nissan Versa SV 2020",
  images: [
    "/cars/Nissan-Versa-SV-2020/1.jpg",
    "/cars/Nissan-Versa-SV-2020/2.jpg",
    "/cars/Nissan-Versa-SV-2020/3.jpg",
  ],
  details: "SV • Imported • Automatic",
  mileage: "85,000 KM",
  location: "Al Hail, Muscat",
  href: "/cars/Nissan-Versa-SV-2020",
},
{
  name: "Toyota RAV4 2019",
  details: "2019 • AWD • GCC Oman Showroom • 213,206 KM",
  location: "Azaiba, Muscat",

  images: [
    "/cars/Toyota-RAV4-2019/1.jpg",
    "/cars/Toyota-RAV4-2019/2.jpg",
    "/cars/Toyota-RAV4-2019/3.jpg",
    "/cars/Toyota-RAV4-2019/4.jpg",
    "/cars/Toyota-RAV4-2019/5.jpg",
    "/cars/Toyota-RAV4-2019/6.jpg",
    "/cars/Toyota-RAV4-2019/7.jpg",
  ],

  href: "/cars/Toyota-RAV4-2019",
},
];

function CarCard({ car }: { car: (typeof cars)[number] }) {
  const [current, setCurrent] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const previous = () => {
    setCurrent((current - 1 + car.images.length) % car.images.length);
  };

  const next = () => {
    setCurrent((current + 1) % car.images.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;

    const end = e.changedTouches[0].clientX;
    const difference = touchStart - end;

    if (difference > 50) next();
    if (difference < -50) previous();

    setTouchStart(null);
  };

  const whatsappLink =
    "https://api.whatsapp.com/send?phone=96878967229&text=" +
    encodeURIComponent(
      `Hello K&Z Elite Business, I am interested in the ${car.name}. Please send me the price and more details.`
    );

  return (
    <article
      style={{
        overflow: "hidden",
        borderRadius: "18px",
        background: "rgba(12, 38, 69, 0.78)",
        border: "1px solid rgba(255,255,255,0.10)",
        boxShadow: "0 12px 30px rgba(0,0,0,0.22)",
      }}
    >
      {/* MINI SLIDER */}
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        style={{
          position: "relative",
          height: "220px",
          background: "#030913",
          overflow: "hidden",
        }}
      >
        <img
          src={car.images[current]}
          alt={`${car.name} photo ${current + 1}`}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            display: "block",
          }}
        />

        {/* LEFT ARROW */}
        <button
          onClick={previous}
          aria-label="Previous photo"
          style={{
            position: "absolute",
            left: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            width: "38px",
            height: "38px",
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.25)",
            background: "rgba(0,0,0,0.65)",
            color: "white",
            fontSize: "22px",
            cursor: "pointer",
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.2s",
          }}
        >
          ‹
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={next}
          aria-label="Next photo"
          style={{
            position: "absolute",
            right: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            width: "38px",
            height: "38px",
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.25)",
            background: "rgba(0,0,0,0.65)",
            color: "white",
            fontSize: "22px",
            cursor: "pointer",
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.2s",
          }}
        >
          ›
        </button>

        {/* PHOTO COUNTER */}
        <div
          style={{
            position: "absolute",
            right: "12px",
            bottom: "12px",
            background: "rgba(0,0,0,0.68)",
            color: "white",
            padding: "5px 10px",
            borderRadius: "16px",
            fontSize: "12px",
          }}
        >
          {current + 1}/{car.images.length}
        </div>

        {/* DOTS */}
        <div
          style={{
            position: "absolute",
            bottom: "12px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "6px",
          }}
        >
          {car.images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              aria-label={`Photo ${index + 1}`}
              style={{
                width: current === index ? "18px" : "7px",
                height: "7px",
                borderRadius: "10px",
                border: "none",
                padding: 0,
                background:
                  current === index
                    ? "#d6aa52"
                    : "rgba(255,255,255,0.55)",
                cursor: "pointer",
                transition: "0.2s",
              }}
            />
          ))}
        </div>
      </div>

      {/* CAR INFO */}
      <div style={{ padding: "17px" }}>
        <h2
          style={{
            margin: "0 0 8px",
            fontSize: "22px",
            color: "white",
          }}
        >
          {car.name}
        </h2>

        <p
          style={{
            margin: "0 0 10px",
            color: "#d5dfeb",
            fontSize: "14px",
            lineHeight: 1.5,
          }}
        >
          {car.details}
        </p>

        <p
          style={{
            margin: 0,
            color: "#9fb1c7",
            fontSize: "13px",
            lineHeight: 1.7,
          }}
        >
          {car.mileage}
          <br />
          {car.location}
        </p>

        <div
          style={{
            display: "flex",
            gap: "9px",
            marginTop: "16px",
            flexWrap: "wrap",
          }}
        >
          <a
            href={car.href}
            style={{
              padding: "10px 15px",
              borderRadius: "9px",
              background: "#d6aa52",
              color: "#07101f",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: "700",
            }}
          >
            View Details
          </a>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "10px 15px",
              borderRadius: "9px",
              border: "1px solid rgba(255,255,255,0.22)",
              color: "white",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: "600",
            }}
          >
            WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}

export default function CarsPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">AVAILABLE VEHICLES</div>

          <h1>Cars for Sale</h1>

          <p className="lead">
            Browse available vehicles from K&Z ELITE BUSINESS.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
            }}
          >
            {cars.map((car) => (
              <CarCard key={car.name} car={car} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}