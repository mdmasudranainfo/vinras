import React from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const SuccessExperience = () => {
  return (
    <div className="bg-[#F7F7F7] mt-[230px]">
      <div className="container mx-auto">
        {/*  */}
        <div className="grid xl:grid-cols-2 py-28">
          <div className="">
            <h2 className="text-2xl font-semibold  text-primary flex items-center ServiceTitles j">
              {/* <span className="bg-primary h-[2px] w-6 inline-block ServiceTitles2"></span> */}
              <span>Our Benefits</span>
              <span className="bg-primary h-[2px] w-6 inline-block ServiceTitles"></span>
            </h2>
            <h1 className="my-10  text-5xl  font-semibold">
              Success Building Experience
            </h1>

            {/*  */}

            <div className="grid lg:grid-cols-3">
              <div className=" flex flex-col items-center">
                <div className=" text-center">
                  <div style={{ width: 120, height: 120 }}>
                    <CircularProgressbar
                      strokeWidth="5"
                      value={92}
                      text="92%"
                      styles={buildStyles({
                        textColor: "#F94D1C",
                        trailColor: "#d6d6d6",
                        backgroundColor: "#3e98c7",
                      })}
                    />
                  </div>
                  <h2 className="text-lg mt-3">
                    Affordable <br /> Cost
                  </h2>
                </div>
                <div className="divider px-10"></div>

                <div className=" text-center">
                  <div style={{ width: 120, height: 120 }}>
                    <CircularProgressbar
                      strokeWidth="5"
                      value={52}
                      text="52%"
                      styles={buildStyles({
                        textColor: "#F94D1C",
                        trailColor: "#d6d6d6",
                        backgroundColor: "#3e98c7",
                      })}
                    />
                  </div>
                  <h2 className="text-lg mt-3">
                    Quality <br />
                    of Work
                  </h2>
                </div>
              </div>
              <div className=" lg:col-span-2">
                <div
                  tabIndex={0}
                  className="collapse collapse-arrow bg-base-100 mb-5">
                  <div className="collapse-title text-xl font-medium">
                    Focus me to see content
                  </div>
                  <div className="collapse-content">
                    <p className="p-6">
                      Suspendisse finibus urna mauris, vitae consequat quam vel.
                      Vestibulum leo ligula, vit commodo nisl Sed luctus
                      venenatis pellentesque.
                    </p>
                  </div>
                </div>
                <div
                  tabIndex={1}
                  className="collapse collapse-arrow bg-base-100 mb-5">
                  <div className="collapse-title text-xl font-medium">
                    Focus me to see content
                  </div>
                  <div className="collapse-content">
                    <p className="p-6">
                      Suspendisse finibus urna mauris, vitae consequat quam vel.
                      Vestibulum leo ligula, vit commodo nisl Sed luctus
                      venenatis pellentesque.
                    </p>
                  </div>
                </div>
                <div
                  tabIndex={2}
                  className="collapse collapse-arrow bg-base-100 mb-5">
                  <div className="collapse-title text-xl font-medium">
                    Focus me to see content
                  </div>
                  <div className="collapse-content">
                    <p className="p-6">
                      Suspendisse finibus urna mauris, vitae consequat quam vel.
                      Vestibulum leo ligula, vit commodo nisl Sed luctus
                      venenatis pellentesque.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="mt-[-200px] xl:block hidden relative">
              <img
                className="max-w-full"
                src="https://i.ibb.co/kMxB8rb/01-Home-Recovered.png"
                alt=""
              />
              <div className=" bg-primary text-white flex  items-start w-[50%] absolute bottom-16 left-0 rounded-r-full p-10 gap-6 ">
                <img src="https://i.ibb.co/Mgg3XJ2/753629.png" alt="" />
                <div className="">
                  <h1 className="text-3xl font-semibold  mb-6">
                    25k Projects <br />
                    Are Completed
                  </h1>
                  <a href="">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessExperience;
