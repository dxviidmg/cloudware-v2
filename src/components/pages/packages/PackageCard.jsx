import Card from "react-bootstrap/Card";
import "./packages.css";

export function PackagesCard({ internet_package, color }) {
  return (
    <Card className="text-center">
      <Card.Title style={{ backgroundColor: color, padding: "10px 0 3PX 0" }}>
        {" "}
        <h2 className="text-white">{internet_package.name}</h2>
      </Card.Title>
      <Card.Text>
        <span className="card-text"> Navega con</span> <br />{" "}
        <span className="card-text2"> {internet_package.speed} Mbps</span>{" "}
        <br />
        <span className="card-text"> a solo</span> <br />
        <span className="card-text2">
          {" "}
          ${internet_package.price} al mes
        </span>{" "}
        <br />
      </Card.Text>
    </Card>
  );
}
