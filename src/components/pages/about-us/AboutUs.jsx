import { Title } from "../../common/title/Title";
import "./AboutUs.css";

export const AboutUs = () => (
  <>
    <section className="section" id="nosotros" aria-labelledby="nosotros-titulo">
      <div className="container-cw about-text">
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

      </div>
    </section>

  </>
);
