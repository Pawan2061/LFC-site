import React from "react";

function Signup() {
  return (
    <div className="bg-[#DC0714] pt-20 pl-10 pr-10 pb-10">
      <div className="bg-gray-200 flex flex-col justify-center items-center py-20  ">
        <div className="text-3xl text-red-600 font-semibold py-10">
          <p>WHY JOIN LFC COMMUNITY?</p>
        </div>
        <div className="py-2">
          Unlock new exicting benefits of joining the million of lfc community.
          <p className="ml-20 ">JOIN MyLfc ,your free official account.</p>
        </div>
        <div className="py-2">
          <ul className="list-disc">
            <li>The chance to win amazing prizes every week</li>
            <li>Unlock behind-the-scenes videos</li>
            <li>Follow the match with live commentary</li>
            <li>Keep up to date through the Club newsletter</li>
            <li>Read exclusive interviews in the eMagazine</li>
            <li>Play EA Sports FIFA 23 at LFC Gaming</li>
            <li>Join the conversation on LFC Fan Forums</li>
            <li>Earn even more benefits and rewards</li>
          </ul>

          <a href="" className="mt-10">
            Already have an account?
            <span className="text-red-600 underline">Login</span>
          </a>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Signup;
