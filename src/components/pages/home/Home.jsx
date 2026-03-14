import { Title } from "../../common/title/Title";
import { Row, Col, Container, Image } from "react-bootstrap";
import map from "./../../../assets/images/Map.png";
import devices from "./../../../assets/images/Devices.png";
import "./home.css";

export const Home = () => {
  return (
    <section id="home" className="paddings">
      <Title title={"Conectando tu mundo"} color={"var(--primary)"} />

      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} className="margin-col fade-in-left">
            <p className="home-text">
              Te brindamos las mejores soluciones de conexión a internet, que se
              adaptan a tus necesidades.
            </p>
            <p className="home-text">
              Tenemos la confianza de que nuestra experiencia y dedicación nos
              respalda y te garantiza un servicio de calidad.
            </p>
            <Image src={devices} className="img-fluid mt-4" alt="Dispositivos conectados" />
          </Col>
          <Col xs={12} md={6} className="margin-col fade-in-right text-center">
            <Image src={map} className="img-fluid home-map" alt="Mapa de cobertura" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
