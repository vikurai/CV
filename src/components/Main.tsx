import React from "react";
import DownloadIcon from '@mui/icons-material/Download';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={`${process.env.PUBLIC_URL}/image.png`} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/vikurai" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/vinayrai2004/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Vinay Kumar Rai</h1>
          <p>Full Stack Engineer</p>
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
