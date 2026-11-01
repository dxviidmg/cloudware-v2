"use client";

import { useRef, useState } from "react";
import { Title } from "@/components/ui/title/Title";
import { PackageCard } from "./PackageCard";
import { packageGroups } from "@/data/packages";
import "./Packages.css";

export const Packages = () => {
  const [active, setActive] = useState(packageGroups[0].id);
  const tabRefs = useRef({});

  function onKeyDown(e, index) {
    const last = packageGroups.length - 1;
    const next = { ArrowRight: index === last ? 0 : index + 1, ArrowLeft: index === 0 ? last : index - 1, Home: 0, End: last }[e.key];
    if (next === undefined) return;
    e.preventDefault();
    const id = packageGroups[next].id;
    setActive(id);
    tabRefs.current[id]?.focus();
  }

  const group = packageGroups.find((g) => g.id === active);

  return (
    <section className="section" id="paquetes" aria-labelledby="paquetes-titulo">
      <div className="container-cw">
        <Title
          id="paquetes-titulo"
          eyebrow="Nuestros planes"
          title="Nuestros paquetes"
          subtitle="Elige el plan que mejor se adapte a ti. Sin contratos forzosos, sin letras chiquitas."
        />

        <div className="tabs" role="tablist" aria-label="Tipo de servicio">
          {packageGroups.map((g, i) => (
            <button
              key={g.id}
              ref={(el) => (tabRefs.current[g.id] = el)}
              role="tab"
              id={`tab-${g.id}`}
              aria-selected={active === g.id}
              aria-controls={`panel-${g.id}`}
              tabIndex={active === g.id ? 0 : -1}
              className="tab"
              onClick={() => setActive(g.id)}
              onKeyDown={(e) => onKeyDown(e, i)}
            >
              {g.label}
            </button>
          ))}
        </div>

        <div key={group.id} className="rise" role="tabpanel" id={`panel-${group.id}`} aria-labelledby={`tab-${group.id}`} tabIndex={0}>
          <p className="packages-description">{group.description}</p>
          <div className="packages-grid">
            {group.plans.map((plan, i) => (
              <PackageCard key={plan.name} plan={plan} groupLabel={group.label} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
