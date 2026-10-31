export const WHATSAPP_NUMBER = "527721292969";
export const WHATSAPP_DISPLAY = "772-129-29-69";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const EMAIL = "contacto@cloudwaremx.com";
export const ADDRESS = "C. Efrén Rebolledo 24, Actopan, Hgo.";
export const FACEBOOK_URL = "https://www.facebook.com/share/1GjR9zMfbf/";
export const HOURS = "Lun-Vie 9-18h, Sáb 9:30-15:30h";

export const whatsappLink = (message) =>
  `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
