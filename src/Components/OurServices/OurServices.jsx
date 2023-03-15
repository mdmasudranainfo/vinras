import React from "react";
import { RxExit } from "react-icons/rx";
import BrandingCard from "../BrandingCard/BrandingCard";
import Brands from "../Brands/Brands";

const OurServices = () => {
  return (
    <div className="mt-56">
      <div className="bg-[url('https://i.ibb.co/ZJ7Ggqh/BG.png')] bg-center bg-cover bg-no-repeat ">
        <div className="container mx-auto py-24 max-w-[1170px] p-2">
          <div className="MasudRana mt-[-185px]">
            <BrandingCard className="" />
          </div>
          <div className="flex items-center justify-center gap-2 mt-20">
            <div className="w-10 h-[2px] bg-primary"></div>
            <h4 className="text-[22px] font-semibold text-primary">
              Our Services
            </h4>
            <div className="w-10 h-[2px] bg-primary"></div>
          </div>
          <h2 className="text-5xl font-bold text-center mt-8">
            What We Are Offering
          </h2>

          {/* card grid */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-14 gap-8">
            <div className="bg-white rounded-md shadow-md">
              <img
                className="w-full"
                src="https://i.ibb.co/rtKFrht/1.png"
                alt=""
              />
              <div className="p-5">
                <div className="">
                  <div className="flex justify-between ">
                    <p className="my-4 text-[#878c8f]">
                      Creative, Designs, Business
                    </p>
                    <div className="text-3xl text-white bg-primary w-16 h-16 flex justify-center items-center mt-[-50px]">
                      <RxExit />
                    </div>
                  </div>
                  <div className=" flex items-center gap-4">
                    <div className="">
                      {" "}
                      <h1 className="text-2xl font-bold">
                        Product Engineering
                      </h1>
                      <p className="text-[#878c8f] mt-4">
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qoffic
                      </p>
                    </div>
                    <div className=" w-28 h-16 rounded-md flex justify-center items-center bg-[#F3F3F4]">
                      <img src="https://i.ibb.co/Br0xWKh/02-Home.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-md shadow-md">
              <img
                className="w-full"
                src="https://i.ibb.co/26rpc5k/2.png"
                alt=""
              />
              <div className="p-5">
                <div className="">
                  <div className="flex justify-between ">
                    <p className="my-4 text-[#878c8f]">
                      Creative, Designs, Business
                    </p>
                    <div className="text-3xl text-white bg-primary w-16 h-16 flex justify-center items-center mt-[-50px]">
                      <RxExit />
                    </div>
                  </div>
                  <div className=" flex items-center gap-4">
                    <div className="">
                      {" "}
                      <h1 className="text-2xl font-bold">Marketing Solution</h1>
                      <p className="text-[#878c8f] mt-4">
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qoffic
                      </p>
                    </div>
                    <div className=" w-28 h-16 rounded-md flex justify-center items-center bg-[#F3F3F4]">
                      <img src="https://i.ibb.co/1JWWLky/478516.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-md shadow-md">
              <img
                className="w-full"
                src="https://i.ibb.co/fHKmRj1/3.png"
                alt=""
              />
              <div className="p-5">
                <div className="">
                  <div className="flex justify-between ">
                    <p className="my-4 text-[#878c8f]">
                      Creative, Designs, Business
                    </p>
                    <div className="text-3xl text-white bg-primary w-16 h-16 flex justify-center items-center mt-[-50px]">
                      <RxExit />
                    </div>
                  </div>
                  <div className=" flex items-center gap-4">
                    <div className="">
                      {" "}
                      <h1 className="text-2xl font-bold">Web Development</h1>
                      <p className="text-[#878c8f] mt-4">
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qoffic
                      </p>
                    </div>
                    <div className=" w-28 h-16 rounded-md flex justify-center items-center bg-[#F3F3F4]">
                      <img
                        src="https://i.ibb.co/cDcZBjW/https-www-flaticon-com-free-icon-product-850721-term-product-engineering-page-1-position-10-page-1-p.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Brands />
      </div>
    </div>
  );
};

export default OurServices;
