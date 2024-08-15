import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";
import streetSaver from "../../Assets/Projects/image2.png";
import MyJourneyFootprint from "../../Assets/Projects/image4.png";
import football from "../../Assets/Projects/image1.png";
import machineLearning from "../../Assets/Projects/image3.png";
import devOps from "../../Assets/Projects/image.png";
import android from "../../Assets/Projects/image6.png";
import cyf from "../../Assets/Projects/image7.png";

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
        <Row>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={streetSaver}
              isBlog={false}
              title="Street Saver"
              description="Street Saver is a mobile application designed to help users report potholes on roads and pathways using their
               mobile devices. Built with the React Native cross-platform framework, CSS, and Firebase, it offers a range of features including 
               account creation, login, logout, and account deletion. Users can report new potholes, visualize all existing potholes on a map,
                receive notifications if a pothole is detected in their area, and upload images. The app supports both admin and standard user
                 functionalities "
              ghLink="https://github.com/ali1373107/Street-Safer"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MyJourneyFootprint}
              isBlog={false}
              title="My journey footprint"
              description=""
              ghLink="https://github.com/tomstrong64/MyJourneyFootprint-COM617"
              demoLink="https://myjourneyfootprint.uksouth.cloudapp.azure.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={football}
              isBlog={false}
              title="Community football"
              description="."
              ghLink="https://github.com/ZahraaTayyar/Community-Football-Website"
              demoLink="https://cyf-football-community.netlify.app/index.html"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={machineLearning}
              isBlog={false}
              title="Solent FINTECH"
              description="."
              ghLink="https://github.com/ali1373107/SolentFINTECH"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={devOps}
              isBlog={false}
              title="Points Of Intrest"
              description="."
              ghLink="https://github.com/tomstrong64/DevOpsAssessment"
              demoLink="https://coordinated-chaos.uksouth.cloudapp.azure.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={android}
              isBlog={false}
              title="Android development and 3D Graphics"
              description="."
              ghLink="https://github.com/ali1373107/Ali3DAssessment"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cyf}
              isBlog={false}
              title="Job board"
              description="."
              ghLink="https://github.com/OlushoreOdude/nyf-job-board"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
