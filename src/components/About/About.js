import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks, SiCodechef } from "react-icons/si";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />
        <div>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>
                My <span className="purple">Programming</span> Profiles
              </h1>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <span className="purple">Leetcode</span>
                  <br />
                  <a
                    href="https://github.com/raushan_k30"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <SiLeetcode />
                  </a>
                </li>
                <li className="social-icons">
                  <span className="purple">GeeksforGeeks</span>
                  <br />
                  <a
                    href="https://auth.geeksforgeeks.org/user/raushan_k30/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <span title="GeeksforGeeks">
                      <SiGeeksforgeeks />
                    </span>
                  </a>
                </li>
                <li className="social-icons">
                  <span className="purple">CodeChef</span>
                  <br />
                  <a
                    href="https://www.codechef.com/users/raushanstar"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <SiCodechef />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </div>
        <Github />
      </Container>
    </Container>
  );
}

export default About;
