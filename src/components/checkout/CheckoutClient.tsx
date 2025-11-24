// src/app/(main)/checkout/page.tsx
"use client";

import { useCartStore } from "@/lib/store/cartStore";
import Image from "next/image";
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
  ArrowLeft,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Link from "next/link";

export default function CheckoutPage() {
  const { items, getTotalPrice, clearCart } = useCartStore();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    zipCode: "",
    paymentMethod: "cash",
  });

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

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create order message for WhatsApp
    const orderDetails = items
      .map(
        (item) =>
          `${item.quantity} x ${item.name} - ৳${(
            item.price * item.quantity
          ).toFixed(2)}`
      )
      .join("\n");

    const message = `🎯 **নতুন অর্ডার** 🎯

👤 **গ্রাহকের তথ্য:**
• নাম: ${formData.fullName}
• ফোন: ${formData.phone}
• ইমেইল: ${formData.email}
• ঠিকানা: ${formData.address}, ${formData.city} - ${formData.zipCode}
• পেমেন্ট: ${
      formData.paymentMethod === "cash" ? "ক্যাশ অন ডেলিভারি" : "অনলাইন পেমেন্ট"
    }

🛒 **অর্ডার ডিটেইলস:**
${orderDetails}

💰 **মোট মূল্য: ৳${getTotalPrice().toFixed(2)}**

📍 **ডেলিভারি ঠিকানা:**
${formData.address}
${formData.city} - ${formData.zipCode}`;

    const whatsappUrl = `https://wa.me/8801761700244?text=${encodeURIComponent(
      message
    )}`;

    // Clear cart and redirect to WhatsApp
    clearCart();
    window.open(whatsappUrl, "_blank");

    // Show success message
    alert(
      "আপনার অর্ডার সফলভাবে প্লেস হয়েছে! WhatsApp-এ কনফার্মেশন এর জন্য রেডিরেক্ট করা হচ্ছে।"
    );
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-red-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p
            style={{ fontFamily: banglaFont }}
            className="text-xl text-gray-600"
          >
            লোড হচ্ছে...
          </p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated || items.length === 0) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-8">
      <Container>
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/products"
            className="inline-flex items-center text-gray-600 hover:text-red-600 transition-all font-medium mb-4"
            style={{ fontFamily: banglaFont }}
          >
            <ArrowLeft size={20} className="mr-2" />
            পণ্যের তালিকায় ফিরে যান
          </Link>

          <h1
            className="text-4xl md:text-5xl font-black text-gray-900 mb-4"
            style={{ fontFamily: banglaFont }}
          >
            চেকআউট
          </h1>
          <p
            className="text-gray-600 text-lg"
            style={{ fontFamily: banglaFont }}
          >
            আপনার অর্ডার সম্পূর্ণ করুন
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Order Summary */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
            <h2
              className="text-2xl font-bold text-gray-900 mb-6"
              style={{ fontFamily: banglaFont }}
            >
              অর্ডার সামারি
            </h2>

            <div className="space-y-4 mb-6">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg"
                >
                  <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-200 flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3
                      className="font-semibold text-gray-900 truncate"
                      style={{ fontFamily: banglaFont }}
                    >
                      {item.name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {item.quantity} x ৳{item.price.toFixed(2)}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-red-600">
                      ৳{(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Total */}
            <div className="border-t border-gray-200 pt-4">
              <div className="flex justify-between items-center text-lg">
                <span
                  className="font-semibold text-gray-900"
                  style={{ fontFamily: banglaFont }}
                >
                  মোট মূল্য:
                </span>
                <span className="text-red-600 font-bold text-2xl">
                  ৳{getTotalPrice().toFixed(2)}
                </span>
              </div>
            </div>
          </div>

          {/* Checkout Form */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
            <h2
              className="text-2xl font-bold text-gray-900 mb-6"
              style={{ fontFamily: banglaFont }}
            >
              ডেলিভারি তথ্য
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    className="block text-gray-700 mb-2 font-medium"
                    style={{ fontFamily: banglaFont }}
                  >
                    পুরো নাম *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all"
                      placeholder="আপনার পুরো নাম"
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="block text-gray-700 mb-2 font-medium"
                    style={{ fontFamily: banglaFont }}
                  >
                    ফোন নম্বর *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all"
                      placeholder="০১XXXXXXXXX"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label
                  className="block text-gray-700 mb-2 font-medium"
                  style={{ fontFamily: banglaFont }}
                >
                  ইমেইল
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all"
                    placeholder="আপনার ইমেইল"
                  />
                </div>
              </div>

              {/* Address */}
              <div>
                <label
                  className="block text-gray-700 mb-2 font-medium"
                  style={{ fontFamily: banglaFont }}
                >
                  সম্পূর্ণ ঠিকানা *
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 text-gray-400 h-5 w-5" />
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    rows={3}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all resize-none"
                    placeholder="বাড়ি নং, রোড নং, এলাকা"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    className="block text-gray-700 mb-2 font-medium"
                    style={{ fontFamily: banglaFont }}
                  >
                    শহর *
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all"
                    placeholder="আপনার শহর"
                  />
                </div>

                <div>
                  <label
                    className="block text-gray-700 mb-2 font-medium"
                    style={{ fontFamily: banglaFont }}
                  >
                    জিপ কোড
                  </label>
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all"
                    placeholder="জিপ কোড"
                  />
                </div>
              </div>

              {/* Payment Method */}
              <div>
                <label
                  className="block text-gray-700 mb-4 font-medium"
                  style={{ fontFamily: banglaFont }}
                >
                  পেমেন্ট মেথড *
                </label>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 p-4 border border-gray-300 rounded-lg cursor-pointer hover:border-red-500 transition-all">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cash"
                      checked={formData.paymentMethod === "cash"}
                      onChange={handleInputChange}
                      className="text-red-500 focus:ring-red-500"
                    />
                    <CreditCard className="h-5 w-5 text-gray-400" />
                    <span style={{ fontFamily: banglaFont }}>
                      ক্যাশ অন ডেলিভারি
                    </span>
                  </label>

                  <label className="flex items-center gap-3 p-4 border border-gray-300 rounded-lg cursor-pointer hover:border-red-500 transition-all">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="online"
                      checked={formData.paymentMethod === "online"}
                      onChange={handleInputChange}
                      className="text-red-500 focus:ring-red-500"
                    />
                    <CreditCard className="h-5 w-5 text-gray-400" />
                    <span style={{ fontFamily: banglaFont }}>
                      অনলাইন পেমেন্ট
                    </span>
                  </label>
                </div>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Truck className="h-5 w-5 text-green-600" />
                  <span style={{ fontFamily: banglaFont }}>
                    ২-৩ দিনে ডেলিভারি
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Shield className="h-5 w-5 text-blue-600" />
                  <span style={{ fontFamily: banglaFont }}>
                    সুরক্ষিত পেমেন্ট
                  </span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg border border-red-500 text-lg"
                style={{ fontFamily: banglaFont }}
              >
                অর্ডার কনফার্ম করুন - ৳{getTotalPrice().toFixed(2)}
              </button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
}
