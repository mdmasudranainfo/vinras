import React from "react";
import { FaArrowRight, FaRegBookmark, FaRegComments } from "react-icons/fa";
import { HiArrowNarrowRight } from "react-icons/hi";

const LatestBlog = () => {
  return (
    <div className="max-w-[1120px] container mx-auto mt-24 ">
      <div className="flex items-center justify-center gap-2">
        <div className="w-10 h-[2px] bg-primary"></div>
        <h4 className="text-[22px] font-semibold text-primary">Our Articles</h4>
        <div className="w-10 h-[2px] bg-primary"></div>
      </div>
      <h1 className="text-center font-bold text-5xl mt-9">
        Our Latest Blog Post
      </h1>

      {/* card grid  */}

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  mt-14 gap-7">
        <div className="shadow-md rounded-lg NewsBox overflow-hidden">
          <img
            className="w-full"
            src="https://i.ibb.co/RB9ybK4/Layer-91.png"
            alt=""
          />
          <div className="px-9 pb-9 relative">
            <div className="flex justify-between mt-5">
              <div className="flex items-center">
                <FaRegBookmark className="text-primary" />
                <p className="ml-1">Admin</p>
              </div>

              <div className="flex items-center">
                <FaRegComments className="text-primary" />
                <p className="ml-1">Comment</p>
              </div>
              <div className="w-[55px] h-[60px] bg-primary mt-[-50px] text-white flex justify-center items-center flex-col font-semibold rounded-md">
                <h2>20</h2>
                <p>NOV</p>
              </div>
            </div>
            <h2 className="font-bold text-2xl my-6">
              You Business Advice For Growth
            </h2>
            <p className="text-lg text-[#9FA3A5] ">
              Lorem ipsum is simply is text used by copytyping refreshing.
            </p>
            <div className="divider"></div>
            <div className=" flex justify-between text-[#9FA3A5] ">
              <a href="Read More">Read More</a>
              <HiArrowNarrowRight className="text-[#9FA3A5] text-xl cursor-pointer" />
            </div>
          </div>
        </div>

        <div className="shadow-md rounded-lg NewsBox overflow-hidden">
          <img
            className="w-full"
            src="https://i.ibb.co/RC5rSKM/Layer-92.png"
            alt=""
          />
          <div className="px-9 pb-9 relative">
            <div className="flex justify-between mt-5">
              <div className="flex items-center">
                <FaRegBookmark className="text-primary" />
                <p className="ml-1">Admin</p>
              </div>

              <div className="flex items-center">
                <FaRegComments className="text-primary" />
                <p className="ml-1">Comment</p>
              </div>
              <div className="w-[55px] h-[60px] bg-primary mt-[-50px] text-white flex justify-center items-center flex-col font-semibold rounded-md">
                <h2>20</h2>
                <p>NOV</p>
              </div>
            </div>
            <h2 className="font-bold text-2xl my-6">
              You Business Advice For Growth
            </h2>
            <p className="text-lg text-[#9FA3A5] ">
              Lorem ipsum is simply is text used by copytyping refreshing.
            </p>
            <div className="divider"></div>
            <div className=" flex justify-between text-[#9FA3A5] ">
              <a href="Read More">Read More</a>
              <HiArrowNarrowRight className="text-[#9FA3A5] text-xl cursor-pointer" />
            </div>
          </div>
        </div>

        <div className="shadow-md rounded-lg NewsBox overflow-hidden">
          <img
            className="w-full"
            src="https://i.ibb.co/h8jTWf4/Layer-93.png"
            alt=""
          />
          <div className="px-9 pb-9 relative">
            <div className="flex justify-between mt-5">
              <div className="flex items-center">
                <FaRegBookmark className="text-primary" />
                <p className="ml-1">Admin</p>
              </div>

              <div className="flex items-center">
                <FaRegComments className="text-primary" />
                <p className="ml-1">Comment</p>
              </div>
              <div className="w-[55px] h-[60px] bg-primary mt-[-50px] text-white flex justify-center items-center flex-col font-semibold rounded-md">
                <h2>20</h2>
                <p>NOV</p>
              </div>
            </div>
            <h2 className="font-bold text-2xl my-6">
              You Business Advice For Growth
            </h2>
            <p className="text-lg text-[#9FA3A5] ">
              Lorem ipsum is simply is text used by copytyping refreshing.
            </p>
            <div className="divider"></div>
            <div className=" flex justify-between text-[#9FA3A5] ">
              <a href="Read More">Read More</a>
              <HiArrowNarrowRight className="text-[#9FA3A5] text-xl cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestBlog;
