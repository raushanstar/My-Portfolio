import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Raushan Kumar </span>
            from <span className="purple"> Bihar, India.</span>
            <br />I am currently employed as a Systems Engineer at Infosys
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Sports, Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Historical Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies, Series
            </li>
          </ul>

          <pre style={{ color: "rgb(155 126 172)" }}>
            Do Code:<br></br>
            {"        "}While Alive ;
          </pre>
          <footer className="blockquote-footer">Raushan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
