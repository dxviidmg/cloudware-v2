import Image from "next/image";
import { BsWifi, BsShieldCheck, BsPeople } from "react-icons/bs";
import { Reveal } from "../../common/reveal/Reveal";
import { Title } from "../../common/title/Title";
import img1 from "../../../assets/images/slices/1.jpeg";
import img2 from "../../../assets/images/slices/2.jpeg";
import img3 from "../../../assets/images/slices/3.jpeg";
import "./AboutUs.css";

const features = [
  { icon: BsWifi, title: "Conexión estable", desc: "Internet de alta velocidad sin interrupciones" },
  { icon: BsShieldCheck, title: "Servicio confiable", desc: "Soporte técnico de lunes a sábado" },
  { icon: BsPeople, title: "Trato cercano", desc: "Empresa local que entiende tus necesidades" },
];

const gallery = [
  { src: img1, alt: "Cables de red azules conectados a un patch panel" },
  { src: img2, alt: "Conectores de fibra óptica en un equipo de red" },
  { src: img3, alt: "Cables de fibra óptica amarillos y azules en un switch" },
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

        <div className="gallery">
          {gallery.map(({ src, alt }, i) => (
            <Reveal key={alt} delay={i * 120} className={i === 0 ? "gallery-wide" : ""}>
            <Image
              src={src}
              alt={alt}
              sizes="(max-width: 991px) 100vw, 560px"
              className="gallery-img"
            />
            </Reveal>
          ))}
        </div>
      </div>
    </section>

  </>
);
