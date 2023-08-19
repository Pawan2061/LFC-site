import React from "react";
// import PersonIcon from "@mui/icons-material/Person";
function LowNav() {
  return (
    <div class="bg-[#DC0714]   border-black p-20">
      <div class="flex items-center justify-between">
        <div class="cursor-pointer ">
          <img
            src="https://www.liverpoolfc.com/liverpoolfc_crest.png"
            alt="lfc"
            class="h-[80px]"
          />
        </div>

        <div class="lg:flex md:hidden sm:hidden  ">
          <ul class="flex gap-8 items-center list-none text-white font-bold text-2xl">
            <li className="transition ease-in-out   hover:scale-110   duration-300 ">
              <button>News&Fixture</button>
            </li>
            <li className="transition ease-in-out   hover:scale-110   duration-300 ">
              <button>Teams</button>
            </li>
            <li className="transition ease-in-out   hover:scale-110   duration-300 ">
              <button>Tickets</button>
            </li>
            <li className="transition ease-in-out   hover:scale-110   duration-300 ">
              <button>Shopping</button>
            </li>
            <li className="transition ease-in-out   hover:scale-110   duration-300 ">
              <button>Shop</button>
            </li>
            <li className="transition ease-in-out   hover:scale-110   duration-300 ">
              <button>Video</button>
            </li>
            <li class="ml-2">|</li>
            <li>
              <button>Join</button>
            </li>
            <li>
              <button>Login</button>
            </li>
            <li className="h-[80px] w-[80px] mt-8">
              <a href="">
                <img
                  src="https://av.sc.com/corp-en/content/images/Lockup-MonoBlack.png"
                  alt=""
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default LowNav;
