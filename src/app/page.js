"use client";
import React from "react";
import Carousel from "./(components)/Carousel/carousel";
import HeadingBar from "./(components)/headingBar/headingBar.js";
import CategoriesNav from "./(components)/categories/categoriesNav";
import ProductsCarousel from "./(components)/ProductsCarousel/productsCarousel";
import Link from "next/link";
import Products from "./productdetails/productsData.json";
import Card from "./(components)/Testimonial/Testimonial";
import { FaRing, FaSellsy } from "react-icons/fa";
import { GiCrystalEarrings, GiApothecary, GiDominoTiles } from "react-icons/gi";
import { BiSolidDish } from "react-icons/bi";

const Page = () => {
  const testimonialData = [
    {
      icon: <FaSellsy />,
      value: "10.5k",
      description: "Sellers active on our site",
      link: "/",
    },
    {
      icon: <FaSellsy />,
      value: "33k",
      description: "Monthly Product Sale",
      link: "/",
    },
    {
      icon: <FaSellsy />,
      value: "45.5k",
      description: "Customers active on our site",
      link: "/",
    },
    {
      icon: <FaSellsy />,
      value: "",
      description: "Annual gross sale on our site",
      link: "/",
    },
  ];

  const Categories = [
    {
      icon: <FaRing />,
      description: "",
      value: "Decoration",
      link: "/",
    },
    {
      icon: <GiCrystalEarrings />,
      description: "",
      value: "Jewelry",
      link: "/",
    },
    {
      icon: <GiDominoTiles />,
      description: "",
      value: "Marbles & Tiles",
      link: "/",
    },
    {
      icon: <BiSolidDish />,
      description: "",
      value: "Crockery",
      link: "/",
    },
    {
      icon: <GiApothecary />,
      description: "",
      value: "Ashtrays",
      link: "/",
    },
  ];

  return (
    <main className="px-4 sm:px-6 lg:px-16">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row h-auto lg:h-[530px] mb-20 overflow-hidden">
        <CategoriesNav />
        <div className="lg:w-4/5 w-full overflow-hidden">
          <Carousel className="w-full max-w-full" />
        </div>
      </div>

      {/* Featured Products Carousel */}
      <ProductsCarousel
        className="mt-20"
        title="Featured Products"
        heading="Most Popular"
        Products={Products}
        carouselId="PC1"
      />

      {/* View All Products Button */}
      <div className="flex items-center justify-center w-full h-32 border-b-2 border-gray-200 mb-20">
        <Link href="/" className="py-3 px-10 bg-[#DB4444] text-white text-center">
          View All Products
        </Link>
      </div>

      {/* Categories Section */}
      <HeadingBar title="Categories" heading="Browse By Category" />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 py-16 border-b-2 border-gray-200 mb-20">
        {Categories.map((data, index) => (
          <Card key={index} data={data} />
        ))}
      </div>

      {/* Best Selling Products Carousel */}
      <ProductsCarousel
        title="This Month"
        heading="Best Selling Products"
        Products={Products}
        carouselId="PC2"
      />

      {/* Divider */}
      <div className="border-b-2 border-gray-200 mt-6 mb-20"></div>

      {/* Explore Products Carousel */}
      <ProductsCarousel
        title="Our Products"
        heading="Explore Our Products"
        Products={Products}
        carouselId="PC3"
      />

      {/* New Arrival Section */}
      <HeadingBar title="Featured" heading="New Arrival" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 min-h-[80vh] my-10">
        <div
          className="text-black bg-black text-center rounded-md row-span-2 col-span-1 sm:col-span-2 lg:col-span-2 p-6 opacity-80 flex items-end"
          style={{
            backgroundImage:
              "url(https://trinitycrafts.in/wp-content/uploads/2024/09/ceramics-4.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <CardText />
        </div>
        <div
          className="text-black bg-black text-center rounded-md col-span-1 sm:col-span-2 lg:col-span-2 p-6 opacity-80 flex items-end"
          style={{
            backgroundImage:
              "url(https://cdn.shopify.com/s/files/1/0675/7541/files/ceramic-vases.jpg?v=1690232490)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <CardText />
        </div>
        <div
          className="text-black bg-black text-center rounded-md p-6 opacity-80 flex items-end"
          style={{
            backgroundImage:
              "url(https://www.sushisushi.co.uk/cdn/shop/articles/Japanese-Ceramics_5fee6f50-af3e-4991-9b08-0531f67ab4d1.jpg?v=1642086410)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <CardText />
        </div>
        <div
          className="text-black bg-black text-center rounded-md p-6 opacity-80 flex items-end"
          style={{
            backgroundImage:
              "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_8fxju7AqwQwKWReGXnP4DW1nyIY7OX9fJQ&s)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <CardText />
        </div>
      </div>
    </main>
  );
};

const CardText = () => (
  <div className="flex flex-col items-start justify-center text-sm">
    <p className="text-black font-bold text-3xl">Top Seller</p>
    <p className="text-black text-lg">100+ Reviews</p>
    <Link className="text-black font-semibold text-xl" href="/">
      Shop Now
    </Link>
  </div>
);

export default Page;





