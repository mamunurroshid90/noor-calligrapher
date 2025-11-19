// lib/store/cartStore.ts
import { create } from "zustand";
import type { Product } from "../data/products";

export interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  increaseQuantity: (productId: string) => void;
  decreaseQuantity: (productId: string) => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
  proceedToCheckout: () => void; // NEW FUNCTION
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  isOpen: false,

  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),

  addToCart: (product) => {
    const cart = get();
    const existingItem = cart.items.find((item) => item.id === product.id);

    if (existingItem) {
      const updatedItems = cart.items.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      set({ items: updatedItems });
    } else {
      set({ items: [...cart.items, { ...product, quantity: 1 }] });
    }
  },

  removeFromCart: (productId) => {
    set({ items: get().items.filter((item) => item.id !== productId) });
  },

  increaseQuantity: (productId) => {
    set({
      items: get().items.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      ),
    });
  },

  decreaseQuantity: (productId) => {
    set({
      items: get().items.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ),
    });
  },

  getTotalItems: () => {
    return get().items.reduce((total, item) => total + item.quantity, 0);
  },

  getTotalPrice: () => {
    return get().items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  },

  // NEW: Protected Checkout Function
  proceedToCheckout: () => {
    const { items, closeCart } = get();

    // Check if cart is empty
    if (items.length === 0) {
      alert("আপনার কার্ট খালি");
      return;
    }

    // Check if user is logged in (client-side check)
    const isLoggedIn = !!localStorage.getItem("auth-token");

    if (!isLoggedIn) {
      // Save current URL for redirect after login
      localStorage.setItem("redirect-after-login", "/checkout");

      // Show message and redirect to login
      if (confirm("চেকআউট করতে লগইন প্রয়োজন। লগইন পেজে যান?")) {
        closeCart();
        window.location.href = "/login?redirect=/checkout";
      }
      return;
    }

    // If logged in, proceed to checkout
    closeCart();
    window.location.href = "/checkout";
  },
}));
