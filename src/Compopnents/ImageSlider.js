import React, { useState } from "react";
import Cab1 from "../images/Site-DESK.PNG";
import Cab2 from "../images/Site-DESK-DD.PNG";
import Cab3 from "../images/Site-MOB.PNG";
import Cab4 from "../images/Site-MOB-DD.PNG";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const Images = [Cab1, Cab2, Cab3, Cab4];
  const length = Images.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  return (
    <section className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      {Images.map((image, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={image} alt="" key={index} className="image" />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
