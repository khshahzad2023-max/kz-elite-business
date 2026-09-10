

const items=[{title:"Daily Rental",text:"Short-term vehicle rental enquiries."},
{title:"Weekly Rental",text:"Flexible weekly options depending on availability."},
{title:"Monthly Rental",text:"Longer-term vehicle rental enquiries for individuals and businesses."}];

export default function Page(){
return <>
<section className="page-hero"><div className="container">
<div className="eyebrow">Vehicle Rentals</div><h1>Rent a Car</h1><p className="lead">Daily, weekly and monthly vehicle rental enquiries for personal, family and business use.</p>
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

