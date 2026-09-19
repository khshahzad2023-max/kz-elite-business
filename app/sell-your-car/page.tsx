

export default function Page(){
return <>
<section className="page-hero"><div className="container">
<div className="eyebrow">Sell With K&Z</div><h1>Sell Your Car</h1><p className="lead">Send us your vehicle details and we can review it for advertising, buyer matching and sale support.</p>
<div className="actions"><a className="btn btn-primary" href="https://api.whatsapp.com/send?phone=96878967229&text=Hello%20K%26Z%20ELITE%20BUSINESS%2C%20I%20am%20interested%20in%20your%20sell%20my%20car%20service.%20Please%20send%20me%20more%20details.">WhatsApp +968 78967229</a><a className="btn btn-secondary" href="https://api.whatsapp.com/send?phone=96899248431&text=Hello%20K%26Z%20ELITE%20BUSINESS%2C%20I%20am%20interested%20in%20your%20sell%20my%20car%20service.%20Please%20send%20me%20more%20details.">WhatsApp +968 99248431</a><a className="btn btn-secondary" href="mailto:info@kzelitebusiness.com">Email Us</a></div>
</div></section>
<section className="section"><div className="container">


<div className="feature-box">
  <form className="form">
    <input placeholder="Full Name" />
    <input placeholder="Phone / WhatsApp" />
    <input placeholder="Email (optional)" />
    <input placeholder="Location" />
    <textarea placeholder="Tell us what you need..."></textarea>
    <a className="btn btn-primary full" href="https://api.whatsapp.com/send?phone=96878967229&text=Hello%20K%26Z%20ELITE%20BUSINESS%2C%20I%20am%20interested%20in%20your%20sell%20my%20car%20service.%20Please%20send%20me%20more%20details.">WhatsApp +968 78967229</a>
    <a className="btn btn-secondary full" href="https://api.whatsapp.com/send?phone=96899248431&text=Hello%20K%26Z%20ELITE%20BUSINESS%2C%20I%20am%20interested%20in%20your%20sell%20my%20car%20service.%20Please%20send%20me%20more%20details.">WhatsApp +968 99248431</a>
  </form>
</div>
<div className="notice" style={{marginTop:"22px"}}>Recommended details: make, model, year, mileage, GCC/imported spec, asking price, location, registration validity and photos.</div>
</div></section>
</>
}
