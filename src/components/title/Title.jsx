import { Row, Col } from "react-bootstrap";

export const Title = ({ title, color }) => {
  return (
    
    <Row className="w-100">
      <Col
        className="text-center text-white"
        md={6}
        style={{ backgroundColor: color, borderRadius: "0px 50px 50px 0px", padding: "20px"}}
      >
        <h1>{title}</h1>
      </Col>
    </Row>
  );
};
