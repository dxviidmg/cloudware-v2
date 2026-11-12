import { ADDRESS, HOURS, SUPPORT_DISPLAY, WHATSAPP_DISPLAY } from "@/data/constants";

export const faqs = [
  {
    q: "¿Los precios incluyen impuestos?",
    a: "Sí. El costo mensual de cada paquete está en pesos mexicanos (MXN) con impuestos incluidos.",
  },
  {
    q: "¿Qué velocidad mínima me garantizan?",
    a: "Todos los paquetes, de fibra óptica y de antena, garantizan un mínimo de 10 Mbps de bajada y 10 Mbps de subida.",
  },
  {
    q: "¿Qué diferencia hay entre fibra óptica y antena?",
    a: "La fibra óptica llega directo a tu hogar en Actopan y comunidades cercanas, con la mayor velocidad y estabilidad. La antena es internet inalámbrico para zonas más alejadas. Revisa el mapa de cobertura para ver cuál llega a tu localidad.",
  },
  {
    q: "¿Cómo contrato un paquete?",
    a: `Elige tu paquete y pulsa "¡Lo quiero!" para escribirnos por WhatsApp, o contacta a nuestro personal administrativo al ${WHATSAPP_DISPLAY}.`,
  },
  {
    q: "¿Cómo reporto una falla?",
    a: `Escribe o llama a soporte técnico al ${SUPPORT_DISPLAY}. Atendemos en horario de ${HOURS}.`,
  },
  {
    q: "¿Puedo cancelar mi servicio?",
    a: "Sí, en cualquier momento. Solo necesitas avisar por escrito y estar al corriente en tus pagos. Para penalidades o garantías consulta el contrato de adhesión registrado ante Profeco, disponible en Documentación.",
  },
  {
    q: "¿Dónde puedo consultar los documentos legales?",
    a: "En el menú Documentación encontrarás el registro de Profeco, el aviso de privacidad, la carta de derechos mínimos, el código de políticas de gestión de tráfico y el código de prácticas comerciales.",
  },
  {
    q: "¿Dónde están y en qué horario atienden?",
    a: `Estamos en ${ADDRESS} Nuestro horario es ${HOURS}.`,
  },
];
