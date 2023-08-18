import React from "react";

function Hero() {
  return (
    <div className="bg-[#DC0714] ">
      <main className="grid  grid-cols-1  items-center px-40 md:px-30 lg:pb-20 lg:px-20 gap-10       md:grid-cols-2 lg:grid-cols-3 ">
        <div className="">
          <div class="max-w-sm p-6 transition ease-in-out cursor-pointer   hover:scale-105   duration-300     bg-red-700 text-white  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight  dark:text-white">
                Luiz Diaz returns from injury
              </h5>
            </a>
            <p class="mb-3 font-normal text-xl  dark:text-gray-400 ">
              The colombian star who was injured with a muscle injury back in
              august is set to return to a brand new season in primeire league.
              The colombian star expresses his determination to achieve the feat
              he was unable to achieve last year.
            </p>
            <p className="underline  text-white border-b-2"></p>
            <div className="flex justify-start transition ease-in-out   hover:scale-110 cursor-pointer mt-3   duration-300 ">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkpSwUnSrodsSQmlWpxZMfLAgaQVcZ3yCNoidrnN_soZ0BbtZBc87jVTB-ZALD8mLKvcdi&s"
                alt="luiz"
                className="w-[80px] h-[80px] m-2"
              />
              <p>
                "I am more than ready for the new season and i am exicted to
                give my best for the upcoming season and chase all the four
                titles"
                <span className="ml-4 text-xl  text-white underline">
                  <a href="#">See More</a>
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="transition ease-in-out   hover:scale-105   duration-300  cursor-pointer">
          <div class="max-w-sm bg-red-700   rounded-md shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                class="rounded-t-lg"
                src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltaec7a4d594a1ed95/643e6bbe3f8518a2c3dde2a6/Trent_Alexander-Arnold_Liverpool_2022-23_(4).jpg?auto=webp&format=pjpg&width=3840&quality=60"
                alt="arnolld"
              />
            </a>
            <div class="p-5 mt-">
              <a href="#">
                <h5 class="mb-2 text-lg  tracking-tight text-gray-100 dark:text-white">
                  2 Hours Ago
                </h5>
              </a>
              <p class="mb-3 mt-4 font-normal text-xl text-white dark:text-gray-400">
                <span className="font-bold">Match status:</span>Trent ready for
                the upcoming fixture against bourthmoth
              </p>
              <a
                href="#"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-490  mt-1 rounded-lg hover:bg-white hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  class="w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
            <p className="underline text-white border-b mb-0"></p>
          </div>
        </div>

        {/* third card */}
        <div className="transition ease-in-out   hover:scale-105   duration-300  cursor-pointer">
          <div class="w-full max-w-sm bg-red-700 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                class="p-6 rounded-t-lg "
                src="https://cdn1.rousingthekop.com/uploads/4/2021/05/GettyImages-1223617621.jpg"
                alt="product image"
              />
            </a>
            <div class="px-5 pb-5">
              <a href="#">
                <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  Liverpool 2023/24 Kit
                </h5>
              </a>
              <div class="flex items-center mt-2.5 mb-5">
                <svg
                  class="w-4 h-4 text-yellow-300 mr-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  class="w-4 h-4 text-yellow-300 mr-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  class="w-4 h-4 text-yellow-300 mr-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  class="w-4 h-4 text-yellow-300 mr-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  class="w-4 h-4 text-gray-200 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                  5.0
                </span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-3xl font-bold text-gray-900 dark:text-white">
                  $599
                </span>
                <a
                  href="#"
                  class="text-white  hover:bg-white hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add to cart
                </a>
              </div>
            </div>
            <p className="underline text-white border-b "></p>
          </div>
        </div>
        {/* fourth card */}

        <div className="m-4">
          <div className="transition ease-in-out   hover:scale-105   duration-300  cursor-pointer">
            <div class="w-[100%] bg-red-700   rounded-md shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  class="rounded-t-lg"
                  src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt6e5ffefeaf1bd116/60dbd8b8fd14d30f3eaea98c/e32e04087394e8a2e1aa590d90d440bf7da5482b.jpg?auto=webp&format=pjpg&width=3840&quality=60"
                  alt="arnolld"
                />
              </a>
              <div class="p-5 mt-">
                <a href="#">
                  <h5 class="mb-2 text-lg  tracking-tight text-gray-100 dark:text-white">
                    23 Minutes ago
                  </h5>
                </a>
                <p class="mb-3 mt-4 font-normal text-xl text-white dark:text-gray-400">
                  <span className="font-bold">News:</span>Alison Becker voted as
                  the fans best player for August.The Brazillian goalkeeper got
                  a total of 2M votes
                </p>
                <a
                  href="#"
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-490  mt-1 rounded-lg hover:bg-white hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    class="w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
              <p className="underline text-white border-b mb-0"></p>
            </div>
          </div>
        </div>

        <div className="m-4">
          <div className="transition ease-in-out   hover:scale-105   duration-300  cursor-pointer">
            <div class="max-w-sm bg-red-700   rounded-md shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  class="rounded-t-lg h-[60%]"
                  src="https://s.yimg.com/ny/api/res/1.2/O2ZPUIJcFgJ6D29WFIukOQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQ0Nw--/https://media.zenfs.com/en/the_independent_635/b01e33431912db72a83eff953d92519d"
                  alt="arnolld"
                />
              </a>
              <div class="p-5 mt-">
                <a href="#">
                  <h5 class="mb-2 text-lg  tracking-tight text-gray-100 dark:text-white">
                    2 Hours Ago
                  </h5>
                </a>
                <p class="mb-3 mt-4 font-normal text-xl text-white dark:text-gray-400">
                  <span className="font-bold">News:</span>Coach Kloop confident
                  on new liverpool signings
                </p>
                <a
                  href="#"
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-490  mt-1 rounded-lg hover:bg-white hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    class="w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
              <p className="underline text-white border-b mb-0"></p>
            </div>
          </div>
        </div>

        <div className="m-4">
          <div className="transition ease-in-out   hover:scale-105   duration-300  cursor-pointer">
            <div class=" max-w-sm bg-red-700   rounded-md shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="relative">
                <a href="#">
                  <img
                    class="rounded-t-lg w-[100%] h-[100%]"
                    src="data:image/jpeg;base64,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"
                    alt="arnolld"
                  />
                </a>
                <button
                  type="button"
                  class="absolute bottom-2 left-4   focus:outline-none text-white bg-green-400 hover:bg-blue-500 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                >
                  EXCLUSIVE
                </button>
              </div>
              <div class="p-5">
                <a href="#">
                  <h5 class="mb-2 text-lg  tracking-tight text-gray-100 dark:text-white">
                    2 Hours Ago
                  </h5>
                </a>
                <p class="mb-3 mt-4 font-normal text-xl text-white dark:text-gray-400">
                  <span className="font-bold">News:</span>Endo signs a 4 year
                  contact for liverpool
                </p>
                <a
                  href="#"
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-490  mt-1 rounded-lg hover:bg-white hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    class="w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
              <p className="underline text-white border-b mb-0"></p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Hero;
