"use client";

import {
  Globe2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { useState } from "react";

function InstagramIcon({ size = 23 }: { size?: number }) {
  return (
    <svg aria-hidden="true" fill="none" height={size} viewBox="0 0 24 24" width={size}>
      <rect height="18" rx="5" stroke="currentColor" strokeWidth="1.9" width="18" x="3" y="3" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.9" />
      <circle cx="17.5" cy="6.5" fill="currentColor" r="1.1" />
    </svg>
  );
}

const contacts = [
  { letter:"C", icon:MessageCircle, label:"WhatsApp", value:"+968 78967229", href:"https://api.whatsapp.com/send?phone=96878967229" },
  { letter:"O", icon:Phone, label:"Call Us", value:"+968 78967229", href:"tel:+96878967229" },
  { letter:"N", icon:MessageCircle, label:"WhatsApp", value:"+968 99248431", href:"https://api.whatsapp.com/send?phone=96899248431" },
  { letter:"N", icon:Phone, label:"Call Us", value:"+968 99248431", href:"tel:+96899248431" },
  { letter:"E", icon:InstagramIcon, label:"Instagram", value:"@kz_elite_business", href:"https://www.instagram.com/kz_elite_business/" },
  { letter:"C", icon:Mail, label:"Email", value:"info@kzelitebusiness.com", href:"mailto:info@kzelitebusiness.com" },
  { letter:"T", icon:Globe2, label:"Website", value:"kzelitebusiness.com", href:"https://kzelitebusiness.com" },
];

export default function ContactDock() {
  const [callOpen, setCallOpen] = useState(false);
  const [whatsappOpen, setWhatsappOpen] = useState(false);
  const [emailOpen, setEmailOpen] = useState(false);
  const [instagramOpen, setInstagramOpen] = useState(false);
  const [facebookOpen, setFacebookOpen] = useState(false);
  const [tiktokOpen, setTiktokOpen] = useState(false);
  return (
    <section className="contact-dock-section">
      <div className="container">
        <div className="contact-dock-head">
          <div>
            <div className="eyebrow">Always Connected</div>
            <h2>Connect with K&amp;Z</h2>
          </div>
          <div className="contact-location"><MapPin size={17} /> Muscat, Sultanate of Oman</div>
        </div>
        <div className="crystal-connect" aria-label="K&Z contact options">
          <button className={`crystal-contact crystal-call ${callOpen ? "is-open" : ""}`} type="button" onClick={() => setCallOpen((open) => !open)} aria-expanded={callOpen}>
            {!callOpen ? <span className="crystal-letter">C</span> : (
              <span className="call-choice-panel">
                <span className="call-choice-title call-choice-title-icon"><span className="call-crystal-logo"><Phone size={28} strokeWidth={2.4} /></span><span>CHOOSE A NUMBER</span></span>
                <a href="tel:+96878967229" onClick={(e) => e.stopPropagation()}>+968 78967229</a>
                <a href="tel:+96899248431" onClick={(e) => e.stopPropagation()}>+968 99248431</a>
              </span>
            )}
          </button>
          <button className={`crystal-contact crystal-whatsapp ${whatsappOpen ? "is-open" : ""}`} type="button" onClick={() => setWhatsappOpen((open) => !open)} aria-expanded={whatsappOpen}>
            {!whatsappOpen ? <span className="crystal-letter">O</span> : (
              <span className="call-choice-panel whatsapp-choice-panel">
                <span className="call-choice-title whatsapp-choice-title"><span className="whatsapp-crystal-logo" aria-label="WhatsApp">
                  <svg aria-hidden="true" viewBox="0 0 32 32" width="25" height="25">
                    <path fill="currentColor" d="M16 4.2A11.7 11.7 0 0 0 5.9 21.8L4.3 27.7l6-1.6A11.7 11.7 0 1 0 16 4.2Zm0 21.3c-1.9 0-3.7-.5-5.3-1.5l-.4-.2-3.5.9.9-3.4-.2-.4A9.5 9.5 0 1 1 16 25.5Zm5.2-7.1c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.2-.2.3-.8.9-1 1.1-.2.2-.4.2-.7.1-1.7-.8-2.9-1.5-4-3.4-.3-.5.3-.5.8-1.5.1-.2 0-.4 0-.6-.1-.2-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9s1.2 3.3 1.4 3.6c.2.2 2.4 3.7 5.9 5.2 2.2 1 3.1 1 4.2.8.7-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3Z"/>
                  </svg>
                </span><span>CHOOSE A NUMBER</span></span>
                <a href="https://api.whatsapp.com/send?phone=96878967229" target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>+968 78967229</a>
                <a href="https://api.whatsapp.com/send?phone=96899248431" target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>+968 99248431</a>
              </span>
            )}
          </button>
          <button className={`crystal-contact crystal-email ${emailOpen ? "is-open" : ""}`} type="button" onClick={() => setEmailOpen((open) => !open)} aria-expanded={emailOpen}>
            {!emailOpen ? <span className="crystal-letter">N</span> : (
              <span className="email-choice-panel">
                <span className="email-crystal-logo"><Mail size={29} strokeWidth={2.2} /></span>
                <span className="email-choice-title">EMAIL</span>
                <a href="mailto:info@kzelitebusiness.com" onClick={(e) => e.stopPropagation()}>info@kzelitebusiness.com</a>
              </span>
            )}
          </button>
          <button className={`crystal-contact crystal-instagram ${instagramOpen ? "is-open" : ""}`} type="button" onClick={() => setInstagramOpen((open) => !open)} aria-expanded={instagramOpen}>
            {!instagramOpen ? <span className="crystal-letter">N</span> : (
              <span className="instagram-choice-panel">
                <span className="instagram-crystal-logo"><InstagramIcon size={30} /></span>
                <span className="instagram-choice-title">INSTAGRAM</span>
                <a href="https://www.instagram.com/kz_elite_business/" target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>@kz_elite_business</a>
              </span>
            )}
          </button>
          <button className={`crystal-contact crystal-facebook ${facebookOpen ? "is-open" : ""}`} type="button" onClick={() => setFacebookOpen((open) => !open)} aria-expanded={facebookOpen}>
            {!facebookOpen ? <span className="crystal-letter">E</span> : (
              <span className="facebook-choice-panel">
                <span className="facebook-crystal-logo" aria-label="Facebook">
                  <svg aria-hidden="true" viewBox="0 0 24 24" width="30" height="30"><path fill="currentColor" d="M13.5 22v-8h2.8l.4-3.2h-3.2V8.7c0-.9.3-1.6 1.6-1.6h1.7V4.2c-.3 0-1.3-.2-2.5-.2-2.5 0-4.2 1.5-4.2 4.4v2.4H7.3V14h2.8v8h3.4Z"/></svg>
                </span>
                <span className="facebook-choice-title">FACEBOOK</span>
                <a href="https://www.facebook.com/share/1H4otouqhj/" target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>K&amp;Z ELITE BUSINESS</a>
              </span>
            )}
          </button>
          <button className={`crystal-contact crystal-tiktok ${tiktokOpen ? "is-open" : ""}`} type="button" onClick={() => setTiktokOpen((open) => !open)} aria-expanded={tiktokOpen}>
            {!tiktokOpen ? <span className="crystal-letter">C</span> : (
              <span className="tiktok-choice-panel">
                <span className="tiktok-crystal-logo" aria-label="TikTok">
                  <svg aria-hidden="true" viewBox="0 0 24 24" width="30" height="30"><path fill="currentColor" d="M15.7 3c.4 2.2 1.7 3.6 3.8 3.8v3.1c-1.4 0-2.7-.4-3.8-1.2v5.7a6.1 6.1 0 1 1-5.2-6V11a3 3 0 1 0 2 2.8V3h3.2Z"/></svg>
                </span>
                <span className="tiktok-choice-title">TIKTOK</span>
                <a href="https://www.tiktok.com/@kz_elite_business" target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>@kz_elite_business</a>
              </span>
            )}
          </button>
          {contacts.slice(6).map(({ letter, icon: Icon, label, value, href }, index) => (
            <a className="crystal-contact" href={href} key={`${letter}-${label}-${index}`} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>
              <span className="crystal-letter">{letter}</span>
              <span className="crystal-detail">
                <span className="crystal-icon"><Icon size={20} strokeWidth={1.8} /></span>
                <span><small>{label}</small><strong>{value}</strong></span>
              </span>
            </a>
          ))}
        </div>
        <div className="crystal-hint">Tap a crystal letter to connect</div>
      </div>
    </section>
  );
}
