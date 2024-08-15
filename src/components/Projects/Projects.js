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
              description="
          My Journey Footprint is a web application designed to help users calculate their carbon emissions based on their travel information. 
          The platform spreads awareness about the environmental impact of carbon emissions through a simple and intuitive map-based UI, 
          promoting optimal user engagement.
The application was developed as part of a university Industrial Consulting Project, where I collaborated with university colleagues to bring this idea
 to life.Contributed to both frontend and backend development, using a modern tech stack, including JavaScript and Vue.js for the front-end, PostgreSQL for
  the database,Tailwind CSS for styling, used Docker to containerize the application, 
 and integrated Hasura with GraphQL to manage real-time data queries efficiently.
             "
              ghLink="https://github.com/tomstrong64/MyJourneyFootprint-COM617"
              demoLink="https://myjourneyfootprint.uksouth.cloudapp.azure.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={football}
              isBlog={false}
              title="Community football"
              description=" Collaborated with a cross-functional team to design and develop a web application that connects football
               enthusiasts who are looking for others to play with. Users can register and find local games or create their own.
                The application was built using HTML and CSS, with a focus on implementing responsive design principles to ensure an 
                optimal user experience across all devices. 
              "
              ghLink="https://github.com/ZahraaTayyar/Community-Football-Website"
              demoLink="https://cyf-football-community.netlify.app/index.html"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={machineLearning}
              isBlog={false}
              title="Solent FINTECH"
              description="I developed a Python-based decision-making support system to evaluate and test the sustainability of a stock and shares 
              investment platform using data from Yahoo Finance. The system allows users to specify scenarios, such as interval (day/week), profit 
              targets, or stock interests, and provides graphical analysis of key performance metrics. It includes features like Exploratory 
              Data Analysis (EDA), top-10 correlation analysis, and predictive modeling using machine learning techniques such as ARIMA, LSTM,
               and Facebook Prophet. The application offers a user-friendly interface for performing EDA, correlation analysis, forecasting, 
               and generating buy/sell signals."
              ghLink="https://github.com/ali1373107/SolentFINTECH"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={devOps}
              isBlog={false}
              title="Points Of Intrest"
              description="Our team developed a secure, responsive web application for users to upload and share geographic points, descriptions, and photos. These points are displayed on an interactive map, accessible via both mobile and desktop devices.

Key Features:
Security & Authentication: Secured with HTTPS, using bcrypt for password hashing and JWT tokens for user authentication. Supports user roles and sign-ups.
Responsive & Mobile-Friendly: Fully responsive design, with mobile access to upload geo-locations without special permissions.
RESTful API: Documented with OpenAPI, handles geo-location uploads and user data.
Cloud-Hosted: Data stored in MongoDB, hosted on Azure with Docker containers.
GDPR Compliant: Ensures user data privacy, with comprehensive documentation provided.
Built using JavaScript, EJS, Docker, and MongoDB, the project follows DevOps practices with test-driven CI/CD processes."
              ghLink="https://github.com/tomstrong64/DevOpsAssessment"
              demoLink="https://coordinated-chaos.uksouth.cloudapp.azure.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={android}
              isBlog={false}
              title="Android development and 3D Graphics"
              description="Developed an Android application in Kotlin with a MySQL database, fulfilling advanced geolocation and POI management requirements. 
              The app downloads and stores Points of Interest (POIs) as GeoJSON data, saving them in an SQLite database using Room.
               Users can filter and display POIs in a RecyclerView, view them on an OSMDroid map, and receive notifications when near a POI. 
               A 3D augmented reality view overlays POIs on the camera feed, with real-time GPS tracking handled by an Android Service. 
               The app supports a dynamic user interface with ViewModel and LiveData integration"
              ghLink="https://github.com/ali1373107/Ali3DAssessment"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cyf}
              isBlog={false}
              title="Job board"
              description="Developed as a final project at CodeYourFuture within a team, this Job Board web application uses external APIs to 
              fetch and display job listings based on user preferences. The app features real-time job filtering, the ability to save and apply
               for jobs, and dynamic loading of images and information from a JSON dataset. Built with React.js, HTML, CSS, and Docker,
                it offers an engaging and responsive user experience."
              ghLink="https://github.com/OlushoreOdude/nyf-job-board"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
