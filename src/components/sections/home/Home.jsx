import Image from "next/image";
import Link from "next/link";
import { BsWhatsapp, BsWifi, BsShieldLock, BsHeadset } from "react-icons/bs";
import { Reveal } from "@/components/ui/reveal/Reveal";
import { CountUp } from "@/components/ui/count-up/CountUp";
import hero from "@/assets/images/hero.webp";
import { Section } from "@/components/ui/section/Section";
import { Title } from "@/components/ui/title/Title";
import { whatsappLink, HOURS } from "@/data/constants";
import { packageGroups } from "@/data/packages";
import "./Home.css";

const stats = [
  { to: 2000, prefix: "+", label: "clientes activos" },
  { to: 99, suffix: "%", label: "disponibilidad de red" },
  { to: 5, suffix: "+", label: "años de experiencia" },
  { to: 5, label: "municipios con cobertura" },
];

const speedRange = (id) => {
  const speeds = packageGroups.find((g) => g.id === id).plans.map((p) => p.speed);
  return `${Math.min(...speeds)} a ${Math.max(...speeds)} Mbps`;
};

const services = [
  {
    icon: BsWifi,
    title: "Internet Hogar",
    desc: `Fibra óptica de ${speedRange("fibra")} o internet por antena de ${speedRange("antena")}.`,
  },
  {
    icon: BsShieldLock,
    title: "Red Segura",
    desc: "Protección contra DDoS, firewall administrado y monitoreo constante de la red.",
  },
  {
    icon: BsHeadset,
    title: "Soporte Inmediato",
    desc: `Atención por WhatsApp y teléfono. ${HOURS}.`,
  },
];

export const Home = () => (
  <>
    <section className="hero">
      <div className="hero-img" aria-hidden="true">
        <Image src={hero} alt="" fill priority sizes="(max-width: 991px) 100vw, 65vw" />
      </div>
      <div className="container-cw hero-grid">
        <div>
          <span className="eyebrow rise">Conectando tu mundo</span>
          <h1 className="rise" style={{ animationDelay: "80ms" }}>
            Soluciones de internet adaptadas a tus necesidades
          </h1>
          <p className="hero-lead rise" style={{ animationDelay: "160ms" }}>
            Fibra óptica e internet inalámbrico en Actopan, con servicio de calidad respaldado por
            nuestra experiencia.
          </p>
          <div className="hero-actions rise" style={{ animationDelay: "240ms" }}>
            <Link href="#paquetes" className="btn-cw btn-cw-primary">
              Ver paquetes
            </Link>
            <a
              href={whatsappLink("Hola, quiero información sobre el servicio de internet")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cw btn-cw-ghost"
            >
              <BsWhatsapp aria-hidden="true" /> Escríbenos
            </a>
          </div>
        </div>
      </div>
    </section>

    <section className="section" aria-label="Cifras">
      <div className="container-cw">
        <dl className="stats">
          {stats.map((s, i) => (
            <Reveal className="stat card-cw" key={s.label} delay={i * 80}>
              <dt>{s.label}</dt>
              <dd className="tabular">
                <CountUp to={s.to} prefix={s.prefix} suffix={s.suffix} />
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>

    <Section id="servicios" className="section-alt">
      <div className="container-cw">
        <Title
          id="servicios-titulo"
          eyebrow="Servicios"
          title="Todo lo que necesitas conectado"
          subtitle="Soluciones de conectividad para cada tipo de usuario, desde el hogar hasta la empresa."
        />
        <div className="grid-auto">
          {services.map(({ icon: Icon, title, desc }, i) => (
            <Reveal as="article" className="card-cw service" key={title} delay={i * 100}>
              <span className="icon-chip">
                <Icon aria-hidden="true" />
              </span>
              <h3>{title}</h3>
              <p>{desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  </>
);
