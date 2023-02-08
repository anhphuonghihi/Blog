import React, { useState } from "react";
import { SliderData } from "./SliderData";
import "./slider.scss";
import { Button } from "@internals/components";
const ImageSlider = () => {
  const [current, setCurrent] = useState(0);

  if (!Array.isArray(SliderData) || SliderData.length <= 0) {
    return null;
  }

  return (
    <div className="slider">
      <section>
        {SliderData.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <div className="container">
                  <div className="container__image">
                    <img src={`${slide.image}`} alt="" />
                  </div>
                  <div className="Container__text">
                    <div className="slider__title">{slide.title}</div>
                    <div className="slider__content">{slide.content}</div>
                    <div className="slider__txt">{slide.txt}</div>
                    <Button link={slide.link1} text={slide.btn} />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </section>
      <ul className="slider-text-ul">
        {SliderData.map((btn, index) => (
          <button onMouseMove={() => setCurrent(index)}>
            <div className={index === current ? "link active" : "link"}>
              {btn.link}
            </div>
          </button>
        ))}
      </ul>
      <div className="slider-ul">
        {SliderData.map((btn, index) => (
          <button onClick={() => setCurrent(index)}>
            <li className={index === current ? "active" : ""}></li>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
