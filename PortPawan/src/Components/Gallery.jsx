import React from "react";

function Gallery() {
  return (
    <div className="p-20">
      <div class="grid grid-cols-1  md:grid-cols-3 gap-10">
        <div className="w-[400px] h-[100px] hover:scale-105">
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://cdn.theathletic.com/app/uploads/2023/03/16124515/vvd-liverpool-1024x683.jpeg"
            alt=""
          />
        </div>
        <div className="w-[400px] h-[100px]  hover:scale-105">
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt294396cb24d698dc/64761f98fc7c2c84423faac0/Liverpool_Player_Ratings.jpg?auto=webp&format=pjpg&width=3840&quality=60"
            alt=""
          />
        </div>
        <div className=" hover:scale-105">
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://theanalyst.com/wp-content/uploads/2023/06/klopp-nunez-salah-bannerpng.jpg"
            alt=""
          />
        </div>
        <div className=" hover:scale-105">
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://media.cnn.com/api/v1/images/stellar/prod/230115145355-02-liverpool-premier-league-restricted.jpg?c=16x9&q=h_720,w_1280,c_fill"
            alt=""
          />
        </div>
        <div className=" hover:scale-105">
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://www.fcbarcelona.com/photo-resources/2019/04/28/79526238-c143-480f-ae95-f6f9ece17a2c/Foto-Liverpool-FC-2-.png?width=1200&height=750"
            alt=""
          />
        </div>
        <div className=" hover:scale-105">
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltc9b9f851b397fc3e/646627319072c922f003b78c/GOAL_-_Blank_WEB_-_Facebook_-_2023-05-18T142311.234.png?auto=webp&format=pjpg&width=3840&quality=60"
            alt=""
          />
        </div>

        <div className=" hover:scale-105">
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://www.arabianbusiness.com/cloud/2022/11/14/liverpool-fc.jpg"
            alt=""
          />
        </div>
        <div className=" hover:scale-105">
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://www.arabianbusiness.com/cloud/2022/11/27/liverpool.jpg"
            alt=""
          />
        </div>
        <div className=" hover:scale-105">
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://cdn.theathletic.com/app/uploads/2023/03/16124515/vvd-liverpool-1024x683.jpeg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
