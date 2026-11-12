import { Reveal } from "@/components/ui/reveal/Reveal";
import { Section } from "@/components/ui/section/Section";
import { Title } from "@/components/ui/title/Title";
import "./About.css";

const PARAGRAPHS = [
  "Somos una empresa hidalguense que nace del esfuerzo, trabajo y dedicación, en busca de satisfacer la necesidad cotidiana de contar con una conexión a internet confiable y de calidad.",
  "El desarrollo tecnológico se encuentra en constante cambio, y es por eso que nos esforzamos a diario para brindar el servicio que te mereces.",
];

export const About = () => (
  <Section id="nosotros">
    <div className="container-cw about-text">
      <Title id="nosotros-titulo" eyebrow="Quiénes somos" title="Conectamos Hidalgo desde el corazón de Actopan" />
      {PARAGRAPHS.map((text, i) => (
        <Reveal key={i} as="p" delay={(i + 1) * 100}>
          {text}
        </Reveal>
      ))}
    </div>
  </Section>
);
