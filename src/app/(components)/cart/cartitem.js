"use client";
import { React, useState } from 'react';
import Image from 'next/image';

const cartitem = ({product}) => {
    const [quantity, setQuantity] = useState(1); // Default quantity
    const price = product.Price; // Fixed price per unit
    const total = quantity * price; // Calculate total dynamically

    const handleQuantityChange = (e) => {
        const value = parseInt(e.target.value, 10); // Parse the input as an integer
        setQuantity(isNaN(value) ? 1 : value); // Ensure it's a valid number or default to 0
    };
    return (
        <div className='border border-gray-300 my-2 w-full flex justify-between items-center rounded'>
            <div className='w-2/5 md:p-5 p-1 flex items-center truncate'>
            <Image src={product.Images[0]} width={30} height={30} className='mr-2 sm:block hidden'/>
            {product.Name}
            </div>
            <div className='w-1/5 md:p-5 p-1' name="price">Rs. {product.Price}</div>
            <div className='w-1/5 md:p-5 p-1'>
                <input type="number" name="quantity" id="" min="1" onChange={handleQuantityChange} className='w-full lg:w-1/5 border border-gray-300 p-1 rounded' />
            </div>
            <div className='w-1/5 md:p-5 p-1 text-right totals-cart' data-total={total}>Rs. {total}</div>
        </div>
    )
}

export default cartitem;
