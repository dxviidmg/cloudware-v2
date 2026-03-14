import Card from "react-bootstrap/Card";
import { BsWifi, BsSpeedometer2 } from "react-icons/bs";
import "./packages.css";

export function PackagesCard({ internet_package, color }) {
  return (
    <Card className="package-card text-center" style={{ '--card-color': color }}>
      <div className="package-header" style={{ background: color }}>
        <BsWifi className="package-icon" />
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
      </Card.Body>
    </Card>
  );
}
