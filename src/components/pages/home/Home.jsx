import Link from "next/link";
import { BsWhatsapp, BsWifi, BsShieldLock, BsHeadset, BsLightningCharge } from "react-icons/bs";
import { Reveal } from "../../common/reveal/Reveal";
import { CountUp } from "../../common/count-up/CountUp";
import { Title } from "../../common/title/Title";
import { whatsappLink } from "../../../data/constants";
import "./Home.css";

const stats = [
  { to: 2000, prefix: "+", label: "clientes activos" },
  { to: 99, suffix: "%", label: "uptime garantizado" },
  { to: 5, suffix: "+", label: "años conectando" },
  { text: "24/7", label: "soporte técnico" },
];

const services = [
  {
    icon: BsWifi,
    title: "Internet Hogar",
    desc: "De 40 a 600 Mbps por fibra óptica para streaming, clases y trabajo desde casa.",
  },
  {
    icon: BsShieldLock,
    title: "Red Segura",
    desc: "Protección contra ataques DDoS, firewall administrado y monitoreo constante.",
  },
  {
    icon: BsHeadset,
    title: "Soporte Inmediato",
    desc: "Atención por WhatsApp y teléfono. Atendemos tu reporte a la brevedad.",
  },
];

export const Home = () => (
  <>
    <section className="hero">
      <div className="container-cw hero-grid">
        <div>
          <span className="eyebrow rise">Conectando tu mundo</span>
          <h1 className="rise" style={{ animationDelay: "80ms" }}>
            Soluciones de internet adaptadas a tus necesidades
          </h1>
          <p className="hero-lead rise" style={{ animationDelay: "160ms" }}>
            Fibra óptica e internet inalámbrico en Actopan y municipios cercanos. Red propia, sin
            contratos forzosos y sin letras chiquitas.
          </p>
          <div className="hero-actions rise" style={{ animationDelay: "240ms" }}>
            <Link href="/paquetes" className="btn-cw btn-cw-primary">
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

        <div className="hero-card-wrap">
        <div className="hero-card card-cw">
          <span className="icon-chip">
            <BsLightningCharge aria-hidden="true" />
          </span>
          <p className="hero-card-label">Fibra óptica desde</p>
          <p className="hero-card-price tabular">
            $250<span>/mes</span>
          </p>
          <p className="hero-card-meta">Hasta 600 Mbps · Instalación y soporte local</p>
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
                {s.text ?? <CountUp to={s.to} prefix={s.prefix} suffix={s.suffix} />}
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>

    <section className="section section-alt">
      <div className="container-cw">
        <Reveal>
          <Title
            eyebrow="Servicios"
            title="Todo lo que necesitas para estar conectado"
            subtitle="Una red propia y un equipo local que responde cuando lo necesitas."
          />
        </Reveal>
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
    </section>

    <section className="section">
      <div className="container-cw">
        <Reveal className="cta-band card-cw">
          <h2>¿Listo para contratar?</h2>
          <p>Elige tu paquete o escríbenos y te ayudamos a escoger el ideal.</p>
          <div className="hero-actions">
            <Link href="/paquetes" className="btn-cw btn-cw-primary">
              Ver paquetes
            </Link>
            <Link href="/contacto" className="btn-cw btn-cw-ghost">
              Contáctanos
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  </>
);
