import { Title } from "./../../common/title/Title";
import { Row, Col, Container } from "react-bootstrap";
import { PackagesCard } from "./PackageCard";

export const PackagesList = ({ name, description, internet_packages, color }) => {
  return (
    <div className="mb-5">
      <Title title={name} color={color} />
      <Container>
        {description && <p className="packages-description text-center">{description}</p>}
        <Row className="justify-content-center">
          {internet_packages.map((internet_package, index) => (
            <Col xs={10} sm={6} lg key={index} className="fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <PackagesCard internet_package={internet_package} color={color} popular={internet_package.popular} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};
