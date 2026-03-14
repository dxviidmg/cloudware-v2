import { Title } from "../../../components/common/title/Title";
import { Row, Col, Container } from "react-bootstrap";
import { ImageGallery } from "./../../common/gallery/ImageGallery";
import { BsWifi, BsShieldCheck, BsPeople } from "react-icons/bs";
import img1 from "../../../assets/images/slices/1.jpeg";
import img2 from "../../../assets/images/slices/2.jpeg";
import img3 from "../../../assets/images/slices/3.jpeg";
import "./aboutus.css";

export const AboutUs = () => {
  return (
    <section id="about-us" className="paddings">
      <Title title={"Quiénes somos"} color={"var(--accent)"} />

      <Container>
        <Row className="align-items-center">
          <Col lg={5} className="margin-col fade-in-left">
            <p className="about-highlight">
              Conectamos Hidalgo desde el corazón de Actopan
            </p>
            <p className="about-text">
              Somos una empresa Hidalguense que nace del esfuerzo, trabajo y
              dedicación, en busca de satisfacer la necesidad cotidiana de
              contar con una conexión a internet confiable y de calidad.
            </p>
            <p className="about-text">
              El desarrollo tecnológico se encuentra en constante cambio, y es
              por eso que nos esforzamos a diario para brindar el servicio que
              te mereces.
            </p>

            <div className="about-features">
              <div className="about-feature">
                <BsWifi className="about-feature-icon" />
                <div>
                  <strong>Conexión estable</strong>
                  <span>Internet de alta velocidad sin interrupciones</span>
                </div>
              </div>
              <div className="about-feature">
                <BsShieldCheck className="about-feature-icon" />
                <div>
                  <strong>Servicio confiable</strong>
                  <span>Soporte técnico de lunes a sábado</span>
                </div>
              </div>
              <div className="about-feature">
                <BsPeople className="about-feature-icon" />
                <div>
                  <strong>Trato cercano</strong>
                  <span>Empresa local que entiende tus necesidades</span>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={7} className="margin-col fade-in-right">
            <ImageGallery images={[img1, img2, img3]} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
