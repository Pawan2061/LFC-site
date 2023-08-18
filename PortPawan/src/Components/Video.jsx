import React from "react";

function Video() {
  return (
    <div>
      <div className="bg-yellow-500 hover:bg-yellow-400 mx-40 my-10 rounded-sm">
        <div className="w-full h-[350px] ">
          <div className="flex  justify-between">
            <div className="mt-10 ml-10 ">
              <div className="">
                <p className="lg:font-semibold lg:text-2xl md:text-xl  lg:default ">
                  <span className="font-bold text-xl">Latest Videos </span>
                  <br /> MATCHES LIVE ON LFCTV GO AT JUST $8.99 PER MONTH.
                </p>
              </div>
              <div className="md:mt-20 sm:mt-0 ">
                <button className="bg-black rounded-xl text-white  p-4 hover:scale-105  ">
                  Watch Here
                </button>
              </div>
            </div>
            <div className="">
              <div className="mt-32  mr-20 rounded-full hover:shadow-2xl   w-[200px]  ">
                <a href="">
                  <img
                    src="https://imgresizer.eurosport.com/unsafe/2560x1440/filters:format(jpeg)/origin-imgresizer.eurosport.com/2023/04/30/3695438-75198688-2560-1440.jpg"
                    alt="livfc"
                    className="rounded-full"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Video;
