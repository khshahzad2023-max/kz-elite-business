
import "./globals.css";
import "./corporate.css";
import "./studio.css";
import "./concept.css";
import Link from "next/link";
import Script from "next/script";
import ContactDock from "./ContactDock";
import ContactAnalytics from "./ContactAnalytics";
import SiteIntro from "./SiteIntro";

export const metadata = {
  metadataBase: new URL("https://www.kzelitebusiness.com"),
  title: "K&Z ELITE BUSINESS | Cars & Services in Muscat, Oman",
  description: "K&Z ELITE BUSINESS in Muscat, Oman: used cars for sale, car rental enquiries, automotive services, building maintenance, property and business advertising.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

const nav = [
  ["Buy & Sell Cars","/cars"],
  ["Rent a Car","/rent-a-car"],
  ["Automotive Services","/automotive"],
  ["Building Maintenance","/building-maintenance"],
  ["Property Services","/properties"],
  ["Business Advertising","/advertising"],
];

export default function RootLayout({children}:{children:React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-VGTEMG48H9" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag("js", new Date());
          gtag("config", "G-VGTEMG48H9");
        `}</Script>
        <ContactAnalytics />
        <SiteIntro />
        <header className="header">
          <div className="container navbar">
            <Link href="/" className="brand">
              <img src="/kz-hero-logo-transparent.png" alt="K&Z ELITE BUSINESS" />
              <div className="brand-text">
                <strong>K&Z ELITE BUSINESS</strong>
                <span>ONE NAME • MANY SOLUTIONS</span>
              </div>
            </Link>
            <nav className="navlinks">
              {nav.map(([label,href]) => <Link key={href} href={href}>{label}</Link>)}
              <Link className="nav-cta" href="/contact">CONTACT</Link>
            </nav>
            <details className="kz-mobile-menu"><summary aria-label="Open navigation menu">☰ Menu</summary><div className="kz-mobile-menu-links">{nav.map(([label,href])=><Link key={href} href={href}>{label}</Link>)}<Link href="/contact">Contact</Link></div></details>
          </div>
        </header>
        {children}
        <ContactDock />
        <section aria-label="Google customer reviews" className="kz-review-invite">
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            <p className="kz-review-eyebrow">CUSTOMER FEEDBACK</p>
            <h2 style={{ fontSize: "clamp(24px, 4vw, 36px)", marginBottom: 10 }}>Your Experience Matters</h2>
            <p className="kz-review-copy">Purchased or sold a car with K&amp;Z? Share your genuine experience on Google.</p>
            <a href="https://g.page/r/CX2yk5KX5Yu2EBM/review" target="_blank" rel="noopener noreferrer" className="kz-review-button">★ Write a Google Review ↗</a>
          </div>
        </section>
        <footer className="footer">
          <div className="container">
            <div className="footer-grid">
              <div>
                <div className="brand">
                  <img src="/kz-hero-logo-transparent.png" alt="K&Z ELITE BUSINESS" />
                  <div className="brand-text">
                    <strong>K&Z ELITE BUSINESS</strong>
                    <span>ONE NAME • MANY SOLUTIONS</span>
                  </div>
                </div>
                <p>A multi-service business bringing specialized solutions together under one trusted name in Muscat, Sultanate of Oman.</p>
              </div>
              <div>
                <h4>Our Services</h4>
                <p><Link href="/cars">Buying &amp; Selling Cars</Link><br/>
                <Link href="/rent-a-car">Car Rental</Link><br/>
                <Link href="/automotive">Automotive Services</Link><br/>
                <Link href="/building-maintenance">Building Maintenance</Link><br/>
                <Link href="/properties">Property Services</Link><br/>
                <Link href="/advertising">Business Advertising</Link></p>
              </div>
              <div>
                <h4>Quick Links</h4>
                <p><Link href="/">Home</Link><br/><Link href="/cars">Available &amp; Sold Cars</Link><br/><Link href="/#who-we-are">About K&amp;Z</Link><br/><Link href="/contact">Contact Us</Link></p>
              </div>
              <div>
                <h4>Contact</h4>
                <p>Muscat, Sultanate of Oman<br/>
                <a href="tel:+96878967229">+968 78967229</a><br/>
                <a href="tel:+96899248431">+968 99248431</a><br/>
                <a href="mailto:info@kzelitebusiness.com">info@kzelitebusiness.com</a><br/>
                <a href="https://www.kzelitebusiness.com">kzelitebusiness.com</a></p>
              </div>
            </div>
            <div className="kz-footer-social"><a href="https://www.instagram.com/kz_elite_business/" target="_blank" rel="noopener noreferrer">Instagram ↗</a><a href="https://www.facebook.com/share/1H4otouqhj/" target="_blank" rel="noopener noreferrer">Facebook ↗</a><a href="https://www.tiktok.com/@kz_elite_business" target="_blank" rel="noopener noreferrer">TikTok ↗</a><a href="https://api.whatsapp.com/send?phone=96878967229" target="_blank" rel="noopener noreferrer">WhatsApp ↗</a></div>
            <div className="footer-bottom">
              <span>© 2026 K&Z ELITE BUSINESS. All rights reserved.</span>
              <span>KHURRAM & ZAINAB ELITE BUSINESS LLC</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
