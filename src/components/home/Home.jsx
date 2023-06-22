import { Title } from "../title/Title";
import { Row, Col, Container, Image } from "react-bootstrap";
import "./home.css";
import map from "./../../assets/images/Map.png";
import devices from "./../../assets/images/Devices.png";

export const Home = () => {
  return (
    <section id="home" className="paddings">
      <Title title={"Conectando tu mundo"} color={"#A58CBF"} />

      <Container className="">
        <Row className="d-flex align-items-center">
          <Col xs={12} md={6}>
            <p>
              {" "}
              Te brindamos las mejores soluciones de conexión a internet, que se
              adaptan a tus necesidades.
              <br />
              Tenemos la confianza de que nuestra experiencia y dedicación nos
              respalda y te garantiza un servicio de calidad.
            </p>

            <Image src={devices} className="img-fluid"/>
          </Col>
          <Col xs={12} md={6}>
            <Image src={map} className="img-fluid"/>
          </Col>
        </Row>
      </Container>
    </section>
  );
};