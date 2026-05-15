"use client";

const cars = [
  {
    name: "NISSAN KICKS",
    year: "2024",
    price: "4,800 OMR",
    mileage: "7,000 KMS",
    location: "Al Amerat",
  },
  {
    name: "Nissan Versa",
    year: "2020",
    price: "3,000 OMR",
    mileage: "112,000 KMS",
    location: "Al Amerat",
  },
];

export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", background: "#f4f4f4" }}>
      <section style={{
        background: "linear-gradient(to right, #020617, #1e3a8a)",
        color: "white",
        padding: "80px 30px",
        textAlign: "center"
      }}>
        <h1 style={{ fontSize: "52px", marginBottom: "20px" }}>
          KZ ELITE BUSINESS
        </h1>

        <p style={{ fontSize: "22px", marginBottom: "30px" }}>
          Quality Cars in Muscat, Oman
        </p>

        <a
          href="https://wa.me/96878967229"
          target="_blank"
          style={{
            display: "inline-block",
            background: "#22c55e",
            color: "white",
            padding: "15px 30px",
            fontSize: "18px",
            borderRadius: "8px",
            textDecoration: "none",
            margin: "8px"
          }}
        >
          Contact on WhatsApp
        </a>

        <br />

        <a
          href="https://wa.me/c/96878967229"
          target="_blank"
          style={{
            display: "inline-block",
            background: "#f59e0b",
            color: "white",
            padding: "15px 30px",
            fontSize: "18px",
            borderRadius: "8px",
            textDecoration: "none",
            margin: "8px"
          }}
        >
          View WhatsApp Catalog
        </a>
      </section>

      <section style={{ padding: "50px 30px" }}>
        <h2 style={{ textAlign: "center", fontSize: "36px" }}>
          Available Cars
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "25px",
          marginTop: "30px"
        }}>
          {cars.map((car) => (
            <div key={car.name} style={{
              background: "white",
              padding: "25px",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
            }}>
              <h3 style={{ fontSize: "26px" }}>{car.name}</h3>
              <p>Year: {car.year}</p>
              <p>Mileage: {car.mileage}</p>
              <p>Location: {car.location}</p>
              <h2 style={{ color: "#2563eb" }}>{car.price}</h2>

              <a
                href={`https://wa.me/96878967229?text=Hello, I am interested in ${car.name} ${car.year}`}
                target="_blank"
                style={{
                  display: "inline-block",
                  background: "#111827",
                  color: "white",
                  padding: "12px 20px",
                  borderRadius: "8px",
                  textDecoration: "none"
                }}
              >
                Ask About This Car
              </a>
            </div>
          ))}
        </div>
      </section>

      <section style={{
        background: "white",
        padding: "50px 30px",
        textAlign: "center"
      }}>
        <h2 style={{ fontSize: "36px" }}>Why Choose Us?</h2>
        <p>✔ Clean and reliable cars</p>
        <p>✔ Cars available in Muscat, Oman</p>
        <p>✔ WhatsApp contact available</p>
        <p>✔ Test drive available</p>
      </section>

      <section style={{
        background: "#020617",
        color: "white",
        padding: "50px 30px",
        textAlign: "center"
      }}>
        <h2>Contact KZ ELITE BUSINESS</h2>
        <p>Phone / WhatsApp: 78967229 / 99248431</p>
        <p>Email: khshahzad2023@gmail.com</p>
        <p>Location: Muscat, Oman</p>
      </section>
    </main>
  );
}