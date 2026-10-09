"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Car = {
 id?: string; title: string; year: number; price: number | null; mileage: string;
 specs: string; location: string; description: string; status: "draft"|"available"|"sold"; images: string[];
};
const blank: Car = { title: "", year: new Date().getFullYear(), price: null, mileage: "", specs: "", location: "Muscat, Oman", description: "", status: "draft", images: [] };

export default function AdminCars() {
 const [ready,setReady]=useState(false);
 const [configured,setConfigured]=useState(true);
 const [email,setEmail]=useState("");
 const [password,setPassword]=useState("");
 const [cars,setCars]=useState<Car[]>([]);
 const [car,setCar]=useState<Car>({...blank});
 const [photos,setPhotos]=useState<File[]>([]);
 const [dragging,setDragging]=useState(false);
 const [photoError,setPhotoError]=useState("");
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
 async function save(e: React.FormEvent) {
  e.preventDefault();setBusy(true);setMessage("");
  try {
   let images=[...car.images];
   if(photos.length){
    if(photos.length>15 || images.length+photos.length>20)throw Error("Maximum 15 new photos or 20 total per car.");
    for(const photo of photos){
     if(photo.size > 3*1024*1024)throw Error(photo.name+": please reduce file size below 3 MB.");
     const data=new FormData();data.append("photos",photo);
     const response=await fetch("/api/admin/upload",{method:"POST",body:data});
     const payload=await response.json();if(!response.ok)throw Error(payload.error||"Upload failed");
     images.push(...payload.images);
    }
   }
   const response=await fetch("/api/admin/cars",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...car,images})});
   const payload=await response.json().catch(()=>({}));if(!response.ok)throw Error("Save failed (HTTP "+response.status+"): "+(payload.message||payload.error||payload.code||"Database request failed"));
   setCar({...blank});setPhotos([]);setMessage("Saved successfully. Status: "+car.status);
   await load();
  }catch(error){setMessage(error instanceof Error?error.message:"Something went wrong")}
  finally{setBusy(false)}
 }
 const inputStyle:React.CSSProperties={width:"100%",background:"#13243a",border:"1px solid #46566b",color:"white",borderRadius:9,padding:"12px",fontSize:15};
 const labelStyle:React.CSSProperties={display:"grid",gap:5,fontSize:13,color:"#d6e0ed"};
 return <main style={{minHeight:"100vh",background:"#07111f",color:"#f9fbff",padding:"35px 16px 80px"}}>
  <div style={{maxWidth:970,margin:"auto"}}>
   <p style={{color:"#d6aa52",letterSpacing:2,fontSize:12}}>K&Z ELITE BUSINESS</p>
   <h1 style={{fontSize:"clamp(26px,5vw,40px)"}}>Car Upload Dashboard</h1>
   <p style={{color:"#aab8cb"}}>Private inventory management • <Link href="/cars" style={{textDecoration:"underline"}}>View live cars</Link></p>
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
     <button style={{border:"1px solid #687991",background:"transparent",color:"white",borderRadius:8,padding:10,cursor:"pointer"}} onClick={async()=>{await fetch("/api/admin/logout",{method:"POST"});setReady(false)}}>Sign out</button>
     <form onSubmit={save} style={{display:"grid",gap:15,background:"#0d1c31",padding:22,borderRadius:16,marginTop:24}}>
      <h2>{car.id?"Edit Car":"Add New Car"}</h2>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:14}}>
       <label style={labelStyle}>Make / model<input style={inputStyle} value={car.title} onChange={e=>setCar({...car,title:e.target.value})} required placeholder="Toyota Camry 2020"/></label>
       <label style={labelStyle}>Year<input style={inputStyle} type="number" min={1950} max={2100} value={car.year} onChange={e=>setCar({...car,year:Number(e.target.value)})} required/></label>
       <label style={labelStyle}>Price (OMR, optional)<input style={inputStyle} type="number" min={0} step="0.001" value={car.price??""} onChange={e=>setCar({...car,price:e.target.value===""?null:Number(e.target.value)})}/></label>
       <label style={labelStyle}>Mileage<input style={inputStyle} value={car.mileage} onChange={e=>setCar({...car,mileage:e.target.value})} placeholder="81,000 KM"/></label>
       <label style={labelStyle}>Location<input style={inputStyle} value={car.location} onChange={e=>setCar({...car,location:e.target.value})}/></label>
       <label style={labelStyle}>Status<select style={inputStyle} value={car.status} onChange={e=>setCar({...car,status:e.target.value as Car["status"]})}><option value="draft">Draft (private)</option><option value="available">Publish — For Sale</option><option value="sold">Sold</option></select></label>
      </div>
      <label style={labelStyle}>Verified specifications<textarea style={inputStyle} rows={3} value={car.specs} onChange={e=>setCar({...car,specs:e.target.value})} placeholder="GCC, engine, transmission, features..."/></label>
      <label style={labelStyle}>Description<textarea style={inputStyle} rows={4} value={car.description} onChange={e=>setCar({...car,description:e.target.value})}/></label>
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
       {photoError&&<p role="alert" style={{color:"#ffb9a9",margin:0}}>{photoError}</p>}
       {photos.length>0&&<div style={{display:"grid",gap:6}}>
        <p style={{margin:0}}>{photos.length} new photo(s) ready — click Save Car to upload.</p>
        {photos.map((file,i)=><div key={i} style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:10,fontSize:13,background:"#192b43",padding:"6px 10px",borderRadius:7}}>
         <span style={{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{file.name}</span>
         <button type="button" onClick={()=>setPhotos(previous=>previous.filter((_,j)=>j!==i))} style={{background:"#633044",color:"white",border:0,padding:"6px 9px",borderRadius:6}}>Remove</button>
        </div>)}
       </div>}
      </div>
      {car.images.length>0&&<div style={{display:"flex",gap:9,flexWrap:"wrap"}}>{car.images.map((src,i)=><div key={src} style={{position:"relative"}}><img src={src} alt={"Photo "+(i+1)} style={{width:110,height:90,objectFit:"cover",borderRadius:8}}/><button type="button" onClick={()=>setCar({...car,images:car.images.filter((_,j)=>i!==j)})} style={{display:"block",color:"#fff",background:"#6c2632",border:0,borderRadius:6}}>Remove</button></div>)}</div>}
      <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
       <button disabled={busy} type="submit" style={{background:"#d6aa52",color:"#091321",padding:"13px 22px",border:0,borderRadius:10,fontWeight:700}}>{busy?"Saving...":"Save Car"}</button>
       <button type="button" onClick={()=>{setCar({...blank});setPhotos([])}} style={{background:"#22344b",color:"#fff",padding:"13px 22px",border:0,borderRadius:10}}>Clear Form</button>
      </div>
     </form>
     <h2 style={{marginTop:35}}>Inventory ({cars.length})</h2>
     <div style={{display:"grid",gap:11}}>{cars.map(item=><div key={item.id} style={{display:"flex",justifyContent:"space-between",gap:12,alignItems:"center",border:"1px solid #33465e",borderRadius:12,padding:12,flexWrap:"wrap"}}>
       <div><strong>{item.title}</strong><p style={{color:"#aebbd0",margin:"5px 0"}}>{item.price===null?"Price on request":item.price+" OMR"} • {item.status} • {item.images.length} photos</p></div>
       <button type="button" onClick={()=>{setCar(item);setPhotos([]);window.scrollTo({top:0,behavior:"smooth"})}} style={{padding:"10px 18px",background:"#193650",color:"white",border:"1px solid #6b7f95",borderRadius:8}}>Edit</button>
      </div>)}</div>
    </>}
   {ready&&message&&<p role="status" style={{padding:12,color:"#ffe1a4"}}>{message}</p>}
  </div>
 </main>;
}
