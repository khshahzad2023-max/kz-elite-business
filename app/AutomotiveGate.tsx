"use client";
import {useRef,useState} from "react";
import {useRouter} from "next/navigation";

export default function AutomotiveGate(){
 const router=useRouter();
 const videoRef=useRef<HTMLVideoElement>(null);
 const [opening,setOpening]=useState(false);
 const [videoAvailable,setVideoAvailable]=useState(true);
 const enter=()=>{
   if(opening)return;
   setOpening(true);
   const v=videoRef.current;
   if(v&&videoAvailable){v.currentTime=0;v.play().catch(()=>router.push("/automotive"));}
   else router.push("/automotive");
 };
 return <section className="kz-approved-gate" aria-label="K&Z Elite Business virtual showroom entrance">
  <div className="kz-approved-stage">
   {videoAvailable?<video ref={videoRef} src="/kz-approved-gate.mp4" preload="auto" playsInline muted
     onEnded={()=>router.push("/automotive")} onError={()=>setVideoAvailable(false)}
     aria-label="K&Z approved sliding showroom gate animation"/>:
     <img src="/kz-showroom.jpg" alt="K&Z showroom"/>}
  </div>
  <button className="kz-approved-enter" onClick={enter} disabled={opening}>
   {opening?"OPENING SHOWROOM…":"ENTER THE SHOWROOM"} <span aria-hidden="true">→</span>
  </button>
  <div className="kz-approved-note">QUALITY CARS <span>•</span> TRUSTED DEALS <span>•</span> AUTOMOTIVE SERVICES</div>
  <style jsx>{`
   .kz-approved-gate{width:min(100%,1180px);margin:0 auto;display:flex;flex-direction:column;align-items:center;padding:18px 12px 26px;background:linear-gradient(180deg,#061423,#0a2037);border:1px solid #214768;border-radius:16px;box-shadow:0 16px 48px #0005;overflow:hidden}
   .kz-approved-stage{width:100%;aspect-ratio:16/9;overflow:hidden;background:#071321;border:1px solid #2d6897;border-radius:8px;box-shadow:0 0 22px #168dff35}
   .kz-approved-stage video,.kz-approved-stage img{width:100%;height:100%;object-fit:contain;display:block}
   .kz-approved-enter{margin:22px 0 14px;min-height:56px;padding:15px clamp(18px,4vw,42px);border:2px solid #2a9cff;border-radius:10px;background:linear-gradient(135deg,#092e58,#071a34);color:#f4d88c;font-size:clamp(12px,1.5vw,16px);font-weight:800;letter-spacing:.12em;cursor:pointer;box-shadow:0 0 25px #168cff66;transition:transform .2s,box-shadow .2s}
   .kz-approved-enter:hover{transform:translateY(-2px);box-shadow:0 0 33px #168cff99}.kz-approved-enter:focus-visible{outline:3px solid #fff;outline-offset:4px}.kz-approved-enter:disabled{cursor:wait;opacity:.8}
   .kz-approved-enter span{color:#56baff;margin-left:12px;font-size:20px}.kz-approved-note{color:#aabfd2;font-size:clamp(8px,1vw,11px);font-weight:700;letter-spacing:.11em;text-align:center}.kz-approved-note span{color:#dfbb74;margin:0 8px}
   @media(max-width:600px){.kz-approved-gate{padding:10px 7px 18px}.kz-approved-enter{width:min(100%,340px);margin-top:16px}}
  `}</style>
 </section>
}