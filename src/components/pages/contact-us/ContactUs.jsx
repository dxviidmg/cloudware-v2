import { BsGeoAlt, BsWhatsapp, BsEnvelope, BsClock } from "react-icons/bs";
import { Reveal } from "../../common/reveal/Reveal";
import { Title } from "../../common/title/Title";
import { WHATSAPP_DISPLAY, WHATSAPP_URL, EMAIL, ADDRESS, HOURS } from "../../../data/constants";
import { Map } from "./Map";
import { SendEmail } from "./SendEmail";
import "./ContactUs.css";

const contactInfo = [
  { icon: BsGeoAlt, label: "Ubicación", value: ADDRESS },
  { icon: BsWhatsapp, label: "WhatsApp", value: WHATSAPP_DISPLAY },
  { icon: BsEnvelope, label: "Email", value: EMAIL },
  { icon: BsClock, label: "Horario", value: HOURS },
];

export const ContactUs = () => (
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
          <span>Atendemos por WhatsApp y teléfono.</span>
        </div>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-cw btn-cw-primary">
          <BsWhatsapp aria-hidden="true" /> WhatsApp
        </a>
      </Reveal>

      <ul className="grid-auto contact-info">
        {contactInfo.map(({ icon: Icon, label, value }, i) => (
          <Reveal as="li" className="card-cw contact-info-card" key={label} delay={i * 80}>
            <span className="icon-chip">
              <Icon aria-hidden="true" />
            </span>
            <strong>{label}</strong>
            <span>{value}</span>
          </Reveal>
        ))}
      </ul>

      <div className="contact-grid">
        <Reveal>
          <h2 className="contact-title">Envíanos un mensaje</h2>
          <SendEmail />
        </Reveal>
        <Reveal delay={120}>
          <h2 className="contact-title">Encuéntranos</h2>
          <div className="map-wrapper">
            <Map />
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);
