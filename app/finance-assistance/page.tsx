import Link from "next/link";
import FinanceEstimate from "../FinanceEstimate";

export const metadata = {
 title: "Car Finance Assistance | K&Z ELITE BUSINESS",
 description: "Car finance enquiry assistance in Muscat for new and used cars through independent providers, with an illustrative EMI calculator and document checklist.",
 alternates: { canonical: "/finance-assistance" },
};

const whatsapp = "https://api.whatsapp.com/send?phone=96878967229&text=Hello%20K%26Z%2C%20I%20need%20car%20finance%20assistance.%0ACar%20make%20and%20model%3A%0AModel%20year%3A%0APrice%20in%20OMR%3A%0AMy%20question%3A";

const docs = [
 ["01", "ID / Resident Card", "Omani ID or valid Resident Card. Passport and visa details may be needed for expatriate applicants."],
 ["02", "Driving Licence", "A valid Oman driving licence, when required by the finance provider."],
 ["03", "Proof of Income", "Salary certificate or other acceptable income evidence. Business owners may be asked for CR or business documents."],
 ["04", "Bank Statements", "Recent bank statements, often for 3–6 months, depending on the provider."],
 ["05", "Vehicle Details", "Quotation or purchase details; for a used car, Mulkiya, seller information or valuation may be needed."],
 ["06", "Other Requirements", "Down payment, insurance or additional documents may be requested following review."],
];

export default function FinanceAssistance(){
 return <main className="kz-fin-guide">
  <section className="kz-fin-guide-hero">
   <div className="container kz-fin-guide-hero-grid">
    <div>
     <div className="kz-fin-guide-kicker">K&amp;Z ELITE BUSINESS • MUSCAT, OMAN</div>
     <h1>Your Next Car.<br/><em>Finance Made Easier.</em></h1>
     <p>We help you enquire about car finance through independent providers, understand the next steps, and prepare your documents.</p>
     <div className="kz-fin-guide-actions"><a className="kz-fin-guide-primary" href={whatsapp}>ASK ABOUT FINANCE ↗</a><Link href="/cars" className="kz-fin-guide-outline">EXPLORE CARS ↗</Link></div>
    </div>
    <div className="kz-fin-guide-emblem" aria-label="K&Z finance assistance"><small>K&amp;Z FINANCE ASSISTANCE</small><strong>K<span>&amp;</span>Z</strong><small>YOUR CAR. YOUR CHOICE.</small></div>
   </div>
  </section>

  <section className="kz-fin-guide-section">
   <div className="container">
    <div className="kz-fin-guide-label">01 / VEHICLE FINANCE OPTIONS</div>
    <h2>Which Cars Can Be Financed?</h2>
    <p className="kz-fin-guide-intro">Finance may be available for <strong>new and used vehicles</strong>. Each provider sets its own eligibility rules, so we check the details of your chosen car before discussing possible options.</p>
    <div className="kz-fin-guide-cards">
     <article className="kz-fin-guide-card"><span>01</span><h3>New Cars</h3><p>Ask about finance options for eligible new vehicles through participating independent providers.</p></article>
     <article className="kz-fin-guide-card"><span>02</span><h3>Used Cars</h3><p>Used-car eligibility depends on model year, vehicle age, condition, valuation and the provider&apos;s criteria.</p></article>
     <article className="kz-fin-guide-card"><span>03</span><h3>Finance Terms</h3><p>Down payment, repayment period, interest or profit rate and instalments are assessed by the provider.</p></article>
    </div>
    <div className="kz-fin-guide-tip">Have a particular car in mind? Share its make, model, year and price with K&amp;Z so we can guide your enquiry.</div>
   </div>
  </section>

  <section className="kz-fin-guide-section kz-fin-guide-alt"><div className="container"><FinanceEstimate /></div></section>

  <section className="kz-fin-guide-section kz-fin-guide-alt">
   <div className="container">
    <div className="kz-fin-guide-label">02 / DOCUMENT CHECKLIST</div>
    <h2>What Documents Might You Need?</h2>
    <p className="kz-fin-guide-intro">Prepare the following common documents. The exact checklist depends on the finance provider, your residency and your employment or business status.</p>
    <div className="kz-fin-guide-docs">{docs.map(([n,name,description])=><article className="kz-fin-guide-doc" key={n}><span>{n}</span><div><h3>{name}</h3><p>{description}</p></div></article>)}</div>
   </div>
  </section>

  <section className="kz-fin-guide-section">
   <div className="container">
    <div className="kz-fin-guide-label">03 / TRANSPARENT FEES &amp; PROCESS</div>
    <h2>Clear Steps. Clear Charges.</h2>
    <div className="kz-fin-guide-process">
     <article><span>01</span><h3>Tell Us About Your Car</h3><p>Send us the car details and your finance question.</p></article>
     <article><span>02</span><h3>We Help You Enquire</h3><p>We assist with enquiries to independent finance providers.</p></article>
     <article><span>03</span><h3>The Provider Decides</h3><p>The finance provider assesses eligibility, approval and final finance terms.</p></article>
    </div>
    <div className="kz-fin-guide-notice" role="note"><span className="kz-fin-guide-notice-icon" aria-hidden="true">ⓘ</span><div><strong>K&amp;Z FINANCE ASSISTANCE SERVICE CHARGES APPLY</strong><p>K&amp;Z charges a separate service fee for its finance enquiry and coordination assistance. We confirm our fee with you before proceeding. Any lender charges or finance costs are separate. K&amp;Z does not provide loans or guarantee finance approval. Approval, rates, down payment and terms are decided solely by the independent finance provider.</p></div></div>
    <div className="kz-fin-guide-cta"><div><h3>Ready to Enquire?</h3><p>Message K&amp;Z with your car model, year, price and finance enquiry. Please do not send ID or bank documents in the first message.</p></div><a className="kz-fin-guide-primary" href={whatsapp}>START ON WHATSAPP ↗</a></div>
   </div>
  </section>
 </main>;
}
