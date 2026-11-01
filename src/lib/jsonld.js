import { SITE_URL, WHATSAPP_NUMBER, EMAIL, FACEBOOK_URL } from "@/data/constants";

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "InternetServiceProvider",
  "name": "CloudWare MX",
  "url": SITE_URL,
  "logo": `${SITE_URL}/logo512.png`,
  "description": "Proveedor de servicios de internet por fibra óptica e inalámbrico en Actopan, Hidalgo.",
  "sameAs": [FACEBOOK_URL],
  "telephone": `+${WHATSAPP_NUMBER}`,
  "email": EMAIL,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "C. Efrén Rebolledo 24, Centro Nte",
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
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Inalámbrico Básico - 10 Mbps",
        "price": "250",
        "priceCurrency": "MXN"
      },
      {
        "@type": "Offer",
        "name": "Fibra Óptica Básico - 40 Mbps",
        "price": "250",
        "priceCurrency": "MXN"
      },
      {
        "@type": "Offer",
        "name": "Fibra Óptica Ultra - 600 Mbps",
        "price": "700",
        "priceCurrency": "MXN"
      }
    ]
  }
};
