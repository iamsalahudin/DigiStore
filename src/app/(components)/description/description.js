"use client"
import { useState } from "react";
// import pik from "/public/images/decor_b101.jpg"
import Image from "next/image";

export default function Description ({product}, addToCart) {
  // const { addToCart } = useCart();

  // const handleAddToCart = () => {
  //   // Add the product to the cart
  //   addToCart({ id: product.id, quantity: 1 });
  // };
  if(!product){
    return <>Searching for Product!!</>
  }
  const [quantity, setQuantity] = useState(1);
  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="flex flex-col lg:flex-row items-start gap-20 p-6 h-full">
      {/* Images Section */}
      <div className="flex flex-col gap-4 w-3/5">
        <div className="w-full flex justify-center">
          <Image
            src={product.Images[0]}
            alt="Large Image"
            width={300} // Specify width
            height={300} // Specify height
          />
        </div>
        <div className="grid grid-cols-4 gap-2">
          <Image
            src={product.Images[0]}
            alt="Large Image"
            width={300} // Specify width
            height={300} // Specify height
          />
          <Image
            src={product.Images[0]}
            alt="Large Image"
            width={300} // Specify width
            height={300} // Specify height
          />
          <Image
            src={product.Images[0]}
            alt="Large Image"
            width={300} // Specify width
            height={300} // Specify height
          />
          <Image
            src={product.Images[0]}
            alt="Large Image"
            width={300} // Specify width
            height={300} // Specify height
          />
        </div>
      </div>

      {/* Details Section */}
      <div className="flex flex-col gap-20 justify-between h-full w-2/5">
        <div className="flex flex-col gap-6 justify-between">
          <h1 className="text-4xl font-bold">{product.Name}</h1>
          <p className="text-gray-700 text-2xl">Rs. {product.Price - product.Discount}</p>
          <p className="text-gray-600 text-xl">{product.Desp}</p>

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
        </div>
        <div className="flex flex-grow flex-col mt-auto">
          {/* Buttons */}
          <div className="flex items-center gap-4">
            <button className="px-6 py-2 border border-red-500 bg-red-500 text-white rounded-lg">
              Add to Cart
            </button>
            <button className="px-6 py-2 border border-red-500 hover:bg-red-500 hover:text-white text-red-500 rounded-lg">Add to Wishlist</button>
          </div>

          {/* Delivery Options */}
          <div className="mt-6 border-t pt-4">
            <p>✅ Free Delivery</p>
            <p>🔄 Free 30 Days Delivery Returns</p>
          </div>
        </div>
      </div>
    </div>
  );
}
