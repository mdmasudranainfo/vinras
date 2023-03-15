import React from "react";

const BlogTwo = () => {
  return (
    <div className="container mx-auto my-24 pb-24">
      <div className="text-center mb-9">
        <div className="flex items-center justify-center gap-2">
          <div className="w-10 h-[2px] bg-primary"></div>
          <h4 className="text-[22px] font-semibold text-primary">
            Our Articles
          </h4>
          <div className="w-10 h-[2px] bg-primary"></div>
        </div>
        <h3 className="text-[50px] font-bold">Our Latest Blog Post</h3>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
        <div className="relative">
          <div className="">
            <img
              className="w-full"
              src="https://i.ibb.co/xGrJjX0/1.png"
              alt=""
              srcset=""
            />
          </div>
          <div className="">
            <div className="w-[90%] bg-[#f3f3f4] rounded-[20px] md:absolute left-0 top-[80%] p-7 z-10">
              <div className="flex items-end">
                <div className="md:absolute left-5 top-0 md:top-[-30%] flex items-end gap-2">
                  <img
                    className="mb-[-5px]"
                    src="https://i.ibb.co/xCcrKF3/user-1.png"
                    alt=""
                    style={{ zIndex: "1" }}
                  />
                  <div className="flex items-center gap-5">
                    <div
                      className="bg-primary  pl-9 pr-5 py-3 md:ml-[-40px] md:mt-[-40px]"
                      style={{ zIndex: "-1" }}>
                      <p className="text-[12px] md:text-white text-black">
                        12 May 21
                      </p>
                    </div>
                    <div className="mt-[-35px]">
                      <p className="text-[12px]">
                        Posted : <span className="text-primary">karin</span> - 8
                        Comments
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-[22px] font-semibold my-6">
                Strategy For Norway's Peion Fund Global
              </h3>
              <p>
                Excepteur sint occaecat cupidatat non proident in culpa qofficia
                mollianim
              </p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="">
            <img
              className="w-full"
              src="https://i.ibb.co/7WywFfC/2.png"
              alt=""
              srcset=""
            />
          </div>
          <div className="w-[90%] bg-[#f3f3f4] rounded-[20px] absolute left-0 bottom-[-45%] p-7 z-10">
            <div className="flex items-end">
              <div className="absolute left-5 top-[-30%] flex items-end gap-2">
                <img
                  className="mb-[-5px]"
                  src="https://i.ibb.co/k9s5TnJ/user-2.png"
                  alt=""
                  style={{ zIndex: "1" }}
                />
                <div className="flex items-center gap-5">
                  <div
                    className="bg-primary  pl-9 pr-5 py-3 ml-[-40px] mt-[-40px]"
                    style={{ zIndex: "-1" }}>
                    <p className="text-[12px] text-white">12 May 21</p>
                  </div>
                  <div className="mt-[-35px]">
                    <p className="text-[12px]">
                      Posted : <span className="text-primary">karin</span> - 8
                      Comments
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-[22px] font-semibold my-6">
              Trendy Design Which Attract Customers
            </h3>
            <p>
              Excepteur sint occaecat cupidatat non proident in culpa qofficia
              mollianim
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="">
            <img
              className="w-full"
              src="https://i.ibb.co/fqCx74g/3.png"
              alt=""
              srcset=""
            />
          </div>
          <div className="w-[90%] bg-[#f3f3f4] rounded-[20px] absolute left-0 bottom-[-45%] p-7 z-10">
            <div className="flex items-end">
              <div className="absolute left-5 top-[-30%] flex items-end gap-2">
                <img
                  className="mb-[-5px]"
                  src="https://i.ibb.co/P6YdTkm/user-3.png"
                  alt=""
                  style={{ zIndex: "1" }}
                />
                <div className="flex items-center gap-5">
                  <div
                    className="bg-primary pl-9 pr-5 py-3 ml-[-40px] mt-[-40px]"
                    style={{ zIndex: "-1" }}>
                    <p className="text-[12px] text-white">12 May 21</p>
                  </div>
                  <div className="mt-[-35px]">
                    <p className="text-[12px]">
                      Posted : <span className="text-primary">karin</span> - 8
                      Comments
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-[22px] font-semibold my-6">
              Basic Rules Of Running Web Agency Business
            </h3>
            <p>
              Excepteur sint occaecat cupidatat non proident in culpa qofficia
              mollianim
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogTwo;
