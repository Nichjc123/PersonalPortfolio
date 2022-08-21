import "./style.css";
import Skills from "./Compopnents/Skills";
import Projects from "./Compopnents/Projects";
import Experience from "./Compopnents/Experience";
import ResCard from "./Compopnents/ResCard";
import { gsap } from "gsap";
import { useState, useEffect, useRef } from "react";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import ParticlesBg from "particles-bg";
import Card from "react-animated-3d-card";
import { AiOutlineDownload } from "react-icons/ai";

function App() {
  const [skills, setSkills] = useState(false);
  const [proj, setProj] = useState(false);
  const [exp, setExp] = useState(false);
  let height = window.innerHeight;

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
    }).from(
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
      <ParticlesBg type="cobweb" bg={true} />
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
              rel="noreferrer"
              href="https://drive.google.com/file/d/1YmETZO8hE5US1ZMdAyriu61siPEbvPlx/view?usp=sharing"
              target="_blank"
            >
              <AiOutlineDownload />
            </a>
          </div>
          <Card
            style={{
              zIndex: "0",
              border: "1px solid black",
              boxShadow: "5px 10px 18px #888888",
            }}
            borderRadius="0px"
            shineStrength={0}
          >
            <ResCard
              projHandler={projHandler}
              skillHandler={skillHandler}
              expHandler={expHandler}
            />
          </Card>
          <div className="navP__dropdown"></div>
        </div>
      </div>
      {skills ? <Skills BackToTop={BackToTop} /> : null}
      {proj ? <Projects BackToTop={BackToTop} /> : null}
      {exp ? <Experience BackToTop={BackToTop} /> : null}
    </>
  );
}

export default App;
