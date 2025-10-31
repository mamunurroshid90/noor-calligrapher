import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/lib/data/products'; // আমাদের ডেটা টাইপ ইম্পোর্ট করা

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {

  // Add to Cart বাটনে ক্লিক করলে কার্ডের লিঙ্কে যাওয়া বন্ধ করার জন্য
  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); // এই লাইনটি খুবই গুরুত্বপূর্ণ
    e.preventDefault();
    console.log(`Added ${product.name} to cart!`);
    // এখানে cart এ যোগ করার আসল লজিক বসবে
  };

  return (
    <Link href={`/products/${product.id}`} className="group block">
      <div className="border rounded-lg overflow-hidden shadow-sm h-full flex flex-col transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
        {/* Product Image */}
        <div className="relative w-full h-48">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-lg font-semibold text-gray-800 truncate">{product.name}</h3>
          <p className="text-sm text-gray-500 mb-4">{product.category}</p>
          
          <div className="mt-auto flex justify-between items-center">
            <p className="text-xl font-bold text-gray-900">${product.price.toFixed(2)}</p>
            <button 
              onClick={handleAddToCart}
              className="bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-blue-600 transition-colors z-10"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;