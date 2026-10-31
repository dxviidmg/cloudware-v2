import { BsGeoAlt, BsWhatsapp, BsEnvelope, BsClock } from "react-icons/bs";
import { Title } from "../../common/title/Title";
import { WHATSAPP_DISPLAY, EMAIL, ADDRESS, HOURS } from "../../../data/constants";
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
  <section className="section">
    <div className="container-cw">
      <Title
        as="h1"
        eyebrow="Contacto"
        title="Hablemos de tu internet"
        subtitle="¿Tienes dudas o quieres contratar? Escríbenos y te respondemos en menos de 24 horas."
      />

      <ul className="grid-auto contact-info">
        {contactInfo.map(({ icon: Icon, label, value }) => (
          <li className="card-cw contact-info-card" key={label}>
            <span className="icon-chip">
              <Icon aria-hidden="true" />
            </span>
            <strong>{label}</strong>
            <span>{value}</span>
          </li>
        ))}
      </ul>

      <div className="contact-grid">
        <div>
          <h2 className="contact-title">Envíanos un mensaje</h2>
          <SendEmail />
        </div>
        <div>
          <h2 className="contact-title">Encuéntranos</h2>
          <div className="map-wrapper">
            <Map />
          </div>
        </div>
      </div>
    </div>
  </section>
);
