import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import ExperienceCard from "./ExperienceCard";

import * as logos from "./experienceLogos";

import "./experiences.css";

function Experiences() {

  const experiences = [
    {
      "title": "SDE Intern",
      "organization": "Principal Global Services",
      "organizationLogo": logos.principal,
      "duration": "Jan 2023 - Present",
      "description": [],
      "skills": "Springboot, React, Java",
      "experienceType": "Internship",
    },
    {
      "title": "Web Development Intern",
      "organization": "Medlife",
      "organizationLogo": logos.medlife,
      "duration": "May 2022 - July 2022",
      "description": [],
      "skills": "Software Development, Front-End Development,Git, User Interface Design, AJAX, Bootstrap, REST APIs, PHP, React, JavaScript",
      "experienceType": "Internship",
    },
    {
      "title": "Data Scientist",
      "organization": "Vieh Private Limited",
      "organizationLogo": logos.vieh,
      "duration": "July 2022 - August 2022",
      "description": [
        "Developed frontend for fundraising portal of the organization",
        "Assisting and collaborating with the teammates to work on HTML, CSS, JS, Bootstrap, PHP and various APIs"
      ],
      "skills": "Front-End Development, Predictive Attrition Model , Clustering, Random Forest , Decision Trees , HTML5, Cascading Style Sheets (CSS)",
      "experienceType": "Internship",
    },
    {
      "title": "Full Stack Android Developer",
      "organization": "CODEKUL Private Limited",
      "organizationLogo": logos.codekul,
      "duration": "August 2021 - September 2021",
      "description": [
        "Built an API using Django Rest Framework for the EdTech startup.",
        "Scraped websites for course information and built production ready API",
      ],
      "skills": "Object-Oriented Programming (OOP), Java, MYSQL,Retrofit, REST APIs, App Development",
      "experienceType": "Internship",
    },
    {
      "title": "Co-ordinator",
      "organization": "Coding Club, MITAOE",
      "organizationLogo": logos.codingclub,
      "duration": "Oct 2020 - July 2021",
      "description": [],
      "skills": "Front-End Development , DSA , Coding Skills",
      "experienceType": "College Club",
    },
  ]

  return (
    <Container className="py-5 mt-5">
      <Particle />
      <div className="main-timeline">
        {
          experiences.map((experience, index) => {
            return (
              <div className={`timeline ${index % 2 === 0 ? "left" : "right"}`}>
                <ExperienceCard title={experience.title} duration={experience.duration} organization={experience.organization} description={experience.description} experienceType={experience.experienceType} skills={experience.skills} organizationLogo={experience.organizationLogo} disabledProps={["description"]} />
              </div>
            )
          })
        }
      </div>
    </Container>
  );
}

export default Experiences;