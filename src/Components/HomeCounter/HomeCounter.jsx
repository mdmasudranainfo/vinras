import React from "react";
// import CountUp from "react-countup/build/CountUp";
import CountUp, { useCountUp } from "react-countup";

const HomeCounter = () => {
  return (
    <div className="bg-primary py-14">
      <div className="container mx-auto">
        {/* grid counter  */}
        <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1  gap-7">
          <div className=" bg-white flex flex-col items-center p-6 rounded-sm">
            <img src="https://i.ibb.co/7KBSwLQ/Layer-7.png" alt="" />
            <p className="my-5">Complete Project</p>
            <p className="text-3xl font-semibold">
              <CountUp delay={1} end={5684} enableScrollSpy />
            </p>
          </div>
          <div className=" bg-white flex flex-col items-center p-6 rounded-sm">
            <img src="https://i.ibb.co/0G2Bnv6/download.png" alt="" />
            <p className="my-5">Total Download</p>
            <p className="text-3xl font-semibold">
              <CountUp delay={1} end={5593} enableScrollSpy />
            </p>
          </div>
          <div className=" bg-white flex flex-col items-center p-6 rounded-sm">
            <img src="https://i.ibb.co/yXXyjLw/file.png" alt="" />
            <p className="my-5">Positive Review</p>
            <p className="text-3xl font-semibold">
              <CountUp delay={1} end={5487} enableScrollSpy />
            </p>
          </div>
          <div className=" bg-white flex flex-col items-center p-6 rounded-sm">
            <img src="https://i.ibb.co/gMtfqCK/user-3.png" alt="" />
            <p className="my-5">Team Members</p>
            <p className="text-3xl font-semibold">
              <CountUp delay={1} end={2474} enableScrollSpy />
            </p>
          </div>
          <div className=" bg-white flex flex-col items-center p-6 rounded-sm">
            <img src="https://i.ibb.co/CbDGgf4/food.png" alt="" />
            <p className="my-5">Cup Of Coffee</p>
            <p className="text-3xl font-semibold">
              <CountUp delay={1} end={6497} enableScrollSpy />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCounter;
