import CarEnquiryForm from "../CarEnquiryForm";

export const metadata = {
  title: "Contact K&Z ELITE BUSINESS | Cars in Muscat",
  description: "Contact K&Z ELITE BUSINESS in Muscat for car buying, selling, sourcing and car finance enquiries.",
  alternates: { canonical: "/contact" },
};

export default function Contact() {
  return <main>
    <section className="page-hero"><div className="container">
      <div className="eyebrow">CONTACT K&Z</div>
      <h1>Contact Us</h1>
      <p className="lead">For car buying, selling, sourcing or finance assistance, contact K&Z ELITE BUSINESS.</p>
      <div className="actions">
        <a className="btn btn-primary" href="tel:+96878967229">Call +968 78967229</a>
        <a className="btn btn-secondary" href="tel:+96899248431">Call +968 99248431</a>
        <a className="btn btn-secondary" href="mailto:info@kzelitebusiness.com">Email Us</a>
      </div>
    </div></section>
    <section className="section"><div className="container kz-enquiry-container">
      <h2>Send a Car Enquiry</h2>
      <p>Fill in your details and review the prepared message in WhatsApp before sending.</p>
      <CarEnquiryForm type="contact" />
    </div></section>
  </main>;
}
