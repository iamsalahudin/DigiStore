// components/Carousel.js
import React, { useEffect } from "react";

const HeadingBar = ({ title }) => {
  return (
    <>
      <div className="flex  items-center gap-1">
        <div className="w-3 h-4 bg-red-600 inline-block"></div>
        <p>{title}</p>
      </div>
    </>
  );
};

export default HeadingBar;
