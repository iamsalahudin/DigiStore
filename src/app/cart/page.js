"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import productData from '../productdetails/productsData.json';
import CartItem from '../(components)/cart/cartitem';
import { useRef } from 'react';


const cartItems = [1, 2, 4, 9, 11, 10];

const page = () => {
    const [data , setData] = useState(1)
    if (!data){
        return <div>Loading...</div>
    }
    const containerRef = useRef(null);
    const cartProducts = productData.filter(item => cartItems.includes(item.ID));
    const [GrandTotal, setGrandTotal] = useState(0);
    
    const handlData = (childData) => {
        setData(childData)
    }

    // const calculateGrandTotal = () => {
       
        
    // };
    const calculateGrandTotal = () => {
        if (containerRef.current) {  // Check if containerRef is valid
            const totalDivs = containerRef.current.querySelectorAll('.totals-cart');
            const newGrandTotal = Array.from(totalDivs).reduce((sum, div) => {
                const total = parseFloat(div.dataset.total) || 0; // Read data-total value
                return sum + total;
            }, 0);
            setGrandTotal(newGrandTotal);
            console.log(newGrandTotal);
        } else {
            console.log("containerRef is null or not attached yet.");
        }
    };
    


    // useEffect(() => {
    //     const totalDivs = containerRef.current.querySelectorAll('.totals-cart');
    //     const newGrandTotal = Array.from(totalDivs).reduce((sum, div) => {
    //         const total = parseFloat(div.dataset.total) || 0; // Read data-total value
    //         return sum + total;
    //     }, 0);
    //     setGrandTotal(newGrandTotal);
    //     console.log(newGrandTotal);
    // }, [data]);

    useEffect(() => {
        // Use a check to ensure DOM is ready
        if (containerRef.current) {
            calculateGrandTotal();
        }
    }, [cartProducts]); // Recalculate whenever cartProducts changes
    
    return (
        <div  ref={containerRef} className='md:py-20 py-5 lg:px-32 md:px-14 px-3'>
            <div className='md:pb-10 pb-2'><Link href="/" className='text-gray-500 hover:text-[#DB4444]'>Home</Link> | <Link href="/cart" className='hover:text-[#DB4444]'>Cart</Link></div>
            <div className='w-full'>
                <div className='font-bold my-2 w-full flex justify-between rounded items-center'>
                    <div className='w-2/5 md:p-5 p-1'>Product</div>
                    <div className='w-1/5 md:p-5 p-1'>Price</div>
                    <div className='w-1/5 md:p-5 p-1 truncate'>Quantity</div>
                    <div className='w-1/5 md:p-5 p-1 text-right truncate'>Subtotal</div>
                </div>
                {cartProducts.map((product, index) => {
                    return (
                        <CartItem  key={index} data={handlData} product={product} />
                    )
                }
                )}
            </div>
            <div className='flex justify-between items-center w-full py-5 flex-col sm:flex-row space-y-2'>
                <button href="/" className="w-64 text-lg py-3 px-10 border-2 border-[#DB4444] text-[#DB4444] hover:bg-[#DB4444] hover:text-white">Return to Shop</button>
                <button href="/" className="w-64 text-lg py-3 px-10 border-2 border-[#DB4444] text-[#DB4444] hover:bg-[#DB4444] hover:text-white">Update Cart</button>
            </div>
            <div className="flex justify-between flex-col sm:flex-row space-y-2">
                <div className="flex sm:space-x-2 sm:w-2/5 sm:flex-row flex-col sm:h-16 mx-2 sm:m-0 space-y-2 sm:my-0 my-5">
                    <input type="text" name="couponCode" id="couponInput" placeholder="Coupon Code" className="p-3 border border-gray-400 rounded flex-grow" />
                    <button href="/" className="text-lg py-3 px-10 bg-[#DB4444] text-white hover:bg-[#af3838]">Apply Coupon</button>
                </div>
                <div className="border border-gray-500 p-5 flex flex-col sm:w-2/5">
                    <div className="font-semibold">Cart Total</div>
                    <div className="flex justify-between border-b border-gray-400 py-4"><p>Subtotal:</p><p>{GrandTotal}</p></div>
                    <div className="flex justify-between border-b border-gray-400 py-4"><p>Shipping:</p><p>FREE</p></div>
                    <div className="flex justify-between py-4"><p>Total:</p><p>{GrandTotal}</p></div>
                    <button href="/" className="text-lg py-3 px-6 bg-[#DB4444] text-white hover:bg-[#af3838] w-64 mx-auto">Proceed to Checkout</button>
                </div>
            </div>
        </div>
    )
}

export default page

 


 