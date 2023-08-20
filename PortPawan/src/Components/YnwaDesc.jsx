import React from "react";
import Ynwa from "../assets/Ynwa.png";
import Ynwa1 from "../assets/Ynwa1.png";
import Trophy from "../assets/Trophy.png";
function YnwaDesc() {
  return (
    <div>
      <div className="p-20 flex justify-between">
        <div>
          <img src={Ynwa} alt="" />
        </div>
        <div>
          <img src={Ynwa1} alt="" />
        </div>
      </div>

      <div>
        <img src={Trophy} alt="" />
      </div>
    </div>
  );
}

export default YnwaDesc;
