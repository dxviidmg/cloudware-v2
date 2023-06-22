import { Title } from "../title/Title";
import { Row, Col, Container, Image } from "react-bootstrap";
import { MyCarousel } from "../carrusel/carrusel";
import img1 from "../../assets/images/slices/1.jpeg";
import img2 from "../../assets/images/slices/2.jpeg";
import img3 from "../../assets/images/slices/3.jpeg";
import "./aboutus.css";
export const AboutUs = () => {
  return (
    <section id="about-us" className="paddings">
      <Title title={"CloudWare"} color={"orange"} />

      <Container>
        <Row>
          <Col lg={6}>
            <p className="text">
              Somos una empresa Hidalguense, que nace del esfuerzo, trabajo y
              dedicación, en busca de satisfacer la necesidad cotidiana de
              contar con una conexión a internet, confiable y de calidad. El
              desarrollo tecnológico se encuentra en constante cambio, y es por
              eso que nos esforzamos a diario para brindar el servicio que te
              mereces.
            </p>
          </Col>
          <Col md={12}>
            <MyCarousel images={[img1, img2, img3]}></MyCarousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
