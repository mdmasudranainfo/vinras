import React from "react";

const AboutUs = () => {
  return (
    <div className="container mx-auto mt-14 p-2">
      <div className="grid xl:grid-cols-2 grid-cols-1 gap-14">
        <div className="relative">
          <img
            className="max-w-full"
            src="https://i.ibb.co/2s09bF6/BG.png"
            alt=""
          />

          <h2 className="text-2xl font-semibold absolute top-16 right-4 bg-primary p-8 text-white">
            10<sup>+</sup> Year <br />
            Experience
          </h2>
          <h2 className="text-4xl font-semibold absolute bottom-0 right-4 bg-primary p-8 text-white">
            12<sup>k</sup>
            <br /> Project
            <br />
            Complete
          </h2>
        </div>
        <div className="">
          <div className="flex items-center gap-2">
            {/* <div className="w-10 h-[2px] bg-primary"></div> */}
            <h4 className="font-semibold text-primary">About Us</h4>
            <div className="w-10 h-[2px] bg-primary"></div>
          </div>
          <h2 className="text-5xl font-semibold my-8">
            We are more than you <br />
            imagine
          </h2>

          <div className="md:flex block ">
            <div className="">
              <div className=" bg-[#F1F3F8] flex justify-end items-center w-16 h-16 rounded-full">
                <img src="https://i.ibb.co/XzvZXRT/02-Home.png" alt="" />
              </div>
              <h2 className="text-2xl font-semibold my-6">Brand Solution</h2>
              <p className="text-[#878c8f]">
                Multiply moved in also real after fish males beast doesn give
              </p>
            </div>
            <div className="">
              <div className=" bg-[#F1F3F8] flex justify-end items-center w-16 h-16 rounded-full">
                <img src="https://i.ibb.co/7VktrYK/02-Home3.png" alt="" />
              </div>
              <h2 className="text-2xl font-semibold my-6">Our Mission</h2>
              <p className="text-[#878c8f]">
                Multiply moved in also real after fish males beast doesn give
              </p>
            </div>
          </div>

          <p className=" text-[#878c8f] mt-6">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa
            qofficia mollianim id est laborum. Sed ut perspiciatis unde omnis
            iste natuvoluptateaccusantium Nemo enim ipsam voluptatem
            consequuntur magni dolores esequi nesciunt. Neque porro quisquam
            dolor sit amet, consectetur, adipisci velit, sed quia non numquam
            eius modi tempora incidunt ut labore et dolore magnam aliquam
            quaerat voluptatem.
          </p>
          <div className=" md:flex  block  gap-10 mt-10">
            <div className="flex items-center gap-2 border-dashed border p-4 border-black">
              <h2 className="text-5xl font-semibold">
                12 <sup>+</sup>
              </h2>
              <p className="text-xl  ">
                Years Of <br />
                Experience
              </p>
            </div>
            <div className="flex md:mt-0 mt-4 items-center gap-2 border-dashed border p-4 border-black">
              <h2 className="text-5xl font-semibold">
                70 <sup>k</sup>
              </h2>
              <p className="text-xl  ">
                Clients <br />
                Individual
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
