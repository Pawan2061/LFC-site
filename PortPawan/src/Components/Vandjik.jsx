import React from "react";
import Jurgen from "../assets/Jurgen.png";
function Vandjik() {
  return (
    <div className="w-full h-full  bg-[#DC0714] p-20 cursor-pointer">
      <div className="lg:ml-10 mt-10 w-[800px] shadow-xl">
        <div className="  ">
          <img src={Jurgen} alt="" className="p-4" />
          <p className=" py-5 underline border-slate-200 border-b-[1px]"></p>
        </div>

        <div className="text-white py-10 transition ease-in-out   hover:scale-105">
          <a href="">
            <p className="text-xl font-semibold">
              <span className="font-bold text-xl">Catch Up Now</span>
              LISTEN T0 THE OFFICIAL LFC PRODCAST FEATURING LFC COACH JURGEN
              KLOOP. LIVE ON 12PM SHARP AT ONE AND ONLY LFCGO TV .GET YOUR
              PREMIUM MEMBERSHIP ACCOUNT EARLY FOR FLAT DISCOUNTS
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Vandjik;
