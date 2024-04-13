import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";

import monorepo from '../../Assets/Projects/nike.png'
import weather from '../../Assets/Projects/weather.png'
import flight from '../../Assets/Projects/flight.png'

function Projects() {
  return (
    <Container fluid className="project-section" style={{backgroundColor:"black"}}>
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
              link="https://nike-e-commerce1.vercel.app/"
              imgPath={monorepo}
              isBlog={false}
              title="nike-e-commerce app"
              description="It is a e-commerce app built in react."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              link="https://weather-7.vercel.app/"
              imgPath={weather}
              isBlog={false}
              title="Weather App"
              description="Provides information about temperature, wind speed, and humidity in real-time."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              link="https://book-flights.vercel.app/"
              imgPath={flight}
              isBlog={false}
              title="Flight Booking"
              description="Frontend flight booking app."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
