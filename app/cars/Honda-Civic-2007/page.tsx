"use client";

import { useState } from "react";

const images = [
  "/cars/Honda-Civic-2007/1.jpg",
  "/cars/Honda-Civic-2007/2.jpg",
  "/cars/Honda-Civic-2007/3.jpg",
  "/cars/Honda-Civic-2007/4.jpg",
  "/cars/Honda-Civic-2007/5.jpg",
  "/cars/Honda-Civic-2007/6.jpg",
];

export default function HondaCivicPage() {
  const [current, setCurrent] = useState(0);

  const previousImage = () => {
    setCurrent((current - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setCurrent((current + 1) % images.length);
  };

  const whatsappLink =
    "https://api.whatsapp.com/send?phone=96878967229&text=Hello%20K%26Z%20Elite%20Business,%20I%20am%20interested%20in%20the%20Honda%20Civic%202007.%20Please%20send%20me%20the%20price%20and%20more%20details.";

  const details = [
    ["Model", "2007"],
    ["Specification", "GCC Spec"],
    ["Option", "Full Option No. 1"],
    ["Feature", "Android Player"],
    ["Camera", "Reverse Camera"],
    ["Condition", "Well Maintained"],
    ["Mulkiya", "1 Year"],
    ["Location", "Wadi Kabir, Muscat"],
    ["Finance", "Available"],
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #050b17 0%, #07172d 55%, #0a2240 100%)",
        color: "white",
        padding: "40px 20px 80px",
      }}
    >
      <div style={{ maxWidth: "1150px", margin: "0 auto" }}>
        <a
          href="/cars"
          style={{
            color: "#d6aa52",
            textDecoration: "none",
            fontWeight: "bold",
            display: "inline-block",
            marginBottom: "25px",
          }}
        >
          ← Back to Available Cars
        </a>

        <div style={{ marginBottom: "25px" }}>
          <p
            style={{
              color: "#d6aa52",
              fontSize: "14px",
              letterSpacing: "2px",
              fontWeight: "bold",
              marginBottom: "8px",
            }}
          >
            AVAILABLE VEHICLE
          </p>

          <h1
            style={{
              fontSize: "clamp(34px, 5vw, 58px)",
              margin: 0,
              fontWeight: "800",
            }}
          >
            Honda Civic 2007
          </h1>

          <p
            style={{
              color: "#b9c4d3",
              marginTop: "10px",
              fontSize: "18px",
            }}
          >
            GCC Spec • Full Option No. 1 • Reverse Camera
          </p>
        </div>

        <div
          style={{
            position: "relative",
            borderRadius: "22px",
            overflow: "hidden",
            border: "1px solid rgba(214,170,82,0.35)",
            background: "#020711",
            boxShadow: "0 20px 55px rgba(0,0,0,0.35)",
          }}
        >
          <img
            src={images[current]}
            alt={`Honda Civic 2007 photo ${current + 1}`}
            style={{
              width: "100%",
              height: "clamp(300px, 58vw, 650px)",
              objectFit: "contain",
              display: "block",
              background: "#020711",
            }}
          />

          <button
            onClick={previousImage}
            aria-label="Previous photo"
            style={{
              position: "absolute",
              left: "18px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.3)",
              background: "rgba(0,0,0,0.65)",
              color: "white",
              fontSize: "26px",
              cursor: "pointer",
            }}
          >
            ‹
          </button>

          <button
            onClick={nextImage}
            aria-label="Next photo"
            style={{
              position: "absolute",
              right: "18px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.3)",
              background: "rgba(0,0,0,0.65)",
              color: "white",
              fontSize: "26px",
              cursor: "pointer",
            }}
          >
            ›
          </button>

          <div
            style={{
              position: "absolute",
              bottom: "18px",
              right: "18px",
              padding: "8px 14px",
              borderRadius: "20px",
              background: "rgba(0,0,0,0.7)",
              fontSize: "14px",
            }}
          >
            {current + 1} / {images.length}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "10px",
            overflowX: "auto",
            padding: "15px 2px 25px",
          }}
        >
          {images.map((image, index) => (
            <button
              key={image}
              onClick={() => setCurrent(index)}
              aria-label={`View photo ${index + 1}`}
              style={{
                border:
                  current === index
                    ? "3px solid #d6aa52"
                    : "2px solid rgba(255,255,255,0.15)",
                borderRadius: "10px",
                padding: 0,
                overflow: "hidden",
                background: "transparent",
                cursor: "pointer",
                minWidth: "105px",
              }}
            >
              <img
                src={image}
                alt={`Honda Civic thumbnail ${index + 1}`}
                style={{
                  width: "105px",
                  height: "72px",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </button>
          ))}
        </div>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "18px",
            marginTop: "20px",
          }}
        >
          {details.map(([label, value]) => (
            <div
              key={label}
              style={{
                padding: "20px",
                borderRadius: "15px",
                background: "rgba(13,42,75,0.65)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div
                style={{
                  color: "#d6aa52",
                  fontSize: "13px",
                  fontWeight: "bold",
                  marginBottom: "7px",
                  letterSpacing: "1px",
                }}
              >
                {label.toUpperCase()}
              </div>

              <div style={{ fontSize: "18px", fontWeight: "600" }}>
                {value}
              </div>
            </div>
          ))}
        </section>

        <div
          style={{
            marginTop: "25px",
            padding: "20px",
            borderRadius: "15px",
            border: "1px solid rgba(214,170,82,0.35)",
            background: "rgba(214,170,82,0.08)",
          }}
        >
          <strong style={{ color: "#e3b963", fontSize: "18px" }}>
            Finance Option Available
          </strong>

          <p style={{ margin: "7px 0 0", color: "#c9d3df" }}>
            Contact us for price, finance options and complete vehicle details.
          </p>
        </div>

        <div
          style={{
            marginTop: "30px",
            padding: "30px",
            borderRadius: "20px",
            background:
              "linear-gradient(135deg, rgba(16,53,92,0.95), rgba(9,29,52,0.95))",
            border: "1px solid rgba(214,170,82,0.3)",
            textAlign: "center",
          }}
        >
          <h2 style={{ marginTop: 0, fontSize: "28px" }}>
            Interested in this Honda Civic?
          </h2>

          <p style={{ color: "#bac7d6", marginBottom: "22px" }}>
            Contact K&Z Elite Business for price and further details.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              background: "#d6aa52",
              color: "#07101f",
              padding: "15px 28px",
              borderRadius: "10px",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "17px",
            }}
          >
            WhatsApp for Price & Details
          </a>
        </div>
      </div>
    </main>
  );
}