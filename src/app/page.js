"use client";
import React from "react";
import Carousel from "./(components)/Carousel/carousel";
import HeadingBar from "./(components)/headingBar/headingBar.js";
import Link from "next/link";
import Products from "./pages/productdetails/productsData.json"
import Productcard from "/src/app/(components)/productcard/productcard";

const Page = () => {
  return (
    <>
      <main className="">
        <div className="flex">
          <nav className="hidden lg:flex space-y=-1 lg:flex-col w-1/3 px-20">
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
        <HeadingBar title="Featured Products"/>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 m-10 lg:m-20">
          {Products.map((product) => (
            <Productcard key={product.ProductID} product={product} />
          ))}
        </div>
      </main>
    </>
  );
};

export default Page;