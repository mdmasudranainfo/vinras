import React from "react";

const HeroHome = () => {
  return (
    <div className=" bg-[#F3F3F4] bg-[url('https://i.ibb.co/jhFf8hk/Img.png')] bg-right bg-no-repeat">
      <div className=" container mx-auto py-64">
        <div className="">
          <h1 className="text-3xl">Welcome To Digital Startup Agency</h1>
          <h2 className="text-[100px] font-bold mt-10 leading-snug">
            Digital Startup <br /> Agency
          </h2>
          <p className="text-3xl mt-7">
            Our Best Business Technology Consulting
          </p>
          <button className="btn btn-lg  btn-primary rounded-full mt-9 ">
            Free Consultation{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroHome;
