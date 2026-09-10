

const items=[{title:"Featured Cars",text:"We will add your available stock here with professional photos and full vehicle details."},
{title:"Finance Available",text:"Eligible vehicles can show finance availability clearly on the listing."},
{title:"Direct Enquiry",text:"Every vehicle can have Call, WhatsApp and enquiry actions."}];

export default function Page(){
return <>
<section className="page-hero"><div className="container">
<div className="eyebrow">Cars • Main Business</div><h1>Cars for Sale</h1><p className="lead">Browse K&Z ELITE BUSINESS vehicle listings. Each vehicle page can later include full photos, price, mileage, specifications, location and finance availability.</p>
<div className="actions"><a className="btn btn-primary" href="https://api.whatsapp.com/send?phone=96878967229">WhatsApp 78967229</a><a className="btn btn-secondary" href="mailto:info@kzelitebusiness.com">Email Us</a></div>
</div></section>
<section className="section"><div className="container">
<div className="grid">{items.map((x)=><article className="card" key={x.title}><h3>{x.title}</h3><p>{x.text}</p></article>)}</div>

<div className="notice" style={{marginTop:"22px"}}>This first build creates the new structure. Your real car inventory can be added after you approve the design.</div>
</div></section>
</>
}

