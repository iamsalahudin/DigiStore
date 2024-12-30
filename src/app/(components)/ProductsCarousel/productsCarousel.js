"use client";
import React from "react";
import HeadingBar from "../headingBar/headingBar";
import Productcard from "../productcard/productcard";

const ProductsCarousel = ({ title, heading, carouselId, Products }) => {
    const scrollLeft = () => {
        const container = document.getElementById(carouselId);
        container.scrollBy({ left: -200, behavior: "smooth" });
      };
    
      const scrollRight = () => {
        const container = document.getElementById(carouselId);
        container.scrollBy({ left: 200, behavior: "smooth" });
      };

    return (
        <>
            <div className="flex justify-between items-end">
                <HeadingBar title={title} heading={heading} />
                <div className="space-x-1">
                    <button className="nav-btn" onClick={scrollLeft}>
                        <i className="fa-solid fa-arrow-left bg-gray-200 p-3 rounded-full"></i>
                    </button>
                    <button className="nav-btn" onClick={scrollRight}>
                        <i className="fa-solid fa-arrow-right bg-gray-200 p-3 rounded-full"></i>
                    </button>
                </div>
            </div>
            <div className="flex items-center overflow-hidden my-10">
                <div
                    className="flex overflow-x-auto items-center gap-2 relative"
                    id={carouselId}
                    style={{ scrollBehavior: "smooth", scrollbarWidth: "none" }}
                >
                    {Products.map((product) => (
                        <Productcard key={product.ProductID} product={product} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default ProductsCarousel;
