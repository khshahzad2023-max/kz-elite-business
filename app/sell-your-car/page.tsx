import CarEnquiryForm from "../CarEnquiryForm";

export const metadata = {
  title: "Sell Your Car in Muscat | K&Z ELITE BUSINESS",
  description: "Send your car details to K&Z ELITE BUSINESS for sale support and buyer matching in Muscat, Oman.",
  alternates: { canonical: "/sell-your-car" },
};

export default function SellYourCar() {
  return <main>
    <section className="page-hero"><div className="container">
      <div className="eyebrow">SELL WITH K&Z</div>
      <h1>Sell Your Car</h1>
      <p className="lead">Share your vehicle details and let K&Z review it for buyer matching and sales support.</p>
    </div></section>
    <section className="section"><div className="container kz-enquiry-container">
      <h2>Tell Us About Your Car</h2>
      <p>Provide the make, model, year, mileage, GCC/import specification, asking price, location and registration validity. You can share photos after opening WhatsApp.</p>
      <CarEnquiryForm type="sell" />
    </div></section>
  </main>;
}
