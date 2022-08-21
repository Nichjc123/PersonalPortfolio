import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { Link } from "react-router-dom";

const ResCard = ({ skillHandler, projHandler, expHandler }) => {
  return (
    <>
      <div className="resume-container">
        <div className="left-column">
          <div className="navP__info">
            <h3>NAVIGATE</h3>
            <div className="navP__info__desc">
              <p>Press the titles below to view more.</p>

              <BiLinkExternal />
            </div>
          </div>
          <div className="navP__links">
            <div className="navP__links_link">
              <button onClick={skillHandler}>SKILLS</button>
            </div>
            <div className="navP__links_link">
              <button onClick={projHandler}>PROJECTS</button>
            </div>
            <div className="navP__links_link">
              <button onClick={expHandler}>EXPERIENCE</button>
            </div>
          </div>
        </div>
        <div className="right-column">
          <p id="resName">NICHOLAS CANTONE</p>
          <div className="aboutMe-container">
            <h2>ABOUT ME</h2>
            <p>Hello, I'm Nick,</p>
            <p>
              I am a computer engineering student at the University of Waterloo
              with over 1.5 years of software development experience.
            </p>
            <p>Click the icons below to contact me or view my work.</p>
            <div className="logo-hub">
              <a href="https://github.com/nichjc123">
                <AiFillGithub size={35} />
              </a>
              <a href="https://www.linkedin.com/in/nicholas-cantone-b464241b3/">
                <AiFillLinkedin size={35} />
              </a>
              <a href="mailto: ncantone@uwaterloo.ca">
                <AiFillMail size={35} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResCard;
