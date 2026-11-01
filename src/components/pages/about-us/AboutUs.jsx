import { BsWifi, BsShieldCheck, BsPeople } from "react-icons/bs";
import { Reveal } from "../../common/reveal/Reveal";
import { Title } from "../../common/title/Title";
import "./AboutUs.css";

const features = [
  { icon: BsWifi, title: "Conexión estable", desc: "Internet de alta velocidad sin interrupciones" },
  { icon: BsShieldCheck, title: "Servicio confiable", desc: "Soporte técnico de lunes a sábado" },
  { icon: BsPeople, title: "Trato cercano", desc: "Empresa local que entiende tus necesidades" },
];

export const AboutUs = () => (
  <>
    <section className="section" id="nosotros" aria-labelledby="nosotros-titulo">
      <div className="container-cw about-grid">
        <div>
          <Title id="nosotros-titulo" eyebrow="Quiénes somos" title="Conectamos Hidalgo desde el corazón de Actopan" />
          <p>
            Somos una empresa Hidalguense que nace del esfuerzo, trabajo y dedicación, en busca de
            satisfacer la necesidad cotidiana de contar con una conexión a internet confiable y de
            calidad.
          </p>
          <p>
            El desarrollo tecnológico se encuentra en constante cambio, y es por eso que nos esforzamos a diario para
            brindar el servicio que te mereces.
          </p>
        </div>

        <div>
          <ul className="about-features">
            {features.map(({ icon: Icon, title, desc }, i) => (
              <Reveal as="li" className="card-cw about-feature" key={title} delay={i * 80}>
                <span className="icon-chip">
                  <Icon aria-hidden="true" />
                </span>
                <div>
                  <strong>{title}</strong>
                  <span>{desc}</span>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>

  </>
);
