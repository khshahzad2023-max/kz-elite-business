export default function Home() {
  return (
    <main style={{ background: "#050505", color: "white", fontFamily: "Arial, sans-serif" }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "15px 50px", background: "#000", borderBottom: "1px solid #2b2208" }}>
        <img src="/logo.png" style={{ width: "120px" }} />
        <div style={{ display: "flex", gap: "30px", fontWeight: "bold" }}>
          <a href="/" style={{ color: "#f5b400", textDecoration: "none" }}>HOME</a>
          <a href="#services" style={{ color: "white", textDecoration: "none" }}>SERVICES</a>
          <a href="/portfolio.html" style={{ color: "white", textDecoration: "none" }}>PORTFOLIO</a>
          <a href="#contact" style={{ color: "white", textDecoration: "none" }}>CONTACT</a>
        </div>
        <a href="https://wa.me/96878967229" target="_blank" style={{ background: "#b88712", color: "white", padding: "12px 22px", borderRadius: "8px", textDecoration: "none", fontWeight: "bold" }}>
          WhatsApp
        </a>
      </nav>

      <section style={{ padding: "80px 60px", background: "linear-gradient(to right, #000 0%, #080808 55%, #1a1304 100%)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", alignItems: "center" }}>
        <div>
          <img src="/logo.png" style={{ width: "280px", marginBottom: "20px" }} />
          <h1 style={{ fontSize: "56px", margin: "0", fontWeight: "900" }}>KZ ELITE BUSINESS</h1>
          <h2 style={{ color: "#f5b400", fontSize: "28px" }}>BUY & SELL CARS IN OMAN</h2>
          <p style={{ color: "#ddd", fontSize: "20px", maxWidth: "520px", lineHeight: "1.6" }}>
            Best deals on quality cars. We make buying and selling cars easy, safe and reliable.
          </p>

          <div style={{ display: "flex", gap: "15px", flexWrap: "wrap", marginTop: "30px" }}>
            <a href="https://wa.me/96878967229" target="_blank" style={{ background: "#16a34a", color: "white", padding: "15px 25px", borderRadius: "8px", textDecoration: "none", fontWeight: "bold" }}>Contact on WhatsApp</a>
            <a href="https://wa.me/c/96878967229" target="_blank" style={{ border: "1px solid #f5b400", color: "#f5b400", padding: "15px 25px", borderRadius: "8px", textDecoration: "none", fontWeight: "bold" }}>View WhatsApp Catalog</a>
            <a href="/portfolio.html" target="_blank" style={{ background: "#f5b400", color: "black", padding: "15px 25px", borderRadius: "8px", textDecoration: "none", fontWeight: "bold" }}>View Portfolio</a>
          </div>

          <div style={{ display: "flex", gap: "25px", flexWrap: "wrap", marginTop: "35px", color: "#f5b400", fontWeight: "bold" }}>
            <span>🛡 Trusted Service</span>
            <span>💰 Best Prices</span>
            <span>⏱ Fast Process</span>
            <span>✅ Safe Deal</span>
          </div>
        </div>
<div>
  <img
    src="/hero-banner.png"
    alt="Premium Cars"
    style={{
      width: "100%",
      borderRadius: "20px",
      boxShadow: "0 0 30px rgba(255,215,0,0.25)",
      objectFit: "cover"
    }}
  />
</div>
              </section>

      <section id="services" style={{ padding: "70px 60px", textAlign: "center" }}>
        <p style={{ color: "#f5b400", fontWeight: "bold" }}>OUR SERVICES</p>
        <h2 style={{ fontSize: "38px" }}>What We Offer</h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "25px", marginTop: "35px" }}>
          {[
            ["🚗", "BUY CARS", "We buy cars at fair market prices."],
            ["🤝", "SELL CARS", "We help you sell your car quickly."],
            ["🏦", "FINANCE OPTIONS", "Finance option available for customers."],
            ["📢", "15+ PLATFORM ADVERTISING", "We advertise on 15+ platforms for quick sales."],
          ].map((s) => (
            <div key={s[1]} style={{ background: "#0b0b0b", border: "1px solid #5a4008", borderRadius: "14px", padding: "30px", textAlign: "left" }}>
              <div style={{ fontSize: "42px" }}>{s[0]}</div>
              <h3 style={{ color: "#f5b400" }}>{s[1]}</h3>
              <p style={{ color: "#ccc", lineHeight: "1.6" }}>{s[2]}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "70px 60px", borderTop: "1px solid #2b2208", textAlign: "center" }}>
        <p style={{ color: "#f5b400", fontWeight: "bold" }}>AVAILABLE CARS</p>
        <h2 style={{ fontSize: "38px" }}>Featured Cars</h2>
        <div style={{ margin: "35px auto", maxWidth: "900px", padding: "45px", border: "1px dashed #5a4008", borderRadius: "18px", color: "#aaa" }}>
         <div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "25px",
    marginTop: "40px"
  }}
>
  {Array.from({ length: 24 }, (_, i) => (
    <div
      key={i}
      style={{
        background: "#0b0b0b",
        border: "1px solid #5a4008",
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: "0 0 20px rgba(255,215,0,0.08)"
      }}
    >
      <img
        src={`/car${i + 1}.jpg.jpeg`}
        alt={`Car ${i + 1}`}
        style={{
          width: "100%",
          height: "auto",
          objectFit: "contain"
        }}
      />

      <div style={{ padding: "18px" }}>
        <h3 style={{ color: "#f5b400" }}>
          Premium Car
        </h3>

        <p style={{ color: "#ccc", lineHeight: "1.7" }}>
          Full details available on request.
        </p>

        <a
          href="https://wa.me/96878967229"
          target="_blank"
          style={{
            display: "inline-block",
            marginTop: "12px",
            background: "#16a34a",
            color: "white",
            padding: "12px 18px",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold"
          }}
        >
          WhatsApp Inquiry
        </a>
      </div>
    </div>
  ))}
</div> 
        </div>
      </section>

      <footer id="contact" style={{ padding: "45px 60px", borderTop: "1px solid #2b2208", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", textAlign: "center" }}>
        <div><h2 style={{ color: "#f5b400" }}>500+</h2><p>Cars Sold</p></div>
        <div><h2 style={{ color: "#f5b400" }}>100%</h2><p>Customer Satisfaction</p></div>
        <div><h2 style={{ color: "#f5b400" }}>Safe & Secure</h2><p>Our Priority</p></div>
        <div><h2 style={{ color: "#f5b400" }}>24/7 Support</h2><p>78967229</p></div>
      </footer>
    </main>
  );
}