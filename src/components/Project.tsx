import React from "react";
import '../assets/styles/Project.scss';
import laundraWallah from '../assets/images/image1.png';
import brGym from '../assets/images/image2.png';
import brTech from '../assets/images/image3.png';
import buildrun from '../assets/images/image4.png';
function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">

            <div className="project">
                <a href="https://www.buildrun.app/" target="_blank" rel="noreferrer">
                    <img src={buildrun} className="zoom" alt="Buildrun thumbnail" width="100%"/>
                </a>
                <a href="https://www.buildrun.app/" target="_blank" rel="noreferrer">
                    <h2>Buildrun – Construction Management Software</h2>
                </a>
                <p>Freelance project — built a live construction management SaaS platform for Indian developers with auto-scheduling, geo-tagged quality inspections, and progress tracking. Managing 25M+ sq. ft. across India.</p>
            </div>

            <div className="project">
                <a href="https://pgm-q869.onrender.com/login" target="_blank" rel="noreferrer">
                    <img src="" className="zoom" alt="PG Management System thumbnail" width="100%"/>
                </a>
                <a href="https://pgm-q869.onrender.com/login" target="_blank" rel="noreferrer">
                    <h2>PG Management System</h2>
                </a>
                <p>Full-stack PG accommodation platform with role-based access, tenant lifecycle management, real-time notifications via WebSocket, room management, payments, and an analytics dashboard. Built with React.js and Java Spring Boot.</p>
            </div>

            <div className="project">
                <a href="https://br-tech-xi.vercel.app/" target="_blank" rel="noreferrer">
                    <img src={brTech} className="zoom" alt="BR Tech thumbnail" width="100%"/>
                </a>
                <a href="https://br-tech-xi.vercel.app/" target="_blank" rel="noreferrer">
                    <h2>BR Tech – IT Services Website</h2>
                </a>
                <p>College project and learning exercise — built a responsive multi-section IT services company website covering services, portfolio, careers, and contact pages. Deployed on Vercel.</p>
            </div>

            <div className="project">
    <a href="https://laundrawallah.gt.tc/" target="_blank" rel="noreferrer">
        <img src={laundraWallah} className="zoom" alt="LaundraWallah thumbnail" width="100%"/>
    </a>
    <a href="https://laundrawallah.gt.tc/" target="_blank" rel="noreferrer">
        <h2>LaundraWallah – On-demand Laundry Startup</h2>
    </a>
    <p>Built the web platform for my own laundry startup — an on-demand laundry and dry-cleaning service. Handled full-stack development and deployment independently before the venture was closed.</p>
</div>
            <div className="project">
                <a href="https://br-gym.gt.tc/" target="_blank" rel="noreferrer">
                    <img src={brGym} className="zoom" alt="Gym Website Template thumbnail" width="100%"/>
                </a>
                <a href="https://br-gym.gt.tc/" target="_blank" rel="noreferrer">
                    <h2>Gym Website Template</h2>
                </a>
                <p>Designed and developed a responsive gym website template with a modern UI, suitable for fitness centres and personal trainers. Built as a reusable frontend template.</p>
            </div>

        </div>
    </div>
    );
}

export default Project;