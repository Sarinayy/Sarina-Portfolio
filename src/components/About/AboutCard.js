import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sarina Yekta </span>
            from <span className="purple"> Stockholm Sweden.</span>
            <br />Ambitious, curious, and hardworking individual seeking employment. Ready to grow in the professional sphere and eager to gain more experience.
            <br />
            I have worked for the majority of my adult life in roles such as Section Chief and Franchise Manager.
            <br />
            Now, I feel I have gained more substantial expertise to work in a field that interests me. I am a self-motivated, adaptable, down-to-earth individual who is very open and sociable
            <br />
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Sarina Yekta</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;