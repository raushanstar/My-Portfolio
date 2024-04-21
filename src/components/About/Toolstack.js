import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
} from "react-icons/si";
import { DiEclipse } from "react-icons/di";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiEclipse />
        <h4>Eclipse</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <h4>VS Code</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <h4>Postman</h4>
      </Col>
    </Row>
  );
}

export default Toolstack;
