import React from "react";
import Slider from "react-slick";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";

const MakeAgency = () => {
  //
  var settings = {
    // dots: true,
    // infinite: false,
    arrows: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    nextArrow: <HiChevronDoubleRight className="arrowbutton" />,
    prevArrow: <HiChevronDoubleLeft className="arrowbutton" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  //
  return (
    <div className="bg-[#F7F7F7]  py-28">
      <div className=" container mx-auto relative">
        <h2 className="text-primary text-lg font-semibold">
          How Can Help You{" "}
        </h2>
        <h1 className="text-5xl font-bold mt-8">We Make Bright Agency</h1>

        {/*  */}

        <div className="mt-14">
          <Slider {...settings}>
            <div>
              <div className=" bg-white p-9 mx-5">
                <img src="https://i.ibb.co/yhJ0h1D/01-Home.png" alt="" />
                <h1 className="text-2xl font-semibold mb-4 mt-12">
                  Product Engineering
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consect etur adipisicing elit,
                  sed.
                </p>
                <p className="flex items-center mt-7">
                  <span className="text-primary font-bold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </span>{" "}
                  <span> Logo & Branding</span>
                </p>
                <p className="flex items-center mt-7">
                  <span className="text-primary font-bold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </span>{" "}
                  <span> Website Design</span>
                </p>
                <p className="flex items-center mt-7">
                  <span className="text-primary font-bold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </span>{" "}
                  <span>Mobile App Design</span>
                </p>
                <p className="flex items-center mt-7">
                  <span className="text-primary font-bold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </span>{" "}
                  <span>Graphic/Print Design</span>
                </p>
                <p className="flex items-center mt-7">
                  <span className="text-primary font-bold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </span>{" "}
                  <span>Video Production</span>
                </p>
              </div>
            </div>

            <div>
              <div className=" bg-white p-9 mx-5">
                <img src="https://i.ibb.co/yhJ0h1D/01-Home.png" alt="" />
                <h1 className="text-2xl font-semibold mb-4 mt-12">
                  Product Engineering
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consect etur adipisicing elit,
                  sed.
                </p>
                <p className="flex items-center mt-7">
                  <span className="text-primary font-bold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </span>{" "}
                  <span> Logo & Branding</span>
                </p>
                <p className="flex items-center mt-7">
                  <span className="text-primary font-bold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </span>{" "}
                  <span> Website Design</span>
                </p>
                <p className="flex items-center mt-7">
                  <span className="text-primary font-bold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </span>{" "}
                  <span>Mobile App Design</span>
                </p>
                <p className="flex items-center mt-7">
                  <span className="text-primary font-bold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </span>{" "}
                  <span>Graphic/Print Design</span>
                </p>
                <p className="flex items-center mt-7">
                  <span className="text-primary font-bold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </span>{" "}
                  <span>Video Production</span>
                </p>
              </div>
            </div>
            <div>
              <div className=" bg-white p-9 mx-5">
                <img src="https://i.ibb.co/yhJ0h1D/01-Home.png" alt="" />
                <h1 className="text-2xl font-semibold mb-4 mt-12">
                  Product Engineering
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consect etur adipisicing elit,
                  sed.
                </p>
                <p className="flex items-center mt-7">
                  <span className="text-primary font-bold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </span>{" "}
                  <span> Logo & Branding</span>
                </p>
                <p className="flex items-center mt-7">
                  <span className="text-primary font-bold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </span>{" "}
                  <span> Website Design</span>
                </p>
                <p className="flex items-center mt-7">
                  <span className="text-primary font-bold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </span>{" "}
                  <span>Mobile App Design</span>
                </p>
                <p className="flex items-center mt-7">
                  <span className="text-primary font-bold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </span>{" "}
                  <span>Graphic/Print Design</span>
                </p>
                <p className="flex items-center mt-7">
                  <span className="text-primary font-bold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </span>{" "}
                  <span>Video Production</span>
                </p>
              </div>
            </div>
            <div>
              <div className=" bg-white p-9 mx-5">
                <img src="https://i.ibb.co/yhJ0h1D/01-Home.png" alt="" />
                <h1 className="text-2xl font-semibold mb-4 mt-12">
                  Product Engineering
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consect etur adipisicing elit,
                  sed.
                </p>
                <p className="flex items-center mt-7">
                  <span className="text-primary font-bold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </span>{" "}
                  <span> Logo & Branding</span>
                </p>
                <p className="flex items-center mt-7">
                  <span className="text-primary font-bold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </span>{" "}
                  <span> Website Design</span>
                </p>
                <p className="flex items-center mt-7">
                  <span className="text-primary font-bold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </span>{" "}
                  <span>Mobile App Design</span>
                </p>
                <p className="flex items-center mt-7">
                  <span className="text-primary font-bold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </span>{" "}
                  <span>Graphic/Print Design</span>
                </p>
                <p className="flex items-center mt-7">
                  <span className="text-primary font-bold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </span>{" "}
                  <span>Video Production</span>
                </p>
              </div>
            </div>
            <div>
              <div className=" bg-white p-9 mx-5">
                <img src="https://i.ibb.co/yhJ0h1D/01-Home.png" alt="" />
                <h1 className="text-2xl font-semibold mb-4 mt-12">
                  Product Engineering
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consect etur adipisicing elit,
                  sed.
                </p>
                <p className="flex items-center mt-7">
                  <span className="text-primary font-bold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </span>{" "}
                  <span> Logo & Branding</span>
                </p>
                <p className="flex items-center mt-7">
                  <span className="text-primary font-bold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </span>{" "}
                  <span> Website Design</span>
                </p>
                <p className="flex items-center mt-7">
                  <span className="text-primary font-bold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </span>{" "}
                  <span>Mobile App Design</span>
                </p>
                <p className="flex items-center mt-7">
                  <span className="text-primary font-bold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </span>{" "}
                  <span>Graphic/Print Design</span>
                </p>
                <p className="flex items-center mt-7">
                  <span className="text-primary font-bold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </span>{" "}
                  <span>Video Production</span>
                </p>
              </div>
            </div>
          </Slider>
        </div>

        {/* slider content */}
      </div>
    </div>
  );
};

export default MakeAgency;
