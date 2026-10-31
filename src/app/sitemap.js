const SITE_URL = "https://cloudwaremx.com";

export default function sitemap() {
  return [
    { url: `${SITE_URL}/`, priority: 1.0 },
    { url: `${SITE_URL}/nosotros`, priority: 0.8 },
    { url: `${SITE_URL}/paquetes`, priority: 0.9 },
    { url: `${SITE_URL}/contacto`, priority: 0.8 },
  ];
}
