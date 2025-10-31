'use client'; // এই লাইনটি খুবই গুরুত্বপূর্ণ

import { useState } from 'react';
import type { Product } from '@/lib/data/products';
import { Star, Minus, Plus, ShoppingCart, Zap } from 'lucide-react';
import { useCartStore } from '@/lib/store/cartStore';

interface ProductDetailsClientProps {
  product: Product;
}

export default function ProductDetailsClient({ product }: ProductDetailsClientProps) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart, openCart } = useCartStore();
  const rating = 4.5;
  const reviewCount = 245;

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
    openCart(); // কার্টে যোগ করার পর সাইড-কার্টটি ওপেন করুন
  };
  
  const handleBuyNow = () => {
    // এখানে সরাসরি checkout পেজে পাঠানোর লজিক বসবে
    console.log(`Buying ${quantity} x ${product.name} now!`);
    alert(`Redirecting to checkout to buy ${quantity} x ${product.name}!`);
  };

  return (
    <div>
      {/* Product Name */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">{product.name}</h1>
      
      {/* Reviews */}
      <div className="flex items-center gap-4 mb-4">
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={20} className={i < Math.floor(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'} />
          ))}
        </div>
        <span className="text-gray-500 text-sm">({reviewCount} customer reviews)</span>
      </div>

      {/* Description */}
      <p className="text-gray-600 leading-relaxed mb-6">
        This is a high-quality product designed to meet your needs. It's built with the best materials and offers excellent performance and durability. Perfect for both personal and professional use.
      </p>

      {/* Price */}
      <div className="mb-6">
        <span className="text-4xl font-extrabold text-gray-900">${(product.price * quantity).toFixed(2)}</span>
        {quantity > 1 && (
            <span className="text-gray-500 ml-2">(${product.price.toFixed(2)} each)</span>
        )}
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        {/* Quantity Counter */}
        <div className="flex items-center border rounded-lg">
          <button onClick={handleDecrease} className="px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-l-lg transition">
            <Minus size={16} />
          </button>
          <span className="px-6 font-bold text-lg">{quantity}</span>
          <button onClick={handleIncrease} className="px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-r-lg transition">
            <Plus size={16} />
          </button>
        </div>
        {/* Add to Cart Button */}
        <button onClick={handleAddToCart} className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-transform active:scale-95">
          <ShoppingCart size={20} />
          Add to Cart
        </button>
      </div>

       {/* Buy Now Button */}
       <div className="mt-4">
        <button onClick={handleBuyNow} className="w-full flex items-center justify-center gap-2 bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition-transform active:scale-95">
            <Zap size={20} />
            Buy Now
        </button>
       </div>
    </div>
  );
}