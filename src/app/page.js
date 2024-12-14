"use client";
import React from "react";
import Carousel from "./(components)/Carousel/carousel";
import HeadingBar from "./(components)/headingBar/headingBar.js";
import Link from "next/link";
import Products from "./productdetails/productsData.json"
import Productcard from "/src/app/(components)/productcard/productcard";
import Card from "./(components)/Testimonial/Testimonial";
import { FaRing, FaSellsy } from "react-icons/fa";
import { GiCrystalEarrings, GiApothecary } from "react-icons/gi";

const Page = () => {
  const testimonialData = [
    {
      icon: <FaSellsy />,
      value: '10.5k',
      description: 'Sellers active on our site',
      link: '/',
    },
    {
      icon: <FaSellsy />,
      value: '33k',
      description: 'Monthly Product Sale',
      link: '/',
    },
    {
      icon: <FaSellsy />,
      value: '45.5k',
      description: 'Customers active on our site',
      link: '/',
    },
    {
      icon: <FaSellsy />,
      value: '',
      description: 'Annual gross sale on our site',
      link: '/',
    },
  ];
  const Categories = [
      {
      icon: <FaRing />,
      description: '',
      value: 'Decoration',
      link: '/',
    },
    {
      icon: <GiCrystalEarrings />,
      description: '',
      value: 'Jewellry',
      link: '/',
    },
    {
      icon: <FaSellsy />,
      description: '',
      value: 'Marbles & Tiles',
      link: '/',
    },
    {
      icon: <FaSellsy />,
      description: '',
      value: 'Crockery',
      link: '/',
    },
    {
      icon: <GiApothecary />,
      description: '',
      value: 'Astrays',
      link: '/',
    },
  ]
function translateX() {
  document.querySelector('.productBlock').style.transform = `translateX(100px)`;
}
return (
  <>
    <main className="m-20">
      <div className="flex">
        <nav className="hidden lg:flex space-y-1 lg:flex-col w-1/3 px-20">
          <Link
            href="/"
            className="text-gray-700  font-semibold hover:text-red-500 transition duration-200"
          >
            <p className="flex justify-between">
              <span>Decoration</span>
              <i className="fa-solid fa-chevron-right"></i>
            </p>
          </Link>
          <Link
            href="/contact"
            className="text-gray-700 font-semibold hover:text-red-500 transition duration-200"
          >
            <p className="flex justify-between">
              <span>Crockery</span>
              <i className="fa-solid fa-chevron-right"></i>
            </p>
          </Link>
          <Link
            href="/about"
            className="text-gray-700 font-semibold hover:text-red-500 transition duration-200"
          >
            <p className="flex justify-between">
              <span>Jewellery</span>
              <i className="fa-solid fa-chevron-right"></i>
            </p>
          </Link>
          <Link
            href="/signup"
            className="text-gray-700 font-semibold hover:text-red-500 transition duration-200"
          >
            <p className="flex justify-between">
              <span>Tiles & Marbles</span>
              <i className="fa-solid fa-chevron-right"></i>
            </p>
          </Link>
          <Link
            href="/signup"
            className="text-gray-700 font-semibold hover:text-red-500 transition duration-200"
          >
            <p>
              <span>Flower Vase</span>
            </p>
          </Link>
          <Link
            href="/signup"
            className="text-gray-700 font-semibold hover:text-red-500 transition duration-200"
          >
            <p>
              <span>Bowls, Cups & Mugs</span>
            </p>
          </Link>
          <Link
            href="/signup"
            className="text-gray-700 font-semibold hover:text-red-500 transition duration-200"
          >
            <p>
              <span>Dishes</span>
            </p>
          </Link>
          <Link
            href="/signup"
            className="text-gray-700 font-semibold hover:text-red-500 transition duration-200"
          >
            <p>
              <span>Pots</span>
            </p>
          </Link>
          <Link
            href="/signup"
            className="text-gray-700 font-semibold hover:text-red-500 transition duration-200"
          >
            <p>
              <span>Astray</span>
            </p>
          </Link>
          <Link
            href="/signup"
            className="text-gray-700 font-semibold hover:text-red-500 transition duration-200"
          >
            <p>
              <span>Tea Sets</span>
            </p>
          </Link>
          <Link
            href="/signup"
            className="text-gray-700 font-semibold hover:text-red-500 transition duration-200"
          >
            <p>
              <span>Dinner Sets</span>
            </p>
          </Link>
        </nav>
        <div className="lg:w-2/3 w-full">
          <Carousel />
        </div>
      </div>
      <HeadingBar title="Featured Products" heading="Most Popular" />
      <div className="flex items-center overflow-hidden my-5 gap-2">
        <button className="nav-btn absolute z-10 left-3" onclick={translateX}>
          <i class="fa-solid fa-arrow-left bg-gray-200 p-3 rounded-full"></i>
        </button>
        <button className="nav-btn absolute z-10 right-3">
          <i class="fa-solid fa-arrow-right bg-gray-200 p-3 rounded-full"></i>
        </button>
        <div className="flex min-w-[10000px]" id="productBlock">
          {Products.map((product) => (
            <Productcard key={product.ProductID} product={product} />
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center w-full h-32 border-b-2 border-gray-200 mb-20">
        <a href="" className="py-3 px-10 bg-[#DB4444] text-white">View All Products</a>
      </div>
      <HeadingBar title="Categories" heading="Browse By Category" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {Categories.map((data) => (
          <Card key={Categories.key} data={data} />
        ))
        };
      </div>
      <HeadingBar title="This Month" heading="Best Selling Products" />
      <div className="flex items-center overflow-hidden my-5 gap-2">
        <button className="nav-btn absolute z-10 left-3" onclick={translateX}>
          <i class="fa-solid fa-arrow-left bg-gray-200 p-3 rounded-full"></i>
        </button>
        <button className="nav-btn absolute z-10 right-3">
          <i class="fa-solid fa-arrow-right bg-gray-200 p-3 rounded-full"></i>
        </button>
        <div className="flex min-w-[10000px]" id="productBlock">
          {Products.map((product) => (
            <Productcard key={product.ProductID} product={product} />
          ))}
        </div>
      </div>
      <HeadingBar title="This Month" heading="Best Selling Products" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {testimonialData.map((data) => (
          <Card key={testimonialData.key} data={data} />
        ))
        };
      </div>
      <HeadingBar title="Featured" heading="New Arrival" />
    </main>


  </>
);
};

export default Page;
