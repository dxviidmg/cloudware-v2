import { Row, Col } from "react-bootstrap";

export const Title = ({ title, color }) => {
  return (
    <Row className="justify-content-center mb-3">
      <Col xs="auto">
        <h1
          className="text-center"
          style={{
            color: color,
            fontSize: "2.5rem",
            fontWeight: 800,
            position: "relative",
            paddingBottom: "15px",
          }}
        >
          {title}
          <span
            style={{
              position: "absolute",
              bottom: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: "60px",
              height: "4px",
              backgroundColor: color,
              borderRadius: "2px",
            }}
          />
        </h1>
      </Col>
    </Row>
  );
};
