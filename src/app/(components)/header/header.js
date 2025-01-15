"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import pik from "/public/images/logo.png"
import Link from 'next/link';
import { SlMenu } from "react-icons/sl";
import { RiCloseLargeLine } from "react-icons/ri";
import { useEffect, useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [query, setQuery] = useState('');
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleFormChange = (e) => {
    setQuery(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    router.push(`/search?q=${encodeURIComponent(query)}`);
    console.log(query);
  };

  return (
    <header className="bg-white border-b-[1px] border-gray-300 sticky top-0 z-50 w-full">
      <div className="container mx-auto flex items-center justify-between py-1 px-4 lg:px-8">
        {/* Left Section: Logo */}
        <div className="flex items-center space-x-4">
          <Image
            src={pik}// Replace with the actual logo path
            alt="Bata Logo"
            className="w-40 lg:w-32 lg:h-24"
          />
        </div>
        {/* Center Section: Navigation */}
        <nav className="navigation hidden lg:flex space-x-8">
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
          <Link href="/login" className="text-gray-700 font-semibold hover:text-red-500 transition duration-200">
            Login
          </Link>
        </nav>

        <div className="flex items-center space-x-4 cursor-pointer">

          <div>
            <button onClick={toggleMenu} className="p-2 lg:hidden text-white bg-blue-600">
              <SlMenu />
            </button>

            <div className={`fixed inset-y-0 left-0 w-64 bg-red-600 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300`}>
              <button
                onClick={toggleMenu}
                className="absolute top-4 right-4 text-white"
              >
                Close
              </button>
              <ul className="p-4 text-white">
                <li className="py-2">
                  <Link
                    href="/"
                    onClick={closeMenu}
                    className="text-white hover:text-gray-300 transition duration-200"
                  >
                    Home
                  </Link>
                </li>
                <li className="py-2">
                  <Link
                    href="/contact"
                    onClick={closeMenu}
                    className="text-white hover:text-gray-300 transition duration-200"
                  >
                    Contact
                  </Link>
                </li>
                <li className="py-2">
                  <Link
                    href="/about"
                    onClick={closeMenu}
                    className="text-white hover:text-gray-300 transition duration-200"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="input hidden  space-x-5 lg:flex items-center">
            <form className=' border-2 border-b-red-500 border-transparent p-1 ' onSubmit={handleFormSubmit}>
              <input className='bg-transparent outline-none  text-black ' type="text" placeholder='Search...' value={query} onChange={handleFormChange} />
              <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
            </form>
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