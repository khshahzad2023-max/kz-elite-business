
import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "K&Z ELITE BUSINESS",
  description: "Cars, automotive services, rentals, maintenance, property and advertising services in Muscat, Oman.",
};

const nav = [
  ["Cars for Sale","/cars"],
  ["Sell Your Car","/sell-your-car"],
  ["Find a Car","/find-a-car"],
  ["Rent a Car","/rent-a-car"],
  ["Automotive","/automotive-services"],
  ["More Services","/services"],
];

export default function RootLayout({children}:{children:React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <div className="container navbar">
            <Link href="/" className="brand">
              <img src="/kz-master-logo.png" alt="K&Z ELITE BUSINESS" />
              <div className="brand-text">
                <strong>K&Z ELITE BUSINESS</strong>
                <span>ONE NAME • MANY SOLUTIONS</span>
              </div>
            </Link>
            <nav className="navlinks">
              {nav.map(([label,href]) => <Link key={href} href={href}>{label}</Link>)}
              <Link className="nav-cta" href="/contact">Contact</Link>
            </nav>
          </div>
        </header>
        {children}
        <footer className="footer">
          <div className="container">
            <div className="footer-grid">
              <div>
                <div className="brand">
                  <img src="/kz-master-logo.png" alt="K&Z ELITE BUSINESS" />
                  <div className="brand-text">
                    <strong>K&Z ELITE BUSINESS</strong>
                    <span>ONE NAME • MANY SOLUTIONS</span>
                  </div>
                </div>
                <p>Automotive, rentals, property, maintenance and advertising services across Muscat, Sultanate of Oman.</p>
              </div>
              <div>
                <h4>Core Business</h4>
                <p><Link href="/cars">Cars for Sale</Link><br/>
                <Link href="/sell-your-car">Sell Your Car</Link><br/>
                <Link href="/find-a-car">Find a Car</Link><br/>
                <Link href="/rent-a-car">Rent a Car</Link><br/>
                <Link href="/automotive-services">Automotive Services</Link></p>
              </div>
              <div>
                <h4>Contact</h4>
                <p>Muscat, Sultanate of Oman<br/>
                78967229<br/>
                info@kzelitebusiness.com<br/>
                kzelitebusiness.com</p>
              </div>
            </div>
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

