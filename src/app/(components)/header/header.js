import Image from 'next/image'
import pik from "/public/images/logo.jpg"
import Link from 'next/link';
import ProductCarousel from '../Carousel/ProductCarousel';

export default function Header() {
  return (
    <header className="bg-white border-b-[1px] border-gray-300 sticky top-0 z-50 w-full">
      <div className="container mx-auto flex items-center justify-between py-1 px-4 lg:px-8">
        {/* Left Section: Logo */}
        <div className="flex items-center space-x-4">
          <Image
            src= {pik}// Replace with the actual logo path
            alt="Bata Logo"
            className="w-32 lg:w-32 lg:h-24"
          />
        </div>
        {/* Center Section: Navigation */}
        <nav className="hidden lg:flex space-x-8">
          <Link href="/" className="text-gray-700  font-semibold hover:text-red-500 transition duration-200">
            Home
          </Link>
          <Link href="/contact" className="text-gray-700 font-semibold hover:text-red-500 transition duration-200">
            Contact
          </Link>
          <Link href="/About" className="text-gray-700 font-semibold hover:text-red-500 transition duration-200">
            About
          </Link>
          <Link href="/signup" className="text-gray-700 font-semibold hover:text-red-500 transition duration-200">
            Sign Up
          </Link>
        </nav>

        {/* Right Section: Icons */}
        <div className="flex items-center space-x-4">
          <button className="lg:hidden p-2 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 7.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          </button>
          <div className="input hidden  space-x-5 lg:flex items-center">
           <div className=' border-2 border-b-yellow-400 border-transparent p-1 '>
             <input className='bg-transparent outline-none  text-black ' type="text" placeholder='Search...' />
            <i className="fa-solid fa-magnifying-glass"></i>
           </div>

            <Link href="/cart">
            <i className="fa-brands fa-opencart"></i></Link>
            <i className="fa-regular fa-user"></i>
            <Link href="/Wishlist">
            <i className="fa-regular fa-heart"></i></Link>
          </div>
         
        </div>
      </div>
    </header>
  );
}
