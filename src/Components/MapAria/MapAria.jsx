import React from "react";
const urlMap =
  "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7197.370956325615!2d88.64142329999997!3d25.582128800000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1678611871810!5m2!1sen!2sbd";

const MapAria = () => {
  return (
    <div className="container mx-auto ">
      <iframe
        className="w-full h-[600px]"
        src={urlMap}
        frameborder="0"></iframe>

      {/* content section   */}
      <div className="grid lg:grid-cols-3 grid-cols-1 mt-20">
        <div className=" lg:col-span-2 col-span-1 p-10">
          <div className="flex items-center  gap-2">
            <h4 className="text-[22px] font-semibold text-primary">
              Steps Of Procedure
            </h4>
            <div className="w-10 h-[2px] bg-primary"></div>
          </div>
          <h2 className="text-5xl font-bold mt-5">
            Creating Value Through <br /> Business
          </h2>
          <p className="mt-10 mb-6">
            Duis nunc sodales conubia a laoreet aliquet on nostra eleifend
            lacinia prasent hendrerit quisque penatibus erat a pulvina integer
            semper ridiculus lectus con dimentum obor tise verodar capmtaso
            morin
          </p>
          {/* prograss bar  */}
          <div className=" mb-4 flex justify-between">
            <p className="font-semibold">Client Satisfaction</p>
            <p className="font-semibold mr-20">90%</p>
          </div>

          <div className=" border border-primary bg-[#F3F5F9] flex items-center">
            <span className="bg-primary m-[4px] h-[7px] w-[90%] inline-block"></span>
          </div>
        </div>

        {/* from  */}
        <div className="">
          <div className=" bg-white shadow-xl p-12 lg:mt-[-150px] mt-0">
            <form>
              <h1 className="text-3xl uppercase font-bold text-center mb-7">
                Get a free quote
              </h1>
              <input
                type="text"
                placeholder="Your Name"
                className="input w-full bg-[#F4F5F8] focus:outline-none rounded-sm p-8 mb-2"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="input w-full bg-[#F4F5F8] focus:outline-none rounded-sm p-8 mb-2"
              />
              <input
                type="number"
                placeholder="Phone Number"
                className="input w-full bg-[#F4F5F8] focus:outline-none rounded-sm p-8 mb-2"
              />

              <select className="select w-full bg-[#F4F5F8] focus:outline-none rounded-sm mb-2 ">
                <option>Pick your favorite Simpson</option>
                <option>Homer</option>
                <option>Marge</option>
                <option>Bart</option>
                <option>Lisa</option>
                <option>Maggie</option>
              </select>
              <button className=" focus:outline-none rounded-sm w-full btn btn-primary uppercase">
                Request a quote
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapAria;
