import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../../images/banner/banner1.jpg";
import banner2 from "../../../images/banner/banner2.jpg";
import "./Banner.css";

const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className="d-block w-100" src={banner1} alt="First slide" />
        <Carousel.Caption className="slider-content">
          <h1 className="slider-heading">
            Experience, Trust <br />
            and Proven Success.
          </h1>
          <p className="slider-text">
            We can help you whether your visit is to help maintain your teeth,{" "}
            <br />
            improve your smile or if you have an emergency.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={banner2} alt="Second slide" />

        <Carousel.Caption className="slider-content">
          <h1 className="slider-heading">
            Get All The Essential <br />
            Dental Care Today.
          </h1>
          <p className="slider-text">
            We listen and work togather to create an experience. <br />
            Understanding your requirement is important.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
