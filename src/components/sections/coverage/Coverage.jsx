"use client";

import { useState } from "react";
import {
  BsRouter, BsBroadcast, BsCheckCircleFill, BsGeoAlt, BsHouse, BsWifi, BsLightningCharge,
} from "react-icons/bs";
import { Reveal } from "@/components/ui/reveal/Reveal";
import { Section } from "@/components/ui/section/Section";
import { Title } from "@/components/ui/title/Title";
import { CoverageMap } from "./CoverageMap";
import "./Coverage.css";

const technologies = [
  { id: "fibra", icon: BsRouter, label: "Fibra óptica", title: "Alta velocidad y estabilidad", desc: "Conexión por fibra óptica directa en Actopan y comunidades cercanas." },
  { id: "antena", icon: BsBroadcast, label: "Antena", title: "Cobertura inalámbrica", desc: "Internet inalámbrico de alta cobertura para zonas más alejadas." },
];

const numbers = [
  { icon: BsGeoAlt, value: "5", label: "Municipios", note: "con cobertura activa" },
  { icon: BsHouse, value: "40+", label: "Comunidades", note: "conectadas" },
  { icon: BsLightningCharge, value: "100%", label: "Fibra propia", note: "Infraestructura propia" },
];

export const Coverage = () => {
  const [mode, setMode] = useState("fibra");

  return (
    <Section id="cobertura">
      <div className="container-cw cov-layout">
        <div>
          <Title
            id="cobertura-titulo"
            eyebrow="Cobertura"
            title="Actopan y alrededores"
            subtitle="Operamos desde Actopan con tecnología de fibra óptica propia y soluciones inalámbricas para llegar más lejos."
          />

          <Reveal className="cov-types" role="group" aria-label="Tipo de cobertura" delay={100}>
            {technologies.map(({ id, icon: Icon, label, title, desc }) => (
              <button
                key={id}
                type="button"
                className={`card-cw cov-type ${mode === id ? "is-active" : ""}`}
                aria-pressed={mode === id}
                onClick={() => setMode(id)}
              >
                <span className="icon-chip">
                  <Icon aria-hidden="true" />
                </span>
                <span className="cov-type-body">
                  <strong>{label}</strong>
                  <span className="cov-type-title">{title}</span>
                  <span>{desc}</span>
                </span>
                {mode === id && <BsCheckCircleFill className="cov-check" aria-hidden="true" />}
              </button>
            ))}
          </Reveal>

          <Reveal className="card-cw cov-numbers" delay={200}>
            <h3>Cobertura en números</h3>
            <ul>
              {numbers.map(({ icon: Icon, value, label, note }) => (
                <li key={label}>
                  <Icon aria-hidden="true" />
                  <strong className="tabular">{value}</strong>
                  <span className="cov-num-label">{label}</span>
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div>
          <Reveal className="card-cw cov-map-card" variant="right" delay={150}>
            <div className="cov-map-header">
              <span className="icon-chip">
                <BsWifi aria-hidden="true" />
              </span>
              <div>
                <strong>Mapa de cobertura</strong>
                <span>{mode === "fibra" ? "Fibra óptica" : "Internet inalámbrico"} en Hidalgo</span>
              </div>
            </div>

            <CoverageMap mode={mode} />

            <div className="cov-legend">
              <strong>Leyenda</strong>
              {mode === "fibra" ? (
                <span><i className="leg-dot leg-fiber" aria-hidden="true" /> Fibra óptica disponible</span>
              ) : (
                <span><i className="leg-dot leg-antenna" aria-hidden="true" /> Antena disponible</span>
              )}
              {mode === "fibra" && (
                <span><i className="leg-dot leg-soon" aria-hidden="true" /> Próxima cobertura óptica</span>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
};
