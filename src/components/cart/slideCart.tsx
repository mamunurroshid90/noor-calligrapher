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
import { Minus, Plus, Trash2, ShoppingCart, X } from "lucide-react";

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

  return (
    <Sheet open={isOpen} onOpenChange={closeCart}>
      <SheetContent className="flex flex-col bg-gradient-to-b from-gray-900 to-black text-white border-l border-red-500/30 w-full sm:max-w-md">
        {/* Header */}
        <SheetHeader className="border-b border-gray-700 pb-4">
          <div className="flex items-center justify-between">
            <SheetTitle className="text-2xl font-black text-white flex items-center gap-2">
              <ShoppingCart className="h-6 w-6 text-red-500" />
              আমার কার্ট ({getTotalItems()})
            </SheetTitle>
            <button
              onClick={closeCart}
              className="p-2 hover:bg-gray-800 rounded-full transition-all duration-300 hover:scale-110"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </SheetHeader>

        {/* Empty Cart */}
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-6">
            <div className="relative">
              <ShoppingCart size={80} className="text-gray-600" />
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">0</span>
              </div>
            </div>
            <p className="text-gray-400 text-lg text-center">
              আপনার কার্টটি খালি
            </p>
            <Button
              onClick={closeCart}
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 border border-red-500"
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
                  className="bg-gray-800/50 rounded-xl p-4 border border-gray-700 hover:border-red-500/50 transition-all duration-300"
                >
                  <div className="flex gap-4">
                    <div className="relative">
                      <Image
                        src={item.imageUrl}
                        alt={item.name}
                        width={80}
                        height={80}
                        className="rounded-lg border-2 border-gray-600 object-cover hover:border-red-500 transition-all duration-300"
                      />
                      {/* Quantity Badge */}
                      <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
                        {item.quantity}
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h4 className="font-bold text-white text-lg leading-tight mb-1">
                          {item.name}
                        </h4>
                        <p className="text-red-400 font-semibold text-lg">
                          ৳{item.price.toFixed(2)}
                        </p>
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        {/* Quantity Counter */}
                        <div className="flex items-center border border-gray-600 rounded-lg bg-gray-900">
                          <button
                            onClick={() => decreaseQuantity(item.id)}
                            className="px-3 py-2 text-gray-300 hover:bg-red-600 hover:text-white transition-all duration-200 rounded-l-lg"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="px-3 font-bold text-white min-w-[40px] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => increaseQuantity(item.id)}
                            className="px-3 py-2 text-gray-300 hover:bg-green-600 hover:text-white transition-all duration-200 rounded-r-lg"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                        {/* Remove Button */}
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-2 text-red-500 hover:bg-red-600 hover:text-white rounded-lg transition-all duration-200 transform hover:scale-110"
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

        {/* Footer with Total and Checkout */}
        {items.length > 0 && (
          <SheetFooter className="mt-auto border-t border-gray-700 pt-6">
            <div className="w-full space-y-4">
              {/* Total */}
              <div className="flex justify-between items-center p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                <span className="text-xl font-bold text-white">মোট মূল্য:</span>
                <span className="text-2xl font-black text-red-400">
                  ৳{getTotalPrice().toFixed(2)}
                </span>
              </div>

              {/* Checkout Button */}
              <Link href="/checkout" className="w-full block">
                <Button
                  onClick={closeCart}
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 text-lg rounded-xl transition-all duration-300 transform hover:scale-105 border-2 border-red-500 shadow-lg"
                >
                  চেকআউট করুন
                </Button>
              </Link>

              {/* Continue Shopping */}
              <Button
                onClick={closeCart}
                variant="outline"
                className="w-full bg-transparent border-2 border-gray-600 hover:border-gray-500 hover:bg-gray-800 text-white font-semibold py-3 rounded-xl transition-all duration-300"
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
