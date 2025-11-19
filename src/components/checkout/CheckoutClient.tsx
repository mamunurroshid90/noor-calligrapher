// app/checkout/page.tsx (UPDATED)
"use client";

import { useCartStore } from "@/lib/store/cartStore";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Shield,
  Truck,
  CreditCard,
  MapPin,
  User,
  Phone,
  Mail,
} from "lucide-react";

export default function CheckoutClient() {
  const { items, getTotalPrice } = useCartStore();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const banglaFont = "'Hind Siliguri', sans-serif";

  useEffect(() => {
    // Check authentication
    const isLoggedIn = !!localStorage.getItem("auth-token");

    if (!isLoggedIn) {
      router.push("/login?redirect=/checkout");
      return;
    }

    // Check if cart is empty
    if (items.length === 0) {
      router.push("/products");
      return;
    }

    setIsAuthenticated(true);
    setIsLoading(false);
  }, [items, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
        <div className="text-center text-white">
          <div className="w-12 h-12 border-4 border-red-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p style={{ fontFamily: banglaFont }} className="text-xl">
            লোড হচ্ছে...
          </p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated || items.length === 0) {
    return null; // Will redirect automatically
  }

  // ... REST OF YOUR EXISTING CHECKOUT CODE REMAINS SAME
  // The checkout form code you provided stays exactly the same
}
