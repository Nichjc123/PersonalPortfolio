import React from "react";
import { useRef, useEffect } from "react";
import { BiLinkExternal } from "react-icons/bi";
import HomePage from "../images/HomePage.png";
import StockTracker from "../images/StockTracker.png";
import Game1 from "../images/2048-1.png";
import Game2 from "../images/2048-2.png";
import Shooter1 from "../images/shooter1.png";
import Shooter2 from "../images/shooter2.png";
import ImageSlider from "./ImageSlider";
import { FaArrowCircleUp } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const Projects = ({ BackToTop }) => {
  let ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.from(ref.querySelector(".container-1 img"), {
      scrollTrigger: {
        trigger: ref.querySelector(".container-1 img"),
        start: "top bottom",
      },
      x: 600,
      opacity: 0,
      ease: "expo.out",
      scale: 0.8,
      duration: 1.2,
    });
    gsap.from(ref.querySelector(".container-1 .desc-wrapper"), {
      scrollTrigger: {
        trigger: ref.querySelector(".container-1 .desc-wrapper"),
        start: "top bottom",
      },
      y: "-500px",
      opacity: 0,
      duration: 1.2,
    });

    gsap.from(ref.querySelector(".container-2 img"), {
      scrollTrigger: {
        trigger: ref.querySelector(".container-2 img"),
        start: "top bottom",
      },
      x: "-500px",
      duration: 1.4,
      opacity: 0,
    });

    gsap.from(ref.querySelector(".container-2 .desc-wrapper2"), {
      scrollTrigger: {
        trigger: ref.querySelector(".container-2 .desc-wrapper2"),
        start: "top bottom",
      },
      y: "-500px",
      opacity: 0,
      duration: 1.2,
    });
    gsap.to(ref.querySelector(".container-3 .title-cover"), {
      scrollTrigger: {
        trigger: ref.querySelector(".container-3 .title-cover"),
        start: "top bottom",
      },
      y: "60px",
      scaleY: 0.5,
      duration: 1.2,
    });
    gsap.from(ref.querySelector(".container-3 .p-box"), {
      scrollTrigger: {
        trigger: ref.querySelector(".container-3 .p-box"),
        start: "top bottom",
      },
      y: "60px",
      opacity: 0,
      duration: 1.2,
    });
    gsap.from(ref.querySelector(".proj-info4"), {
      scrollTrigger: {
        trigger: ref.querySelector(".proj-info4"),
        start: "top bottom",
      },
      y: "100px",
      opacity: 0,
      duration: 1.2,
    });
    gsap.from(ref.querySelector(".proj-4-images"), {
      scrollTrigger: {
        trigger: ref.querySelector(".proj-4-images"),
        start: "top bottom",
      },
      x: "200px",
      opacity: 0,
      duration: 1.2,
      scale: 1.1,
    });
    gsap.from(ref.querySelector(".slider-cont"), {
      scrollTrigger: {
        trigger: ref.querySelector(".slider-cont"),
        start: "top bottom",
      },
      y: "300px",
      opacity: 0,
      duration: 1.2,
    });
    gsap.from(ref.querySelector(".proj5-right"), {
      scrollTrigger: {
        trigger: ref.querySelector(".proj5-right"),
        start: "top bottom",
      },
      x: "300px",
      opacity: 0,
      duration: 1.2,
    });
    gsap.from(ref.querySelector(".proj5-left"), {
      scrollTrigger: {
        trigger: ref.querySelector(".proj5-left"),
        start: "top bottom",
      },
      x: "-300px",
      opacity: 0,
      duration: 1.2,
    });
  }, []);

  return (
    <>
      <div
        ref={(el) => {
          ref = el;
        }}
      >
        <div className="projects">
          <div className="proj-header">
            <p>SECTION 2</p>
            <h1>PROJECTS</h1>
          </div>
          <div className="project-container container-1">
            <div className="proj-info">
              <div className="sec-text">SECTION 2.1</div>
              <div className="title-container">
                <div className="title-text">Home Page Site</div>
                <a href="https://homepage-app.netlify.app">
                  <BiLinkExternal />
                </a>
              </div>

              <div className="desc-tile">FEATURES</div>
              <div className="desc-wrapper">
                <p>
                  This project is a home page application using HTML/CSS and
                  vanilla javascript. Using a weather API it provides accurante
                  information based on your location along with dynamic
                  greetings, quotes, and the time.
                </p>
              </div>
            </div>
            <img src={HomePage} alt="" />
          </div>
          <div className="project-container container-2">
            <div className="proj-info2">
              <div className="sec-text">SECTION 2.2</div>
              <div className="title-container">
                <div className="title-text">NC Stock Tracker</div>
                <a href="https://ncstock-tracker.netlify.app">
                  <BiLinkExternal />
                </a>
              </div>
            </div>
            <div className="container2">
              <img src={StockTracker} alt="" />
              <div className="info-2">
                <div className="desc-tile">FEATURES</div>
                <div className="desc-wrapper2">
                  <p>
                    Using several API's this project obtains live Stock updates
                    from google finance and displays them in card format.
                  </p>
                  <p>
                    The information is constantly updated. The site has a search
                    bar to filter through the different stocks on display, it
                    also contains helpful links to finance news and any
                    information reagrding the specific stock.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="project-container container-3">
            <div className="proj-info3">
              <div className="sec-text">SECTION 2.3</div>
              <div className="title-text">Cabinet IT Landing Page</div>
              <div className="title-cover"></div>
              <div className="desc-tile">DESCRIPTION</div>
              <div className="p-box">
                <p>
                  This is a landing page for the Cabinet Office IT support. I
                  have created this website without assitance, it is completly
                  responsive and functional on mobile devices. With an adaptive
                  dropdown menu.
                </p>
                <p>
                  Using a Sharepoint services library a functional Contact Us
                  form is automatically populated aswell as the main header of
                  the page using information from the user's microsoft account.
                </p>
              </div>
            </div>
            <div className="slider-cont">
              <ImageSlider />
            </div>
          </div>
          <div id="title4" className="sec-text">
            SECTION 2.4
          </div>
          <div className="project-container container-4">
            <div className="proj-info4">
              <div className="title-container">
                <div className="title-text">2048 Optimiser</div>
                <a href="https://github.com/Nichjc123/Projects/blob/master/2048.pyw">
                  <BiLinkExternal />
                </a>
              </div>
              <div className="desc-tile">DESCRIPTION</div>
              <p>
                The 2048 optimiser utilises python’s selenium module to simulate
                the puzzle game “2048” following a randomized move set.
              </p>
              <p>
                It then complies the results and display the sequence of moves
                that obtained the highest average score. As seen on the second
                image on the right.
              </p>
            </div>
            <div className="proj-4-images">
              <img id="img1" src={Game1} alt="" />
              <img id="img2" src={Game2} alt="" />
            </div>
          </div>
          <div className="project-container container-5">
            <div className="proj5-left">
              <div className="sec-text">SECTION 2.5</div>
              <div className="title-container">
                <div className="title-text">Mouse Accuracy Game</div>
                <a href="https://github.com/Nichjc123/Projects/blob/master/MouseAcc.py">
                  <BiLinkExternal />
                </a>
              </div>
              <div className="desc-tile">DESCRIPTION</div>
              <p>
                The mouse accuracy game is a test geared to improve the users
                mouse accuracy. The GUI is created with the Pygame library in
                order to generate a series of targets around the screen.
              </p>
              <p>
                A difficulty moderator can be chosen by the user to scale the
                targets. And the frequency at which they are generated.
              </p>
              <img src={Shooter1} alt="" />
            </div>
            <div className="proj5-right">
              <img src={Shooter2} alt="" />
              <p>
                Developping user interfaces in Python is what peaked my interest
                in web developpment and prompted my learning of HTMl and CSS.
              </p>
            </div>
          </div>
        </div>
        <div id="proj5nav" className="return-to-nav">
          <p>Back to nav</p>
          <FaArrowCircleUp onClick={BackToTop} />
        </div>
      </div>
    </>
  );
};

export default Projects;
