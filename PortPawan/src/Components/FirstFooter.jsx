import React from "react";

function FirstFooter() {
  return (
    <div className="w-full h-[200px] bg-[#DC0714]">
      <div className="sm:flex-col-1 md:flex-col-2 sm:ml-92 md:ml-56 lg:ml-0 lg:flex justify-between px-10">
        <div>
          <img
            src="https://av.sc.com/corp-en/content/images/Lockup-MonoBlack.png"
            alt=""
            className="w-[300px] "
          />
        </div>
        <div>
          <img
            src="https://static.vecteezy.com/system/resources/previews/022/100/980/original/puma-logo-transparent-free-png.png"
            alt=""
            className="w-[220px] "
          />
        </div>
        <div>
          <img
            src="https://img.freepik.com/free-icon/nike_318-565950.jpg"
            alt=""
            className="w-[200px] h-[200px] "
          />
        </div>
        <div>
          <img
            src="https://1000logos.net/wp-content/uploads/2017/12/Axa-Logo-1985.png"
            alt=""
            className="w-[200px]  mt-10"
          />
        </div>
      </div>
    </div>
  );
}

export default FirstFooter;
