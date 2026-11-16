"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

type Car = {
 id?: string; title: string; year: number; price: number | null; owner_demand?:number|null; kz_target?:number|null; final_sold_price?:number|null; owner_final_payment?:number|null; deal_expenses?:number|null; mileage: string;
 specs: string; location: string; description: string; status: "draft"|"available"|"sold"; finance_available: boolean; images: string[];
 make:string;model:string;variant:string;engine:string;transmission:string;origin_specs:string;body_type:string;exterior_color:string;features:string;registration_validity:string;
 cover_zoom:number;cover_x:number;cover_y:number;
};
const blank: Car = { title: "", year: new Date().getFullYear(), price: null, owner_demand:null,kz_target:null,final_sold_price:null,owner_final_payment:null,deal_expenses:null, mileage: "", specs: "", location: "Muscat, Oman", description: "", status: "draft", finance_available: false, images: [], make:"",model:"",variant:"",engine:"",transmission:"",origin_specs:"",body_type:"",exterior_color:"",features:"",registration_validity:"", cover_zoom:100,cover_x:50,cover_y:50 };

export default function AdminCars() {
 const [ready,setReady]=useState(false);
 const [configured,setConfigured]=useState(true);
 const [email,setEmail]=useState("");
 const [password,setPassword]=useState("");
 const [cars,setCars]=useState<Car[]>([]);
 const [inventoryQuery,setInventoryQuery]=useState("");
 const [inventoryStatus,setInventoryStatus]=useState("all");
 const [activeView,setActiveView]=useState<"overview"|"editor"|"inventory">("overview");
 const [car,setCar]=useState<Car>({...blank});
 const [photos,setPhotos]=useState<File[]>([]);
 const [dragging,setDragging]=useState(false);
 const [photoError,setPhotoError]=useState("");
 const [recoveryOpen,setRecoveryOpen]=useState(false);
 const [recoveryPhotos,setRecoveryPhotos]=useState<string[]>([]);
 const [recoveryLoading,setRecoveryLoading]=useState(false);
 const [busy,setBusy]=useState(false);
 const [message,setMessage]=useState("");

 async function load() {
  const session=await fetch("/api/admin/session",{cache:"no-store"}).then(r=>r.json());
  setConfigured(session.configured);setReady(session.authenticated);
  if(session.authenticated) {
   const res=await fetch("/api/admin/cars");
   if(res.ok) setCars(await res.json());
   else { const detail=await res.json().catch(()=>({}));setMessage("Inventory load failed (HTTP "+res.status+"): "+(detail.message||detail.error||detail.code||"Database request failed")); }
  }
 }
 useEffect(()=>{void load()},[]);
 useEffect(()=>{if(!ready)return;const interval=window.setInterval(()=>{void fetch("/api/admin/session",{cache:"no-store"})},20*60*1000);return()=>window.clearInterval(interval)},[ready]);
 function movePhoto(index:number,direction:number,kind:"new"|"saved") {
  const next=index+direction;
  if(kind==="new")setPhotos(current=>{if(next<0||next>=current.length)return current;const items=[...current];[items[index],items[next]]=[items[next],items[index]];return items;});
  else setCar(current=>{if(next<0||next>=current.images.length)return current;const images=[...current.images];[images[index],images[next]]=[images[next],images[index]];return {...current,images};});
 }
 function addPhotos(incoming: File[]) {
  if (!incoming.length) return;
  const allowed = ["image/jpeg","image/png","image/webp"];
  const invalid = incoming.find(file=>!allowed.includes(file.type) || file.size>3*1024*1024);
  if (invalid) {setPhotoError(invalid.name+": use JPEG, PNG or WebP below 3 MB.");return;}
  if (photos.length+incoming.length>15 || car.images.length+photos.length+incoming.length>20) {
   setPhotoError("Limit: 15 new photos and 20 total per car.");return;
  }
  setPhotos(previous=>[...previous,...incoming]);setPhotoError("");
 }
 useEffect(()=>{
  if(!ready) return;
  const paste=(event: ClipboardEvent)=>{
   if(event.target instanceof HTMLElement && (event.target.closest("input,textarea,[contenteditable=true]"))) return;
   const files=Array.from(event.clipboardData?.items||[]).filter(item=>item.kind==="file"&&item.type.startsWith("image/")).map(item=>item.getAsFile()).filter((file):file is File=>Boolean(file));
   if(files.length) {event.preventDefault();addPhotos(files.map((file,i)=>new File([file],file.name||"pasted-"+Date.now()+"-"+i+".png",{type:file.type||"image/png"})));}
  };
  window.addEventListener("paste",paste);
  return ()=>window.removeEventListener("paste",paste);
 },[ready,photos,car.images.length]);
 async function login(e: React.FormEvent) {
  e.preventDefault();setBusy(true);setMessage("");
  try {
   const res=await fetch("/api/admin/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email,password})});
   const payload=await res.json().catch(()=>({}));
   if(!res.ok){setMessage(payload.error || "Login failed (HTTP "+res.status+")");return;}
   setPassword("");
   await load();
  } catch {
   setMessage("Could not connect to the login server. Refresh the page and try again.");
  } finally {setBusy(false);}

 }
 async function deleteCar(item: Car) {
  if (!item.id || busy) return;
  if (!window.confirm("Permanently delete "+item.title+" ("+item.year+") from inventory and the public website? This cannot be undone.")) return;
  setBusy(true);setMessage("");
  try {
   const res=await fetch("/api/admin/cars",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:item.id})});
   const payload=await res.json().catch(()=>({}));
   if(!res.ok) throw Error(payload.error || "Delete failed (HTTP "+res.status+")");
   if(car.id===item.id){setCar({...blank});setPhotos([]);}
   setCars(previous=>previous.filter(other=>other.id!==item.id));
   setMessage("Deleted "+item.title+" from inventory.");
  }catch(error){setMessage(error instanceof Error?error.message:"Delete failed");}
  finally{setBusy(false);}
 }
 async function loadRecentPhotos() {
  setRecoveryOpen(true);setRecoveryLoading(true);setPhotoError("");
  try {
   const response=await fetch("/api/admin/recent-photos",{cache:"no-store"});
   const result=await response.json().catch(()=>({}));
   if(!response.ok)throw Error(result.error||"Could not retrieve recent uploads.");
   setRecoveryPhotos(Array.isArray(result.images)?result.images:[]);
  }catch(e){setPhotoError(e instanceof Error?e.message:"Recovery request failed.");}
  finally{setRecoveryLoading(false);}
 }
 async function save(e: React.FormEvent) {
  e.preventDefault();if(busy)return;
  setBusy(true);setMessage("");
  try {
   const sessionResponse=await fetch("/api/admin/session",{cache:"no-store"});
   if(!sessionResponse.ok)throw Error("Session check failed. Your details are still in this form.");
   const session=await sessionResponse.json();
   if(!session.authenticated)throw Error("Session expired. Please sign in again; unsaved form details remain on this page.");
   let images=[...car.images];
   const queue=[...photos];
   if(queue.length){
    if(queue.length>15||images.length+queue.length>20)throw Error("Maximum 15 new photos or 20 total per car.");
    for(let i=0;i<queue.length;i++){
     const photo=queue[i];
     if(photo.size>3*1024*1024)throw Error(photo.name+": please reduce file size below 3 MB.");
     setMessage("Uploading photo "+(i+1)+" of "+queue.length+"... Completed photos will be kept if the connection drops.");
     const data=new FormData();data.append("photos",photo);
     let uploaded:string[]|null=null;
     let problem="Connection interrupted during photo upload.";
     for(let attempt=1;attempt<=3;attempt++){
      try{
       const controller=new AbortController();
       const timeout=window.setTimeout(()=>controller.abort(),45000);
       let response:Response;
       try{response=await fetch("/api/admin/upload",{method:"POST",body:data,signal:controller.signal});}
       finally{window.clearTimeout(timeout);}
       const result=await response.json().catch(()=>({}));
       if(!response.ok) {
        problem=result.error||"Upload failed (HTTP "+response.status+")";
        if(response.status===401||response.status===400||response.status===413)break;
       }else if(Array.isArray(result.images)&&result.images.length){
        uploaded=result.images;break;
       }else{problem="Server did not return a photo URL.";}
      }catch{problem="Connection interrupted during photo upload.";}
      if(attempt<3)await new Promise(resolve=>window.setTimeout(resolve,attempt*900));
     }
     if(!uploaded)throw Error(problem+" Earlier successful photos are retained in this form. Use Recover Recent Uploads if needed.");
     images=[...images,...uploaded];
     setCar(current=>({...current,images:[...images]}));
     setPhotos(current=>current.filter(file=>file!==photo));
    }
   }
   setMessage("Saving listing details...");
   const response=await fetch("/api/admin/cars",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...car,images})});
   const payload=await response.json().catch(()=>({}));
   if(!response.ok)throw Error("Save failed (HTTP "+response.status+"): "+(payload.message||payload.error||payload.code||"Database request failed"));
   setCar({...blank});setPhotos([]);setMessage("Saved successfully. Status: "+car.status);
   setRecoveryOpen(false);setActiveView("inventory");
   await load();
  }catch(error){
   setMessage((error instanceof Error?error.message:"Connection failed.")+" Do not refresh; your form remains open. Retry Save Car once connected.");
  }finally{setBusy(false);}
 }
 const inputStyle:React.CSSProperties={width:"100%",background:"#13243a",border:"1px solid #46566b",color:"white",borderRadius:9,padding:"12px",fontSize:15};
 const labelStyle:React.CSSProperties={display:"grid",gap:5,fontSize:13,color:"#d6e0ed"};
 return <main style={{minHeight:"100vh",background:"#07111f",color:"#f9fbff",padding:"35px 16px 80px"}}>
  <div className="kz-dashboard-shell">
   <p style={{color:"#d6aa52",letterSpacing:2,fontSize:12}}>K&Z ELITE BUSINESS</p>
   <div className="kz-dashboard-heading"><div><h1 style={{fontSize:"clamp(26px,5vw,40px)"}}>Car Management Dashboard</h1><p className="kz-dashboard-subtitle">Add cars • Organize photos • Manage listings • Track deals privately</p></div><Link className="kz-dashboard-public-link" href="/cars">↗ View Live Cars</Link></div>

   {!configured ? <section style={{padding:20,border:"1px solid #c6a166",borderRadius:12}}>
     <h2>Backend connection required</h2>
     <p>Dashboard interface is ready. Connect Supabase and add the four secure environment settings in Vercel before login and uploads can work.</p>
     <p>No public editing is enabled until the owner login is configured.</p>
   </section> : !ready ?
    <form onSubmit={login} style={{maxWidth:440,display:"grid",gap:14,padding:24,border:"1px solid #304057",borderRadius:14}}>
     <h2>Owner Login</h2>
     <label style={labelStyle}>Admin email<input style={inputStyle} type="email" value={email} onChange={e=>setEmail(e.target.value)} required autoComplete="username"/></label>
     <label style={labelStyle}>Password<input style={inputStyle} type="password" value={password} onChange={e=>setPassword(e.target.value)} required autoComplete="current-password"/></label>
     <button type="submit" disabled={busy} style={{...inputStyle,background:"#d6aa52",color:"#07111f",fontWeight:700,cursor:"pointer"}}>{busy?"Signing in...":"Sign in"}</button>
     {message&&<p role="alert" style={{margin:0,padding:12,background:"#45212d",color:"#ffe1a4",border:"1px solid #b66e76",borderRadius:8}}>{message}</p>}
    </form> :
    <>
     <div className="kz-dashboard-topbar"><div className="kz-dashboard-tabs" role="group" aria-label="Dashboard sections"><button className={activeView==="overview"?"active":""} type="button" onClick={()=>setActiveView("overview")}>Overview</button><button className={activeView==="editor"?"active":""} type="button" onClick={()=>{setActiveView("editor");setCar({...blank});setPhotos([])}}>+ Add Car</button><button className={activeView==="inventory"?"active":""} type="button" onClick={()=>setActiveView("inventory")}>All Cars</button></div><button className="kz-dashboard-signout" type="button" onClick={async()=>{await fetch("/api/admin/logout",{method:"POST"});setReady(false)}}>Sign out</button></div>
     <div className="kz-dashboard-stats"><div><span>Total Cars</span><strong>{cars.length}</strong></div><div><span>For Sale</span><strong>{cars.filter(x=>x.status==="available").length}</strong></div><div><span>Sold</span><strong>{cars.filter(x=>x.status==="sold").length}</strong></div><div><span>Drafts</span><strong>{cars.filter(x=>x.status==="draft").length}</strong></div></div>
     {activeView==="overview"&&<section className="kz-dashboard-welcome"><div className="kz-dashboard-kicker">K&Z INVENTORY CONTROL</div><h2>Everything in one place.</h2><p>Manage every vehicle using the same photo order, model information, mileage, price, finance availability and private deal figures. Flyers are for social media only — use clean car photos on the website.</p><div className="kz-dashboard-quick-actions"><button type="button" onClick={()=>{setCar({...blank});setPhotos([]);setActiveView("editor")}}>+ Add New Car</button><button type="button" onClick={()=>setActiveView("inventory")}>Manage Existing Cars ↗</button></div>{cars.filter(x=>x.status==="draft").length>0&&<p className="kz-dashboard-alert">You have {cars.filter(x=>x.status==="draft").length} draft listing(s) to finish before publishing.</p>}</section>}
     {activeView==="editor"&&<>
     <form className="kz-dashboard-editor" onSubmit={save} style={{display:"grid",gap:15,background:"#0d1c31",padding:22,borderRadius:16,marginTop:24}}>
      <div className="kz-dashboard-section-heading"><span>01 / VEHICLE LISTING</span><h2>{car.id?"Edit Vehicle":"Add New Vehicle"}</h2><p>Keep every listing consistent. Only verified information should be published.</p></div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:14}}>
       <label style={labelStyle}>Public listing title<input style={inputStyle} value={car.title} onChange={e=>setCar({...car,title:e.target.value})} required placeholder="Toyota Camry 2020"/></label>
       <label style={labelStyle}>Year<input style={inputStyle} type="number" min={1950} max={2100} value={car.year} onChange={e=>setCar({...car,year:Number(e.target.value)})} required/></label>
       <label style={labelStyle}>Asking price (OMR)<input style={inputStyle} type="number" min={0} step="0.001" value={car.price??""} onChange={e=>setCar({...car,price:e.target.value===""?null:Number(e.target.value)})}/></label>
       <label style={labelStyle}>Mileage<input style={inputStyle} value={car.mileage} onChange={e=>setCar({...car,mileage:e.target.value})} placeholder="81,000 KM"/></label>
       <label style={labelStyle}>Location<input style={inputStyle} value={car.location} onChange={e=>setCar({...car,location:e.target.value})}/></label>
       <label style={{...labelStyle,gridColumn:"1 / -1",display:"flex",flexDirection:"row",alignItems:"center",gap:12,padding:"12px 14px",background:"#13243a",border:"1px solid #46566b",borderRadius:9}}><input type="checkbox" checked={Boolean(car.finance_available)} onChange={e=>setCar({...car,finance_available:e.target.checked})} style={{width:20,height:20,accentColor:"#d6aa52"}}/><span>Finance Option Available on This Car <small style={{display:"block",color:"#aebbd0",fontWeight:400}}>Show a finance badge on the public car card and details page only when confirmed.</small></span></label>
        <label style={labelStyle}>Status<select style={inputStyle} value={car.status} onChange={e=>setCar({...car,status:e.target.value as Car["status"]})}><option value="draft">Draft (private)</option><option value="available">Publish — For Sale</option><option value="sold">Sold</option></select></label>
      </div>
      <div className="kz-dashboard-section-heading"><span>02 / VERIFIED CAR SPECIFICATIONS</span><h2>Vehicle Details</h2><p>These details appear in the same sequence on car cards and on the full car details page.</p></div>
      <div className="kz-dashboard-fields-grid">
       {([["make","Brand / Make","Toyota"],["model","Model","iM"],["variant","Trim / Variant","Optional"],["engine","Engine","1.8L Petrol"],["transmission","Transmission","Automatic"],["origin_specs","GCC / Imported Specs","US Specs"],["body_type","Body Type","Hatchback"],["exterior_color","Exterior Colour","Black"],["registration_validity","Registration Validity","Optional"]] as const).map(([key,label,placeholder])=><label key={key} style={labelStyle}>{label}<input style={inputStyle} placeholder={placeholder} value={car[key]||""} onChange={e=>setCar(prev=>({...prev,[key]:e.target.value}))}/></label>)}
      </div>
      <label style={labelStyle}>Features (one per line)<textarea style={inputStyle} rows={4} placeholder={"Alloy Wheels\nBluetooth\nCruise Control"} value={car.features||""} onChange={e=>setCar({...car,features:e.target.value})}/></label>
      <section style={{border:"1px solid #806b46",background:"#12253a",padding:16,borderRadius:12,display:"grid",gap:12}}>
       <h3 style={{margin:0,color:"#f0c87c"}}>03 / PRIVATE K&Z DEAL FINANCES — Admin Only</h3>
       <p style={{margin:0,fontSize:13,color:"#bed0df"}}>Only Price (OMR) above is shown to customers. These amounts never appear in public listings.</p>
       <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(185px,1fr))",gap:12}}>
        {([
         ["owner_demand","Owner Demand"],["kz_target","K&Z Target"],["final_sold_price","Final Sold Price"],["owner_final_payment","Owner Final Payment"],["deal_expenses","Deal Expenses"]
        ] as const).map(([key,label])=><label key={key} style={labelStyle}>{label} (OMR)<input style={inputStyle} type="number" min="0" step="0.001" value={car[key]??""} onChange={e=>setCar(previous=>({...previous,[key]:e.target.value===""?null:Number(e.target.value)}))}/></label>)}
       </div>
       <div style={{display:"flex",gap:18,flexWrap:"wrap"}}>
        <strong>Expected margin: {car.price!=null&&car.owner_demand!=null?(car.price-car.owner_demand).toFixed(3)+" OMR":"—"}</strong>
        <strong>Actual gross margin: {car.final_sold_price!=null&&car.owner_final_payment!=null?(car.final_sold_price-car.owner_final_payment).toFixed(3)+" OMR":"—"}</strong>
        <strong>Actual net margin: {car.final_sold_price!=null&&car.owner_final_payment!=null?(car.final_sold_price-car.owner_final_payment-(car.deal_expenses??0)).toFixed(3)+" OMR":"—"}</strong>
       </div>
      </section>
      <div className="kz-dashboard-section-heading"><span>04 / EXTRA DETAILS</span><h2>Condition & Notes</h2></div>
      <label style={labelStyle}>Additional verified specifications<textarea style={inputStyle} rows={3} value={car.specs} onChange={e=>setCar({...car,specs:e.target.value})} placeholder="GCC, engine, transmission, features..."/></label>
      <label style={labelStyle}>Description<textarea style={inputStyle} rows={4} value={car.description} onChange={e=>setCar({...car,description:e.target.value})}/></label>
      <section className="kz-cover-editor" aria-label="Main card photo framing">
        <h3>Main Card Photo Framing</h3>
        <p>Har car ka cover ek hi 16:10 frame mein show hota hai. Sirf card preview ke liye zoom aur position adjust karein; original photo aur View Details gallery unchanged rahenge.</p>
        <div className="kz-cover-editor-layout">
          <div className="kz-car-card-photo kz-cover-editor-preview">
            {car.images[0] ? <Image src={car.images[0]} alt="Main card framing preview" width={720} height={450} sizes="(max-width: 650px) 100vw, 360px" quality={75} style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:`${car.cover_x ?? 50}% ${car.cover_y ?? 50}%`,transform:`scale(${(car.cover_zoom ?? 100)/100})`}} /> : <span>Save the front cover photo to preview framing</span>}
          </div>
          <div className="kz-cover-editor-controls">
            {([["cover_zoom","Zoom",80,150,"%"],["cover_x","Left / Right",0,100,"%"],["cover_y","Up / Down",0,100,"%"]] as const).map(([key,label,min,max,unit])=>
              <label key={key}>{label}: <strong>{car[key] ?? (key==="cover_zoom"?100:50)}{unit}</strong>
                <input type="range" min={min} max={max} step={1} value={car[key] ?? (key==="cover_zoom"?100:50)} onChange={e=>setCar(current=>({...current,[key]:Number(e.target.value)}))}/>
              </label>
            )}
            <button type="button" onClick={()=>setCar(current=>({...current,cover_zoom:100,cover_x:50,cover_y:50}))}>Reset Framing</button>
            <small>Photo #1 remains the front cover. This setting only changes its display on the main listing card.</small>
          </div>
        </div>
      </section>
      <div className="kz-dashboard-section-heading"><span>05 / PHOTO GALLERY</span><h2>Upload Clean Car Photos</h2><p>OFFICIAL K&Z SEQUENCE: 1. Straight front (main cover) → 2. Front right angle → 3. Front left angle → 4. Side angles → 5. Rear right → 6. Rear left → 7. Straight rear → 8. Dashboard → 9. Interior / seats → 10. Mileage close-up. Upload only polished, natural-looking photos with the original K&Z master number plate. No flyers or banners. Do not publish a car if photos or number plate need correction.</p></div>
      <div style={{display:"grid",gap:9}}>
       <strong style={{fontSize:14}}>Car photos (JPEG/PNG/WebP, max 3 MB each)</strong>
       <div
        onDragOver={e=>{e.preventDefault();setDragging(true)}}
        onDragLeave={e=>{e.preventDefault();setDragging(false)}}
        onDrop={e=>{e.preventDefault();setDragging(false);addPhotos(Array.from(e.dataTransfer.files));}}
        onPaste={e=>{if(e.clipboardData?.files?.length){e.preventDefault();e.stopPropagation();addPhotos(Array.from(e.clipboardData.files));}}}
        tabIndex={0}
        role="group"
        aria-label="Drop images here or focus this area and paste a copied image"
        style={{border:dragging?"2px dashed #f0c66d":"2px dashed #6c819f",borderRadius:12,padding:"24px 16px",background:dragging?"#24435d":"#13243a",textAlign:"center",outlineOffset:3}}>
         <p style={{margin:"0 0 8px",fontWeight:700}}>Drag & Drop photos here</p>
         <p style={{margin:"0 0 16px",color:"#c4d2e4",fontSize:13}}>Or copy an image from WhatsApp Web, click this box and press Ctrl + V</p>
         <input aria-label="Choose car photos from your device" type="file" accept="image/jpeg,image/png,image/webp" multiple onChange={e=>{addPhotos(Array.from(e.target.files||[]));e.target.value="";}} style={{maxWidth:"100%"}}/>
       </div>
       <div className="kz-recovery-actions">
        <button type="button" onClick={()=>void loadRecentPhotos()} disabled={busy||recoveryLoading}>{recoveryLoading?"Looking for uploaded photos...":"Recover Recent Uploads"}</button>
        <p>Upload failed earlier? Your successfully uploaded photos may already be stored. Select the clean car photos below instead of uploading them twice.</p>
       </div>
       {recoveryOpen&&<div className="kz-recovery-panel"><strong>Recent uploaded images</strong><p>Select only photos of this car. Do not select flyers or promotional images. Saved photos appear under the gallery below; photo #1 becomes the cover.</p>
        {recoveryLoading?<p>Loading photos...</p>:recoveryPhotos.length===0?<p>No recent images found.</p>:<div className="kz-recovery-grid">{recoveryPhotos.map(src=><button key={src} type="button" disabled={busy||car.images.includes(src)||car.images.length+photos.length>=20} onClick={()=>setCar(current=>({...current,images:current.images.includes(src)?current.images:[...current.images,src]}))}><Image src={src} alt="Previously uploaded car photo" width={240} height={180} sizes="(max-width: 650px) 45vw, 150px" quality={75} loading="lazy" /><span>{car.images.includes(src)?"Added ✓":"Attach Photo +"}</span></button>)}</div>}
       </div>}
       {photoError&&<p role="alert" style={{color:"#ffb9a9",margin:0}}>{photoError}</p>}
       {photos.length>0&&<div style={{display:"grid",gap:6}}>
        <p style={{margin:0}}>{photos.length} new photo(s) ready. Use ← → to change order before Save Car.</p>
        {photos.map((file,i)=><div key={i} style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:10,fontSize:13,background:"#192b43",padding:"6px 10px",borderRadius:7}}>
         <PhotoThumb file={file} number={car.images.length+i+1}/><div style={{display:"flex",gap:4}}><button type="button" disabled={i===0} onClick={()=>movePhoto(i,-1,"new")}>←</button><button type="button" disabled={i===photos.length-1} onClick={()=>movePhoto(i,1,"new")}>→</button></div>
         <button type="button" onClick={()=>setPhotos(previous=>previous.filter((_,j)=>j!==i))} style={{background:"#633044",color:"white",border:0,padding:"6px 9px",borderRadius:6}}>Remove</button>
        </div>)}
       </div>}
      </div>
      {car.images.length>0&&<><p style={{fontSize:13,color:"#d6e0ed"}}>Saved photos: Photo #1 is the main cover. Use arrows to reorder, then Save Car.</p><div style={{display:"flex",gap:9,flexWrap:"wrap"}}>{car.images.map((src,i)=><div key={src} style={{position:"relative"}}><b>#{i+1}</b><Image src={src} alt={"Photo "+(i+1)} width={220} height={180} sizes="110px" quality={75} loading="lazy" style={{width:110,height:90,objectFit:"cover",borderRadius:8}}/><div style={{display:"flex",gap:4}}><button type="button" disabled={i===0} onClick={()=>movePhoto(i,-1,"saved")}>←</button><button type="button" disabled={i===car.images.length-1} onClick={()=>movePhoto(i,1,"saved")}>→</button></div><button type="button" onClick={()=>setCar({...car,images:car.images.filter((_,j)=>i!==j)})} style={{display:"block",color:"#fff",background:"#6c2632",border:0,borderRadius:6}}>Remove #{i+1}</button><small>Photo {i+1}</small></div>)}</div></>}
      <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
       <button disabled={busy} type="submit" style={{background:"#d6aa52",color:"#091321",padding:"13px 22px",border:0,borderRadius:10,fontWeight:700}}>{busy?"Saving...":"Save Car"}</button>
       <button type="button" onClick={()=>{setCar({...blank});setPhotos([])}} style={{background:"#22344b",color:"#fff",padding:"13px 22px",border:0,borderRadius:10}}>Clear Form</button>
      </div>
     </form></>}
     {activeView==="inventory"&&<section className="kz-dashboard-inventory"><div className="kz-dashboard-section-heading"><span>INVENTORY MANAGEMENT</span><h2>Manage All Cars ({cars.length})</h2><p>Find vehicles, update photos, edit prices, switch finance ON/OFF or mark them Sold.</p></div>
     <div className="kz-dashboard-inventory-controls"><input aria-label="Search inventory" type="search" placeholder="Search car title, year or location" value={inventoryQuery} onChange={e=>setInventoryQuery(e.target.value)}/><select aria-label="Filter by listing status" value={inventoryStatus} onChange={e=>setInventoryStatus(e.target.value)}><option value="all">All statuses</option><option value="available">For Sale</option><option value="sold">Sold</option><option value="draft">Drafts</option></select></div>
     <h3 style={{marginTop:24}}>Listings</h3>
     <div style={{display:"grid",gap:11}}>{cars.filter(item=>(inventoryStatus==="all"||item.status===inventoryStatus)&&(!inventoryQuery.trim()||[item.title,item.year,item.location].join(" ").toLowerCase().includes(inventoryQuery.toLowerCase().trim()))).map(item=><div key={item.id} style={{display:"flex",justifyContent:"space-between",gap:12,alignItems:"center",border:"1px solid #33465e",borderRadius:12,padding:12,flexWrap:"wrap"}}>
       <div className="kz-dashboard-inventory-item"><div className="kz-dashboard-inventory-preview">{item.images?.[0]?<Image src={item.images[0]} alt={item.title} width={260} height={195} sizes="130px" quality={75} loading="lazy" style={{width:"100%",height:"100%",objectFit:"cover"}}/>:<span>NO PHOTO</span>}</div><div><strong>{item.title}</strong><p style={{color:"#aebbd0",margin:"5px 0"}}>{item.price===null?"Price on request":Number(item.price).toLocaleString("en-OM")+" OMR"} • {item.status} • {item.images.length} photos {item.finance_available?"• Finance Available":""}</p></div></div>
       <div style={{display:"flex",gap:8,flexWrap:"wrap"}}><button type="button" disabled={busy} onClick={()=>{setCar({...blank,...item});setPhotos([]);setActiveView("editor");window.scrollTo({top:0,behavior:"smooth"})}} style={{padding:"10px 18px",background:"#193650",color:"white",border:"1px solid #6b7f95",borderRadius:8}}>Edit</button><button type="button" disabled={busy} onClick={()=>void deleteCar(item)} style={{padding:"10px 18px",background:"#662b37",color:"white",border:"1px solid #ba6672",borderRadius:8,cursor:"pointer"}}>Delete</button></div>
      </div>)}</div></section>}
    </>}
   {ready&&message&&<p role="status" style={{padding:12,color:"#ffe1a4"}}>{message}</p>}
  </div>
 </main>;
}

function PhotoThumb({file,number}:{file:File;number:number}){
 const [url,setUrl]=useState("");
 useEffect(()=>{const x=URL.createObjectURL(file);setUrl(x);return ()=>URL.revokeObjectURL(x)},[file]);
 return <div style={{display:"grid",gap:4}}><b>#{number}</b>{url&&<img src={url} alt={"Selected photo "+number} style={{width:130,height:100,objectFit:"contain"}}/>}<small>Photo {number}: {file.name}</small></div>;
}
