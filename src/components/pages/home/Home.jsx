import { Title } from "../../common/title/Title";
import { Row, Col, Container, Image } from "react-bootstrap";
import map from "./../../../assets/images/Map.png";
import devices from "./../../../assets/images/Devices.png";
import "./home.css";

export const Home = () => {
  return (
    <section id="home" className="paddings">
      <Title title={"Conectando tu mundo"} color={"#A58CBF"} />

      <Container className="">
        <Row>
          <Col xs={12} md={6} className="margin-col">
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
          <Col xs={12} md={6} className="margin-col">
            <Image src={map} className="img-fluid"/>
          </Col>
        </Row>
      </Container>
    </section>
  );
};