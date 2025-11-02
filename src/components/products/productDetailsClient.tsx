"use client";

import { useState } from "react";
import type { Product } from "@/lib/data/products";
import {
  Star,
  Minus,
  Plus,
  ShoppingCart,
  Zap,
  Phone,
  MessageCircle,
} from "lucide-react";
import { useCartStore } from "@/lib/store/cartStore";

interface ProductDetailsClientProps {
  product: Product;
}

export default function ProductDetailsClient({
  product,
}: ProductDetailsClientProps) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart, openCart } = useCartStore();
  const rating = 4.5;
  const reviewCount = 245;
  const banglaFont = "'Hind Siliguri', sans-serif";

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrease = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    openCart();
  };

  const handleBuyNow = () => {
    console.log(`Buying ${quantity} x ${product.name} now!`);
    alert(`Redirecting to checkout to buy ${quantity} x ${product.name}!`);
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

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      {/* Product Name */}
      <h1
        style={{ fontFamily: banglaFont }}
        className="text-3xl md:text-4xl font-bold text-gray-900 mb-3"
      >
        {product.name}
      </h1>

      {/* Reviews */}
      <div className="flex items-center gap-4 mb-4">
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={20}
              className={
                i < Math.floor(rating)
                  ? "text-yellow-400 fill-yellow-400"
                  : "text-gray-300"
              }
            />
          ))}
        </div>
        <span className="text-gray-600 text-sm">
          ({reviewCount} জনের রিভিউ)
        </span>
      </div>

      {/* Description */}
      <p
        style={{ fontFamily: banglaFont }}
        className="text-gray-700 leading-relaxed mb-6 text-lg"
      >
        এটি একটি উচ্চমানের পণ্য যা আপনার প্রয়োজন মেটানোর জন্য ডিজাইন করা
        হয়েছে। সেরা উপকরণ দিয়ে তৈরি এবং চমৎকার পারফরম্যান্স ও টেকসইতা প্রদান
        করে।
      </p>

      {/* Price */}
      <div className="mb-6">
        <span className="text-4xl font-extrabold text-red-600">
          ৳{(product.price * quantity).toFixed(2)}
        </span>
        {quantity > 1 && (
          <span className="text-gray-600 ml-2 text-lg">
            (৳{product.price.toFixed(2)} প্রতি পিস)
          </span>
        )}
      </div>

      {/* Quantity Counter */}
      <div className="flex items-center border-2 border-gray-300 rounded-lg mb-6 w-fit">
        <button
          onClick={handleDecrease}
          className="px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-l-lg transition"
        >
          <Minus size={18} />
        </button>
        <span className="px-6 font-bold text-xl text-gray-800">{quantity}</span>
        <button
          onClick={handleIncrease}
          className="px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-r-lg transition"
        >
          <Plus size={18} />
        </button>
      </div>

      {/* Action Buttons Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          style={{ fontFamily: banglaFont }}
          className="flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105"
        >
          <ShoppingCart size={20} />
          কার্টে যোগ করুন
        </button>

        {/* Buy Now Button */}
        <button
          onClick={handleBuyNow}
          style={{ fontFamily: banglaFont }}
          className="flex items-center justify-center gap-2 bg-green-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-green-700 transition-all duration-300 hover:scale-105"
        >
          <Zap size={20} />
          এখনই কিনুন
        </button>

        {/* WhatsApp Order Button */}
        <button
          onClick={handleWhatsAppOrder}
          style={{ fontFamily: banglaFont }}
          className="flex items-center justify-center gap-2 bg-green-500 text-white font-semibold py-3 px-4 rounded-lg hover:bg-green-600 transition-all duration-300 hover:scale-105"
        >
          <MessageCircle size={20} />
          WhatsApp অর্ডার
        </button>

        {/* Call for Order Button */}
        <button
          onClick={handleCallOrder}
          style={{ fontFamily: banglaFont }}
          className="flex items-center justify-center gap-2 bg-red-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-red-700 transition-all duration-300 hover:scale-105"
        >
          <Phone size={20} />
          কল করে অর্ডার
        </button>
      </div>

      {/* Contact Info */}
      <div className="mt-6 p-4 bg-gray-100 rounded-lg text-center">
        <p style={{ fontFamily: banglaFont }} className="text-gray-700 text-sm">
          📞 সরাসরি অর্ডার: <strong>০১৭৬১৭০০২৪৪</strong>
        </p>
      </div>
    </div>
  );
}
