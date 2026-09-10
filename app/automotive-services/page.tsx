

const items=[{title:"Mechanical Work",text:"General mechanical repairs, inspection and maintenance."},
{title:"Electrical Work",text:"Vehicle electrical diagnosis and repair."},
{title:"Denting & Painting",text:"Body repair, denting and paint work."},
{title:"Tyres & Batteries",text:"Tyre and battery supply/replacement enquiries."},
{title:"Detailing & Washing",text:"Interior and exterior detailing, cleaning and washing."},
{title:"Car Decoration",text:"Accessories, decoration and appearance upgrades."}];

export default function Page(){
return <>
<section className="page-hero"><div className="container">
<div className="eyebrow">K&Z Automotive</div><h1>Automotive & Garage Services</h1><p className="lead">Complete vehicle care and workshop support through K&Z ELITE BUSINESS.</p>
<div className="actions"><a className="btn btn-primary" href="https://api.whatsapp.com/send?phone=96878967229">WhatsApp 78967229</a><a className="btn btn-secondary" href="mailto:info@kzelitebusiness.com">Email Us</a></div>
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
    <a className="btn btn-primary full" href="https://api.whatsapp.com/send?phone=96878967229">Send Enquiry on WhatsApp</a>
  </form>
</div>

</div></section>
</>
}

