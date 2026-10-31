import { BsSpeedometer2, BsStarFill } from "react-icons/bs";
import { whatsappLink } from "../../../data/constants";

export function PackageCard({ plan, groupLabel }) {
  const { name, speed, price, popular } = plan;
  const message = `Hola, me interesa el paquete ${name} de ${groupLabel} (${speed} Mbps)`;

  return (
    <article className={`card-cw package-card ${popular ? "package-popular" : ""}`}>
      {popular && (
        <span className="popular-badge">
          <BsStarFill aria-hidden="true" /> Más popular
        </span>
      )}
      <h3>{name}</h3>
      <p className="package-speed tabular">
        <BsSpeedometer2 aria-hidden="true" /> {speed} Mbps
      </p>
      <p className="package-price tabular">
        <span aria-hidden="true">$</span>
        {price}
        <small> MXN / mes</small>
      </p>
      <a
        href={whatsappLink(message)}
        target="_blank"
        rel="noopener noreferrer"
        className={`btn-cw ${popular ? "btn-cw-primary" : "btn-cw-ghost"}`}
        aria-label={`Lo quiero: paquete ${name} de ${groupLabel}, ${speed} Mbps por $${price} al mes`}
      >
        ¡Lo quiero!
      </a>
    </article>
  );
}
