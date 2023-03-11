import React from "react";
import { FaCheck } from "react-icons/fa";

const HomeServices = () => {
  return (
    <div className=" bg-[url('https://i.ibb.co/s3Ds8z8/BG.png')] bg-cover bg-no-repeat bg-center pb-48">
      <div className="container mx-auto">
        <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1">
          <div className=" flex flex-col items-center p-8 bg-white servicesBox">
            <img
              className="max-w-full"
              src="https://i.ibb.co/R4s4wfT/1.png"
              alt=""
            />
            <h2 className="text-3xl font-semibold mt-5">Ui/Ux Design</h2>
          </div>
          <div className=" flex flex-col items-center p-8 bg-white servicesBox">
            <img
              className="max-w-full"
              src="https://i.ibb.co/8b5JJ0z/2.png"
              alt=""
            />
            <h2 className="text-3xl font-semibold mt-5">Committed Quality</h2>
          </div>
          <div className=" flex flex-col items-center p-8 bg-white servicesBox">
            <img
              className="max-w-full"
              src="https://i.ibb.co/JmJCQ1x/3.png"
              alt=""
            />
            <h2 className="text-3xl font-semibold mt-5">Tax Consulting</h2>
          </div>
          <div className=" flex flex-col items-center p-8 bg-white servicesBox">
            <img
              className="max-w-full"
              src="https://i.ibb.co/vZxxVMp/4.png"
              alt=""
            />
            <h2 className="text-3xl font-semibold mt-5">Tax Strategy</h2>
          </div>
        </div>

        {/* about us */}

        <div className=" grid md:grid-cols-2 grid-cols-1 mt-28">
          {/* img */}
          <div className=" ">
            <div className="relative">
              <img src="https://i.ibb.co/WG9hMvY/Img2.png" alt="" />
              <div className="absolute right-16 bottom-0 w-full h-full flex items-center justify-end ">
                <img
                  className="cursor-pointer"
                  src="https://i.ibb.co/pxbqBVR/video-buttion.png"
                  alt=""
                />
              </div>
              <div className="  text-white absolute left-0 bottom-20 w-full h-full items-end flex">
                <div className=" w-40 h-40 bg-primary rounded-full  flex flex-col items-center justify-center">
                  {" "}
                  <h3 className="font-semibold italic ">Trusted by</h3>
                  <h1 className="text-4xl font-bold">5820</h1>
                </div>
              </div>
            </div>
          </div>
          {/* content */}
          <div className="flex flex-col justify-center">
            <h1 className="text-primary font-semibold">About Us</h1>
            <h2 className="text-[60px] font-bold">
              We are good at these <br /> areas to work
            </h2>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa mollit anim id est laborum.
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            </p>

            <p className=" mt-14 flex items-center ">
              <span className=" p-3 shadow-md rounded-full mr-5">
                <FaCheck className="text-3xl " />
              </span>
              <span>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
                id.
              </span>
            </p>
            <p className=" mt-14 flex items-center ">
              <span className=" p-3 shadow-md rounded-full mr-5">
                <FaCheck className="text-3xl" />
              </span>
              <span>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
                id.
              </span>
            </p>

            <div className="grid grid-cols-2 mt-12">
              <div className=" flex justify-around items-center">
                <div
                  className="radial-progress text-primary text-3xl font-semibold"
                  style={{
                    "--value": "76",
                    "--size": "10rem",
                    "--thickness": "10px",
                  }}>
                  <span className="hello"> 76%</span>
                </div>

                <p className="text-2xl text-[#878C8F]">
                  Business <br /> Consulting
                </p>
              </div>
              <div className=" flex justify-around items-center">
                <div
                  className="radial-progress text-primary text-3xl font-semibold"
                  style={{
                    "--value": "85",
                    "--size": "10rem",
                    "--thickness": "10px",
                  }}>
                  <span className="hello"> 85%</span>
                </div>

                <p className="text-2xl text-[#878C8F]">
                  Digital <br />
                  Consultancy
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* about us end */}

        {/* prograss bar  */}

        {/* prograss bar end */}
      </div>
    </div>
  );
};

export default HomeServices;
