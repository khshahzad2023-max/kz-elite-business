

const items=[{title:"Car Advertising",text:"Professional listing copy, photos and multi-platform promotion."},
{title:"Property Advertising",text:"Promote rooms, flats and rental opportunities."},
{title:"Business Advertising",text:"Digital promotional support for local businesses."}];

export default function Page(){
return <>
<section className="page-hero"><div className="container">
<div className="eyebrow">Promotion & Reach</div><h1>Advertising Services</h1><p className="lead">Professional promotion for cars, rental properties and businesses across online platforms.</p>
<div className="actions"><a className="btn btn-primary" href="https://wa.me/96878967229">WhatsApp 78967229</a><a className="btn btn-secondary" href="mailto:info@kzelitebusiness.com">Email Us</a></div>
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
    <a className="btn btn-primary full" href="https://wa.me/96878967229">Send Enquiry on WhatsApp</a>
  </form>
</div>

</div></section>
</>
}
