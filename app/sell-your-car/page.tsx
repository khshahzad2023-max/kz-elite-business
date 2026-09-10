

export default function Page(){
return <>
<section className="page-hero"><div className="container">
<div className="eyebrow">Sell With K&Z</div><h1>Sell Your Car</h1><p className="lead">Send us your vehicle details and we can review it for advertising, buyer matching and sale support.</p>
<div className="actions"><a className="btn btn-primary" href="https://wa.me/96878967229">WhatsApp 78967229</a><a className="btn btn-secondary" href="mailto:info@kzelitebusiness.com">Email Us</a></div>
</div></section>
<section className="section"><div className="container">


<div className="feature-box">
  <form className="form">
    <input placeholder="Full Name" />
    <input placeholder="Phone / WhatsApp" />
    <input placeholder="Email (optional)" />
    <input placeholder="Location" />
    <textarea placeholder="Tell us what you need..."></textarea>
    <a className="btn btn-primary full" href="https://wa.me/96878967229">Send Enquiry on WhatsApp</a>
  </form>
</div>
<div className="notice" style={{marginTop:"22px"}}>Recommended details: make, model, year, mileage, GCC/imported spec, asking price, location, registration validity and photos.</div>
</div></section>
</>
}
