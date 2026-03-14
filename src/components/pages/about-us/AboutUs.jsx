import { Title } from "../../common/title/Title";
import { Row, Col, Container } from "react-bootstrap";
import { ImageGallery } from "../../common/gallery/ImageGallery";
import { BsWifi, BsShieldCheck, BsPeople } from "react-icons/bs";
import img1 from "../../../assets/images/slices/1.jpeg";
import img2 from "../../../assets/images/slices/2.jpeg";
import img3 from "../../../assets/images/slices/3.jpeg";
import "./AboutUs.css";

const features = [
  { icon: BsWifi, title: "Conexión estable", desc: "Internet de alta velocidad sin interrupciones" },
  { icon: BsShieldCheck, title: "Servicio confiable", desc: "Soporte técnico de lunes a sábado" },
  { icon: BsPeople, title: "Trato cercano", desc: "Empresa local que entiende tus necesidades" },
];

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
              {features.map((f, i) => (
                <div className="about-feature glass-card" key={i}>
                  <f.icon className="about-feature-icon" />
                  <div>
                    <strong>{f.title}</strong>
                    <span>{f.desc}</span>
                  </div>
                </div>
              ))}
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
