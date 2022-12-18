import React from "react";
import { useRef, useEffect } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Experience = ({ BackToTop }) => {
  let ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.from(ref.querySelector(".cont1"), {
      scrollTrigger: {
        trigger: ref.querySelector(".cont1"),
        start: "top center",
      },
      x: "300px",
      opacity: 0,
      duration: 1.2,
    });
    gsap.from(ref.querySelector(".cont2"), {
      scrollTrigger: {
        trigger: ref.querySelector(".cont2"),
        start: "top center",
      },
      x: "300px",
      opacity: 0,
      duration: 1.2,
    });
    gsap.from(ref.querySelector(".cont3"), {
      scrollTrigger: {
        trigger: ref.querySelector(".cont3"),
        start: "top bottom",
      },
      x: "300px",
      opacity: 0,
      duration: 1.2,
    });
    gsap.from(ref.querySelector(".cont4"), {
      scrollTrigger: {
        trigger: ref.querySelector(".cont4"),
        start: "top bottom",
      },
      x: "300px",
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
        <div className="experience">
          <div className="exp-header">
            <p>SECTION 3</p>
            <h1>MY WORK</h1>
          </div>
          <div className="expS-cont">
            <div className="exp-cont">
              <div className="number">
                <div className="number-inner">01</div>
                <div className="rect"></div>
              </div>
              <div className="exp-desc-cont cont1">
                <h2>TribalScale</h2>
                <h4>Software Engineer (Sep 2022 - Dec 2022)</h4>
                <p>
                  Developed 3 decentralized web applications using React.js, AWS
                  and Cadence to provide proof of attendance for client-facing
                  TribalScale events (Used by 200+ attendees, 95%+ client
                  satisfaction)
                </p>
                <p>
                  Reduced project cost by 25% by suggesting flow blockchain with
                  subsidized transactions and IPFS hosting
                </p>
                <p>
                  Chosen by Chief of Architecture to represent all internal
                  blockchain development at TribalScale webinar Created and
                  launched 3 unique non fungible token smart contracts on flow
                  blockchain implementing NFT and Metadata standards allowing
                  for transferability and royalties.
                </p>
              </div>
            </div>
            <div className="exp-cont ">
              <div className="number">
                <div className="number-inner">02</div>
                <div className="rect"></div>
              </div>
              <div className="exp-desc-cont cont2">
                <h2>XTIVA- Financial Systems</h2>
                <h4>FrontEnd Developer (Aug 2021 - Apr 2022)</h4>
                <p>
                  Worked within an agile team to develop new designs and
                  versions of our web services. Implemented enhanceents and
                  improved visuals by translating UX/UI design.
                </p>
                <p>
                  Worked closely with backend developers on a very large code
                  base. My contributions as a front end developer lead me to
                  adopt somewhat of a design role as well.
                </p>
              </div>
            </div>
            <div className="exp-cont">
              <div className="number">
                <div className="number-inner">03</div>
                <div className="rect"></div>
              </div>
              <div className="exp-desc-cont cont3">
                <h2>SKY IT</h2>
                <h4>FrontEnd Developer (Apr 2021 - Sep 2021)</h4>
                <p>
                  Worked within an agile team to implement a completely
                  redesigned version of their aviation asset managment software.
                </p>
                <p>
                  Given UX/UI design responsabilities in response to enhacements
                  suggested to proposed redesign.
                </p>
              </div>
            </div>
            <div className="exp-cont">
              <div className="number">
                <div className="number-inner">04</div>
                <div className="rect"></div>
              </div>
              <div className="exp-desc-cont last-cont cont4">
                <h2>Cabinet Office of Ontario</h2>
                <h4>Executive IT Support (Jan-April 2021)</h4>
                <p>
                  Acted as quality control worker by supervising and reviewing
                  work of other processors to ensure operation of warehouse
                  processes was done without error.
                </p>
                <p>
                  Processed orders using several databases and technical systems
                  to ensure the receival of shipments.
                </p>
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

export default Experience;
