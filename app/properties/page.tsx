

const items=[{title:"Rooms for Rent",text:"Room rental listings with location, rent and facilities."},
{title:"Flats for Rent",text:"Apartment and flat listings for tenants."},
{title:"Property Advertising",text:"Owners can contact K&Z to advertise suitable rental properties."}];

export default function Page(){
return <>
<section className="page-hero"><div className="container">
<div className="eyebrow">Property Rentals</div><h1>Rooms & Flats for Rent</h1><p className="lead">Browse and enquire about available rooms, flats and rental properties.</p>
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
