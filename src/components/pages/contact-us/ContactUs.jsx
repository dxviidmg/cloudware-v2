import { Title } from "../../common/title/Title";
import { Row, Col, Container } from "react-bootstrap";
import { BsGeoAlt, BsWhatsapp, BsEnvelope, BsClock } from "react-icons/bs";
import { WHATSAPP_DISPLAY, EMAIL, ADDRESS } from "../../../data/constants";
import { Map } from "./Map";
import { SendEmail } from "./SendEmail";
import "./ContactUs.css";

const contactInfo = [
  { icon: BsGeoAlt, label: "Ubicación", value: ADDRESS },
  { icon: BsWhatsapp, label: "WhatsApp", value: WHATSAPP_DISPLAY },
  { icon: BsEnvelope, label: "Email", value: EMAIL },
  { icon: BsClock, label: "Horario", value: "Lun-Vie 9-18h, Sáb 9:30-15:30h" },
];

export const ContactUs = () => {
  return (
    <section id="contact-us" className="paddings">
      <Title title={"Contáctanos"} color={"var(--accent)"} />

      <Container>
        <p className="section-subtitle text-center">
          ¿Tienes dudas o quieres contratar? Escríbenos y te respondemos en menos de 24 horas.
        </p>

        <Row className="justify-content-center mb-5">
          {contactInfo.map((item, index) => (
            <Col xs={6} md={3} key={index} className="fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="contact-info-card glass-card">
                <item.icon className="contact-info-icon" />
                <strong>{item.label}</strong>
                <span>{item.value}</span>
              </div>
            </Col>
          ))}
        </Row>

        <Row className="align-items-stretch">
          <Col lg={6} className="mb-4 fade-in-left">
            <h3 className="contact-form-title">Envíanos un mensaje</h3>
            <SendEmail />
          </Col>
          <Col lg={6} className="mb-4 fade-in-right">
            <h3 className="contact-form-title">Encuéntranos</h3>
            <div className="map-wrapper">
              <Map />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
