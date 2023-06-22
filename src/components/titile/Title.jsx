import { Row, Col } from "react-bootstrap";

export const Title = ({title, color}) => {
  return (
    <Row>
          <Col className="text-center" md={6} style={{backgroundColor: color, borderRadius: "25px"}}>
                <h1>{title}</h1>
          </Col>
    </Row>

  );
};
