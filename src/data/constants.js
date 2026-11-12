export const WHATSAPP_NUMBER = "527721292969";
export const WHATSAPP_DISPLAY = "772-129-29-69";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const SUPPORT_NUMBER = "527721155543";
export const SUPPORT_DISPLAY = "772-115-55-43";
export const SUPPORT_URL = `https://wa.me/${SUPPORT_NUMBER}`;
export const STREET = "C. Efrén Rebolledo 24";
export const ADDRESS = `${STREET}, Actopan, Hgo.`;
export const FACEBOOK_URL = "https://www.facebook.com/share/1GjR9zMfbf/";
export const HOURS = "Lun-Vie 9-18h, Sáb 9:30-15:30h";

export const whatsappLink = (message) =>
  `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
