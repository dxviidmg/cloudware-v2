import { BsGeoAlt, BsClock, BsWhatsapp, BsSignTurnRight } from "react-icons/bs";
import { Reveal } from "@/components/ui/reveal/Reveal";
import { Section } from "@/components/ui/section/Section";
import { Title } from "@/components/ui/title/Title";
import { ADDRESS, HOURS, MAPS_URL, WHATSAPP_DISPLAY, whatsappLink } from "@/data/constants";
import { Map } from "./Map";
import "./Contact.css";

export const Contact = () => (
  <Section id="contacto">
    <div className="container-cw">
      <Title
        id="contacto-titulo"
        eyebrow="Contacto"
        title="¿Listo para conectarte?"
        subtitle="Resolvemos tus dudas y te ayudamos a contratar. Escríbenos por WhatsApp y te respondemos en horario de atención."
      />

      <div className="contact-grid">
        <Reveal className="card-cw contact-card" variant="left">
          <header className="contact-card-head">
            <span className="icon-chip">
              <BsWhatsapp aria-hidden="true" />
            </span>
            <div>
              <h3>Escríbenos por WhatsApp</h3>
              <p>{WHATSAPP_DISPLAY}</p>
            </div>
          </header>
          <p>Cuéntanos qué necesitas, cotiza tu paquete o reporta una falla. Te atendemos directamente.</p>
          <a
            href={whatsappLink("Hola, quiero información sobre el servicio de internet")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cw btn-cw-primary"
          >
            <BsWhatsapp aria-hidden="true" /> Enviar mensaje
          </a>
        </Reveal>

        <Reveal className="card-cw contact-card" variant="right" delay={120}>
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
  </Section>
);
