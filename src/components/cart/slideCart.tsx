'use client';

import { useCartStore } from '@/lib/store/cartStore';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { Minus, Plus, Trash2, ShoppingCart } from 'lucide-react';

export default function SideCart() {
  const { isOpen, closeCart, items, removeFromCart, increaseQuantity, decreaseQuantity, getTotalPrice, getTotalItems } = useCartStore();

  return (
    // এখানে কোনো পরিবর্তন নেই
    <Sheet open={isOpen} onOpenChange={closeCart}>
      {/* এখানে ব্যাকগ্রাউন্ড এবং টেক্সটের রঙ পরিবর্তন করা হয়েছে */}
      <SheetContent className="flex flex-col bg-gray-900 text-white border-l border-gray-700">
        <SheetHeader className="border-b border-gray-700 pb-4">
          <SheetTitle className="text-xl font-bold text-white">Shopping Cart ({getTotalItems()})</SheetTitle>
        </SheetHeader>
        
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4">
            <ShoppingCart size={48} className="text-gray-500" />
            <p className="text-gray-400">Your cart is empty.</p>
            {/* বাটনের স্টাইল পরিবর্তন করা হয়েছে */}
            <Button onClick={closeCart} variant="outline" className="bg-transparent border-gray-600 hover:bg-gray-800 hover:text-white">
              Continue Shopping
            </Button>
          </div>
        ) : (
          // এখানেও divide কালার পরিবর্তন করা হয়েছে
          <div className="flex-1 overflow-y-auto -mx-6 px-6 divide-y divide-gray-700">
            {items.map((item) => (
              <div key={item.id} className="py-4 flex gap-4">
                <Image src={item.imageUrl} alt={item.name} width={80} height={80} className="rounded-md border border-gray-600 object-cover" />
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    {/* টেক্সটের রঙ পরিবর্তন করা হয়েছে */}
                    <h4 className="font-semibold text-white">{item.name}</h4>
                    <p className="text-sm text-gray-400">${item.price.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    {/* কোয়ান্টিটি কাউন্টারের স্টাইল পরিবর্তন করা হয়েছে */}
                    <div className="flex items-center border border-gray-600 rounded-md">
                      <button onClick={() => decreaseQuantity(item.id)} className="px-2 py-1 text-gray-300 hover:bg-gray-800"><Minus size={14} /></button>
                      <span className="px-3 text-sm font-bold text-white">{item.quantity}</span>
                      <button onClick={() => increaseQuantity(item.id)} className="px-2 py-1 text-gray-300 hover:bg-gray-800"><Plus size={14} /></button>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-400">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {items.length > 0 && (
          // ফুটারের স্টাইল পরিবর্তন করা হয়েছে
          <SheetFooter className="mt-auto border-t border-gray-700 pt-4">
            <div className="w-full space-y-4">
              <div className="flex justify-between font-bold text-lg text-white">
                <span>Subtotal</span>
                <span>${getTotalPrice().toFixed(2)}</span>
              </div>
              <Link href="/checkout" className="w-full">
                {/* চেকআউট বাটনের স্টাইল আপনার Navbar-এর সাথে মেলানো হয়েছে */}
                <Button onClick={closeCart} className="w-full bg-red-900 hover:bg-red-800 text-white">
                  Proceed to Checkout
                </Button>
              </Link>
            </div>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
}