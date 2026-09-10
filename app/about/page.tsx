

const items=[{title:"Our Main Focus",text:"Car buying, selling, sourcing, advertising and automotive services."},
{title:"One Brand",text:"Multiple useful services offered under one professional identity."},
{title:"Muscat Based",text:"Serving customers and business needs across Muscat and surrounding areas."}];

export default function Page(){
return <>
<section className="page-hero"><div className="container">
<div className="eyebrow">About K&Z</div><h1>About Us</h1><p className="lead">K&Z ELITE BUSINESS is a Muscat-based multi-service company with automotive buying and selling at the center of the brand, supported by vehicle services, rentals, property, maintenance and advertising.</p>
<div className="actions"><a className="btn btn-primary" href="https://wa.me/96878967229">WhatsApp 78967229</a><a className="btn btn-secondary" href="mailto:info@kzelitebusiness.com">Email Us</a></div>
</div></section>
<section className="section"><div className="container">
<div className="grid">{items.map((x)=><article className="card" key={x.title}><h3>{x.title}</h3><p>{x.text}</p></article>)}</div>


</div></section>
</>
}
