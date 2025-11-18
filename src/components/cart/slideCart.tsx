"use client";

import { useCartStore } from "@/lib/store/cartStore";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2, ShoppingCart } from "lucide-react"; // X remove korechi

export default function SideCart() {
  const {
    isOpen,
    closeCart,
    items,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    getTotalPrice,
    getTotalItems,
  } = useCartStore();

  // Hero section er moto same bangla font
  const banglaFont = "'Hind Siliguri', sans-serif";

  return (
    <Sheet open={isOpen} onOpenChange={closeCart}>
      <SheetContent className="flex flex-col bg-gradient-to-b from-gray-900 to-black text-white border-l border-red-500/30 w-full sm:max-w-md px-5">
        {/* Header with Bangla Font - CUSTOM CLOSE BUTTON REMOVED */}
        <SheetHeader className="border-b border-gray-700 pb-4">
          <div className="flex items-center justify-start">
            <SheetTitle
              className="text-2xl font-black text-white flex items-center gap-3"
              style={{ fontFamily: banglaFont }}
            >
              <div className="relative">
                <ShoppingCart className="h-7 w-7 text-red-500" />
                <div className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
                  <span className="text-white text-xs font-bold">
                    {getTotalItems()}
                  </span>
                </div>
              </div>
              আমার কার্ট
            </SheetTitle>
          </div>
        </SheetHeader>

        {/* Empty Cart with Bangla Font */}
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-6">
            <div className="relative">
              <ShoppingCart size={80} className="text-gray-600" />
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center animate-bounce">
                <span className="text-white text-xs font-bold">0</span>
              </div>
            </div>
            <p
              className="text-gray-400 text-lg text-center"
              style={{ fontFamily: banglaFont }}
            >
              আপনার কার্টটি খালি
            </p>
            <Button
              onClick={closeCart}
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 border border-red-500 shadow-lg"
              style={{ fontFamily: banglaFont }}
            >
              শপিং চালিয়ে যান
            </Button>
          </div>
        ) : (
          /* Cart Items */
          <div className="flex-1 overflow-y-auto -mx-6 px-6">
            <div className="space-y-4 py-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-gray-800/50 rounded-xl p-4 border border-gray-700 hover:border-red-500/50 transition-all duration-300 group hover:shadow-lg hover:shadow-red-500/10"
                >
                  <div className="flex gap-4">
                    <div className="relative">
                      <Image
                        src={item.imageUrl}
                        alt={item.name}
                        width={80}
                        height={80}
                        className="rounded-lg border-2 border-gray-600 object-cover hover:border-red-500 transition-all duration-300 group-hover:scale-105"
                      />
                      {/* Quantity Badge */}
                      <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center animate-pulse">
                        {item.quantity}
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h4
                          className="font-bold text-white text-lg leading-tight mb-1"
                          style={{ fontFamily: banglaFont }}
                        >
                          {item.name}
                        </h4>
                        <p className="text-red-400 font-semibold text-lg">
                          ৳{item.price.toFixed(2)}
                        </p>
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        {/* Quantity Counter */}
                        <div className="flex items-center border border-gray-600 rounded-lg bg-gray-900 overflow-hidden">
                          <button
                            onClick={() => decreaseQuantity(item.id)}
                            className="px-3 py-2 text-gray-300 hover:bg-red-600 hover:text-white transition-all duration-200 hover:scale-110"
                          >
                            <Minus size={16} />
                          </button>
                          <span
                            className="px-3 font-bold text-white min-w-[40px] text-center bg-gray-800 py-2"
                            style={{ fontFamily: banglaFont }}
                          >
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => increaseQuantity(item.id)}
                            className="px-3 py-2 text-gray-300 hover:bg-green-600 hover:text-white transition-all duration-200 hover:scale-110"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                        {/* Remove Button */}
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-2 text-red-500 hover:bg-red-600 hover:text-white rounded-lg transition-all duration-200 transform hover:scale-110 hover:rotate-12 border border-red-500/30 hover:border-red-400"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer with Total and Checkout - Bangla Font */}
        {items.length > 0 && (
          <SheetFooter className="mt-auto border-t border-gray-700 pt-6">
            <div className="w-full space-y-4">
              {/* Total */}
              <div
                className="flex justify-between items-center p-4 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-red-500/50 transition-all duration-300"
                style={{ fontFamily: banglaFont }}
              >
                <span className="text-xl font-bold text-white">মোট মূল্য:</span>
                <span className="text-2xl font-black text-red-400">
                  ৳{getTotalPrice().toFixed(2)}
                </span>
              </div>

              {/* Checkout Button */}
              <Link href="/checkout" className="w-full block">
                <Button
                  onClick={closeCart}
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 text-lg rounded-xl transition-all duration-300 transform hover:scale-105 border-2 border-red-500 shadow-lg hover:shadow-red-500/30"
                  style={{ fontFamily: banglaFont }}
                >
                  চেকআউট করুন
                </Button>
              </Link>

              {/* Continue Shopping */}
              <Button
                onClick={closeCart}
                variant="outline"
                className="w-full bg-transparent border-2 border-gray-600 hover:border-gray-500 hover:bg-gray-800 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105"
                style={{ fontFamily: banglaFont }}
              >
                শপিং চালিয়ে যান
              </Button>
            </div>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
}
