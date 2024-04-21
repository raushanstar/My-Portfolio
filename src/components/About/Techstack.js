import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiMysql,
  DiJenkins,
} from "react-icons/di";
import {
  SiFirebase,
  SiSpring,
  SiSelenium,
  SiTailwindcss,
  SiDocker,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava data-title="java" />
        <h4>Java</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <h4>JavaScript</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <h4>Python</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSpring />
        <h4>Spring</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <h4>React.js</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
        <h4>MySql</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <h4>MongoDB</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <h4>Node js</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJenkins />
        <h4>Jenkins</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
        <h4>Tailwind</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSelenium />
        <h4>Selenium</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <h4>Git</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
        <h4>Docker</h4>
      </Col>

    </Row>
  );
}

export default Techstack;
