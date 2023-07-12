import { Title } from "../../../components/common/title/Title";
import { Row, Col, Container } from "react-bootstrap";
import { Map } from "./Map";
import { SendEmail } from "./sendEmail";
//import "./aboutus.css";

export const ContactUs = () => {
  return (
    <section id="contact-us" className="paddings">
      <Title title={"Cotiza"} color={"orange"} />

      <Container>
        <Row>
          <Col lg={6} className="margin-col">
            <SendEmail></SendEmail>
          </Col>
          <Col lg={6} className="margin-col">
            <Map />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
