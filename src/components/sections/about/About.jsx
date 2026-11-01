import { Reveal } from "@/components/ui/reveal/Reveal";
import { Section } from "@/components/ui/section/Section";
import { Title } from "@/components/ui/title/Title";
import "./About.css";

export const About = () => (
  <>
    <Section id="nosotros">
      <div className="container-cw about-text">
        <div>
          <Title id="nosotros-titulo" eyebrow="Quiénes somos" title="Conectamos Hidalgo desde el corazón de Actopan" />
          <Reveal as="p" delay={100}>
            Somos una empresa Hidalguense que nace del esfuerzo, trabajo y dedicación, en busca de
            satisfacer la necesidad cotidiana de contar con una conexión a internet confiable y de
            calidad.
          </Reveal>
          <Reveal as="p" delay={200}>
            El desarrollo tecnológico se encuentra en constante cambio, y es por eso que nos esforzamos a diario para
            brindar el servicio que te mereces.
          </Reveal>
        </div>

      </div>
    </Section>

  </>
);
