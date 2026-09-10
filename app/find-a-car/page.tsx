

export default function Page(){
return <>
<section className="page-hero"><div className="container">
<div className="eyebrow">Car Buying Service</div><h1>Looking for a Car?</h1><p className="lead">Tell K&Z what you want and your budget. We can help source suitable vehicles and connect you with available options.</p>
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
<div className="notice" style={{marginTop:"22px"}}>Include your preferred make/model, maximum budget, year range, GCC/imported preference and cash/finance requirement.</div>
</div></section>
</>
}
