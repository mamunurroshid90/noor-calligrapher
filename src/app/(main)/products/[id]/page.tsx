import { products } from "@/lib/data/products";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import ProductDetailsClient from "@/components/products/productDetailsClient";
import Container from "@/components/ui/Container"; // Import Container

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <Container>
        {" "}
        {/* Container যোগ করুন */}
        <div className="mb-6">
          <Link
            href="/products"
            className="inline-flex items-center text-gray-500 hover:text-blue-600 transition-colors"
          >
            <ChevronLeft size={20} className="mr-1" />
            <span>All Products</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* বাম কলাম: প্রোডাক্টের ছবি (সার্ভার কম্পোনেন্ট) */}
          <div className="w-full">
            <div className="relative aspect-square rounded-lg shadow-lg overflow-hidden border">
              <Image
                src={product.imageUrl}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* ডান কলাম: ক্লায়েন্ট কম্পোনেন্ট রেন্ডার করা */}
          <div>
            <ProductDetailsClient product={product} />
          </div>
        </div>
      </Container>{" "}
      {/* Container close */}
    </div>
  );
}
