import { Col, Container, Row } from "react-bootstrap";
import { BsWhatsapp, BsEnvelope, BsClock, BsStickies } from "react-icons/bs";
import { WHATSAPP_DISPLAY, EMAIL } from "../../../data/constants";
import "./footer.css";

export const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className="justify-content-around">
          <Col lg={5} className="mb-4">
            <h2>Soporte Técnico</h2>
            <p>
              En CloudWare la satisfacción de nuestros clientes es lo más
              importante, es por eso que hacemos lo necesario para mantener la
              mejor estabilidad y atender los reportes de falla a la brevedad.
            </p>
            <h2>Folio IFT</h2>
            <p>
              <BsStickies /> IFT/223/UCS/AUT-COM-077/2018
            </p>
          </Col>
          <Col lg={3} className="mb-4">
            <h2>Horario</h2>
            <p>
              <BsClock /> Lunes a viernes 9:00 - 18:00
              <br />
              <BsClock /> Sábado 9:30 - 15:30
            </p>
            <h2>Contacto</h2>
            <p>
              <BsWhatsapp /> {WHATSAPP_DISPLAY}
              <br />
              <BsEnvelope /> {EMAIL}
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="text-center footer-copyright">
            <p>© {new Date().getFullYear()} CloudWare MX. Todos los derechos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
