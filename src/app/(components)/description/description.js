"use client"
import { useState } from "react";
import pik from "/public/images/decor_b101.jpg"

import Image from "next/image";

export default function Description() {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("red");
  const [selectedSize, setSelectedSize] = useState("M");

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="flex flex-col lg:flex-row items-start gap-10 p-6">
      {/* Images Section */}
      <div className="flex flex-col gap-4">
        <div className="w-full">
         <Image
         src={pik}
         alt="Large Image"
         width={500} // Specify width
         height={500} // Specify height
        />
        </div>
        <div className="grid grid-cols-4 gap-2">
        <Image
        src={pik}
        alt="Large Image"
        width={500} // Specify width
        height={500} // Specify height
        />
        <Image
        src={pik}
        alt="Large Image"
        width={500} // Specify width
        height={500} // Specify height
        />
        <Image
         src={pik}
         alt="Large Image"
         width={500} // Specify width
         height={500} // Specify height
        />
        <Image
        src={pik}
        alt="Large Image"
        width={500} // Specify width
        height={500} // Specify height
        />
        </div>
      </div>

      {/* Details Section */}
      <div className="flex flex-col gap-6">
        <h1 className="text-2xl font-bold">Havic HV G-92 Gamepad</h1>
        <p className="text-gray-700">$192.00</p>
        <p className="text-gray-600">
          PlayStation 5 Controller Skin High quality vinyl with air channel
          adhesive for easy bubble-free install & mess-free removal. Pressure
          sensitive.
        </p>

        {/* Color Selection */}
        <div className="flex items-center gap-4">
          <span className="font-medium">Colours:</span>
          <div
            onClick={() => setSelectedColor("red")}
            className={`w-8 h-8 rounded-full cursor-pointer ${
              selectedColor === "red" ? "ring-2 ring-red-500" : ""
            }`}
            style={{ backgroundColor: "red" }}
          ></div>
          <div
            onClick={() => setSelectedColor("blue")}
            className={`w-8 h-8 rounded-full cursor-pointer ${
              selectedColor === "blue" ? "ring-2 ring-blue-500" : ""
            }`}
            style={{ backgroundColor: "blue" }}
          ></div>
        </div>

        {/* Size Selection */}
        <div className="flex items-center gap-4">
          <span className="font-medium">Size:</span>
          {["XS", "S", "M", "L", "XL"].map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`px-4 py-2 border rounded-lg ${
                selectedSize === size ? "bg-gray-800 text-white" : ""
              }`}
            >
              {size}
            </button>
          ))}
        </div>

        {/* Quantity Selector */}
        <div className="flex items-center gap-4">
          <span className="font-medium">Quantity:</span>
          <button
            onClick={decreaseQuantity}
            className="px-4 py-2 border rounded-lg bg-gray-100"
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            onClick={increaseQuantity}
            className="px-4 py-2 border rounded-lg bg-gray-100"
          >
            +
          </button>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <button className="px-6 py-2 bg-blue-500 text-white rounded-lg">
            Buy Now
          </button>
          <button className="px-6 py-2 border rounded-lg">Add to Wishlist</button>
        </div>

        {/* Delivery Options */}
        <div className="mt-6 border-t pt-4">
          <p>✅ Free Delivery</p>
          <p>🔄 Free 30 Days Delivery Returns</p>
        </div>
      </div>
    </div>
  );
}
