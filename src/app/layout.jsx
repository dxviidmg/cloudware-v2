import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import "./App.css";
import { MyNavbar } from "../components/common/navbar/Navbar";
import { Footer } from "../components/common/footer/Footer";
import { WhatsAppButton } from "../components/common/whatsapp/WhatsAppButton";

const SITE_URL = "https://cloudwaremx.com";
const TITLE = "CloudWare MX | Internet en Actopan, Hidalgo - Fibra Óptica e Inalámbrico";
const DESCRIPTION =
  "CloudWare MX ofrece servicios de internet por fibra óptica e inalámbrico en Actopan, Hidalgo. Paquetes desde $250/mes. Conexión confiable y de calidad.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    "internet Actopan, internet Hidalgo, fibra óptica Actopan, WiFi Actopan, proveedor internet Hidalgo, CloudWare, paquetes internet, internet inalámbrico Hidalgo",
  authors: [{ name: "CloudWare MX" }],
  alternates: { canonical: "/" },
  manifest: "/manifest.json",
  icons: { icon: "/favicon.ico", apple: "/logo192.png" },
  openGraph: {
    type: "website",
    title: "CloudWare MX | Internet en Actopan, Hidalgo",
    description: "Servicios de internet por fibra óptica e inalámbrico en Actopan, Hidalgo. Paquetes desde $250/mes.",
    url: SITE_URL,
    images: ["/logo512.png"],
    siteName: "CloudWare MX",
    locale: "es_MX",
  },
  twitter: {
    card: "summary_large_image",
    title: "CloudWare MX | Internet en Actopan, Hidalgo",
    description: "Servicios de internet por fibra óptica e inalámbrico. Paquetes desde $250/mes.",
    images: ["/logo512.png"],
  },
  other: { "geo.region": "MX-HID", "geo.placename": "Actopan, Hidalgo" },
};

export const viewport = { themeColor: "#6C3FA0" };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "InternetServiceProvider",
  "name": "CloudWare MX",
  "url": "https://cloudwaremx.com",
  "logo": "https://cloudwaremx.com/logo512.png",
  "description": "Proveedor de servicios de internet por fibra óptica e inalámbrico en Actopan, Hidalgo.",
  "telephone": "+527721292969",
  "email": "contacto@cloudwaremx.com",
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
        "name": "Inalámbrico Básico - 5 Mbps",
        "price": "250",
        "priceCurrency": "MXN"
      },
      {
        "@type": "Offer",
        "name": "Fibra Óptica Básico - 30 Mbps",
        "price": "300",
        "priceCurrency": "MXN"
      },
      {
        "@type": "Offer",
        "name": "Fibra Óptica Ultra - 180 Mbps",
        "price": "1000",
        "priceCurrency": "MXN"
      }
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <MyNavbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
