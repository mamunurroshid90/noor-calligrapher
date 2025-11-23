// src/components/products/ProductFilters.tsx
"use client";

interface ProductFiltersProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const ProductFilters = ({
  selectedCategory,
  onCategoryChange,
}: ProductFiltersProps) => {
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

  return (
    <div className="flex flex-wrap gap-4 justify-center mb-12">
      {categories.map((category) => (
        <button
          key={category.value}
          onClick={() => onCategoryChange(category.value)}
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
  );
};

export default ProductFilters;
