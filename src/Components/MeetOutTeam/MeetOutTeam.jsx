import React from "react";
import { FaFacebookF, FaInstagram, FaPlus, FaTwitter } from "react-icons/fa";

const MeetOutTeam = () => {
  return (
    <div className="  py-28 bg-white">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold text-center  text-primary flex items-center ServiceTitles justify-center">
          <span className="bg-primary h-[2px] w-6 inline-block ServiceTitles2"></span>
          <span>Meet Our Advisors</span>
          <span className="bg-primary h-[2px] w-6 inline-block ServiceTitles"></span>
        </h2>
        <h2 className="font-bold text-5xl text-center mt-8">
          Our Professional Consultants
        </h2>

        {/* team member card grid   */}
        <div className="grid grid-cols-4">
          <div className="">
            <div className=" relative">
              <img
                className="teamImg"
                src="https://i.ibb.co/bmxJFf5/team3.png"
                alt=""
              />
              <div className=" absolute top-0 left-0 w-full h-full p-7 z-40">
                <FaPlus className="bg-white w-10 h-10 hover:bg-primary hover:text-white ease-in duration-500 p-2 mt-3" />
                <FaInstagram className="bg-white w-10 h-10 hover:bg-primary hover:text-white ease-in duration-500 p-2 mt-3" />
                <FaTwitter className="bg-white w-10 h-10 hover:bg-primary hover:text-white ease-in duration-500 p-2 mt-3" />
                <FaFacebookF className="bg-white w-10 h-10 hover:bg-primary hover:text-white ease-in duration-500 p-2 mt-3" />
              </div>
              <div className=" absolute bottom-0 left-0 w-full h-full flex p-10 flex-col justify-end text-white">
                <h2 className="text-3xl font-semibold ">Ehristine Eve</h2>

                <p>Senior Manager</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetOutTeam;
