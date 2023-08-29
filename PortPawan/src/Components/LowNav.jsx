import React from "react";
import { Route, Router, Routes } from "react-router-dom";

import { Link } from "react-router-dom";
import FirstFooter from "./FirstFooter";
import Fixtures from "./Fixtures";
import Hero from "./Hero";
import Jurgen from "./Jurgen";
import LastFooter from "./LastFooter";
import LowHero from "./LowHero";
import NewKits from "./NewKits";
import Vandjik from "./Vandjik";
import Video from "./Video";
import ViewGallery from "./ViewGallery";
import YnwaDesc from "./YnwaDesc";
import Login from "../RoutingComponents/Login";
import Signup from "../RoutingComponents/Signup";

function LowNav() {
  return (
    <div>
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
                <Link to="/sign">Signup</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>

              <li className="h-[80px] w-[80px] mt-8">
                <a href="#">
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
    </div>
  );
}

export default LowNav;
