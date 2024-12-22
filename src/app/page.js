"use client";
import React, { useRef } from "react";
import Carousel from "./(components)/Carousel/carousel";
import HeadingBar from "./(components)/headingBar/headingBar.js";
import ProductsCarousel from "./(components)/ProductsCarousel/productsCarousel"
import Link from "next/link";
import Products from "./productdetails/productsData.json"
import Productcard from "/src/app/(components)/productcard/productcard";
import Card from "./(components)/Testimonial/Testimonial";
import { FaRing, FaSellsy } from "react-icons/fa";
import { GiCrystalEarrings, GiApothecary, GiDominoTiles } from "react-icons/gi";
import { BiSolidDish } from "react-icons/bi";
// import image from "../../public/images/decor_1001.png"


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
      icon: <GiDominoTiles />,
      description: '',
      value: 'Marbles & Tiles',
      link: '/',
    },
    {
      icon: <BiSolidDish />,
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

  return (
    <>
      <main className="mx-32">
        <div className="flex h-[460px] overflow-hidden mb-20">
          <nav className="hidden lg:flex space-y-3 lg:flex-col w-1/5 pr-5 border-r-[1px] border-gray-300 pt-8">
            <Link
              href="/"
              className="text-gray-700  font-semibold hover:text-red-500 transition duration-200"
            >
              <p className="flex justify-between items-center">
                <span>Decoration</span>
                <i className="fa-solid fa-chevron-right"></i>
              </p>
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 font-semibold hover:text-red-500 transition duration-200"
            >
              <p className="flex justify-between items-center">
                <span>Crockery</span>
                <i className="fa-solid fa-chevron-right"></i>
              </p>
            </Link>
            <Link
              href="/about"
              className="text-gray-700 font-semibold hover:text-red-500 transition duration-200"
            >
              <p className="flex justify-between items-center">
                <span>Jewellery</span>
                <i className="fa-solid fa-chevron-right"></i>
              </p>
            </Link>
            <Link
              href="/signup"
              className="text-gray-700 font-semibold hover:text-red-500 transition duration-200"
            >
              <p className="flex justify-between items-center">
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
          <div className="lg:w-4/5 w-full pt-8">
            <Carousel />
          </div>
        </div>
        <ProductsCarousel title="Featured Products" heading="Most Popular" Products={Products} carouselId="PC1" />
        <div className="flex items-center justify-center w-full h-32 border-b-2 border-gray-200 mb-20">
          <a href="" className="py-3 px-10 bg-[#DB4444] text-white">View All Products</a>
        </div>
        <HeadingBar title="Categories" heading="Browse By Category" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 py-16 border-b-2 border-gray-200 mb-20">
          {Categories.map((data) => (
            <Card key={Categories.key} data={data} />
          ))
          }
        </div>
        <ProductsCarousel title="This Month" heading="Best Selling Products" Products={Products} carouselId="PC2" />
        <div className="border-b-2 border-gray-200 mt-6 mb-20" ></div>
        <ProductsCarousel title="Our Products" heading="Explore Our Products" Products={Products} carouselId="PC3" />

        <HeadingBar title="Featured" heading="New Arrival" />
        <div className="grid gap-5 grid-cols-4 min-h-[80vh] my-10">
          <div className="text-black bg-black text-center rounded-md row-span-2 col-span-2 p-6 opacity-80 flex items-end" style={{ backgroundImage: 'url(https://trinitycrafts.in/wp-content/uploads/2024/09/ceramics-4.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <CardText/>
          </div>
          <div className="text-black bg-black text-center rounded-md col-span-2 p-6 opacity-80 flex items-end" style={{ backgroundImage: 'url(https://cdn.shopify.com/s/files/1/0675/7541/files/ceramic-vases.jpg?v=1690232490)', backgroundSize: 'cover', backgroundPosition: 'center', }}>
          <CardText/>
          </div>
          <div className="text-black bg-black text-center rounded-md p-6 opacity-80 flex items-end" style={{ backgroundImage: 'url(https://www.sushisushi.co.uk/cdn/shop/articles/Japanese-Ceramics_5fee6f50-af3e-4991-9b08-0531f67ab4d1.jpg?v=1642086410)', backgroundSize: 'cover', backgroundPosition: 'center', }}>
          <CardText/>
          </div>
          <div className="text-black bg-black text-center rounded-md p-6 opacity-80 flex items-end" style={{ backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_8fxju7AqwQwKWReGXnP4DW1nyIY7OX9fJQ&s)', backgroundSize: 'cover', backgroundPosition: 'center', }}>
          <CardText/>
          </div>
        </div>
      </main >


    </>
  );
};

export const CardText = () => {
  return (
    <div className="flex flex-col items-start justify-center text-sm">
      <p className="text-black font-bold text-3xl">Top Seller
      </p>
      <p className="text-black text-lg">100+ Reviews
      </p>
      <Link className="text-black font-semibold text-xl" href="/">Shop Now</Link>
    </div>
  )
}

export default Page;
