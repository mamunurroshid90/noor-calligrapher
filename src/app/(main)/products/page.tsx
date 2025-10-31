"use client"
import ProductCard from "@/components/products/ProductCard";


import { products } from "@/lib/data/products"; // আমাদের প্রোডাক্ট ডেটা ইম্পোর্ট করা


export default function ProductsPage() {
  return (
    <div>
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold tracking-tight">Explore Our Products</h1>
        <p className="mt-2 text-lg text-gray-600">Find the best tools and courses to boost your skills.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}