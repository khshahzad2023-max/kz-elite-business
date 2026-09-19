

const items=[{title:"Electrical",text:"Electrical repair and installation work."},
{title:"Plumbing",text:"Plumbing repairs and maintenance."},
{title:"AC Services",text:"Air-conditioning service and maintenance."},
{title:"Painting",text:"Interior and exterior painting work."},
{title:"Cleaning",text:"General cleaning support."},
{title:"General Maintenance",text:"Repair and maintenance coordination for properties."}];

export default function Page(){
return <>
<section className="page-hero"><div className="container">
<div className="eyebrow">Property Services</div><h1>Building Maintenance</h1><p className="lead">Reliable maintenance solutions for homes, flats, offices and commercial properties.</p>
<div className="actions"><a className="btn btn-primary" href="https://api.whatsapp.com/send?phone=96878967229&text=Hello%20K%26Z%20ELITE%20BUSINESS%2C%20I%20am%20interested%20in%20your%20building%20maintenance%20service.%20Please%20send%20me%20more%20details.">WhatsApp +968 78967229</a><a className="btn btn-secondary" href="https://api.whatsapp.com/send?phone=96899248431&text=Hello%20K%26Z%20ELITE%20BUSINESS%2C%20I%20am%20interested%20in%20your%20building%20maintenance%20service.%20Please%20send%20me%20more%20details.">WhatsApp +968 99248431</a><a className="btn btn-secondary" href="mailto:info@kzelitebusiness.com">Email Us</a></div>
</div></section>
<section className="section"><div className="container">
<div className="grid">{items.map((x)=><article className="card" key={x.title}><h3>{x.title}</h3><p>{x.text}</p></article>)}</div>

<div className="feature-box">
  <form className="form">
    <input placeholder="Full Name" />
    <input placeholder="Phone / WhatsApp" />
    <input placeholder="Email (optional)" />
    <input placeholder="Location" />
    <textarea placeholder="Tell us what you need..."></textarea>
    <a className="btn btn-primary full" href="https://api.whatsapp.com/send?phone=96878967229&text=Hello%20K%26Z%20ELITE%20BUSINESS%2C%20I%20am%20interested%20in%20your%20building%20maintenance%20service.%20Please%20send%20me%20more%20details.">WhatsApp +968 78967229</a>
    <a className="btn btn-secondary full" href="https://api.whatsapp.com/send?phone=96899248431&text=Hello%20K%26Z%20ELITE%20BUSINESS%2C%20I%20am%20interested%20in%20your%20building%20maintenance%20service.%20Please%20send%20me%20more%20details.">WhatsApp +968 99248431</a>
  </form>
</div>

</div></section>
</>
}
