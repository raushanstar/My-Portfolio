import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import java from "../../Assets/Projects/java-spring.png";
import netflixgpt from "../../Assets/Projects/netflixgpt.png";
import imagesearch from "../../Assets/Projects/imagesearch.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={java}
              isBlog={false}
              title="Blog App Apis"
              description="This is the backend project for a blog application. In this project, I have created secure endpoints using Java Spring Boot."
              ghLink="https://github.com/raushanstar/blog-app-apis"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflixgpt}
              isBlog={false}
              title="Netflix Gpt"
              description="This is a clone of the popular streaming platform Netflix, developed entirely using JavaScript and ReactJS. and in this I have used GPT for movie Recommendation"
              ghLink="https://github.com/raushanstar/netflix-gpt"
              demoLink="https://netflix-gpt-nextgen.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imagesearch}
              isBlog={false}
              title="Image Search App"
              description="This app is provided high quality image from unsplash and show the result very efficiently and easily"
              ghLink="https://github.com/raushanstar/Image-Search-App"
              demoLink="https://raushanstar.github.io/Image-Search-App/"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
