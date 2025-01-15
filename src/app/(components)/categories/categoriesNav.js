"use client"
import React from 'react'
import { useRouter } from 'next/navigation';


function One({ data }) {
    return (
        <div className="text-gray-700  font-semibold hover:text-red-500 transition duration-200">
            <p className="flex justify-between items-center">
                <span>{data}</span>
                <i className="fa-solid fa-chevron-right"></i>
            </p>
        </div>
    )
}

export default function categoriesNav() {
    const categories = [
        "Decoration",
        "Crockery",
        "Jewellery",
        "Tiles & Marbles",
        "Flower Vase",
        "Bowls, Cups & Mugs",
        "Dishes",
        "Pots",
        "Astray",
        "Tea Sets",
        "Dinner Sets"
    ];
    const router = useRouter();
    const handleCategory = (data) => {
        // Add your code to handle the category click
        router.push(`/categories?category=${encodeURIComponent(data)}`);
        console.log(data);
    }
    return (
        <nav className="hidden lg:flex space-y-3 lg:flex-col w-1/5 pr-5 border-r-[1px] border-gray-300 pt-8">
            {
                categories.map((category, index) => (
                    <button key={index} onClick={() => handleCategory(category)}><One data={category} /></button>
                ))
            }
        </nav>
    )
}
