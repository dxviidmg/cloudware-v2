import { BsWhatsapp } from "react-icons/bs";

export const WhatsAppButton = () => (
  <a
    href="https://wa.me/527721292969"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Contactar por WhatsApp"
    style={{
      position: "fixed",
      bottom: "25px",
      right: "25px",
      zIndex: 9999,
      background: "#25D366",
      color: "white",
      borderRadius: "50%",
      width: "60px",
      height: "60px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "1.8rem",
      boxShadow: "0 4px 20px rgba(37, 211, 102, 0.4)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "scale(1.1)";
      e.currentTarget.style.boxShadow = "0 6px 30px rgba(37, 211, 102, 0.6)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "scale(1)";
      e.currentTarget.style.boxShadow = "0 4px 20px rgba(37, 211, 102, 0.4)";
    }}
  >
    <BsWhatsapp />
  </a>
);
