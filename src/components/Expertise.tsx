import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaravel, faReact, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Laravel",
    "React.js",
    "Node.js",
    "Django",
    "PHP",
    "JavaScript",
    "HTML5",
    "CSS3",
    "MySQL",
    "PostgreSQL",
    "Postman"
];

const labelsSecond = [
    "AWS Lightsail",
    "Git",
    "REST APIs",
    "WebSockets",
    "JWT Authentication",
    "Swagger",
    "Linux",
    "Server Management"
];

const labelsThird = [
    "Python",
    "Machine Learning",
    "Generative AI",
    "Power BI",
    "Pandas",
    "SQL",
    "Data Analytics"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Web Development</h3>
                    <p>Built production-grade SaaS platforms, REST APIs, and e-commerce modules using modern full-stack frameworks. Strong grasp of the complete SDLC from architecture to deployment.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faLaravel} size="3x"/>
                    <h3>Cloud, DevOps & Deployment</h3>
                    <p>Handled full server management and deployment on AWS Lightsail for high-availability production environments. Experienced with REST APIs, WebSockets, JWT, and Agile workflows.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>AI & Data Engineering</h3>
                    <p>Built enterprise AI solutions including an AI Voice Calling System and WhatsApp CRM. Applied ML techniques and created analytics dashboards during a research internship at IIT Delhi.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;