import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SimpleSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <h3>NATURAL COLOR IN DINING ROOM</h3>
        <img
          src={require("@assets/images/banner/banner1.jpeg")}
          alt="blank"
          width="852px"
          height="492px"
        />
      </div>
      <div>
        <h3>WOOD & FABRIC IN LIVING ROOM </h3>
        <img
          src={require("@assets/images/banner/banner2.jpeg")}
          alt="blank"
          width="852px"
          height="492px"
        />
      </div>
      <div>
        <h3>COZY IN BED ROOM</h3>
        <img
          src={require("@assets/images/banner/banner3.jpeg")}
          alt="blank"
          width="852px"
          height="492px"
        />
      </div>
      <div>
        <h3>O-MO SERIES AT MY HOME</h3>
        <img
          src={require("@assets/images/banner/banner4.jpeg")}
          alt="blank"
          width="852px"
          height="492px"
        />
      </div>
      <div>
        <h3>BE PROFESSIONAL</h3>
        <img
          src={require("@assets/images/banner/banner4.jpeg")}
          alt="blank"
          width="852px"
          height="492px"
        />
      </div>
    </Slider>
  );
};
export default SimpleSlider;
