import React from "react";

const ExclusiveSkill = () => {
  return (
    <div className="container mx-auto bg-[#FAFAFA] mt-36 p-1">
      <div className="max-w-[1220px] mx-auto">
        {/* grid  */}
        <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-10">
          <div className="">
            <div className="flex items-center gap-2">
              {/* <div className="w-10 h-[2px] bg-primary"></div> */}
              <h4 className="font-semibold text-primary">Company Skills</h4>
              <div className="w-10 h-[2px] bg-primary"></div>
            </div>
            <h1 className="text-5xl font-bold mt-6 mb-16">
              Exclusive Work Skill
            </h1>

            {/* skill progress bar  */}
            <div className="">
              <div className="flex w-[90%] justify-between mb-3">
                <p>Web design</p>
                <p>90%</p>
              </div>
              <div className="h-4 bg-white rounded-full">
                <div className="bg-primary h-4 w-[90%] rounded-full"></div>
              </div>
            </div>
            <div className=" mt-7">
              <div className="flex w-[48%] justify-between mb-3">
                <p>Web development</p>
                <p>48%</p>
              </div>
              <div className="h-4 bg-white rounded-full">
                <div className="bg-primary h-4 w-[48%] rounded-full"></div>
              </div>
            </div>
            <div className=" mt-7">
              <div className="flex w-[28%] justify-between mb-3">
                <p>Web application</p>
                <p>28%</p>
              </div>
              <div className="h-4 bg-white rounded-full">
                <div className="bg-primary h-4 w-[28%] rounded-full"></div>
              </div>
            </div>
          </div>

          <div className="">
            <div className="">
              <img
                className="xl:mt-[-80px] mt-0 w-full mr-10"
                src="https://i.ibb.co/fvDJPmc/02-Home.png"
                alt=""
              />
            </div>
          </div>
        </div>

        {/* card */}
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-7 mt-24">
          <div className=" flex gap-7">
            <div className="bg-primary flex justify-center items-center p-7">
              <img src="https://i.ibb.co/rcDyLYJ/Layer-95.png" alt="" />
            </div>
            <div className="">
              <div className="">
                <h2 className="text-4xl font-bold">
                  20<sup className="">k</sup>
                </h2>
                <p className="mt-5">Completed Cases</p>
              </div>
            </div>
          </div>
          <div className=" flex gap-7">
            <div className="bg-primary flex justify-center items-center p-7">
              <img src="https://i.ibb.co/kDPL3hG/1754908.png" alt="" />
            </div>
            <div className="">
              <div className="">
                <h2 className="text-4xl font-bold">
                  10<sup className="">k</sup>
                </h2>
                <p className="mt-5">Satisfied Customers</p>
              </div>
            </div>
          </div>
          <div className=" flex gap-7">
            <div className="bg-primary flex justify-center items-center p-7">
              <img src="https://i.ibb.co/rQZHJbn/1401918.png" alt="" />
            </div>
            <div className="">
              <div className="">
                <h2 className="text-4xl font-bold">
                  18<sup className="">k</sup>
                </h2>
                <p className="mt-5">Expert Consultant</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExclusiveSkill;
