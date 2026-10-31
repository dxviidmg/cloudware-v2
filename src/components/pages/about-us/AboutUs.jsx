import Image from "next/image";
import { BsWifi, BsShieldCheck, BsPeople, BsGeoAlt } from "react-icons/bs";
import { Title } from "../../common/title/Title";
import img1 from "../../../assets/images/slices/1.jpeg";
import img2 from "../../../assets/images/slices/2.jpeg";
import img3 from "../../../assets/images/slices/3.jpeg";
import map from "../../../assets/images/Map.png";
import "./AboutUs.css";

const features = [
  { icon: BsWifi, title: "Conexión estable", desc: "Internet de alta velocidad sin interrupciones" },
  { icon: BsShieldCheck, title: "Servicio confiable", desc: "Soporte técnico de lunes a sábado" },
  { icon: BsPeople, title: "Trato cercano", desc: "Empresa local que entiende tus necesidades" },
  { icon: BsGeoAlt, title: "Presencia local", desc: "Equipo en Actopan, listo para visitarte" },
];

const coverage = [
  { value: "4", label: "municipios" },
  { value: "40+", label: "comunidades" },
  { value: "2", label: "tecnologías" },
  { value: "100%", label: "red propia" },
];

const gallery = [
  { src: img1, alt: "Cables de red azules conectados a un patch panel" },
  { src: img2, alt: "Conectores de fibra óptica en un equipo de red" },
  { src: img3, alt: "Cables de fibra óptica amarillos y azules en un switch" },
];

export const AboutUs = () => (
  <>
    <section className="section">
      <div className="container-cw about-grid">
        <div>
          <Title as="h1" eyebrow="Quiénes somos" title="Conectamos Hidalgo desde el corazón de Actopan" />
          <p>
            Somos una empresa hidalguense que nace del esfuerzo, trabajo y dedicación, en busca de
            satisfacer la necesidad cotidiana de contar con una conexión a internet confiable y de
            calidad.
          </p>
          <p>
            El desarrollo tecnológico está en constante cambio, y por eso nos esforzamos a diario para
            brindar el servicio que te mereces.
          </p>
          <ul className="about-features">
            {features.map(({ icon: Icon, title, desc }) => (
              <li className="card-cw about-feature" key={title}>
                <span className="icon-chip">
                  <Icon aria-hidden="true" />
                </span>
                <div>
                  <strong>{title}</strong>
                  <span>{desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="gallery">
          {gallery.map(({ src, alt }, i) => (
            <Image
              key={alt}
              src={src}
              alt={alt}
              sizes="(max-width: 991px) 100vw, 560px"
              className={`gallery-img ${i === 0 ? "gallery-wide" : ""}`}
            />
          ))}
        </div>
      </div>
    </section>

    <section className="section section-alt">
      <div className="container-cw">
        <Title
          eyebrow="Cobertura"
          title="Red propia en Actopan y alrededores"
          subtitle="Llegamos con fibra óptica y antena a comunidades cercanas."
        />
        <dl className="coverage-stats">
          {coverage.map((c) => (
            <div className="card-cw coverage-stat" key={c.label}>
              <dt>{c.label}</dt>
              <dd className="tabular">{c.value}</dd>
            </div>
          ))}
        </dl>
        <Image src={map} alt="Mapa de cobertura de CloudWare en la región de Actopan" className="coverage-map" sizes="(max-width: 991px) 100vw, 560px" />
      </div>
    </section>
  </>
);
