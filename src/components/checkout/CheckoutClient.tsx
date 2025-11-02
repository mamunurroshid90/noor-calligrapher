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
  const [isLoading, setIsLoading] = useState(false);
  const banglaFont = "'Hind Siliguri', sans-serif";

  useEffect(() => {
    if (items.length === 0) {
      router.push("/products");
    }
  }, [items, router]);

  const subtotal = getTotalPrice();
  const shippingCost = 50.0;
  const total = subtotal + shippingCost;

  const handlePlaceOrder = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);

    // Simulate payment processing
    setTimeout(() => {
      console.log("Placing order with data...");
      alert(
        "আপনার অর্ডারটি সফলভাবে প্লেস হয়েছে! শীঘ্রই আমরা আপনার সাথে যোগাযোগ করব।"
      );
      setIsLoading(false);
    }, 2000);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
        <div className="text-center text-white">
          <p style={{ fontFamily: banglaFont }} className="text-xl mb-4">
            আপনার কার্টটি খালি। রিডাইরেক্ট হচ্ছে...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1
            style={{ fontFamily: banglaFont }}
            className="text-4xl md:text-5xl font-black text-white mb-4"
          >
            চেকআউট
          </h1>
          <p
            style={{ fontFamily: banglaFont }}
            className="text-xl text-gray-300"
          >
            আপনার অর্ডারটি সম্পূর্ণ করুন
          </p>
        </div>

        <form
          onSubmit={handlePlaceOrder}
          className="grid grid-cols-1 xl:grid-cols-2 gap-8"
        >
          {/* Left Column - Billing Details */}
          <div className="bg-gray-800 rounded-2xl shadow-2xl p-8 border border-gray-700">
            <h2
              style={{ fontFamily: banglaFont }}
              className="text-3xl font-bold text-white mb-8 flex items-center gap-3"
            >
              <User className="h-8 w-8 text-red-500" />
              বিলিং ও শিপিং তথ্য
            </h2>

            <div className="space-y-6">
              {/* Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    style={{ fontFamily: banglaFont }}
                    className="block text-lg font-semibold text-gray-300 mb-2"
                  >
                    প্রথম নাম
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full bg-gray-700 border-2 border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-500 transition-all duration-300"
                    placeholder="আপনার প্রথম নাম"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    style={{ fontFamily: banglaFont }}
                    className="block text-lg font-semibold text-gray-300 mb-2"
                  >
                    শেষ নাম
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full bg-gray-700 border-2 border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-500 transition-all duration-300"
                    placeholder="আপনার শেষ নাম"
                  />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="email"
                    style={{ fontFamily: banglaFont }}
                    className="block text-lg font-semibold text-gray-300 mb-2 flex items-center gap-2"
                  >
                    <Mail className="h-5 w-5 text-red-400" />
                    ইমেইল ঠিকানা
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-gray-700 border-2 border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-500 transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    style={{ fontFamily: banglaFont }}
                    className="block text-lg font-semibold text-gray-300 mb-2 flex items-center gap-2"
                  >
                    <Phone className="h-5 w-5 text-red-400" />
                    ফোন নম্বর
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full bg-gray-700 border-2 border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-500 transition-all duration-300"
                    placeholder="০১XXXXXXXXX"
                  />
                </div>
              </div>

              {/* Address */}
              <div>
                <label
                  htmlFor="address"
                  style={{ fontFamily: banglaFont }}
                  className="block text-lg font-semibold text-gray-300 mb-2 flex items-center gap-2"
                >
                  <MapPin className="h-5 w-5 text-red-400" />
                  রাস্তার ঠিকানা
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  required
                  className="w-full bg-gray-700 border-2 border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-500 transition-all duration-300"
                  placeholder="আপনার সম্পূর্ণ ঠিকানা"
                />
              </div>

              {/* City, State, ZIP */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label
                    htmlFor="city"
                    style={{ fontFamily: banglaFont }}
                    className="block text-lg font-semibold text-gray-300 mb-2"
                  >
                    শহর
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    required
                    className="w-full bg-gray-700 border-2 border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-500 transition-all duration-300"
                    placeholder="শহরের নাম"
                  />
                </div>
                <div>
                  <label
                    htmlFor="state"
                    style={{ fontFamily: banglaFont }}
                    className="block text-lg font-semibold text-gray-300 mb-2"
                  >
                    বিভাগ
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    required
                    className="w-full bg-gray-700 border-2 border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-500 transition-all duration-300"
                    placeholder="বিভাগের নাম"
                  />
                </div>
                <div>
                  <label
                    htmlFor="zip"
                    style={{ fontFamily: banglaFont }}
                    className="block text-lg font-semibold text-gray-300 mb-2"
                  >
                    পোস্টাল কোড
                  </label>
                  <input
                    type="text"
                    id="zip"
                    name="zip"
                    required
                    className="w-full bg-gray-700 border-2 border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-500 transition-all duration-300"
                    placeholder="পোস্টাল কোড"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="space-y-8">
            {/* Order Items */}
            <div className="bg-gray-800 rounded-2xl shadow-2xl p-8 border border-gray-700">
              <h2
                style={{ fontFamily: banglaFont }}
                className="text-3xl font-bold text-white mb-6 flex items-center gap-3"
              >
                <CreditCard className="h-8 w-8 text-red-500" />
                আপনার অর্ডার
              </h2>

              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center bg-gray-700/50 rounded-xl p-4 border border-gray-600 hover:border-red-500/50 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <Image
                        src={item.imageUrl}
                        alt={item.name}
                        width={70}
                        height={70}
                        className="rounded-lg border-2 border-gray-600 object-cover"
                      />
                      <div>
                        <p
                          style={{ fontFamily: banglaFont }}
                          className="font-semibold text-white text-lg"
                        >
                          {item.name}
                        </p>
                        <p
                          style={{ fontFamily: banglaFont }}
                          className="text-sm text-gray-400"
                        >
                          পরিমাণ: {item.quantity}
                        </p>
                      </div>
                    </div>
                    <p
                      style={{ fontFamily: banglaFont }}
                      className="font-bold text-red-400 text-lg"
                    >
                      ৳{(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Total */}
            <div className="bg-gray-800 rounded-2xl shadow-2xl p-8 border border-gray-700">
              <h3
                style={{ fontFamily: banglaFont }}
                className="text-2xl font-bold text-white mb-6"
              >
                মোট মূল্য
              </h3>

              <div className="space-y-3">
                <div className="flex justify-between text-gray-300">
                  <span style={{ fontFamily: banglaFont }}>সাবটোটাল</span>
                  <span style={{ fontFamily: banglaFont }}>
                    ৳{subtotal.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span
                    style={{ fontFamily: banglaFont }}
                    className="flex items-center gap-2"
                  >
                    <Truck className="h-4 w-4 text-green-400" />
                    ডেলিভারি চার্জ
                  </span>
                  <span style={{ fontFamily: banglaFont }}>
                    ৳{shippingCost.toFixed(2)}
                  </span>
                </div>
                <div className="border-t border-gray-600 pt-3 mt-3">
                  <div className="flex justify-between font-bold text-xl text-white">
                    <span style={{ fontFamily: banglaFont }}>সর্বমোট</span>
                    <span
                      style={{ fontFamily: banglaFont }}
                      className="text-red-400"
                    >
                      ৳{total.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Security Badge */}
              <div className="flex items-center gap-3 mt-6 p-4 bg-green-900/20 border border-green-700 rounded-xl">
                <Shield className="h-6 w-6 text-green-400" />
                <span
                  style={{ fontFamily: banglaFont }}
                  className="text-green-300 text-sm"
                >
                  ১০০% সুরক্ষিত পেমেন্ট
                </span>
              </div>

              {/* Place Order Button */}
              <Button
                type="submit"
                disabled={isLoading}
                style={{ fontFamily: banglaFont }}
                className="w-full mt-6 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 text-xl rounded-xl transition-all duration-300 transform hover:scale-105 border-2 border-red-500 shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                    প্রসেসিং...
                  </span>
                ) : (
                  "অর্ডার কনফার্ম করুন"
                )}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
