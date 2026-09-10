

const items=[{title:"Building Maintenance",text:"Electrical, plumbing, AC, painting, cleaning and repair services."},
{title:"Rooms & Flats",text:"Rental property listings and enquiries."},
{title:"Advertising",text:"Car, property and business advertising support."}];

export default function Page(){
return <>
<section className="page-hero"><div className="container">
<div className="eyebrow">K&Z Divisions</div><h1>Other Business Services</h1><p className="lead">Explore K&Z ELITE BUSINESS services beyond the core automotive business.</p>
<div className="actions"><a className="btn btn-primary" href="https://api.whatsapp.com/send?phone=96878967229">WhatsApp 78967229</a><a className="btn btn-secondary" href="mailto:info@kzelitebusiness.com">Email Us</a></div>
</div></section>
<section className="section"><div className="container">
<div className="grid">{items.map((x)=><article className="card" key={x.title}><h3>{x.title}</h3><p>{x.text}</p></article>)}</div>


</div></section>
</>
}

