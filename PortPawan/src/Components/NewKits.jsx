import React from "react";

function NewKits() {
  return (
    <div>
      <div className="flex px-20 py-10 justify-between">
        <div>
          <button className="font-bold text-white bg-black rounded-2xl hover:bg-gray-800 p-2">
            NEW THIRD KIT
          </button>
        </div>
        <div>
          <a href="" className="text-gray-600 font-bold hover:font-extrabold">
            Shop Now
          </a>
        </div>
      </div>

      <div className="grid   lg:grid-cols-3 p-20 sm:grid-cols-1 md:grid-cols-2">
        <div class="max-w-sm   bg-white hover:shadow-2xl border border-gray-200 rounded-lg m-8 shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              class="rounded-t-lg h-64 w-full "
              src="https://store.liverpoolfc.com/media/catalog/product/cache/b9092b51ecc4f763bcb6a21acb63c32f/d/x/dx9851p_1.jpg"
              alt=""
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Liverpool Third Kit 2023/24
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Latest kit for the kids of age 7-13
            </p>
            <a
              href="#"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Order now
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
        </div>
        {/* second */}

        <div class="max-w-sm hover:shadow-2xl   bg-white border border-gray-200 rounded-lg m-8 shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              class="rounded-t-lg h-64 w-[100%]"
              src="https://store.liverpoolfc.com/media/catalog/product/cache/042594ffe2aeaa6bf11576291063d119/d/z/dz0416g_4.jpg"
              alt=""
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Liverpool Third Kit 2023/24
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Latest kit for the kids of age 7-13
            </p>
            <a
              href="#"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Order now
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
        </div>

        {/* third */}

        <div class="max-w-sm hover:shadow-2xl   bg-white border border-gray-200 rounded-lg m-8 shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              class="rounded-t-lg h-64 w-[100%]"
              src="https://store.liverpoolfc.com/media/catalog/product/cache/dd504f005c0b90ffe1b9fb2344db1a87/d/x/dx9822p_1.jpg"
              alt=""
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Liverpool Third Kit 2023/24
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Latest kit for the kids of age 7-13
            </p>
            <a
              href="#"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Order now
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
        </div>
      </div>
    </div>
  );
}

export default NewKits;
