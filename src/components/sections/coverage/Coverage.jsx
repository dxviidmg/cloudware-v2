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
  { icon: BsGeoAlt, value: "4", label: "Municipios", note: "con cobertura activa" },
  { icon: BsHouse, value: "40+", label: "Comunidades", note: "conectadas" },
  { icon: BsWifi, value: "2", label: "Tecnologías", note: "Fibra óptica e inalámbrica" },
  { icon: BsLightningCharge, value: "100%", label: "Red propia", note: "Infraestructura de calidad" },
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

          <div className="cov-types" role="group" aria-label="Tipo de cobertura">
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
          </div>

          <Reveal className="card-cw cov-numbers">
            <h2>Cobertura en números</h2>
            <dl>
              {numbers.map(({ icon: Icon, value, label, note }) => (
                <div key={label}>
                  <Icon aria-hidden="true" />
                  <dd className="tabular">{value}</dd>
                  <dt>{label}</dt>
                  <span>{note}</span>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <div>
          <div className="card-cw cov-map-card">
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
              <span><i className="leg-dot leg-soon" aria-hidden="true" /> Próxima cobertura óptica</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
