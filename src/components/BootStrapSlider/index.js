import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./index.css";

function BootStrapSlider() {
  return (
    <Carousel fade pause={false} controls={false}>
      <Carousel.Item>
        <img
          className="d-block w-100 sliderImage"
          src="https://dsp.realworldhealth.tech/static/media/thumbnail_image_1.39e9bf36.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 sliderImage"
          src="https://dsp.realworldhealth.tech/static/media/thumbnail_image_2.214a99cc.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 sliderImage"
          src="https://dsp.realworldhealth.tech/static/media/thumbnail_image_3.f5a1ddd1.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default BootStrapSlider;
