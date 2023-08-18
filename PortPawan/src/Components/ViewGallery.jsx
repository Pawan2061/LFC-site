import React, { useState } from "react";
import Gallery from "./Gallery";

function ViewGallery() {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <>
      <div className="p-20 flex justify-center items-center">
        <div>
          <button
            type="button"
            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            onClick={handleClick}
          >
            Display Gallery
          </button>
        </div>
      </div>
      {show ? <Gallery /> : null}
    </>
  );
}

export default ViewGallery;
