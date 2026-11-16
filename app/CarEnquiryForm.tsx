"use client";

import type { FormEvent } from "react";

type EnquiryType = "sell" | "find" | "contact";

const intro: Record<EnquiryType, string> = {
  sell: "I would like to sell my car with K&Z.",
  find: "I would like K&Z to help me find a car.",
  contact: "I have a car-related enquiry for K&Z.",
};

export default function CarEnquiryForm({ type }: { type: EnquiryType }) {
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const get = (name: string) => String(data.get(name) || "").trim();
    const recipient = (event.nativeEvent as SubmitEvent).submitter as HTMLButtonElement | null;
    const number = recipient?.value === "96899248431" ? "96899248431" : "96878967229";
    const message = [
      "Hello K&Z ELITE BUSINESS,",
      intro[type],
      "Name: " + get("name"),
      "Phone / WhatsApp: " + get("phone"),
      get("email") ? "Email: " + get("email") : "",
      "Location: " + get("location"),
      "Car / Enquiry Details: " + get("details"),
    ].filter(Boolean).join("\n");
    window.location.assign("https://api.whatsapp.com/send?phone=" + number + "&text=" + encodeURIComponent(message));
  }

  return (
    <form className="kz-car-enquiry" onSubmit={submit}>
      <div className="kz-enquiry-fields">
        <label>Full Name <input name="name" autoComplete="name" required maxLength={100} placeholder="Your full name" /></label>
        <label>Phone / WhatsApp <input name="phone" type="tel" autoComplete="tel" required maxLength={35} placeholder="+968 ..." /></label>
        <label>Email (optional) <input name="email" type="email" autoComplete="email" maxLength={140} placeholder="you@example.com" /></label>
        <label>Location <input name="location" autoComplete="address-level2" required maxLength={120} placeholder="Muscat, Oman" /></label>
        <label className="kz-enquiry-wide">{type === "sell" ? "Car details, year, mileage and asking price" : type === "find" ? "Preferred car, model year, budget and requirements" : "Tell us about your car enquiry"}
          <textarea name="details" required minLength={8} maxLength={2000} rows={5} placeholder={type === "sell" ? "Make, model, year, mileage, specs, price, and registration details..." : type === "find" ? "Make, model, year range, budget, and any other preferences..." : "How can K&Z help?"} />
        </label>
      </div>
      <p className="kz-enquiry-help">Your details will open as a WhatsApp message for your review. Nothing is submitted until you send the message in WhatsApp.</p>
      <div className="kz-enquiry-actions">
        <button type="submit" value="96878967229">Send to WhatsApp • 78967229 ↗</button>
        <button type="submit" value="96899248431">Send to WhatsApp • 99248431 ↗</button>
      </div>
    </form>
  );
}
