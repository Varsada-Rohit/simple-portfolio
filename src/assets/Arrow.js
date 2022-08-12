import React, { useState } from "react";

function Arrow({ color, ...props }) {
  const [fill, setFill] = useState(color);

  return (
    <svg
      width="10"
      height="11"
      viewBox="0 0 23 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.1424 23.0824L0.145242 20.0852L15.1879 5.02841H3.7674L3.79581 0.90909H22.3043V19.4318H18.1566L18.185 8.02557L3.1424 23.0824Z"
        fill={fill || "#fff"}
      />
    </svg>
  );
}

export default Arrow;
