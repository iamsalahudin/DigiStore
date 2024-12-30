import React from 'react'
// import favprod from './favorites.json'
import Products from "../productdetails/productsData.json";
import Productcard from "/src/app/(components)/productcard/productcard";
import ProductsCarousel from "../(components)/ProductsCarousel/productsCarousel";
import Link from 'next/link';

const Page = () => {
    const favs = Products.filter(item => item.favourite === true);
    const nofavs = Products.filter(item => item.favourite === false);
    const wishlistCount = favs.length;
    return (
        <div className='p-20'>
            <div className='pb-10'><Link href="/" className='text-gray-500'>Home</Link> | <Link href="/Wishlist">Wishlist</Link></div>
            <div className='flex justify-between'>
                <h1 className='text-2xl'>Wishlist (<span>{wishlistCount}</span>)</h1>
                <a href="" className="text-lg py-3 px-10 border-2 border-[#DB4444] text-[#DB4444] hover:bg-[#DB4444] hover:text-white">Move all to Bag</a>
            </div>
            <div className="flex items-center justify-center flex-wrap my-10 gap-5">
                {favs.map(fav => (
                    <Productcard key={fav.ID} product={fav} />
                ))}
            </div>
            <ProductsCarousel title="For You" heading="You Might Also Like" Products={nofavs} carouselId="PCrecommend" />
        </div>
    )
}

export default Page
