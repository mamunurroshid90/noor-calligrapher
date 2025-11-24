// src/components/products/ProductCard.tsx
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useCartStore } from "@/lib/store/cartStore";

// Type definition - আপনার JSON structure অনুযায়ী
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

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart, openCart } = useCartStore();
  const banglaFont = "'Hind Siliguri', sans-serif";

  // Category mapping
  const categoryMap: { [key: string]: string } = {
    pens: "কলম",
    inks: "কালি",
    papers: "কাগজ",
    kits: "কিট",
    brushes: "ব্রাশ",
    others: "অন্যান্য",
  };

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();

    // Add to cart
    addToCart(product);

    // Open cart slide
    openCart();
  };

  // Category বাংলায় convert
  const banglaCategory =
    categoryMap[product.category.toLowerCase()] || product.category;

  return (
    <Link href={`/products/${product.id}`} className="group block">
      <div className="bg-gray-800 border border-gray-700 rounded-xl overflow-hidden shadow-lg h-full flex flex-col transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2 group-hover:border-red-500">
        {/* Product Image */}
        <div className="relative w-full h-64 overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Product Info */}
        <div className="p-4 flex flex-col flex-grow">
          {/* Category */}
          <span
            style={{ fontFamily: banglaFont }}
            className="text-red-400 text-sm font-medium mb-1"
          >
            {banglaCategory}
          </span>

          {/* Product Name */}
          <h3
            style={{ fontFamily: banglaFont }}
            className="text-lg font-bold text-white mb-2 line-clamp-2"
          >
            {product.name}
          </h3>

          {/* Price and Button */}
          <div className="mt-auto flex justify-between items-center">
            <span className="text-2xl font-bold text-red-400">
              ৳{product.price.toFixed(2)}
            </span>

            <button
              onClick={handleAddToCart}
              style={{ fontFamily: banglaFont }}
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold px-3 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-1 z-10 border border-red-500 text-sm"
            >
              <ShoppingCart className="h-4 w-4" />
              কার্টে যোগ করুন
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
