import React from "react";
import { TfiAngleDoubleRight } from "react-icons/tfi";
import "./HeroHome.css";

const HeroHome = () => {
  return (
    <section className="vinras-hero-wrapper">
      <div className="container mx-auto h-screen">
        <article className="hero-article py-12 flex flex-col items-start justify-center h-full">
          <h4 className="text-[25px]">Welcome To Digital Startup Agency</h4>
          <h1 className="text-[4.588579795021962vw] font-bold">
            Digital Startup Agency
          </h1>
          <p>Our Best Business Technology Consulting</p>
          <button className="flex justify-between items-center py-4 px-7 bg-[#F94D1C] text-white rounded-full mt-7">
            Free Consultation <TfiAngleDoubleRight className="ml-4" />
          </button>
        </article>
      </div>
    </section>
  );
};

export default HeroHome;
