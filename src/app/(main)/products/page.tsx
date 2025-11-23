// src/app/(main)/products/page.tsx
"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Container from "@/components/ui/Container";
import ProductCard from "@/components/products/ProductCard";

// Types
interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  category: string;
  inStock: boolean;
  featured?: boolean;
}

// Products Content Component (useSearchParams এই component-এ রাখুন)
function ProductsContent() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const searchParams = useSearchParams(); // এখন এটা suspense boundary-এর ভিতরে

  const banglaFont = "'Hind Siliguri', sans-serif";

  const categories = [
    { value: "all", label: "সকল পণ্য" },
    { value: "pens", label: "কলম" },
    { value: "inks", label: "কালি" },
    { value: "papers", label: "কাগজ" },
    { value: "kits", label: "কিট" },
    { value: "brushes", label: "ব্রাশ" },
    { value: "others", label: "অন্যান্য" },
  ];

  // Load products from JSON
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await fetch("/data/content.json");
        const data = await response.json();
        setProducts(data.products || []);
        setFilteredProducts(data.products || []);
      } catch (error) {
        console.error("Error loading products:", error);
        // Fallback demo data
        const demoProducts: Product[] = [
          {
            id: 1,
            name: "প্রিমিয়াম আরবি ক্যালিগ্রাফি পেন",
            price: 1200,
            description: "উচ্চমানের আরবি ক্যালিগ্রাফির জন্য বিশেষ ডিজাইনের পেন",
            imageUrl:
              "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?q=80&w=500",
            category: "pens",
            inStock: true,
            featured: true,
          },
          {
            id: 2,
            name: "ক্যালিগ্রাফি ইনক সেট",
            price: 800,
            description: "বিভিন্ন রঙের উচ্চমানের ক্যালিগ্রাফি ইনক",
            imageUrl:
              "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=500",
            category: "inks",
            inStock: true,
          },
        ];
        setProducts(demoProducts);
        setFilteredProducts(demoProducts);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  // Filter products based on category and search
  useEffect(() => {
    let filtered = [...products];

    // Category filter
    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    // Search filter from URL
    const search = searchParams.get("search");
    if (search) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(search.toLowerCase()) ||
          product.description.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [products, selectedCategory, searchParams]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-red-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p style={{ fontFamily: banglaFont }} className="text-gray-300">
            প্রোডাক্ট লোড হচ্ছে...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black py-12">
      <Container>
        {/* Header Section */}
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

        {/* Filters Section */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              style={{ fontFamily: banglaFont }}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 border-2 ${
                selectedCategory === category.value
                  ? "bg-red-600 border-red-600 text-white"
                  : "bg-gray-800 border-gray-600 text-gray-300 hover:border-red-500 hover:text-white"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p
              style={{ fontFamily: banglaFont }}
              className="text-gray-300 text-xl"
            >
              কোনো প্রোডাক্ট পাওয়া যায়নি
            </p>
          </div>
        )}

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
            onClick={() => window.open("https://wa.me/8801761700244", "_blank")}
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
      </Container>
    </div>
  );
}

// Main Page Component with Suspense
export default function ProductsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-red-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p
              style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
              className="text-gray-300"
            >
              লোড হচ্ছে...
            </p>
          </div>
        </div>
      }
    >
      <ProductsContent />
    </Suspense>
  );
}
