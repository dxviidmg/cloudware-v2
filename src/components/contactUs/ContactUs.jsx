import { Title } from "../title/Title";
import { Row, Col, Container } from "react-bootstrap";
import { MyCarousel } from "../carrusel/carrusel";
import img1 from "../../assets/images/slices/1.jpeg";
import img2 from "../../assets/images/slices/2.jpeg";
import img3 from "../../assets/images/slices/3.jpeg";
//import "./aboutus.css";

export const ContactUs = () => {
  return (
    <section id="about-us" className="paddings">
      <Title title={"Cotilza"} color={"orange"} />

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
          <Col lg={6}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.7243570392943!2d-98.944043!3d20.270263399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d171eade3730cd%3A0x7239a69fced9d958!2sC.%20Efr%C3%A9n%20Rebolledo%2024%2C%20Centro%20Nte%2C%2042500%20Actopan%2C%20Hgo.!5e0!3m2!1ses!2smx!4v1664304732393!5m2!1ses!2smx"
              width="100%"
              height="300"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
