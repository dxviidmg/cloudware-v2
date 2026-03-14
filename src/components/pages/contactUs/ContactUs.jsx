import { Title } from "../../../components/common/title/Title";
import { Row, Col, Container } from "react-bootstrap";
import { Map } from "./Map";
import { SendEmail } from "./sendEmail";

export const ContactUs = () => {
  return (
    <section id="contact-us" className="paddings">
      <Title title={"Cotiza con nosotros"} color={"var(--accent)"} />

      <Container>
        <Row className="align-items-stretch">
          <Col lg={6} className="margin-col fade-in-left">
            <SendEmail />
          </Col>
          <Col lg={6} className="margin-col fade-in-right">
            <div style={{ borderRadius: "20px", overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.15)", height: "100%" }}>
              <Map />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
