import { Title } from "./../../common/title/Title";
import { Row, Col, Container } from "react-bootstrap";
import { PackagesCard } from "./PackageCard";

export const PackagesList = ({ name, internet_packages, color }) => {
  return (
    <div className="mb-5">
      <Title title={name} color={color} />
      <Container>
        <Row className="justify-content-center">
          {internet_packages.map((internet_package, index) => (
            <Col xs={10} sm={6} lg={4} xl={3} key={index} className="fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <PackagesCard internet_package={internet_package} color={color} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};
