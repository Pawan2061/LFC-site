import React from "react";
import react from "../assets/react.svg";
function Jurgen() {
  return (
    <div className="w-full h-full  bg-[#FFD700] px-40 py-10 cursor-pointer">
      <div className="lg:ml-10 mt-6 w-[800px] ">
        <div className="text-black py-10 transition ease-in-out   ">
          <a href="" className="cursor-pointer">
            <p className="text-4xl  p-20">
              <span className="font-bold text-2xl ">
                Captian Van Djik Speaks <br />
              </span>
              "Captain van djik speaks of how much importance the new season
              matter to him as well as the team .The level was droppped
              instantly since last season however with new signings and newly
              fresh legs brought in the transfer window ,Van djik really believs
              this team can compete to the next level and fight for all the four
              titles in all competition."
            </p>
          </a>
          <div className="w-[350px] ml-20 rounded-lg shadow-lg hover:bg-yellow-400">
            <p className=" border-t-2 underline p-5 "></p>
            <p className="text-xl ">
              <span className="font-bold">Q&A</span>Van djik interview:I will do
              everything to captain this squad and make everyone proud
            </p>
            <img
              className="w-[350px]"
              src="https://s3.eu-west-1.amazonaws.com/prod-mh-ireland/480a94a6-ce75-4968-b384-ef85726f566d/afd403df-a586-4b73-83ea-9a7e6f7403e9/480a94a6-ce75-4968-b384-ef85726f566d.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jurgen;
