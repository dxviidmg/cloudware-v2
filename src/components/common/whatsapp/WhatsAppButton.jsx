import { BsWhatsapp } from "react-icons/bs";
import { WHATSAPP_URL } from "../../../data/constants";
import "./WhatsAppButton.css";

export const WhatsAppButton = () => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Contactar por WhatsApp"
    className="whatsapp-btn"
  >
    <BsWhatsapp />
  </a>
);
