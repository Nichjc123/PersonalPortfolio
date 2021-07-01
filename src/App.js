import "./style.css";
import Skills from "./Compopnents/Skills";
import Projects from "./Compopnents/Projects";
import Experience from "./Compopnents/Experience";
import {
  AiOutlineDownload,
  AiOutlinePhone,
  AiOutlineMail,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import { IoIosArrowDropdown } from "react-icons/io";
import profile from "./images/Profile.jpg";
import { gsap } from "gsap";
import { useState, useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

function App() {
  const [skills, setSkills] = useState(false);
  const [proj, setProj] = useState(false);
  const [exp, setExp] = useState(false);
  let height = window.innerHeight;

  const dropdown = (e) => {
    e.preventDefault();
    const dropdown = document.getElementById("dropdown");
    if (dropdown.classList.contains("open")) {
      dropdown.classList.remove("open");
    } else {
      dropdown.classList.add("open");
    }
  };
  const STB = () => {
    var Scroll = require("react-scroll");
    var scroll = Scroll.animateScroll;
    scroll.scrollTo(height);
  };
  const skillHandler = () => {
    setProj(false);
    setExp(false);
    setSkills(!skills);
    STB();
  };

  const projHandler = () => {
    setExp(false);
    setSkills(false);
    setProj(!proj);
    STB();
  };

  const expHandler = () => {
    setSkills(false);
    setProj(false);
    setExp(!exp);
    STB();
  };

  const BackToTop = () => {
    var Scroll = require("react-scroll");
    var scroll = Scroll.animateScroll;
    scroll.scrollToTop();
  };
  useEffect(() => {
    height = window.innerHeight;
  });
  //ANIMATIONS
  let ref = useRef(null);

  useEffect(() => {
    document.title = "Portfolio | Nicholas Cantone";
    const tl = gsap.timeline();
    tl.from(ref.querySelector("header"), {
      y: "50px",
      opacity: 0,
      duration: 2,
    })
      .from(
        ref.querySelector(".resume-container"),
        {
          x: "-50px",
          opacity: 0,
          duration: 2,
          ease: "power4.out",
        },
        "-=1.6"
      )
      .from(
        ref.querySelector(".navP__dropdown__header"),
        {
          y: "-50px",
          opacity: 0,
          duration: 2,
          scale: 0.1,
          ease: "power4.out",
        },
        "-=1.5"
      );
  }, []);
  return (
    <>
      <div
        ref={(el) => {
          ref = el;
        }}
      >
        <header>
          <p>Welcome to my interactive resume navigation.</p>
        </header>
        <div className="flex-container">
          <div className="navP__res-down">
            <p>Press the icon to download a copy of my résumé.</p>
            <a
              href="https://drive.google.com/file/d/1mCJOJ8pSf1bry8UxgmrKuV-XcQyAsPRx/view?usp=sharing"
              target="_blank"
            >
              <AiOutlineDownload />
            </a>
          </div>
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
                <p>
                  Hello, I am a first year computer engineering student studying
                  at the university of waterloo.
                </p>
                <img src={profile} alt="" />
                <p>
                  I have 10+ years of classical music training and active
                  participation in sports. Self-taught technical coding skill
                  driven by a thirst for learning and a passion for programming.
                </p>
              </div>
            </div>
          </div>
          <div className="navP__dropdown">
            <div className="navP__dropdown__header">
              <p>Contact Me</p>
              <span onClick={dropdown} className="contact">
                <IoIosArrowDropdown />
              </span>
            </div>
            <div id="dropdown" className="navP__dropdown__links">
              <div className="navP__dropdown__links__link">
                <AiOutlinePhone />
                <p>(905)-802-4431</p>
              </div>
              <div className="navP__dropdown__links__link">
                <AiOutlineMail />
                <p>ncantone@uwaterloo.ca</p>
              </div>
              <div className="navP__dropdown__links__link">
                <a
                  style={{ color: "white" }}
                  href="https://www.linkedin.com/in/nicholas-cantone-b464241b3/"
                >
                  <AiOutlineLinkedin />
                </a>
                <a
                  style={{ color: "white" }}
                  href="https://www.linkedin.com/in/nicholas-cantone-b464241b3/"
                >
                  <p>LinkedIn</p>
                </a>
              </div>
              <div className="navP__dropdown__links__link">
                <a
                  style={{ color: "white" }}
                  href="https://github.com/Nichjc123"
                >
                  <AiOutlineGithub />
                </a>
                <a
                  style={{ color: "white" }}
                  href="https://github.com/Nichjc123"
                >
                  <p>GitHub</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {skills ? <Skills BackToTop={BackToTop} /> : null}
      {proj ? <Projects BackToTop={BackToTop} /> : null}
      {exp ? <Experience BackToTop={BackToTop} /> : null}
    </>
  );
}

export default App;
