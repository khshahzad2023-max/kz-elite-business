import CarShowcaseSlider from "./CarShowcaseSlider";
import Link from "next/link";

export default function Home(){
 return <main className="kz-home-v3">
  <section className="kz-brand-opening kz-intro-v4">
   <div className="kz-muscat-bg" aria-hidden="true"/>

   <div className="kz-brand-lockup kz-brand-split">
    <div className="kz-brand-copy">
     <h1>K&amp;Z<br/><em>ELITE BUSINESS</em></h1>
     <p>ONE NAME • MANY SOLUTIONS</p>
     <div className="kz-home-hero-actions"><a href="#who-we-are">DISCOVER OUR STORY <span>↓</span></a><Link href="/cars" className="kz-home-hero-secondary">EXPLORE CARS ↗</Link><a href="#our-services" className="kz-home-hero-secondary">OUR SERVICES ↓</a></div>
    </div>
    <div className="kz-brand-mark"><img src="/kz-hero-logo-transparent.png" alt="K&Z ELITE BUSINESS"/></div>
   </div>
   <div className="kz-opening-location">MUSCAT • SULTANATE OF OMAN</div>
  </section>

  <section id="automotive-entry" className="kz-showcase">
   <div className="container kz-showcase-inner">
    <div className="kz-showcase-heading"><div className="kz-showcase-eyebrow"><i/> EXPLORE OUR CARS <i/></div><h2>Your Drive. <em>Your Choice.</em></h2><p>Buy, Sell or Rent — All in One Place at K&amp;Z.</p></div>
    <div className="kz-showcase-stage kz-showcase-stage-crown">
     <div className="kz-showcase-photo-backdrop" aria-label="K&Z cars rotating in the background"><CarShowcaseSlider/></div>
     <div className="kz-showcase-options">
      <Link href="/cars" className="kz-showcase-card kz-showcase-buy"><span className="kz-showcase-symbol" aria-hidden="true">◇</span><h3>BUY CARS</h3><p>Explore our available cars with vehicle details and clear pricing.</p><span className="kz-showcase-action">EXPLORE CARS <b>›</b></span></Link>
      <Link href="/sell-your-car" className="kz-showcase-card kz-showcase-sell"><span className="kz-showcase-symbol" aria-hidden="true">✧</span><h3>SELL YOUR CAR</h3><p>Get in touch with K&amp;Z for a simple, straightforward selling enquiry.</p><span className="kz-showcase-action">SELL YOUR CAR <b>›</b></span></Link>
      <Link href="/rent-a-car" className="kz-showcase-card kz-showcase-rent"><span className="kz-showcase-symbol" aria-hidden="true">⌁</span><h3>RENT A CAR</h3><p>Explore convenient rental options to suit your needs.</p><span className="kz-showcase-action">EXPLORE RENTALS <b>›</b></span></Link>
     </div>
    </div>
    <div className="kz-showcase-benefits"><span>✦ &nbsp; Quality Cars</span><span>◇ &nbsp; Trusted Deals</span><span>✓ &nbsp; Transparent Process</span><span>✧ &nbsp; Dedicated Support</span></div>
   </div>
  </section>

  <section id="our-services" className="section alt kz-auto-premium">
   <div className="container kz-auto-container">
    <div className="kz-auto-intro">
     <div className="kz-auto-copy">
      <div className="kz-auto-eyebrow"><span className="kz-auto-eyebrow-line"/>K&amp;Z AUTOMOTIVE SERVICES</div>
      <h2>We Pick Up Your Car.<br/><em>We Take Care of the Rest.</em></h2>
      <p className="kz-auto-lead">You tell us what your car needs. We arrange the pickup, get the work done and deliver your car back to you.</p>
      <p className="kz-auto-services-text">Washing • Interior Cleaning • Tyres • Batteries • Mechanical Work • Polishing • Tinting • Decoration &amp; More</p>
     </div>
     <div className="kz-auto-visual" aria-hidden="true">
      <div className="kz-auto-photo"/>
      <div className="kz-auto-visual-bottom"><span className="kz-auto-live-dot"/> YOUR CAR. OUR CARE.</div>
     </div>
    </div>
    <div className="kz-auto-steps" aria-label="How our pickup and delivery service works">
     <div className="kz-auto-step"><div className="kz-auto-step-top"><span className="kz-auto-step-index">01</span><span className="kz-auto-step-mark" aria-hidden="true">↗</span></div><h3>We Pick Up</h3><p>Contact K&amp;Z and arrange vehicle collection.</p></div>
     <div className="kz-auto-step"><div className="kz-auto-step-top"><span className="kz-auto-step-index">02</span><span className="kz-auto-step-mark" aria-hidden="true">✦</span></div><h3>We Arrange the Work</h3><p>We coordinate the requested services and keep you updated.</p></div>
     <div className="kz-auto-step"><div className="kz-auto-step-top"><span className="kz-auto-step-index">03</span><span className="kz-auto-step-mark" aria-hidden="true">✓</span></div><h3>We Deliver Back</h3><p>Your vehicle is returned after the work is completed.</p></div>
    </div>
    <div className="kz-auto-footer">
     <div className="kz-auto-actions"><a className="kz-auto-primary" href="https://api.whatsapp.com/send?phone=96878967229&text=Hello%20K%26Z%2C%20I%20would%20like%20to%20book%20car%20pickup%20and%20automotive%20service.">BOOK A SERVICE <span>↗</span></a><Link className="kz-auto-secondary" href="/automotive">VIEW AUTOMOTIVE SERVICES <span>↗</span></Link></div>
     <div className="kz-auto-disclaimer" role="note"><span className="kz-auto-notice-icon" aria-hidden="true">ⓘ</span><div><strong>SERVICE CHARGES APPLY</strong><p>Pickup, delivery and arranged services are chargeable. We confirm the prices with you before work begins.</p></div></div>
    </div>
   </div>
  </section>

  <section className="section">
   <div className="container">
    <div className="eyebrow">CAR FINANCE ASSISTANCE</div>
    <h2>Need help with car finance?</h2>
    <p className="lead">We can help you enquire about vehicle finance through independent third-party providers. K&amp;Z does not directly provide loans; approval and terms are decided by the finance provider.</p>
    <Link href="/finance-assistance" className="btn btn-secondary">LEARN MORE ↗</Link>
   </div>
  </section>

  <section id="who-we-are" className="kz-who-section">
   <div className="container kz-who-layout">
    <div className="kz-who-title"><small>WHO WE ARE</small><h2>Built from one<br/>shared vision.</h2></div>
    <div className="kz-who-story">
     <p>K&amp;Z ELITE BUSINESS was founded on the shared vision of two partners, united by a passion for automobiles, quality service, and lasting customer relationships.</p>
     <p>Based in Muscat, Sultanate of Oman, we help customers buy, sell and rent cars, and arrange automotive services through one trusted point of contact.</p>
     <p>We also make car care easier by arranging vehicle pickup, the requested work, and return delivery.</p>
     <span>ONE NAME • MANY SOLUTIONS</span>
    </div>
   </div>
  </section>

 </main>
}
