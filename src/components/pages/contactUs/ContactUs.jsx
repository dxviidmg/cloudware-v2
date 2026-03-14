import { Title } from "../../../components/common/title/Title";
import { Row, Col, Container } from "react-bootstrap";
import { BsGeoAlt, BsWhatsapp, BsEnvelope, BsClock } from "react-icons/bs";
import { Map } from "./Map";
import { SendEmail } from "./sendEmail";
import "./contactUs.css";

export const ContactUs = () => {
  return (
    <section id="contact-us" className="paddings">
      <Title title={"Contáctanos"} color={"var(--accent)"} />

      <Container>
        <p className="contact-subtitle text-center">
          ¿Tienes dudas o quieres contratar? Escríbenos y te respondemos en menos de 24 horas.
        </p>

        {/* Info cards */}
        <Row className="justify-content-center mb-5">
          <Col xs={6} md={3} className="fade-in-up" style={{ animationDelay: "0s" }}>
            <div className="contact-info-card">
              <BsGeoAlt className="contact-info-icon" />
              <strong>Ubicación</strong>
              <span>C. Efrén Rebolledo 24, Actopan, Hgo.</span>
            </div>
          </Col>
          <Col xs={6} md={3} className="fade-in-up" style={{ animationDelay: "0.1s" }}>
            <div className="contact-info-card">
              <BsWhatsapp className="contact-info-icon" />
              <strong>WhatsApp</strong>
              <span>772-129-29-69</span>
            </div>
          </Col>
          <Col xs={6} md={3} className="fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="contact-info-card">
              <BsEnvelope className="contact-info-icon" />
              <strong>Email</strong>
              <span>contacto@cloudwaremx.com</span>
            </div>
          </Col>
          <Col xs={6} md={3} className="fade-in-up" style={{ animationDelay: "0.3s" }}>
            <div className="contact-info-card">
              <BsClock className="contact-info-icon" />
              <strong>Horario</strong>
              <span>Lun-Vie 9-18h, Sáb 9:30-15:30h</span>
            </div>
          </Col>
        </Row>

        {/* Form + Map */}
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
