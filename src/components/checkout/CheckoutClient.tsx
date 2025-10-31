'use client';

import { useCartStore } from '@/lib/store/cartStore';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function CheckoutClient() {
  const { items, getTotalPrice } = useCartStore();
  const router = useRouter();
  
  // যদি কার্ট খালি থাকে, তাহলে ব্যবহারকারীকে প্রোডাক্ট পেজে পাঠিয়ে দেওয়া হবে
  useEffect(() => {
    if (items.length === 0) {
      router.push('/products');
    }
  }, [items, router]);
  
  const subtotal = getTotalPrice();
  const shippingCost = 5.00; // ডামি শিপিং খরচ
  const total = subtotal + shippingCost;

  const handlePlaceOrder = (event: React.FormEvent) => {
    event.preventDefault();
    // এখানে পেমেন্ট গেটওয়ে (SSLCommerz) ইন্টিগ্রেশনের লজিক বসবে
    console.log("Placing order with data...");
    alert("Thank you for your order! (Payment gateway integration pending)");
    // ভবিষ্যতে এখানে SSLCommerz-এর সার্ভার অ্যাকশন কল করা হবে
  };

  if (items.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-lg">Your cart is empty. Redirecting...</p>
      </div>
    );
  }

  return (
    <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* বাম কলাম: বিলিং ডিটেইলস */}
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Billing & Shipping Details</h2>
        <div className="space-y-4">
          {/* নাম */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
              <input type="text" id="firstName" name="firstName" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2" />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
              <input type="text" id="lastName" name="lastName" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2" />
            </div>
          </div>
          {/* ইমেইল ও ফোন */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input type="email" id="email" name="email" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2" />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input type="tel" id="phone" name="phone" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2" />
          </div>
          {/* ঠিকানা */}
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Street Address</label>
            <input type="text" id="address" name="address" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2" />
          </div>
          {/* শহর, স্টেট, জিপ */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
              <input type="text" id="city" name="city" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2" />
            </div>
            <div>
              <label htmlFor="state" className="block text-sm font-medium text-gray-700">State / Division</label>
              <input type="text" id="state" name="state" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2" />
            </div>
            <div>
              <label htmlFor="zip" className="block text-sm font-medium text-gray-700">ZIP / Postal Code</label>
              <input type="text" id="zip" name="zip" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2" />
            </div>
          </div>
        </div>
      </div>

      {/* ডান কলাম: অর্ডার সামারি */}
      <div className="bg-white p-8 rounded-lg shadow-md h-fit">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Order</h2>
        <div className="space-y-4">
          {items.map(item => (
            <div key={item.id} className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <Image src={item.imageUrl} alt={item.name} width={64} height={64} className="rounded-md border object-cover" />
                <div>
                  <p className="font-semibold text-gray-800">{item.name}</p>
                  <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                </div>
              </div>
              <p className="font-semibold text-gray-800">${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          ))}
        </div>
        <div className="border-t my-6"></div>
        <div className="space-y-2">
          <div className="flex justify-between text-gray-600">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>Shipping</span>
            <span>${shippingCost.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-bold text-xl text-gray-800 pt-2 border-t">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
        <Button type="submit" className="w-full mt-6 bg-red-900 hover:bg-red-800">
          Place Order
        </Button>
      </div>
    </form>
  );
}