import React from "react";
import Cart from "../Cart";

const Top = () => {
  return (
    <div className="d-flex justify-content-between">
      <div></div>
      <div>
        세종로 2511
        <svg
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.59 -8.7738e-05L6 4.57991L1.41 -8.7738e-05L0 1.40991L6 7.40991L12 1.40991L10.59 -8.7738e-05Z"
            fill="black"
          />
        </svg>
      </div>
      <div className="">
        <Cart />
      </div>
    </div>
  );
};

export default Top;
