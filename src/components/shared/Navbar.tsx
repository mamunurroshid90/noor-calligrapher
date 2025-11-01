"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useCartStore } from "@/lib/store/cartStore";
import { ShoppingBag, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { openCart, getTotalItems } = useCartStore();
  const totalItems = getTotalItems();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="bg-gradient-to-r from-gray-900 to-black text-white sticky top-0 z-50 shadow-xl border-b border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-2">
          {/* Logo - Fixed Ratio with proper sizing */}
          <Link
            href="/"
            onClick={handleLinkClick}
            className="flex items-center"
          >
            <div className="relative w-[120px] md:w-[160px] h-[40px] md:h-[50px]">
              <Image
                src="/logo.png"
                alt="Noor Calligrapher Logo"
                fill
                className="object-contain object-left" // Ratio ঠিক রাখবে
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-6">
              <Link
                href="/"
                className="relative font-medium text-base hover:text-red-400 transition-all duration-300 group"
              >
                হোম
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                href="/courses"
                className="relative font-medium text-base hover:text-red-400 transition-all duration-300 group"
              >
                কোর্স
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                href="/products"
                className="relative font-medium text-base hover:text-red-400 transition-all duration-300 group"
              >
                পণ্য
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                href="/achievement"
                className="relative font-medium text-base hover:text-red-400 transition-all duration-300 group"
              >
                অর্জন
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </div>

            {/* Cart & Login Section */}
            <div className="flex items-center gap-4 ml-4 pl-4 border-l border-gray-600">
              <button
                onClick={openCart}
                className="relative p-2 bg-gray-800 rounded-full hover:bg-red-600 transition-all duration-300 group"
              >
                <ShoppingBag className="h-5 w-5 group-hover:scale-110 transition-transform" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center animate-pulse">
                    {totalItems}
                  </span>
                )}
              </button>

              <Link
                href="/login"
                className="bg-gradient-to-r from-red-600 to-red-700 px-6 py-2 rounded-full hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105 shadow-lg font-medium border border-red-500 text-sm"
              >
                লগইন
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={openCart}
              className="relative p-2 bg-gray-800 rounded-lg hover:bg-red-600 transition-all duration-300"
            >
              <ShoppingBag className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center text-[10px]">
                  {totalItems}
                </span>
              )}
            </button>

            <button
              onClick={toggleMenu}
              className="flex items-center justify-center w-10 h-10 bg-gray-800 rounded-lg hover:bg-red-600 transition-all duration-300"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`lg:hidden bg-gradient-to-b from-gray-800 to-black absolute left-0 right-0 z-40 transition-all duration-500 ease-in-out overflow-hidden shadow-xl ${
            isMenuOpen ? "max-h-80 opacity-100 py-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="container mx-auto flex flex-col space-y-1 px-4">
            <Link
              href="/"
              onClick={handleLinkClick}
              className="py-3 px-4 rounded-lg hover:bg-gray-700 transition-all duration-300 border-b border-gray-600 font-medium hover:text-red-400"
            >
              হোম
            </Link>
            <Link
              href="/courses"
              onClick={handleLinkClick}
              className="py-3 px-4 rounded-lg hover:bg-gray-700 transition-all duration-300 border-b border-gray-600 font-medium hover:text-red-400"
            >
              কোর্স
            </Link>
            <Link
              href="/products"
              onClick={handleLinkClick}
              className="py-3 px-4 rounded-lg hover:bg-gray-700 transition-all duration-300 border-b border-gray-600 font-medium hover:text-red-400"
            >
              পণ্য
            </Link>
            <Link
              href="/achievement"
              onClick={handleLinkClick}
              className="py-3 px-4 rounded-lg hover:bg-gray-700 transition-all duration-300 border-b border-gray-600 font-medium hover:text-red-400"
            >
              অর্জন
            </Link>
            <div className="pt-4 border-t border-gray-600">
              <Link
                href="/login"
                onClick={handleLinkClick}
                className="bg-gradient-to-r from-red-600 to-red-700 px-6 py-3 rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105 font-medium w-full text-center block"
              >
                লগইন
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
