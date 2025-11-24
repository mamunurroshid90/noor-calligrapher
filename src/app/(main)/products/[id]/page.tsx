// src/app/(main)/products/[id]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import ProductDetailsClient from "@/components/products/productDetailsClient";
import Container from "@/components/ui/Container";

// Product type definition - আপনার JSON structure অনুযায়ী
interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string; // শুধু image field আছে
  category: string;
  inStock?: boolean;
  featured?: boolean;
}

// Generate metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  try {
    // JSON থেকে data load করুন
    const response = await fetch(
      `${
        process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
      }/data/content.json`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    const data = await response.json();
    const products: Product[] = data.products || [];

    const productId = parseInt(id);
    const product = products.find((p) => p.id === productId);

    if (!product) {
      return {
        title: "Product Not Found - Noor Calligrapher",
      };
    }

    return {
      title: `${product.name} - Noor Calligrapher`,
      description: product.description,
    };
  } catch (error) {
    return {
      title: "Product - Noor Calligrapher",
    };
  }
}

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  try {
    // JSON থেকে data load করুন - relative path use করুন
    const response = await fetch(
      `${
        process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
      }/data/content.json`,
      {
        cache: "no-store", // Dynamic data-এর জন্য
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    const data = await response.json();
    const products: Product[] = data.products || [];

    // Convert id to number for comparison
    const productId = parseInt(id);
    const product = products.find((p) => p.id === productId);

    if (!product) {
      notFound();
    }

    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-8">
        <Container>
          {/* Back Button */}
          <div className="mb-6">
            <Link
              href="/products"
              className="inline-flex items-center text-gray-600 hover:text-red-600 transition-all font-medium"
              style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
            >
              <ChevronLeft size={20} className="mr-1" />
              পণ্যের তালিকায় ফিরে যান
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Product Image */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <div className="relative w-full h-96 rounded-xl overflow-hidden">
                <Image
                  src={product.image} // শুধু image field use করুন
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>

            {/* Product Details */}
            <div>
              <ProductDetailsClient product={product} />
            </div>
          </div>
        </Container>
      </div>
    );
  } catch (error) {
    console.error("Error loading product:", error);
    notFound();
  }
}
