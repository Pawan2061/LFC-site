import React from "react";

function LastFooter() {
  return (
    <div className="bg-red-700">
      <footer class=" rounded-lg shadow dark:bg-gray-900 ">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div class="sm:flex sm:items-center sm:justify-between">
            <ul class="flex flex-wrap items-center gap-10  mb-6 text-sm font-medium text-white sm:mb-0 ">
              <li>
                <a href="#" class="mr-4 md:mr-6 hover:text-gray-400 ">
                  About
                </a>
              </li>
              <li>
                <a href="#" class="mr-4  md:mr-6 hover:text-gray-400">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" class="mr-4 md:mr-6  hover:text-gray-400">
                  Licensing
                </a>
              </li>
              <li>
                <a href="#" class=" hover:text-gray-400">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" class=" hover:text-gray-400">
                  Cookies
                </a>
              </li>
              <li>
                <a href="#" class=" hover:text-gray-400">
                  Availability
                </a>
              </li>

              <li>
                <a href="#" class=" hover:text-gray-400">
                  Help
                </a>
              </li>
            </ul>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span class="block text-sm text-white sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="https://flowbite.com/" class="hover:underline">
              Flowbite™
            </a>
            © COPYRIGHT 2023 THE LIVERPOOL FOOTBALL CLUB AND ATHLETIC GROUNDS
            LIMITED. ALL RIGHTS RESERVED. MATCH STATISTICS SUPPLIED BY OPTA
            SPORTS DATA LIMITED. REPRODUCED UNDER LICENCE FROM FOOTBALL DATACO
            LIMITED. ALL RIGHTS RESERVED.
          </span>
        </div>
      </footer>
    </div>
  );
}

export default LastFooter;
