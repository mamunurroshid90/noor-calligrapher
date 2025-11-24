// src/components/products/productDetailsClient.tsx - Cart functionality add করুন
"use client";

import { useState } from "react";
import {
  Star,
  Minus,
  Plus,
  Phone,
  MessageCircle,
  Shield,
  Truck,
  RotateCcw,
  ShoppingCart,
} from "lucide-react";
import { useCartStore } from "@/lib/store/cartStore";

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  inStock?: boolean;
  featured?: boolean;
}

interface ProductDetailsClientProps {
  product: Product;
}

export default function ProductDetailsClient({
  product,
}: ProductDetailsClientProps) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart, openCart } = useCartStore();
  const banglaFont = "'Hind Siliguri', sans-serif";

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrease = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  // Add to Cart Function
  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    openCart();
  };

  // WhatsApp Order Function
  const handleWhatsAppOrder = () => {
    const message = `হ্যালো! আমি অর্ডার দিতে চাই: ${quantity} x ${
      product.name
    } (মূল্য: ৳${(product.price * quantity).toFixed(2)})। প্রোডাক্ট আইডি: ${
      product.id
    }`;
    const whatsappUrl = `https://wa.me/8801761700244?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  // Call for Order Function
  const handleCallOrder = () => {
    window.location.href = "tel:+8801761700244";
  };

  // Category mapping
  const categoryMap: { [key: string]: string } = {
    pens: "কলম",
    inks: "কালি",
    papers: "কাগজ",
    kits: "কিট",
    brushes: "ব্রাশ",
    others: "অন্যান্য",
  };

  const banglaCategory =
    categoryMap[product.category.toLowerCase()] || product.category;

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 h-full">
      {/* Product Name */}
      <h1
        style={{ fontFamily: banglaFont }}
        className="text-3xl md:text-4xl font-bold text-gray-900 mb-3"
      >
        {product.name}
      </h1>

      {/* Category */}
      <div className="mb-4">
        <span
          style={{ fontFamily: banglaFont }}
          className="inline-block bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium"
        >
          {banglaCategory}
        </span>
      </div>

      {/* Reviews */}
      <div className="flex items-center gap-4 mb-4">
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={20}
              className={
                i < 4 // 4.5 rating
                  ? "text-yellow-400 fill-yellow-400"
                  : "text-gray-300"
              }
            />
          ))}
        </div>
        <span
          style={{ fontFamily: banglaFont }}
          className="text-gray-600 text-sm"
        >
          (২৪৫ জনের রিভিউ)
        </span>
      </div>

      {/* Description */}
      <p
        style={{ fontFamily: banglaFont }}
        className="text-gray-700 leading-relaxed mb-6 text-lg"
      >
        {product.description}
      </p>

      {/* Price */}
      <div className="mb-6">
        <span className="text-4xl font-extrabold text-red-600">
          ৳{product.price.toFixed(2)}
        </span>
      </div>

      {/* Stock Status */}
      <div className="mb-6">
        <span
          style={{ fontFamily: banglaFont }}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${
            product.inStock
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {product.inStock ? "✅ স্টকে আছে" : "❌ স্টকে নেই"}
        </span>
      </div>

      {/* Quantity Counter */}
      <div className="mb-6">
        <label
          style={{ fontFamily: banglaFont }}
          className="block text-gray-700 mb-2 font-medium"
        >
          পরিমাণ:
        </label>
        <div className="flex items-center border-2 border-gray-300 rounded-lg w-fit">
          <button
            onClick={handleDecrease}
            className="px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-l-lg transition"
          >
            <Minus size={18} />
          </button>
          <span className="px-6 font-bold text-xl text-gray-800 min-w-[60px] text-center">
            {quantity}
          </span>
          <button
            onClick={handleIncrease}
            className="px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-r-lg transition"
          >
            <Plus size={18} />
          </button>
        </div>
      </div>

      {/* Total Price */}
      {quantity > 1 && (
        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
          <p style={{ fontFamily: banglaFont }} className="text-gray-700">
            মোট মূল্য:{" "}
            <span className="text-2xl font-bold text-red-600">
              ৳{(product.price * quantity).toFixed(2)}
            </span>
          </p>
        </div>
      )}

      {/* Action Buttons Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          style={{ fontFamily: banglaFont }}
          className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
        >
          <ShoppingCart size={20} />
          কার্টে যোগ করুন ({quantity})
        </button>

        {/* WhatsApp Order Button */}
        <button
          onClick={handleWhatsAppOrder}
          style={{ fontFamily: banglaFont }}
          className="flex items-center justify-center gap-2 bg-green-500 text-white font-semibold py-4 px-4 rounded-lg hover:bg-green-600 transition-all duration-300 hover:scale-105 shadow-lg"
        >
          <MessageCircle size={20} />
          WhatsApp অর্ডার
        </button>

        {/* Call for Order Button - Full width on mobile */}
        <button
          onClick={handleCallOrder}
          style={{ fontFamily: banglaFont }}
          className="md:col-span-2 flex items-center justify-center gap-2 bg-red-600 text-white font-semibold py-4 px-4 rounded-lg hover:bg-red-700 transition-all duration-300 hover:scale-105 shadow-lg"
        >
          <Phone size={20} />
          কল করে অর্ডার
        </button>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Truck className="h-5 w-5 text-green-600" />
          <span style={{ fontFamily: banglaFont }}>দ্রুত ডেলিভারি</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Shield className="h-5 w-5 text-blue-600" />
          <span style={{ fontFamily: banglaFont }}>অরিজিনাল গ্যারান্টি</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <RotateCcw className="h-5 w-5 text-orange-600" />
          <span style={{ fontFamily: banglaFont }}>রিটার্ন পলিসি</span>
        </div>
      </div>

      {/* Contact Info */}
      <div className="p-4 bg-gradient-to-r from-red-50 to-orange-50 rounded-lg border border-red-200">
        <p
          style={{ fontFamily: banglaFont }}
          className="text-gray-700 text-center text-sm"
        >
          📞 সরাসরি অর্ডার:{" "}
          <strong className="text-red-600">০১৭৬১৭০০২৪৪</strong>
        </p>
        <p
          style={{ fontFamily: banglaFont }}
          className="text-gray-600 text-center text-xs mt-1"
        >
          ২৪/৭ সাপোর্ট available
        </p>
      </div>
    </div>
  );
}
