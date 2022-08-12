import React from "react";

function RightArrow({ color }) {
  return (
    <svg
      width="49"
      height="31"
      viewBox="0 0 49 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_21_453)">
        <mask
          id="mask0_21_453"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="49"
          height="31"
        >
          <path
            d="M33.0473 30.5455L30.4223 27.9545L41.2291 17.1477H0V13.3977H41.2291L30.4223 2.625L33.0473 0L48.32 15.2727L33.0473 30.5455Z"
            fill={color || "black"}
          />
        </mask>
        <g mask="url(#mask0_21_453)">
          <rect
            y="-0.00231934"
            width="48.32"
            height="30.55"
            fill={color || "black"}
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_21_453">
          <rect width="48.32" height="30.5455" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default RightArrow;
