// lib/store/cartStore.ts
import { create } from "zustand";

// Product Interface - আপনার JSON structure অনুযায়ী
export interface Product {
  id: number; // number type করুন
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  inStock?: boolean;
  featured?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void; // number type করুন
  increaseQuantity: (productId: number) => void; // number type করুন
  decreaseQuantity: (productId: number) => void; // number type করুন
  clearCart: () => void; // clearCart function add করুন
  getTotalItems: () => number;
  getTotalPrice: () => number;
  proceedToCheckout: () => void;
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
    const items = get().items;
    const item = items.find((item) => item.id === productId);

    if (item && item.quantity > 1) {
      set({
        items: items.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      });
    } else {
      // If quantity is 1, remove from cart
      set({ items: items.filter((item) => item.id !== productId) });
    }
  },

  // NEW: Clear Cart Function
  clearCart: () => {
    set({ items: [] });
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
  // lib/store/cartStore.ts - proceedToCheckout function
  proceedToCheckout: () => {
    const { items, closeCart } = get();

    // Check if cart is empty
    if (items.length === 0) {
      alert("আপনার কার্ট খালি");
      return;
    }

    // Check if user is logged in
    const isLoggedIn = !!localStorage.getItem("auth-token");

    if (!isLoggedIn) {
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
