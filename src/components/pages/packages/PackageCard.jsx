import Card from "react-bootstrap/Card";
import { BsSpeedometer2, BsStarFill } from "react-icons/bs";
import "./packages.css";

export function PackagesCard({ internet_package, color, popular }) {
  return (
    <Card className={`package-card text-center ${popular ? "package-popular" : ""}`}>
      {popular && (
        <div className="popular-badge">
          <BsStarFill /> Popular
        </div>
      )}
      <div className="package-header" style={{ background: color }}>
        <h2>{internet_package.name}</h2>
      </div>
      <Card.Body className="package-body">
        <div className="speed-badge">
          <BsSpeedometer2 />
          <span>{internet_package.speed} Mbps</span>
        </div>
        <div className="price-section">
          <span className="price-currency">$</span>
          <span className="price-amount">{internet_package.price}</span>
        </div>
        <span className="price-period">MXN / mes</span>
        <a
          href={`https://wa.me/527721292969?text=Hola, me interesa el paquete ${internet_package.name} de ${internet_package.speed} Mbps`}
          target="_blank"
          rel="noopener noreferrer"
          className="package-cta"
          style={{ background: color }}
        >
          ¡Lo quiero!
        </a>
      </Card.Body>
    </Card>
  );
}
