import { SITE_URL, WHATSAPP_NUMBER, FACEBOOK_URL, STREET } from "@/data/constants";
import { packageGroups } from "@/data/packages";
import { faqs } from "@/data/faq";

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "InternetServiceProvider",
  "name": "CloudWare MX",
  "url": SITE_URL,
  "logo": `${SITE_URL}/logo512.png`,
  "description": "Proveedor de servicios de internet por fibra óptica e inalámbrico en Actopan, Hidalgo.",
  "sameAs": [FACEBOOK_URL],
  "telephone": `+${WHATSAPP_NUMBER}`,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": `${STREET}, Centro Nte`,
    "addressLocality": "Actopan",
    "addressRegion": "Hidalgo",
    "postalCode": "42500",
    "addressCountry": "MX"
  },
  "areaServed": {
    "@type": "Place",
    "name": "Actopan, Hidalgo, México"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "09:30",
      "closes": "15:30"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Paquetes de Internet",
    "itemListElement": packageGroups.flatMap((g) =>
      g.plans.map((p) => ({
        "@type": "Offer",
        "name": `${g.label} ${p.name} - ${p.speed} Mbps`,
        "price": String(p.price),
        "priceCurrency": "MXN"
      }))
    )
  }
};

export const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(({ q, a }) => ({
    "@type": "Question",
    "name": q,
    "acceptedAnswer": { "@type": "Answer", "text": a }
  }))
};
