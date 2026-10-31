import "bootstrap/dist/css/bootstrap.min.css";
import { Poppins } from "next/font/google";
import "./globals.css";
import { MyNavbar } from "../components/common/navbar/Navbar";
import { Footer } from "../components/common/footer/Footer";
import { WhatsAppButton } from "../components/common/whatsapp/WhatsAppButton";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-poppins",
});

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

export const viewport = { themeColor: "#14101f" };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "InternetServiceProvider",
  "name": "CloudWare MX",
  "url": "https://cloudwaremx.com",
  "logo": "https://cloudwaremx.com/logo512.png",
  "description": "Proveedor de servicios de internet por fibra óptica e inalámbrico en Actopan, Hidalgo.",
  "sameAs": ["https://www.facebook.com/share/1GjR9zMfbf/"],
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

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={poppins.variable}>
      <head>
        <noscript>
          <style>{".reveal{opacity:1;transform:none}"}</style>
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>
        <a href="#contenido" className="skip-link">Saltar al contenido</a>
        <MyNavbar />
        <main id="contenido">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
