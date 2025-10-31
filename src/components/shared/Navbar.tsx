'use client'; // এটি আগে থেকেই ছিল, যা ভালো

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useCartStore } from '@/lib/store/cartStore'; // কার্ট স্টোর ইম্পোর্ট করা
import { ShoppingBag } from 'lucide-react'; // কার্ট আইকন ইম্পোর্ট করা

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Zustand স্টোর থেকে প্রয়োজনীয় ফাংশন ও ডেটা নেওয়া
  const { openCart, getTotalItems } = useCartStore();
  const totalItems = getTotalItems();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  // মেনু লিঙ্কে ক্লিক করলে মোবাইল মেনু বন্ধ করার জন্য
  const handleLinkClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="bg-gray-800 text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" onClick={handleLinkClick} className="flex items-center gap-2 h-[70px]">
          <Image 
            src="/logo.png" 
            alt="Logo" 
            width={250}
            height={100}
            className="p-1 rounded w-[150px] md:w-[250px] h-auto"
          />
        </Link>
        
        {/* ডান পাশের আইকন ও মেনু (ডেস্কটপ) */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="hover:text-red-600 transition duration-300">Home</Link>
          <Link href="/courses" className="hover:text-red-600 transition duration-300">Courses</Link>
          <Link href="/products" className="hover:text-red-600 transition duration-300">Products</Link>
          <Link href="/achievement" className="hover:text-red-600 transition duration-300">Achievement</Link>
          
          {/* কার্ট বাটন (ডেস্কটপ) */}
          <button onClick={openCart} className="relative p-2">
            <ShoppingBag />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>

          <Link href="/login" className="bg-red-900 px-6 py-2 rounded hover:bg-red-500 transition duration-300">Login</Link>
        </div>

        {/* ডান পাশের আইকন ও মেনু (মোবাইল) */}
        <div className="md:hidden flex items-center gap-4">
          {/* কার্ট বাটন (মোবাইল) */}
          <button onClick={openCart} className="relative p-2">
            <ShoppingBag />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
          
          {/* হ্যামবার্গার মেনু বাটন */}
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
      </div>

      {/* মোবাইল ড্রপডাউন মেনু */}
      <div 
        className={`md:hidden bg-gray-800 absolute left-0 right-0 z-40 transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container mx-auto flex flex-col space-y-4 px-4">
          <Link href="/" onClick={handleLinkClick} className="hover:text-red-600 transition duration-300 py-2 border-b border-gray-700">Home</Link>
          <Link href="/courses" onClick={handleLinkClick} className="hover:text-red-600 transition duration-300 py-2 border-b border-gray-700">Courses</Link>
          <Link href="/products" onClick={handleLinkClick} className="hover:text-red-600 transition duration-300 py-2 border-b border-gray-700">Products</Link>
          <Link href="/achievement" onClick={handleLinkClick} className="hover:text-red-600 transition duration-300 py-2 border-b border-gray-700">Achievement</Link>
          <Link href="/login" onClick={handleLinkClick} className="bg-red-900 px-6 py-2 rounded hover:bg-red-500 transition duration-300 w-full text-center mt-2">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;