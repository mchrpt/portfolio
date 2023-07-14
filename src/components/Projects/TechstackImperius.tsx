import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiGit,
} from "react-icons/di";
import {
    SiPytorch,
    SiCsharp,
    SiUnity,
    SiJetbrains,
} from "react-icons/si";

function TechstackImperius() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={1} className="tech-icons">
            <SiUnity />
            <div className="icon-label">Unity</div>
        </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiCsharp />
          <div className="icon-label">C#</div>
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <DiGit />
          <div className="icon-label">Git</div>
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiPytorch />
          <div className="icon-label">Pytorch</div>
      </Col>
        <Col xs={4} md={1} className="tech-icons">
            <SiJetbrains />
            <div className="icon-label">JetBrains</div>
        </Col>
    </Row>
  );
}

export default TechstackImperius;