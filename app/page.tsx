import CarShowcaseSlider from "./CarShowcaseSlider";
import Link from "next/link";

export default function Home(){
 return <main className="kz-home-v3">
  <Link href="/admin/cars" className="kz-owner-dashboard-tab" aria-label="Open K&Z owner car dashboard"><span className="kz-owner-dashboard-tab-symbol">▦</span><span className="kz-owner-dashboard-tab-text">OWNER DASHBOARD</span></Link>
  <section className="kz-brand-opening kz-intro-v4">
   <div className="kz-muscat-bg" aria-hidden="true"/>

   <div className="kz-brand-lockup kz-brand-split">
    <div className="kz-brand-copy">
     <h1>K&amp;Z<br/><em>ELITE BUSINESS</em></h1>
     <p>ONE NAME • MANY SOLUTIONS</p>
     <div className="kz-home-hero-actions"><a href="#who-we-are">DISCOVER OUR STORY <span>↓</span></a><Link href="/cars" className="kz-home-hero-secondary">EXPLORE CARS ↗</Link><Link href="/sold-cars" className="kz-home-hero-secondary">SOLD CARS ↗</Link></div>
    </div>
    <div className="kz-brand-mark"><img src="/kz-hero-logo-transparent.png" alt="K&Z ELITE BUSINESS"/></div>
   </div>
   <div className="kz-opening-location">MUSCAT • SULTANATE OF OMAN</div>
  </section>

  <section id="automotive-entry" className="kz-showcase">
   <div className="container kz-showcase-inner">
    <div className="kz-showcase-heading"><div className="kz-showcase-eyebrow"><i/> EXPLORE OUR CARS <i/></div><h2>Your Drive. <em>Your Choice.</em></h2><p>Buy, sell and find the right car with K&amp;Z.</p></div>
    <div className="kz-showcase-stage kz-showcase-stage-crown">
     <div className="kz-showcase-photo-backdrop" aria-label="K&Z cars rotating in the background"><CarShowcaseSlider/></div>
     <div className="kz-showcase-options">
      <Link href="/cars" className="kz-showcase-card kz-showcase-buy"><span className="kz-showcase-symbol" aria-hidden="true">◇</span><h3>BUY CARS</h3><p>Explore our available cars with vehicle details and clear pricing.</p><span className="kz-showcase-action">EXPLORE CARS <b>›</b></span></Link>
      <Link href="/sell-your-car" className="kz-showcase-card kz-showcase-sell"><span className="kz-showcase-symbol" aria-hidden="true">✧</span><h3>SELL YOUR CAR</h3><p>Get in touch with K&amp;Z for a simple, straightforward selling enquiry.</p><span className="kz-showcase-action">SELL YOUR CAR <b>›</b></span></Link>
      <Link href="/find-a-car" className="kz-showcase-card kz-showcase-rent"><span className="kz-showcase-symbol" aria-hidden="true">⌁</span><h3>FIND A CAR</h3><p>Tell us what you want and let K&amp;Z help with your car search.</p><span className="kz-showcase-action">FIND MY CAR <b>›</b></span></Link>
     </div>
    </div>
    <div className="kz-showcase-benefits"><span>✦ &nbsp; Quality Cars</span><span>◇ &nbsp; Trusted Deals</span><span>✓ &nbsp; Transparent Process</span><span>✧ &nbsp; Dedicated Support</span></div>
   </div>
  </section>

  <section id="finance-assistance" className="section kz-finance-premium">
   <div className="container kz-finance-container">
    <div className="kz-finance-top">
     <div className="kz-finance-copy">
      <div className="kz-finance-eyebrow"><span/>CAR FINANCE ASSISTANCE</div>
      <h2>Your Next Car.<br/><em>Finance Made Easier.</em></h2>
      <p className="kz-finance-lead">Looking for car finance? K&amp;Z helps you enquire with independent finance providers and guides you through the next steps.</p>
      <p className="kz-finance-subtext">A simpler way to explore your options — with clear communication and support along the way.</p>
     </div>
     <div className="kz-finance-visual" aria-hidden="true">
      <div className="kz-finance-visual-label">K&amp;Z FINANCE ASSISTANCE</div>
      <div className="kz-finance-visual-symbol">K<span>&amp;</span>Z</div>
      <div className="kz-finance-visual-lines"><i/><i/><i/></div>
      <div className="kz-finance-visual-footer">YOUR CAR. YOUR CHOICE.</div>
     </div>
    </div>
    <div className="kz-finance-steps" aria-label="How K&Z finance assistance works">
     <div className="kz-finance-step"><span>01</span><h3>Tell Us Your Needs</h3><p>Share the vehicle details and your finance enquiry.</p></div>
     <div className="kz-finance-step"><span>02</span><h3>We Assist You</h3><p>We help you connect with independent finance providers.</p></div>
     <div className="kz-finance-step"><span>03</span><h3>Provider Decision</h3><p>The finance provider confirms eligibility, approval and terms.</p></div>
    </div>
    <div className="kz-finance-bottom">
     <div className="kz-finance-actions"><Link href="/finance-assistance" className="kz-finance-primary">EXPLORE FINANCE ASSISTANCE <span>↗</span></Link><a className="kz-finance-secondary" href="https://api.whatsapp.com/send?phone=96878967229&amp;text=Hello%20K%26Z%2C%20I%20would%20like%20help%20with%20car%20finance.">ASK K&amp;Z <span>↗</span></a></div>
     <div className="kz-finance-disclosure" role="note"><span className="kz-finance-info" aria-hidden="true">ⓘ</span><div><strong>FINANCE ASSISTANCE CHARGES APPLY</strong><p>K&amp;Z charges a service fee for finance assistance. We confirm our fee with you before proceeding. Loans, approval, rates and terms are determined solely by independent finance providers; K&amp;Z is not a lender.</p></div></div>
    </div>
   </div>
  </section>

  <section id="who-we-are" className="kz-who-section">
   <div className="container kz-who-layout">
    <div className="kz-who-title"><small>WHO WE ARE</small><h2>Built from one<br/>shared vision.</h2></div>
    <div className="kz-who-story">
     <p>K&amp;Z ELITE BUSINESS was founded on the shared vision of two partners, united by a passion for automobiles, transparent deals, and lasting customer relationships.</p>
     <p>Based in Muscat, Sultanate of Oman, we help customers buy and sell cars, find the right vehicle, and enquire about car finance through independent providers.</p>
     <p>Our focus is making car buying and selling simpler with clear listings, genuine vehicle details and direct communication.</p>
     <span>ONE NAME • MANY SOLUTIONS</span>
    </div>
   </div>
  </section>

 </main>
}
