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
            <h1>SKILLS</h1>
          </div>
          <div className="skills__card">
            <div className="skills__card__header">
              <h4>SECTION 1.1</h4>
              <h2>PROGRAMMING LANGUAGES</h2>
              <p>
                Almost all of my programming knowledge has been self-taught.
                Through books from my local library, a plethora of YouTube
                videos and hours of practice and studying I have managed to gain
                a proficiency with multiple technologies that I could implement
                in a professional setting. The projects I have undertaken and
                completed are driven by an interest in the subject and sometimes
                a need to make life a little easier.
              </p>
            </div>
            <div className="skills__card__cards">
              <div className="skills__card__card">
                <h1>Python</h1>
                <h5>
                  I have used python to explore domains such as web scraping and
                  machine learning using powerful libraries such as selenium and
                  tensor flow. Visit my github for the code.
                </h5>
                <p>PROFICIENCY</p>
                <div className="progress-bar">
                  <div style={{ width: "75%" }} className="progress-bar-FILL">
                    {" "}
                    85%
                  </div>
                </div>
                <img src={python} alt="" />
              </div>
              <div className="skills__card__card">
                <h1>JavaScript</h1>
                <h5>
                  I have used JavaScript to accomplish many tasks from front end
                  development to game design. My experience includes libraries
                  like jQuery and Kendo UI and frameworks such as react.js.
                </h5>
                <p>PROFICIENCY</p>
                <div className="progress-bar">
                  <div style={{ width: "85%" }} className="progress-bar-FILL">
                    95%
                  </div>
                </div>
                <img src={JS} alt="" />
              </div>
              <div className="skills__card__card">
                <h1>C++</h1>
                <h5>
                  C++ is the first language that was ever taught to me in my
                  programming fundamentals course. We explored Object Oriented
                  programming, Algorithms, inheritance, polymorphism and more.
                </h5>
                <p>PROFICIENCY</p>
                <div className="progress-bar">
                  <div style={{ width: "70%" }} className="progress-bar-FILL">
                    70%
                  </div>
                </div>
                <img src={Cpp} alt="" />
              </div>
              <div className="skills__card__card">
                <h1>HTML / CSS</h1>
                <h5>
                  I truly enjoy web developpment, I believe it is a great
                  opportunity to display my creativity and technical skill
                  through varying stylistic visual elements. As displayed in the
                  projects section.
                </h5>
                <p>PROFICIENCY</p>
                <div className="progress-bar">
                  <div style={{ width: "95%" }} className="progress-bar-FILL">
                    95%
                  </div>
                </div>

                <img src={htmlCSS} alt="" />
              </div>
            </div>
          </div>
          <div className="skills__table">
            <div className="skills__table__header">
              <h4>SECTION 1.2</h4>
              <h2>LIBRARIES, FRAMEWORKS & SOFTWARE</h2>
              <div className="circle"></div>
            </div>
            <div className=" skills-grid">
              <div className="skillcard">
                <div className="skill-icon">
                  <img src={ReactImg} alt="" />
                </div>
                <div className="skill-info">
                  <div className="skill-title">React JS</div>
                  <div className="skill-subtitle">JavaScript</div>
                </div>
              </div>
              <div className="skillcard">
                <div className="skill-icon">
                  <img src={Flask} alt="" />
                </div>
                <div className="skill-info">
                  <div className="skill-title">Flask</div>
                  <div className="skill-subtitle">Python</div>
                </div>
              </div>
              <div className="skillcard">
                <div className="skill-icon">
                  <img src={Selenium} alt="" />
                </div>
                <div className="skill-info">
                  <div className="skill-title">Selenium</div>
                  <div className="skill-subtitle">Python</div>
                </div>
              </div>
              <div className="skillcard">
                <div className="skill-icon">
                  <img src={JQuery} alt="" />
                </div>
                <div className="skill-info">
                  <div className="skill-title">jQuery</div>
                  <div className="skill-subtitle">JavaScript</div>
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
                  <div className="skill-title">React Native</div>
                  <div className="skill-subtitle">Java Script</div>
                </div>
              </div>
              <div className="skillcard">
                <div className="skill-icon">
                  <img src={Mongo} alt="" />
                </div>
                <div className="skill-info">
                  <div className="skill-title">Mongo DB</div>
                  <div className="skill-subtitle">DataBase</div>
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
                  <div className="skill-title">Play</div>
                  <div className="skill-subtitle">Scala Framework</div>
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
                  <div className="skill-title">React JS</div>
                  <div className="skill-subtitle">JavaScript</div>
                </div>
              </div>
              <div className="skillcard">
                <div className="skill-icon">
                  <img src={temp} alt="" />
                </div>
                <div className="skill-info">
                  <div className="skill-title">React JS</div>
                  <div className="skill-subtitle">JavaScript</div>
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
