import "bootstrap/dist/css/bootstrap.min.css";
import { Poppins } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/data/constants";
import { jsonLd } from "@/lib/jsonld";
import { MyNavbar } from "@/components/layout/navbar/Navbar";
import { Footer } from "@/components/layout/footer/Footer";
import { WhatsAppButton } from "@/components/ui/whatsapp/WhatsAppButton";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-poppins",
});

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

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={poppins.variable}>
      <head>
        <noscript>
          <style>{".reveal{opacity:1!important;transform:none!important}"}</style>
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
