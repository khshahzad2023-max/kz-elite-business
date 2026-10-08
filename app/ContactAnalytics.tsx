"use client";

import { useEffect } from "react";

type AnalyticsWindow = Window & {
  gtag?: (...args: unknown[]) => void;
};

const reviewUrl = "https://g.page/r/CX2yk5KX5Yu2EBM/review";

// Track intent to contact, not a completed WhatsApp conversation or phone call.
export default function ContactAnalytics() {
  useEffect(() => {
    const trackClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest("a[href]");
      if (!(anchor instanceof HTMLAnchorElement)) return;

      const href = anchor.getAttribute("href") || "";
      let eventName: string | null = null;
      let method: string | null = null;
      let destination = "";

      try {
        const url = new URL(href, window.location.href);
        const host = url.hostname.toLowerCase();
        if (host === "api.whatsapp.com" || host === "wa.me" || host === "web.whatsapp.com") {
          eventName = "contact_click";
          method = "whatsapp";
          destination = url.searchParams.get("phone") || url.pathname.replace(/\D/g, "");
        } else if (url.protocol === "tel:") {
          eventName = "contact_click";
          method = "phone";
          destination = url.pathname.replace(/\D/g, "");
        } else if (url.href.startsWith(reviewUrl)) {
          eventName = "google_review_click";
          method = "google_review";
        } else if (url.origin === window.location.origin && /^\/cars\/[^/]+\/?$/.test(url.pathname)) {
          eventName = "vehicle_detail_click";
          method = "listing";
          destination = url.pathname;
        }
      } catch {
        return;
      }

      if (!eventName) return;
      (window as AnalyticsWindow).gtag?.("event", eventName, {
        contact_method: method,
        destination,
        page_path: window.location.pathname,
      });
    };

    document.addEventListener("click", trackClick, true);
    return () => document.removeEventListener("click", trackClick, true);
  }, []);

  return null;
}
