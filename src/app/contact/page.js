"use client"
import Link from "next/link";
import React from "react";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
const page = () => {
    const handleform = (e) =>{
        // e.preventDefault();
        const data = new FormData(e.target)
        const form  = Object.fromEntries(data.entries())
        console.log(form);
    }
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center lg:text-left text-center lg:items-start p-8 lg:p-16">
      {/* Contact Information Section */}
      <div className="my-auto lg:w-1/2 w-full">
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2 flex items-center"><span className="mr-1 text-red-500 "><IoCall /></span>Call To Us</h2>
          <p className="text-gray-600">We are available 24/7, 7 days a week.</p>
          <a href={{tel:+923099842771}} className="text-red-500 hover:text-red-700 font-bold mt-2 "> +92 3099842771</a>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2 flex items-center"><span className="mr-1 text-red-500"><MdEmail /></span>Write To Us</h2>
          <p className="text-gray-600">Fill out our form and we will contact you within 24 hours.</p>
          <p className="mt-2"><a href="mailto:customer@exclusive.com" className="text-red-500 hover:text-red-700">customer@exclusive.com</a></p>
          <p><a href="mailto:support@exclusive.com" className="text-red-500 hover:text-red-700">support@exclusive.com</a></p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="lg:w-1/2 w-full bg-white shadow-md p-6 rounded-md mt-8 lg:mt-0">
        <form onSubmit={handleform}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
            <input
              type="text"
              placeholder="Your Name *"
              name="name"
              required
              className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-red-400"
            />
            <input
              type="email"
              placeholder="Your Email *"
              name="email"
              required
              className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-red-400"
            />
            <input
              type="text"
              placeholder="Your Phone *"
              name="phone"
              required
              className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>
          <textarea
            placeholder="Your Message"
            name="message"
            rows="5"
            className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-red-400 mb-4"
          ></textarea>
          <button
            type="submit"
            className="bg-red-500 text-white font-bold py-2 px-6 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
