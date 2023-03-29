import { Card } from "react-bootstrap";

import "./experienceCard.css";

function ExperienceCard(props) {
    let { title, description, duration, organization, skills, experienceType, organizationLogo, disabledProps } = props;

    disabledProps.forEach((prop) => {
        if (prop === "description") {
            description = [];
        }
        if (prop === "duration") {
            duration = "";
        }
        if (prop === "skills") {
            skills = "";
        }
        if (prop === "experienceType") {
            experienceType = "";
        }
        if (prop === "organizationLogo") {
            organizationLogo = "";
        }
    })

    return (
        <Card className="text-white border flex-row" style={{ backgroundColor: "transparent" }}>
            {organizationLogo && <img src={organizationLogo} alt="" width={50} className="d-block align-self-start ms-4 mt-4" />}
            <Card.Body className="me-4 ms-4">
                <p className="fw-bold mb-0 fs-5">{title}</p>
                <p className="fw-lighter mb-0">{organization} | <span className="fw-lighter">{experienceType}</span ></p>
                <p>{duration}</p>
                <p className="mb-3 fs-6">
                    {
                        description && Array.isArray(description) && description.map((desc, index) => {
                            return (
                                <span key={index}>&#x2022; {desc}<br /></span>
                            )
                        })
                    }
                </p>
                <p className={`text-wrap ${skills.length === 0 ? "d-none" : ""} skills`}>
                    <span className={`me-2 fw-bolder`}>Skills: </span>
                    {
                        skills.split(",").map((skill, index) => {
                            return (
                                <span className="me-2" key={index}>&#x2022; {skill}</span>
                            )
                        })
                    }
                </p>
            </Card.Body>
        </Card>
    );
}

export default ExperienceCard;