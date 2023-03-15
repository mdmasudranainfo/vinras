import React from "react";
import AboutUs from "../../Components/AboutUs/AboutUs";
import BlogTwo from "../../Components/BlogTwo/BlogTwo";
import Brands from "../../Components/Brands/Brands";
import ExclusiveSkill from "../../Components/ExclusiveSkill/ExclusiveSkill";
import FAQTwo from "../../Components/FaqTow/FaqTow";
import OurServices from "../../Components/OurServices/OurServices";

import SliderHome2 from "../../Components/SliderHome2/SliderHome2";
import TeamTwo from "../../Components/TeamTow/TeamTow";
import TestimonialTwo from "../../Components/TestimonialTwo/TestimonialTwo";
import WhyChooseUs from "../../Components/WhyChooseUs/WhyChooseUs";

const HomePage2 = () => {
  return (
    <div>
      <SliderHome2 />
      <AboutUs />
      <OurServices />
      <ExclusiveSkill />
      <FAQTwo />
      <TeamTwo />
      <WhyChooseUs />
      <TestimonialTwo />
      <BlogTwo />
    </div>
  );
};

export default HomePage2;
