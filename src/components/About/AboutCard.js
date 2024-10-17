import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ali Dashti</span>. My
            passion for problem-solving and creating impactful solutions drives
            me to constantly explore new technologies and frameworks. I'm
            currently pursuing a Master's in AI for Engineering at the
            University of Bath, where I'm deepening my expertise in artificial
            intelligence, machine learning, and data-driven solutions. I
            recently completed my Bachelor's degree in Software Engineering from
            Solent University, where I gained strong foundational skills in
            full-stack development, problem-solving, and teamwork.
          </p>

          <footer className="blockquote-footer">Ali Dashti</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
