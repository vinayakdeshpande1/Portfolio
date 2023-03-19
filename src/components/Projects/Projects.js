import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Medlife from "./medlife.jpg";
import Drvoice from "./voicedr.jpg";
import medibot from "./medibot.jpeg";
import pms from "./Project-Management-Software.jpg";
import ecm from "./ecommerce.jpg";
import chat from "./chatapplication.jpg";



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
              imgPath={medibot}
              isBlog={false}
              title="Medibot"
              description="On our website, users can diagnose themselves by telling our chatbot their symptoms. Our chatbot will predict the disease name ,recommend
              medicine, and provide the doctor's details"
              ghLink="https://github.com/vinayakdeshpande1/Medical-Chatbot.git"
              //demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pms}
              isBlog={false}
              title="Project Management System"
              description="Students can manage their projects on our website. The team lead can create a group, add a milestone, create a task, assign that task , add
              members, and add a deadline."
              ghLink="https://github.com/vinayakdeshpande1/Project-Management-System.git"
            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecm}
              isBlog={false}
              title="Ecommerce Website "
              description="The implemented website has features like search for products; add to cart, buy product, view by category, about product, discount, payment
              options etc.  "
              ghLink="https://github.com/vinayakdeshpande1/Shopkart_Frontend.git"
              demoLink="https://shoppkartt.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chat}
              isBlog={false}
              title="Chat Application"
              description="In My Chat application user can create his group, can accept request , remove user, transfer adminship etc"
              ghLink="https://github.com/soumyajit4419/Plant_AI"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Drvoice}
              isBlog={false}
              title="Voice Prescription System"
              description="Desktop Application created for Doctor so they can diagnose the patient  and send Prescription to Patient through Mail"
              ghLink="https://github.com/vinayakdeshpande1/VoicePrescription_System.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Medlife}
              isBlog={false}
              title="Medlife"
              description="It is an ecommerce website where user can  buy products related to Medical Field"
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
