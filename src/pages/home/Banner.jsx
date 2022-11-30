import React from "react";
const Banner = () => {
  return (
    <div className="bg-heroImg lg:h-[600px] h-2/3 bg-cover bg-center">
      <div className="lg:bg-gradient-to-r md:bg-gradient-to-tr bg-gradient-to-tr lg:from-slate-700 from-black lg:h-[600px] h-2/3 stick inset-0 flex lg:items-center">
        <div className="max-w-6xl w-full mx-auto lg:mt-0 mt-16">
          <div className="">
            <div className="mt-10 lg:w-1/3 md:w-1/2 w-full lg:p-0 p-5 lg:text-start text-center lg:mx-0 mx-auto">
              <h1 className="text-white font-bold font-poppins lg:text-4xl text-3xl relative">
                Welcome to <br />
                <span className="text-orange-500 lg:text-5xl text-4xl z-50">
                  WatchAdora
                </span>
              </h1>
              <p className="text-gray-100 font-roboto lg:text-sm text-xs whitespace-normal">
                The best Watch Resaile website in Bangladesh, We are collect old
                Watch also sell used Watch. You can sell your Watch in our
                website
              </p>
              <button className="btn bg-orange-500 py-2 px-3 text-white font-poppins text-sm mt-5 rounded-full hover:bg-orange-400 hover:text-black">
                See All Watch
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
