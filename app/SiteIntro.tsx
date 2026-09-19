"use client";
import { useEffect, useState } from "react";

export default function SiteIntro(){
  const [show,setShow]=useState(true);
  const [exit,setExit]=useState(false);
  useEffect(()=>{const t=setTimeout(()=>setExit(true),1800);const d=setTimeout(()=>setShow(false),2450);return()=>{clearTimeout(t);clearTimeout(d)}},[]);
  if(!show)return null;
  return <div className={"site-intro "+(exit?"intro-exit":"")}>
    <div className="intro-beam beam-one"/><div className="intro-beam beam-two"/>
    <div className="intro-mark"><img src="/kz-master-logo.png" alt="K&Z ELITE BUSINESS"/><div className="intro-line"/><strong>K&Z ELITE BUSINESS</strong><span>ONE NAME • MANY SOLUTIONS</span></div>
    <div className="intro-floor"/><div className="intro-shine"/>
  </div>
}