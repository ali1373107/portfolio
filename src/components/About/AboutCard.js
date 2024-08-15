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
            me to constantly explore new technologies and frameworks. I have
            solid experience in HTML, CSS, JavaScript, React, Next.js,
            PostgreSQL, and MongoDB. I'm particularly committed to using my
            skills to support causes I believe in, such as feminism and LGBTQ+
            rights. This dedication aligns with my work in developing
            applications that empower underrepresented communities. I am a fast
            learner, eager to dive into new challenges, and adaptable to various
            tech environments. I am excited to continue my journey in software
            development, bringing creativity, dedication, and a strong belief in
            equality and diversity to every project I undertake.
          </p>
          <footer className="blockquote-footer">Ali Dashti</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
