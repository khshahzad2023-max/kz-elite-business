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
                <span className="call-choice-title"><Phone size={18} /> CALL</span>
                <a href="tel:+96878967229" onClick={(e) => e.stopPropagation()}>+968 78967229</a>
                <a href="tel:+96899248431" onClick={(e) => e.stopPropagation()}>+968 99248431</a>
              </span>
            )}
          </button>
          {contacts.slice(1).map(({ letter, icon: Icon, label, value, href }, index) => (
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
