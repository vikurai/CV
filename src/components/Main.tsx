import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://media.licdn.com/dms/image/v2/D4D03AQHB9K9UwD98Sg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1697009754769?e=1782950400&v=beta&t=Ic85jFeuPfS7_C8zV1P4yLLgkMLtcUXILTFa_yT0u9Q" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/vikurai" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/vinayrai2004/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Vinay Kumar Rai</h1>
          <p>Full Stack Engineer</p>

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