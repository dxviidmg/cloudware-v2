import Card from "react-bootstrap/Card";
import "./packages.css";

export function PackagesCard({ internet_package, color }) {
  return (
    <Card className="text-center">
      <Card.Title
        style={{
          background: `linear-gradient(135deg, ${color}, ${color}cc)`,
          padding: "20px 0",
        }}
      >
        <h2 className="text-white">{internet_package.name}</h2>
      </Card.Title>
      <Card.Body>
        <Card.Text as="div" style={{ padding: "20px 0" }}>
          <span className="card-text">Navega con</span> <br />
          <span className="card-text2">{internet_package.speed} Mbps</span> <br />
          <span className="card-text">a solo</span> <br />
          <span className="card-text2">${internet_package.price}</span> <br />
          <span className="package-price-label">al mes</span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
