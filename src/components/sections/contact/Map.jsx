import { ADDRESS } from "@/data/constants";

const SRC = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&hl=es&z=17&output=embed`;

export const Map = () => (
  <iframe
    title="Ubicación de CloudWare"
    src={SRC}
    width="100%"
    height="100%"
    style={{ minHeight: "400px", border: 0 }}
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
);
