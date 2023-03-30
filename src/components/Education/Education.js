import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import EducationCard from "./EducationCard";

import * as logos from "./educationLogos";

import "./education.css";

function Education() {

  const education = [
    {
      "title": "B-Tech In Computer Engineering",
      "organization": "MIT Academy Of Engineering",
      "organizationLogo": logos.mitaoe,
      "duration": "Aug 2019 - Present",
      "description": [],
      //"skills": "Springboot, React, Java",
      "educationType": "Student",
    },
    {
      "title": "Student",
      "organization": "Tripura Junior College",
      "organizationLogo": logos.tripura,
      "duration": "August 2017 - May 2019",
      "description": [],
     // "skills": "Software Development, Front-End Development,Git, User Interface Design, AJAX, Bootstrap, REST APIs, PHP, React, JavaScript",
      "educationType": "Student",
    },
    {
      "title": "Student",
      "organization": "Keshavraj Vidyalay Latur",
      "organizationLogo": logos.keshavraj,
      "duration": "May 2007 - May 2017",
      "description": [
        "Developed frontend for fundraising portal of the organization",
        "Assisting and collaborating with the teammates to work on HTML, CSS, JS, Bootstrap, PHP and various APIs"
      ],
    //  "skills": "Front-End Development, Predictive Attrition Model , Clustering, Random Forest , Decision Trees , HTML5, Cascading Style Sheets (CSS)",
      "educationType": "Student",
    },
  ]

  return (
    <Container className="py-5 mt-5">
      <Particle />
      <div className="main-timeline">
        {
          education.map((education, index) => {
            return (
              <div className={`timeline ${index % 2 === 0 ? "left" : "right"}`}>
                <EducationCard title={education.title} duration={education.duration} organization={education.organization} description={education.description} educationType={education.educationType} skills={education.skills} organizationLogo={education.organizationLogo} disabledProps={["description"]} />
              </div>
            )
          })
        }
      </div>
    </Container>
  );
}

export default Education;