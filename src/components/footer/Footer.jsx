import { Col, Container, Row } from "react-bootstrap";
import { BsWhatsapp, BsMailbox, BsClock, BsStickies } from "react-icons/bs";
import './footer.css'

export const Footer = () => {
  return (
    <footer className="">
      <Container>
        <Row className="justify-content-around">
          <Col md={6}>
            <h2>Soporte Técnico</h2>
            <p>
            En CloudWare la satisfaccion de nuestros clientes es lo más
            importante es por eso que hacemos lo necesario para mantener la
            mejor estabilidad y atender los reportes de falla a la brevedad.</p>

            <h2>Folio IFT</h2>
            <p>
            <BsStickies/>  IFT/223/UCS/AUT-COM-077/2018
            </p>
          </Col>
          <Col md={3}>
            <h2>Horario</h2>
            <p>
            <BsClock/>  Lunes a viernes de 9:00 - 18:00
            <br/>
            <BsClock/>  Sábado de 9:30 -15:30
            </p>
            <h2>Contacto</h2>
            <p>
            <BsWhatsapp/>  772-129-29-69
            <br/>
            <BsMailbox/>  contacto@cloudwaremx.com
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
