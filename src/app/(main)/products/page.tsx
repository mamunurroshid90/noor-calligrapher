"use client";
import ProductCard from "@/components/products/ProductCard";
import { products } from "@/lib/data/products";

export default function ProductsPage() {
  const banglaFont = "'Hind Siliguri', sans-serif";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black py-12">
      <div className="container mx-auto px-4">
        {/* Header Section - Black Theme */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div
            style={{ fontFamily: banglaFont }}
            className="inline-flex items-center bg-red-600/20 border border-red-500/50 text-red-300 px-6 py-3 rounded-full text-lg font-semibold mb-6 backdrop-blur-sm"
          >
            <span>🎨 প্রিমিয়াম ক্যালিগ্রাফি সরঞ্জাম</span>
          </div>

          {/* Main Heading */}
          <h1
            style={{ fontFamily: banglaFont }}
            className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              আমাদের এক্সক্লুসিভ
            </span>
            <br />
            <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              পণ্য সংগ্রহ
            </span>
          </h1>

          {/* Subtitle */}
          <p
            style={{ fontFamily: banglaFont }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light"
          >
            আপনার শিল্পীসত্তাকে প্রকাশ করুন
            <span className="text-red-400 font-semibold">
              {" "}
              পেশাদার ক্যালিগ্রাফি সরঞ্জাম দিয়ে
            </span>
          </p>

          {/* Decoration Line */}
          <div className="flex justify-center mt-8">
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full"></div>
          </div>
        </div>

        {/* Product Grid - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Extra Info Section */}
        <div className="text-center mt-16 pt-12 border-t border-gray-700">
          <p
            style={{ fontFamily: banglaFont }}
            className="text-lg text-white mb-4"
          >
            কোন পণ্য নিয়ে কনফিউজড?
            <span className="text-red-400 font-semibold">
              {" "}
              আমাদের এক্সপার্টদের সাথে কথা বলুন
            </span>
          </p>
          <button
            style={{ fontFamily: banglaFont }}
            className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg border border-red-500"
          >
            ফ্রি কনসাল্টেশন নিন
          </button>
        </div>

        {/* Features Section - 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {/* Card 1 */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-red-500 transition-all duration-300">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚚</span>
              </div>
              <h3
                style={{ fontFamily: banglaFont }}
                className="text-xl font-bold text-white mb-2"
              >
                দ্রুত ডেলিভারি
              </h3>
              <p style={{ fontFamily: banglaFont }} className="text-gray-300">
                ২-৩ কর্মদিবসে হোম ডেলিভারি
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-red-500 transition-all duration-300">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3
                style={{ fontFamily: banglaFont }}
                className="text-xl font-bold text-white mb-2"
              >
                ১০০% অরিজিনাল
              </h3>
              <p style={{ fontFamily: banglaFont }} className="text-gray-300">
                গ্যারান্টিযুক্ত অরিজিনাল পণ্য
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-red-500 transition-all duration-300">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⭐</span>
              </div>
              <h3
                style={{ fontFamily: banglaFont }}
                className="text-xl font-bold text-white mb-2"
              >
                ৫ স্টার রেটিং
              </h3>
              <p style={{ fontFamily: banglaFont }} className="text-gray-300">
                ৫০০+ সন্তুষ্ট গ্রাহক
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
