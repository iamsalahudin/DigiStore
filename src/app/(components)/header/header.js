"use client";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import pik from "/public/images/logo.png";
import Link from 'next/link';
import { SlMenu } from "react-icons/sl";

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
            src={pik} // Replace with the actual logo path
            alt="Logo"
            className="w-40 lg:w-32 lg:h-24"
          />
        </div>

        {/* Mobile: Menu Button */}
        <button onClick={toggleMenu} className="p-2 lg:hidden text-white bg-blue-600">
          <SlMenu />
        </button>

        {/* Center Section: Navigation (hidden on small screens) */}
        <nav className="navigation hidden lg:flex space-x-8">
          <Link href="/" className="text-gray-700 font-semibold hover:text-red-500 transition duration-200">
            Home
          </Link>
          <Link href="/contact" className="text-gray-700 font-semibold hover:text-red-500 transition duration-200">
            Contact
          </Link>
          <Link href="/about" className="text-gray-700 font-semibold hover:text-red-500 transition duration-200">
            About
          </Link>
          <Link href="/signup" className="text-gray-700 font-semibold hover:text-red-500 transition duration-200">
            Sign Up
          </Link>
          <Link href="/login" className="text-gray-700 font-semibold hover:text-red-500 transition duration-200">
            Login
          </Link>
        </nav>

        {/* Desktop: Search Bar and Icons (hidden on small screens) */}
        <div className="hidden lg:flex items-center space-x-5">
          <form className='border-2 border-b-red-500 border-transparent p-1' onSubmit={handleFormSubmit}>
            <input
              className='bg-transparent outline-none text-black'
              type="text"
              placeholder='Search...'
              value={query}
              onChange={handleFormChange}
            />
            <button type="submit">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>

          <div className="flex space-x-4">
            <Link href="/cart">
              <i className="fa-brands fa-opencart text-xl"></i>
            </Link>
            <Link href="/account">
            <i className="fa-regular fa-user text-xl"></i>
            </Link>
            <Link href="/Wishlist">
              <i className="fa-regular fa-heart text-xl"></i>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu: Sidebar (hidden by default, visible when menu is open) */}
      <div
        className={`fixed inset-0 left-0 w-64 bg-red-600 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 lg:hidden`}
      >
        <button onClick={toggleMenu} className="absolute top-4 right-4 text-white">
          Close
        </button>
        <ul className="p-4 text-white space-y-4">
          <li>
            <Link href="/" onClick={closeMenu} className="hover:text-gray-300 transition duration-200">
              Home
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={closeMenu} className="hover:text-gray-300 transition duration-200">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={closeMenu} className="hover:text-gray-300 transition duration-200">
              About
            </Link>
          </li>
          <li>
            <Link href="/signup" onClick={closeMenu} className="hover:text-gray-300 transition duration-200">
              Sign Up
            </Link>
          </li>
          <li>
            <Link href="/login" onClick={closeMenu} className="hover:text-gray-300 transition duration-200">
              Login
            </Link>
          </li>
          {/* Mobile Search (optional in sidebar) */}
          <li>
            <form className="border-b border-white p-2">
              <input
                className="bg-transparent outline-none text-white"
                type="text"
                placeholder="Search..."
                value={query}
                onChange={handleFormChange}
              />
              <button type="submit" className="text-white">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
          </li>
        </ul>
      </div>
    </header>
  );
}
