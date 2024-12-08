// components/Carousel.js
import React, { useEffect } from "react";

const HeadingBar = ({title}) => {
  return (
    <>
      <p className="pl-11">
        <div className="w-3 h-4 bg-red-600 inline-block"></div>
        {title}
        </p>
    </>
  );
};

export default HeadingBar;
