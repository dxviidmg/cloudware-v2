import { BsChevronDown } from "react-icons/bs";
import { Reveal } from "@/components/ui/reveal/Reveal";
import { Section } from "@/components/ui/section/Section";
import { Title } from "@/components/ui/title/Title";
import { faqs } from "@/data/faq";
import "./Faq.css";

export const Faq = () => (
  <Section id="faq" className="section-alt">
    <div className="container-cw faq-wrap">
      <Title
        id="faq-titulo"
        eyebrow="Preguntas frecuentes"
        title="Resolvemos tus dudas"
        subtitle="Lo que más nos preguntan antes de contratar."
      />
      <div className="faq-list">
        {faqs.map(({ q, a }, i) => (
          <Reveal as="details" name="faq" className="card-cw faq-item" key={q} delay={i * 60}>
            <summary>
              <span>{q}</span>
              <BsChevronDown aria-hidden="true" />
            </summary>
            <p>{a}</p>
          </Reveal>
        ))}
      </div>
    </div>
  </Section>
);
