import React from "react";
import { useRef, useEffect } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import htmlCSS from "../images/html:css-bg.png";
import python from "../images/python-BG.png";
import JS from "../images/JS-BG.png";
import Cpp from "../images/C++-BG.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

    gsap.from(ref.querySelector(".B1"), {
      scrollTrigger: {
        trigger: ref.querySelector(".skills-grid"),
        start: "top bottom",
      },
      scaleX: 0,
      transformOrigin: "0px 0px",
      ease: "none",
      duration: 1.2,
    });
    gsap.from(ref.querySelector(".B2"), {
      scrollTrigger: {
        trigger: ref.querySelector(".skills-grid"),
        start: "top bottom",
      },
      scaleX: 0,
      transformOrigin: "0px 0px",
      ease: "none",
      duration: 1.4,
    });
    gsap.from(ref.querySelector(".B3"), {
      scrollTrigger: {
        trigger: ref.querySelector(".skills-grid"),
        start: "top bottom",
      },
      scaleX: 0,
      transformOrigin: "0px 0px",
      ease: "none",
      duration: 1.4,
    });
    gsap.from(ref.querySelector(".B4"), {
      scrollTrigger: {
        trigger: ref.querySelector(".skills-grid"),
        start: "top bottom",
      },
      scaleX: 0,
      transformOrigin: "0px 0px",
      ease: "none",
      duration: 1.4,
    });
    gsap.from(ref.querySelector(".B5"), {
      scrollTrigger: {
        trigger: ref.querySelector(".skills-grid"),
        start: "top bottom",
      },
      scaleX: 0,
      transformOrigin: "0px 0px",
      ease: "none",
      duration: 1.4,
    });
    gsap.from(ref.querySelector(".B6"), {
      scrollTrigger: {
        trigger: ref.querySelector(".skills-grid"),
        start: "top bottom",
      },
      scaleX: 0,
      transformOrigin: "0px 0px",
      ease: "none",
      duration: 1.4,
    });
    gsap.from(ref.querySelector(".B7"), {
      scrollTrigger: {
        trigger: ref.querySelector(".skills-grid"),
        start: "top bottom",
      },
      scaleX: 0,
      transformOrigin: "0px 0px",
      ease: "none",
      duration: 1.4,
    });
    gsap.from(ref.querySelector(".B8"), {
      scrollTrigger: {
        trigger: ref.querySelector(".skills-grid"),
        start: "top bottom",
      },
      scaleX: 0,
      transformOrigin: "0px 0px",
      ease: "none",
      duration: 1.4,
    });
    gsap.from(ref.querySelector(".B9"), {
      scrollTrigger: {
        trigger: ref.querySelector(".skills-grid"),
        start: "top bottom",
      },
      scaleX: 0,
      transformOrigin: "0px 0px",
      ease: "none",
      duration: 1.4,
    });
    gsap.from(ref.querySelector(".B10"), {
      scrollTrigger: {
        trigger: ref.querySelector(".skills-grid"),
        start: "top bottom",
      },
      scaleX: 0,
      transformOrigin: "0px 0px",
      ease: "none",
      duration: 1.4,
    });
    gsap.from(ref.querySelector(".B11"), {
      scrollTrigger: {
        trigger: ref.querySelector(".skills-grid"),
        start: "top bottom",
      },
      scaleX: 0,
      transformOrigin: "0px 0px",
      ease: "none",
      duration: 1.4,
    });
    gsap.from(ref.querySelector(".B12"), {
      scrollTrigger: {
        trigger: ref.querySelector(".skills-grid"),
        start: "top bottom",
      },
      scaleX: 0,
      transformOrigin: "0px 0px",
      ease: "none",
      duration: 1.4,
    });
    gsap.from(ref.querySelector(".skills-grid"), {
      scrollTrigger: {
        trigger: ref.querySelector(".skills-grid"),
        start: "top bottom",
      },
      y: "-250px",
      opacity: 0,
      duration: 2,
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
                proficiency in 5 different languages. The projects I have
                undertaken and completed are driven by an interest and passion
                in the subject and sometimes a need to make life a little
                easier.
              </p>
            </div>
            <div className="skills__card__cards">
              <div className="skills__card__card">
                <h1>HTML / CSS</h1>
                <h5>
                  I truly enjoy web developpment, I believe it is a great
                  opportunity to display my creativity and technical skill
                  through varying stylistic visual elements. As displayed in the
                  projects section.
                </h5>
                <p>EXPERIENCE</p>
                <div className="progress-bar">
                  <div style={{ width: "95%" }} className="progress-bar-FILL">
                    95%
                  </div>
                </div>

                <img src={htmlCSS} alt="" />
              </div>
              <div className="skills__card__card">
                <h1>Python</h1>
                <h5>
                  My passion for Python is driven by an interest in automation.
                  Many short scripts and projects of automation can be found in
                  my GitHub linked on the navigation page!
                </h5>
                <p>EXPERIENCE</p>
                <div className="progress-bar">
                  <div style={{ width: "75%" }} className="progress-bar-FILL">
                    {" "}
                    75%
                  </div>
                </div>
                <img src={python} alt="" />
              </div>
              <div className="skills__card__card">
                <h1>JavaScript</h1>
                <h5>
                  Through JavaScript and its accompanying frameworks and
                  libraries I have been able to add a degree of complexity to my
                  UI and UX. Through animation and efficient organization using
                  tools like react components.
                </h5>
                <p>EXPERIENCE</p>
                <div className="progress-bar">
                  <div style={{ width: "85%" }} className="progress-bar-FILL">
                    85%
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
                <p>EXPERIENCE</p>
                <div className="progress-bar">
                  <div style={{ width: "70%" }} className="progress-bar-FILL">
                    70%
                  </div>
                </div>
                <img src={Cpp} alt="" />
              </div>
            </div>
          </div>
          <div className="skills__table">
            <div className="skills__table__header">
              <h4>SECTION 1.2</h4>
              <h2>LIBRARIES, FRAMEWORKS & SOFTWARE</h2>
              <div className="circle"></div>
            </div>
            <div className="skills-grid">
              <div className="skills-item">
                <p>React JS</p>
                <div className="progress-bar">
                  <div
                    style={{ width: "80%" }}
                    className="progress-bar-FILL B1"
                  >
                    80%
                  </div>
                </div>
              </div>
              <div className="skills-item">
                <p>Flask</p>
                <div className="progress-bar">
                  <div
                    style={{ width: "60%" }}
                    className="progress-bar-FILL B2"
                  >
                    60%
                  </div>
                </div>
              </div>
              <div className="skills-item">
                <p>Selenium</p>
                <div className="progress-bar">
                  <div
                    style={{ width: "95%" }}
                    className="progress-bar-FILL B3"
                  >
                    95%
                  </div>
                </div>
              </div>
              <div className="skills-item">
                <p>JQuery</p>
                <div className="progress-bar">
                  <div
                    style={{ width: "70%" }}
                    className="progress-bar-FILL B4"
                  >
                    70%
                  </div>
                </div>
              </div>
              <div className="skills-item">
                <p>Pygame</p>
                <div className="progress-bar">
                  <div
                    style={{ width: "75%" }}
                    className="progress-bar-FILL B5"
                  >
                    75%
                  </div>
                </div>
              </div>
              <div className="skills-item">
                <p>Node JS</p>
                <div className="progress-bar">
                  <div
                    style={{ width: "80%" }}
                    className="progress-bar-FILL B6"
                  >
                    80%
                  </div>
                </div>
              </div>

              <div className="skills-item">
                <p>Express</p>
                <div className="progress-bar">
                  <div
                    style={{ width: "65%" }}
                    className="progress-bar-FILL B7"
                  >
                    65%
                  </div>
                </div>
              </div>
              <div className="skills-item">
                <p>VS Code</p>
                <div className="progress-bar">
                  <div
                    style={{ width: "70%" }}
                    className="progress-bar-FILL B8"
                  >
                    70%
                  </div>
                </div>
              </div>
              <div className="skills-item">
                <p>Redux</p>
                <div className="progress-bar">
                  <div
                    style={{ width: "87%" }}
                    className="progress-bar-FILL B9"
                  >
                    85%
                  </div>
                </div>
              </div>
              <div className="skills-item">
                <p>MS Office</p>
                <div className="progress-bar">
                  <div
                    style={{ width: "80%" }}
                    className="progress-bar-FILL B10"
                  >
                    80%
                  </div>
                </div>
              </div>
              <div className="skills-item">
                <p>Anglar</p>
                <div className="progress-bar">
                  <div
                    style={{ width: "85%" }}
                    className="progress-bar-FILL B11"
                  >
                    75%
                  </div>
                </div>
              </div>
              <div className="skills-item">
                <p>Mongo DB</p>
                <div className="progress-bar">
                  <div
                    style={{ width: "70%" }}
                    className="progress-bar-FILL B12"
                  >
                    70%
                  </div>
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
