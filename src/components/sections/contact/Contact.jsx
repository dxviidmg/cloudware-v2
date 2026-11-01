import { BsGeoAlt, BsWhatsapp, BsClock, BsChatDots, BsSignTurnRight } from "react-icons/bs";
import { Reveal } from "@/components/ui/reveal/Reveal";
import { Title } from "@/components/ui/title/Title";
import { WHATSAPP_DISPLAY, WHATSAPP_URL, ADDRESS, HOURS, MAPS_URL } from "@/data/constants";
import { Map } from "./Map";
import { SendEmail } from "./SendEmail";
import "./Contact.css";

export const Contact = () => (
  <section className="section" id="contacto" aria-labelledby="contacto-titulo">
    <div className="container-cw">
      <Title
        id="contacto-titulo"
        eyebrow="Contacto"
        title="Contáctanos"
        subtitle="¿Tienes dudas o quieres contratar? Escríbenos y te respondemos en menos de 24 horas."
      />

      <Reveal className="card-cw support-note">
        <div>
          <strong>Área técnica siempre disponible</strong>
          <span>Atendemos por WhatsApp al {WHATSAPP_DISPLAY}.</span>
        </div>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-cw btn-cw-primary">
          <BsWhatsapp aria-hidden="true" /> WhatsApp
        </a>
      </Reveal>

      <div className="contact-grid">
        <Reveal className="card-cw contact-card">
          <header className="contact-card-head">
            <span className="icon-chip">
              <BsChatDots aria-hidden="true" />
            </span>
            <div>
              <h3>Envíanos un mensaje</h3>
              <p>Déjanos tus datos y elige un paquete.</p>
            </div>
          </header>
          <SendEmail />
        </Reveal>

        <Reveal className="card-cw contact-card" delay={120}>
          <header className="contact-card-head">
            <span className="icon-chip">
              <BsGeoAlt aria-hidden="true" />
            </span>
            <div>
              <h3>Encuéntranos</h3>
              <p>{ADDRESS}</p>
            </div>
          </header>
          <div className="map-wrapper">
            <Map />
          </div>
          <div className="map-actions">
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="btn-cw btn-cw-primary">
              <BsSignTurnRight aria-hidden="true" /> Cómo llegar
            </a>
            <span>
              <BsClock aria-hidden="true" /> {HOURS}
            </span>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);
