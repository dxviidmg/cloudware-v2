import { Title } from "../titile/Title";
import { Row, Col, Container } from "react-bootstrap";
import { PackagesCard } from "./PackageCard";

export const PackagesList = ({ name, internet_packages, color }) => {
  return (
    <section id="packages">
      <Title title={name} color={color}/>

      <Container className="">
        <Row className="justify-content-center">
          {internet_packages.map((internet_package, index) => {
            return (
              <Col xs={10} sm={6} lg={4}>
                <PackagesCard internet_package={internet_package} color={color}/>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};
