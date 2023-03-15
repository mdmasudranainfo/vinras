import React from "react";

const BrandingCard = () => {
  return (
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-7">
        <div className=" flex flex-col justify-center items-center shadow-md py-12 px-14 hover:bg-primary BandingBox ease-in duration-300 bg-white">
          <img
            className="bandingImg1"
            src="https://i.ibb.co/zbqv5dn/icon-8.png"
            alt=""
          />
          <img
            className="bandingImg2 "
            src="https://i.ibb.co/Rbz7snT/iconW-8.png"
            alt=""
          />
          <h1 className="text-lg mt-7">We Experience Build</h1>
        </div>

        <div className=" flex flex-col justify-center items-center shadow-md py-12 px-14 hover:bg-primary BandingBox ease-in duration-300 bg-white">
          <img
            className="bandingImg1"
            src="https://i.ibb.co/GFLTNh4/icon-9.png"
            alt=""
          />
          <img
            className="bandingImg2 "
            src="https://i.ibb.co/fpTXffM/iconW-9.png"
            alt=""
          />
          <h1 className="text-lg mt-7">We Experience Build</h1>
        </div>

        <div className=" flex flex-col justify-center items-center shadow-md py-12 px-14 hover:bg-primary BandingBox ease-in duration-300 bg-white">
          <img
            className="bandingImg1"
            src="https://i.ibb.co/HnxgKLr/icon-10.png"
            alt=""
          />
          <img
            className="bandingImg2 "
            src="https://i.ibb.co/LQqqSvN/iconW-10.png"
            alt=""
          />
          <h1 className="text-lg mt-7">We Experience Build</h1>
        </div>
        <div className=" flex flex-col justify-center items-center shadow-md py-12 px-14 hover:bg-primary BandingBox ease-in duration-300 bg-white">
          <img
            className="bandingImg1"
            src="https://i.ibb.co/NFcT7cp/icon-11.png"
            alt=""
          />
          <img
            className="bandingImg2 "
            src="https://i.ibb.co/jgQsMM5/iconW-11.png"
            alt=""
          />
          <h1 className="text-lg mt-7">We Experience Build</h1>
        </div>
      </div>
    </div>
  );
};

export default BrandingCard;
