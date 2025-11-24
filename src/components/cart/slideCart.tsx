// src/components/cart/slideCart.tsx
"use client";

import { X, Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useCartStore, type CartItem } from "@/lib/store/cartStore";

export default function SlideCart() {
  const {
    items,
    isOpen,
    closeCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    getTotalPrice,
    getTotalItems,
    proceedToCheckout,
  } = useCartStore();

  const banglaFont = "'Hind Siliguri', sans-serif";

  const handleIncrease = (item: CartItem) => {
    increaseQuantity(item.id);
  };

  const handleDecrease = (item: CartItem) => {
    decreaseQuantity(item.id);
  };

  const handleRemove = (item: CartItem) => {
    removeFromCart(item.id);
  };

  const handleWhatsAppOrder = () => {
    const message = `হ্যালো! আমি নিচের পণ্যগুলো অর্ডার দিতে চাই:\n\n${items
      .map(
        (item) =>
          `${item.quantity} x ${item.name} - ৳${(
            item.price * item.quantity
          ).toFixed(2)}`
      )
      .join("\n")}\n\nমোট মূল্য: ৳${getTotalPrice().toFixed(2)}`;

    const whatsappUrl = `https://wa.me/8801761700244?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={closeCart}
      />

      {/* Cart Panel */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-gradient-to-b from-gray-900 to-black shadow-2xl border-l border-gray-700 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <div className="flex items-center gap-3">
            <ShoppingBag className="h-6 w-6 text-red-400" />
            <h2
              className="text-xl font-bold text-white"
              style={{ fontFamily: banglaFont }}
            >
              আপনার কার্ট ({getTotalItems()})
            </h2>
          </div>
          <button
            onClick={closeCart}
            className="p-2 hover:bg-gray-800 rounded-lg transition-colors text-gray-400 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingBag className="h-16 w-16 text-gray-600 mx-auto mb-4" />
              <p
                className="text-gray-400 text-lg"
                style={{ fontFamily: banglaFont }}
              >
                আপনার কার্ট খালি
              </p>
              <p
                className="text-gray-500 text-sm mt-2"
                style={{ fontFamily: banglaFont }}
              >
                কিছু পণ্য কার্টে যোগ করুন
              </p>
            </div>
          ) : (
            <>
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-gray-800/50 rounded-xl p-4 border border-gray-700 hover:border-red-500/50 transition-all duration-300 group hover:shadow-lg hover:shadow-red-500/10"
                >
                  <div className="flex gap-4">
                    {/* Product Image */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-700">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 min-w-0">
                      <h3
                        className="text-white font-semibold truncate text-sm mb-1"
                        style={{ fontFamily: banglaFont }}
                      >
                        {item.name}
                      </h3>
                      <p className="text-red-400 font-bold text-lg">
                        ৳{item.price.toFixed(2)}
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center border border-gray-600 rounded-lg">
                          <button
                            onClick={() => handleDecrease(item)}
                            className="p-1 text-gray-400 hover:text-white hover:bg-gray-700 rounded-l transition-colors"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="px-3 text-white font-medium text-sm min-w-[40px] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => handleIncrease(item)}
                            className="p-1 text-gray-400 hover:text-white hover:bg-gray-700 rounded-r transition-colors"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>

                        {/* Remove Button */}
                        <button
                          onClick={() => handleRemove(item)}
                          className="p-1 text-gray-400 hover:text-red-400 hover:bg-red-400/10 rounded transition-colors"
                          title="Remove"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Item Total */}
                  <div className="flex justify-between items-center mt-3 pt-3 border-t border-gray-700">
                    <span
                      className="text-gray-400 text-sm"
                      style={{ fontFamily: banglaFont }}
                    >
                      মোট:
                    </span>
                    <span className="text-red-400 font-bold">
                      ৳{(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-gray-700 p-6 space-y-4">
            {/* Total */}
            <div className="flex justify-between items-center text-lg">
              <span
                className="text-white font-semibold"
                style={{ fontFamily: banglaFont }}
              >
                মোট মূল্য:
              </span>
              <span className="text-red-400 font-bold text-xl">
                ৳{getTotalPrice().toFixed(2)}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={handleWhatsAppOrder}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg border border-green-500"
                style={{ fontFamily: banglaFont }}
              >
                WhatsApp-এ অর্ডার করুন
              </button>

              <button
                onClick={proceedToCheckout}
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg border border-blue-500"
                style={{ fontFamily: banglaFont }}
              >
                চেকআউট করুন
              </button>

              <button
                onClick={clearCart}
                className="w-full bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 border border-gray-600"
                style={{ fontFamily: banglaFont }}
              >
                কার্ট খালি করুন
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
