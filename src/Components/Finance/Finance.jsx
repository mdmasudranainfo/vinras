import React from "react";

import Slider from "react-slick";

const Finance = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    // slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  return (
    <div className="container mx-auto">
      <h2> Single Item</h2>
      <Slider {...settings}>
        <div>
          <div className="">
            <h2>hello bangladeshs</h2>
          </div>
        </div>
        <div>
          <div className="">
            <h2>hello bangladeshs</h2>
          </div>
        </div>
        <div>
          <div className="">
            <h2>hello bangladeshs</h2>
          </div>
        </div>
        <div>
          <div className="">
            <h2>hello bangladeshs</h2>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Finance;
