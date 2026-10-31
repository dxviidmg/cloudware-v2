import Link from "next/link";
import { BsWhatsapp, BsWifi, BsShieldLock, BsHeadset, BsLightningCharge } from "react-icons/bs";
import { Title } from "../../common/title/Title";
import { whatsappLink } from "../../../data/constants";
import "./Home.css";

const stats = [
  { value: "+2000", label: "clientes activos" },
  { value: "99%", label: "uptime garantizado" },
  { value: "5+", label: "años conectando" },
  { value: "24/7", label: "soporte técnico" },
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
        <div className="rise">
          <span className="eyebrow">Conectando tu mundo</span>
          <h1>Soluciones de internet adaptadas a tus necesidades</h1>
          <p className="hero-lead">
            Fibra óptica e internet inalámbrico en Actopan y municipios cercanos. Red propia, sin
            contratos forzosos y sin letras chiquitas.
          </p>
          <div className="hero-actions">
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

        <div className="hero-card card-cw rise" style={{ animationDelay: "120ms" }}>
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
    </section>

    <section className="section" aria-label="Cifras">
      <div className="container-cw">
        <dl className="stats">
          {stats.map((s) => (
            <div className="stat card-cw" key={s.label}>
              <dt>{s.label}</dt>
              <dd className="tabular">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>

    <section className="section section-alt">
      <div className="container-cw">
        <Title
          eyebrow="Servicios"
          title="Todo lo que necesitas para estar conectado"
          subtitle="Una red propia y un equipo local que responde cuando lo necesitas."
        />
        <div className="grid-auto">
          {services.map(({ icon: Icon, title, desc }) => (
            <article className="card-cw service" key={title}>
              <span className="icon-chip">
                <Icon aria-hidden="true" />
              </span>
              <h3>{title}</h3>
              <p>{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container-cw">
        <div className="cta-band card-cw">
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
        </div>
      </div>
    </section>
  </>
);
