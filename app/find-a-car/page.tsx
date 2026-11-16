import CarEnquiryForm from "../CarEnquiryForm";

export const metadata = {
  title: "Find a Car in Muscat | K&Z ELITE BUSINESS",
  description: "Looking for a particular car in Oman? Tell K&Z your preferred make, model, year, budget and specifications.",
  alternates: { canonical: "/find-a-car" },
};

export default function FindACar() {
  return <main>
    <section className="page-hero"><div className="container">
      <div className="eyebrow">K&Z CAR SOURCING</div>
      <h1>YOU DREAM IT. <span className="gold">WE FIND IT.</span></h1>
      <p className="lead">Tell us the car you want, your budget and preferences. We will help you explore options.</p>
    </div></section>
    <section className="section"><div className="container kz-enquiry-container">
      <h2>Find Your Next Car</h2>
      <p>Share your preferred make and model, budget, year range, GCC or imported preference, and cash or finance requirement.</p>
      <CarEnquiryForm type="find" />
    </div></section>
  </main>;
}
