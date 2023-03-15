import React from "react";
import { RxExit } from "react-icons/rx";

import { HiChevronDoubleRight } from "react-icons/hi";

const SliderHome2 = () => {
  return (
    <div>
      <div className="bg-[url('https://i.ibb.co/XkdNYjf/BG-IMG.png')] bg-cover bg-center bg-no-repeat h-screen flex items-center">
        <div className="text-white container mx-auto p-2">
          <h2 className="text-3xl">Technology I Business I Consultan</h2>
          <h1 className="xl:text-[90px] md:text-[80px] text-5xl font-bold my-12">
            Best Grow Your <br />
            Business
          </h1>
          <h3 className="text-3xl">Our Best Business Technology Consulting</h3>
          <button className="btn btn-primary btn-lg rounded-full mt-12">
            Free Consultation
            <HiChevronDoubleRight />
          </button>
        </div>
      </div>
      {/* cards */}

      <div className=" container mx-auto max-w-[1410px]">
        <div className="grid lg:grid-cols-2 grid-cols-1 mt-[-63px]">
          <div className="bg-white flex md:flex-row flex-col md:gap-0 gap-4 justify-around items-center p-8 shadow-md">
            <img
              className="max-w-full"
              src="https://i.ibb.co/Jr2tP46/02-Home.png"
              alt=""
            />
            <p className="text-2xl font-semibold">
              Build Your Business With <br /> Right Way
            </p>
            <div className=" bg-primary w-12 h-12 flex justify-center items-center ">
              <RxExit className="text-3xl text-white  " />
            </div>
          </div>
          <div className="bg-white flex md:flex-row flex-col md:gap-0 gap-4 justify-around items-center p-8 shadow-md">
            <img
              className="max-w-full"
              src="https://i.ibb.co/k3m6Ggg/02-Home33.png"
              alt=""
            />
            <p className="text-2xl font-semibold">
              We Take Care and Growth <br />
              Your Business
            </p>
            <div className=" bg-primary w-12 h-12 flex justify-center items-center ">
              <RxExit className="text-3xl text-white  " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderHome2;
