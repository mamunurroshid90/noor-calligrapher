// ফাইল: src/app/(main)/products/[id]/page.tsx

import { products } from "@/lib/data/products";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Star, ChevronLeft, ShoppingCart, Zap, BookOpen, Code2, Clock, Download } from 'lucide-react';

// ফাংশনটিকে async করা হয়েছে
export default async function ProductDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  
  // 'await' ব্যবহার করে Promise থেকে 'id' বের করা হয়েছে
  const { id } = await params;
  
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }
  
  // ডামি রিভিউ ডেটা
  const rating = 4.5;
  const reviewCount = 187;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Back to Products Link */}
      <div className="mb-6">
        <Link href="/products" className="inline-flex items-center text-gray-500 hover:text-blue-600 transition-colors">
          <ChevronLeft size={20} className="mr-1" />
          <span>All Products</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* বাম কলাম: প্রোডাক্টের ছবি */}
        <div className="w-full">
          <div className="relative aspect-video rounded-lg shadow-md overflow-hidden">
            <Image 
              src={product.imageUrl} 
              alt={product.name} 
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* ডান কলাম: প্রোডাক্টের তথ্য */}
        <div className="flex flex-col">
          {/* ক্যাটাগরি এবং নাম */}
          <span className="text-blue-600 font-semibold mb-2">{product.category}</span>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
          <p className="text-gray-600 leading-relaxed mb-6">
            An in-depth guide to mastering modern web development. This {product.category.toLowerCase()} is designed for both beginners and experienced developers looking to upgrade their skills.
          </p>

          {/* রিভিউ */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className={i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'} />
              ))}
            </div>
            <span className="text-gray-500">({reviewCount} reviews)</span>
          </div>

          {/* মূল ফিচারস */}
          <div className="border-t border-b py-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Key Features</h3>
            <div className="grid grid-cols-2 gap-4 text-gray-700">
              <div className="flex items-center gap-3">
                <BookOpen size={20} className="text-blue-500" />
                <span>Format: {product.category}</span>
              </div>
              <div className="flex items-center gap-3">
                <Code2 size={20} className="text-blue-500" />
                <span>Skill Level: All Levels</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={20} className="text-blue-500" />
                <span>Last Updated: Jan 2024</span>
              </div>
              <div className="flex items-center gap-3">
                <Download size={20} className="text-blue-500" />
                <span>Instant Access</span>
              </div>
            </div>
          </div>

          {/* দাম */}
          <div className="mb-6">
            <span className="text-5xl font-extrabold text-gray-900">${product.price.toFixed(2)}</span>
          </div>

          {/* অ্যাকশন বাটন */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex-1 flex items-center justify-center gap-2 border border-blue-600 text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors">
              <ShoppingCart size={20} />
              Add to Cart
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
              <Zap size={20} />
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}