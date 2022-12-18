import React from "react";
import { useRef, useEffect } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import htmlCSS from "../images/html:css-bg.png";
import python from "../images/python-BG.png";
import JS from "../images/JS-BG.png";
import Cpp from "../images/C++-BG.png";
import { gsap } from "gsap";
import Flask from "../images/skill images/Flask-icon.png";
import Selenium from "../images/skill images/Selenium-icon.png";
import ReactImg from "../images/skill images/React-icon.png";
import AWS from "../images/skill images/AWS-icon.png";
import Fusion from "../images/skill images/Fusion-icon.png";
import JQuery from "../images/skill images/Jquery-icon.png";
import Mongo from "../images/skill images/Mongo-icon.png";
import Play from "../images/skill images/Play-icon.png";
import temp from "../images/skill images/Placeholder-logo.png";
import TensorFlow from "../images/skill images/Tensor-icon.png";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Placeholder } from "react-bootstrap";

const Skills = ({ BackToTop }) => {
  //ANIMATIONS
  let ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const tl = gsap.timeline();
    gsap.from(ref.querySelector(".skills__card__header"), {
      y: 150,
      opacity: 0,
      duration: 2,
      ease: "power4.out",
    });
    gsap.from(ref.querySelector(".skills__card__cards"), {
      scrollTrigger: {
        trigger: ref.querySelector(".skills__card__cards"),
        start: "top bottom",
      },
      x: 550,
      opacity: 0,
      duration: 1.2,
    });
    gsap.from(ref.querySelector(".skills-grid"), {
      scrollTrigger: {
        trigger: ref.querySelector(".skills-grid"),
        start: "top bottom",
      },
      y: "-250px",
      opacity: 0,
      duration: 1,
    });
  }, []);
  return (
    <>
      <div
        ref={(el) => {
          ref = el;
        }}
      >
        <div className="skills">
          <div className="skill-header">
            <p>SECTION 1</p>
            <h1>ABOUT ME</h1>
          </div>
          <div className="skills__card" style={{ zIndex: 100 }}>
            <div className="skills__card__header">
              <h4>SECTION 1.1</h4>
              <h2>PERSONAL STATEMENT</h2>
            </div>
            <p>
              My name is Nicholas Cantone, I have practiced competitive team
              sports (hockey, soccer) and classical music all my life. Through
              sports I have come to truly recognize the important role
              communication plays in collaborating efficiently and effectively.
              Through music I have learned how attention to detail is key in
              delivering a piece of work without mistakes.
            </p>
            <br />
            <p>
              I have been programming since the age of 17. I would make scripts
              in Python to collect covid statistics or to book my timeslot at
              the gym right when it opened. Ever since, I have continued to
              develop my skills and knowledge branching into domains of Frontend
              and Backend web development, machine learning and blockchain
              development. To view my projects and past experience click the 'My
              Work' or 'Project' buttons in the interactive resume navigation
              above.
            </p>
          </div>
          <div className="skills__table">
            <div className="skills__table__header">
              <h4>SECTION 1.2</h4>
              <h2>SOME TECH I HAVE WORKED WITH</h2>
              <div className="circle"></div>
            </div>
            <div className=" skills-grid">
              <div className="skillcard">
                <div className="skill-icon">
                  <img src={Cpp} alt="" />
                </div>
                <div className="skill-info">
                  <div className="skill-title">C/C++</div>
                  <div className="skill-subtitle"></div>
                </div>
              </div>
              <div className="skillcard">
                <div className="skill-icon">
                  <img src={python} alt="" />
                </div>
                <div className="skill-info">
                  <div className="skill-title">Python</div>
                  <div className="skill-subtitle"></div>
                </div>
              </div>
              <div className="skillcard">
                <div className="skill-icon">
                  <img src={JS} alt="" />
                </div>
                <div className="skill-info">
                  <div className="skill-title">JavaScript</div>
                  <div className="skill-subtitle"></div>
                </div>
              </div>
              <div className="skillcard">
                <div className="skill-icon">
                  <img src={htmlCSS} alt="" />
                </div>
                <div className="skill-info">
                  <div className="skill-title">Cadence</div>
                  <div className="skill-subtitle"></div>
                </div>
              </div>
              <div className="skillcard">
                <div className="skill-icon">
                  <img src={TensorFlow} alt="" />
                </div>
                <div className="skill-info">
                  <div className="skill-title">TensorFlow</div>
                  <div className="skill-subtitle">Python</div>
                </div>
              </div>
              <div className="skillcard">
                <div className="skill-icon">
                  <img src={ReactImg} alt="" />
                </div>
                <div className="skill-info">
                  <div className="skill-title">React JS</div>
                  <div className="skill-subtitle">Java Script</div>
                </div>
              </div>
              <div className="skillcard">
                <div className="skill-icon">
                  <img src={Mongo} alt="" />
                </div>
                <div className="skill-info">
                  <div className="skill-title">Mongo DB</div>
                  <div className="skill-subtitle">Database</div>
                </div>
              </div>
              <div className="skillcard">
                <div className="skill-icon">
                  <img src={AWS} alt="" />
                </div>
                <div className="skill-info">
                  <div className="skill-title">AWS</div>
                  <div className="skill-subtitle">Web Services</div>
                </div>
              </div>
              <div className="skillcard">
                <div className="skill-icon">
                  <img src={Play} alt="" />
                </div>
                <div className="skill-info">
                  <div className="skill-title">NodeJS</div>
                  <div className="skill-subtitle">JavaScript</div>
                </div>
              </div>
              <div className="skillcard">
                <div className="skill-icon">
                  <img src={Fusion} alt="" />
                </div>
                <div className="skill-info">
                  <div className="skill-title">Fusion 360</div>
                  <div className="skill-subtitle">3D Modelling</div>
                </div>
              </div>
              <div className="skillcard">
                <div className="skill-icon">
                  <img src={temp} alt="" />
                </div>
                <div className="skill-info">
                  <div className="skill-title">Git/GitHub</div>
                  <div className="skill-subtitle"></div>
                </div>
              </div>
              <div className="skillcard">
                <div className="skill-icon">
                  <img src={Flask} alt="" />
                </div>
                <div className="skill-info">
                  <div className="skill-title">Solidity</div>
                  <div className="skill-subtitle"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="return-to-nav">
          <p>Back to nav</p>
          <FaArrowCircleUp onClick={BackToTop} />
        </div>
      </div>
    </>
  );
};

export default Skills;
