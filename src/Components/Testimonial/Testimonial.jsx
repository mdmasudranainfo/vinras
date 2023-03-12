import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const Testimonial = () => {
  return (
    <div>
      <div className=" mt-28">
        <div className="text-center mb-9">
          <div className="flex items-center justify-center gap-2">
            <div className="w-10 h-[2px] bg-primary"></div>
            <h4 className="text-[22px] font-semibold text-primary">
              Testimonial
            </h4>
            <div className="w-10 h-[2px] bg-primary"></div>
          </div>
          <h3 className="text-[50px] font-bold">Our Sweet Client Say</h3>
        </div>
      </div>
      <Swiper
        breakpoints={{
          576: {
            // width: 576,
            slidesPerView: 2,
          },
          768: {
            // width: 768,
            slidesPerView: 1,
          },
          992: {
            // width: 768,
            slidesPerView: 3,
          },
          1200: {
            // width: 768,
            slidesPerView: 4,
          },
        }}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        reverseDirection={true}
        loop={true}
        autoplay={{
          delay: 500,
          disableOnInteraction: false,
        }}
        className="mySwiper">
        <SwiperSlide>
          <div className="bg-white text-center border rounded shadow-lg my-14">
            <div className="flex justify-center mt-[-60px]">
              <img
                className="rounded-full w-[120px] h-[120px] mx-auto"
                src="https://i.ibb.co/3Mky1gT/clint1.png"
                alt=""
                srcset=""
              />
            </div>
            <div className=" p-16">
              <p>
                Lacus senectus dictumst cursus fringilla diam justo do placerat
                luctus socis interdum vehicula justo tincidunt malesuada
                habitant aenean sit pharetra proin posuere has orci molestie
                magna{" "}
              </p>

              <h4 className="text-[20px] font-bold mt-5">
                Daren Mackwel -
                <span className="text-[15px] font-normal"> CEO, Apple</span>
              </h4>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white text-center border rounded shadow-lg my-14">
            <div className="flex justify-center mt-[-60px]">
              <img
                className="rounded-full w-[120px] h-[120px] mx-auto"
                src="https://i.ibb.co/6HCcGk8/clint2.png"
                alt=""
                srcset=""
              />
            </div>
            <div className=" p-16">
              <p>
                Lacus senectus dictumst cursus fringilla diam justo do placerat
                luctus socis interdum vehicula justo tincidunt malesuada
                habitant aenean sit pharetra proin posuere has orci molestie
                magna{" "}
              </p>

              <h4 className="text-[20px] font-bold mt-5">
                Daren Mackwel -
                <span className="text-[15px] font-normal"> CEO, Apple</span>
              </h4>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white text-center border rounded shadow-lg my-14">
            <div className="flex justify-center mt-[-60px]">
              <img
                className="rounded-full w-[120px] h-[120px] mx-auto"
                src="https://i.ibb.co/3Mky1gT/clint1.png"
                alt=""
                srcset=""
              />
            </div>
            <div className=" p-16">
              <p>
                Lacus senectus dictumst cursus fringilla diam justo do placerat
                luctus socis interdum vehicula justo tincidunt malesuada
                habitant aenean sit pharetra proin posuere has orci molestie
                magna{" "}
              </p>

              <h4 className="text-[20px] font-bold mt-5">
                Daren Mackwel -
                <span className="text-[15px] font-normal"> CEO, Apple</span>
              </h4>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white text-center border rounded shadow-lg my-14">
            <div className="flex justify-center mt-[-60px]">
              <img
                className="rounded-full w-[120px] h-[120px] mx-auto"
                src="https://i.ibb.co/6HCcGk8/clint2.png"
                alt=""
                srcset=""
              />
            </div>
            <div className=" p-16">
              <p>
                Lacus senectus dictumst cursus fringilla diam justo do placerat
                luctus socis interdum vehicula justo tincidunt malesuada
                habitant aenean sit pharetra proin posuere has orci molestie
                magna{" "}
              </p>

              <h4 className="text-[20px] font-bold mt-5">
                Daren Mackwel -
                <span className="text-[15px] font-normal"> CEO, Apple</span>
              </h4>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white text-center border rounded shadow-lg my-14">
            <div className="flex justify-center mt-[-60px]">
              <img
                className="rounded-full w-[120px] h-[120px] mx-auto"
                src="https://i.ibb.co/3Mky1gT/clint1.png"
                alt=""
                srcset=""
              />
            </div>
            <div className=" p-16">
              <p>
                Lacus senectus dictumst cursus fringilla diam justo do placerat
                luctus socis interdum vehicula justo tincidunt malesuada
                habitant aenean sit pharetra proin posuere has orci molestie
                magna{" "}
              </p>

              <h4 className="text-[20px] font-bold mt-5">
                Daren Mackwel -
                <span className="text-[15px] font-normal"> CEO, Apple</span>
              </h4>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white text-center border rounded shadow-lg my-14">
            <div className="flex justify-center mt-[-60px]">
              <img
                className="rounded-full w-[120px] h-[120px] mx-auto"
                src="https://i.ibb.co/6HCcGk8/clint2.png"
                alt=""
                srcset=""
              />
            </div>
            <div className=" p-16">
              <p>
                Lacus senectus dictumst cursus fringilla diam justo do placerat
                luctus socis interdum vehicula justo tincidunt malesuada
                habitant aenean sit pharetra proin posuere has orci molestie
                magna{" "}
              </p>

              <h4 className="text-[20px] font-bold mt-5">
                Daren Mackwel -
                <span className="text-[15px] font-normal"> CEO, Apple</span>
              </h4>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;
