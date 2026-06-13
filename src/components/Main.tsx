import React from "react";
import DownloadIcon from '@mui/icons-material/Download';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ParticleBackground from './ParticleBackground';
import { useTypingEffect } from './useTypingEffect';
import '../assets/styles/Main.scss';

const ROLES = [
  'Full Stack Engineer',
  'Laravel Developer',
  'React Developer',
  'AI Enthusiast',
];

function Main() {
  const typedRole = useTypingEffect(ROLES, 80, 45, 1800);

  return (
    <div className="container">
      <div className="about-section">
        <ParticleBackground />
        <div className="image-wrapper">
          <img src={`${process.env.PUBLIC_URL}/image.png`} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/vikurai" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/vinayrai2004/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1 className="hero-name">Vinay Kumar Rai</h1>
          <p className="hero-role">
            <span className="typed-text">{typedRole}</span>
            <span className="typed-cursor">|</span>
          </p>
          <a
            className="resume-button"
            href={`${process.env.PUBLIC_URL}/Vinay_Rai_Resume.pdf`}
            download="Vinay_Rai_Resume.pdf"
          >
            <DownloadIcon />
            Download Resume
          </a>

          <div className="mobile_social_icons">
            <a href="https://github.com/vikurai" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/vinayrai2004/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;