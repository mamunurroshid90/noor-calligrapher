"use client";

// فائل: components/shared/Navbar.tsx

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 h-[70px]">
          <Image 
            src="/logo.png" 
            alt="Logo" 
            width={250}
            height={100}
            className="p-1 rounded w-[150px] md:w-[250px] h-auto"
          />
          {/* <span className="text-xl font-bold">MyProject</span> */}
        </Link>
        
        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu}
            className="flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
            aria-label="Toggle menu"
          >
            <span className={`block w-8 h-1 bg-white transition-all duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
            <span className={`block w-8 h-1 bg-white transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block w-8 h-1 bg-white transition-all duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="hover:text-red-600 transition duration-300">Home</Link>
          <Link href="/courses" className="hover:text-red-600 transition duration-300">Courses</Link>
          <Link href="/products" className="hover:text-red-600 transition duration-300">Products</Link>
          <Link href="/achievement" className="hover:text-red-600 transition duration-300">Achievement</Link>
          <Link href="/login" className="bg-red-900 px-6 py-2 rounded hover:bg-red-500 transition duration-300">Login</Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden bg-gray-800 absolute left-0 right-0 z-10 transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container mx-auto flex flex-col space-y-4 px-4">
          <Link href="/" className="hover:text-red-600 transition duration-300 py-2 border-b border-gray-700">Home</Link>
          <Link href="/courses" className="hover:text-red-600 transition duration-300 py-2 border-b border-gray-700">Courses</Link>
          <Link href="/products" className="hover:text-red-600 transition duration-300 py-2 border-b border-gray-700">Products</Link>
          <Link href="/achievement" className="hover:text-red-600 transition duration-300 py-2 border-b border-gray-700">Achievement</Link>
          <Link href="/login" className="bg-red-900 px-6 py-2 rounded hover:bg-red-500 transition duration-300 w-full text-center mt-2">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;