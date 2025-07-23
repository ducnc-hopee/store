import { create } from "zustand";
import type { TCartItem, TCartProduct } from "@/types/cartItem";
// import axios from "axios";

// const baseURL = "http://localhost:8765";

type CartState = {
  cart: TCartItem[];
  fetchCart: (userId: number) => Promise<void>;
  addToCart: (item: TCartProduct & { userId: number }) => Promise<void>;
  clearCart: (userId: number) => Promise<void>;
  updateQuantity: (userId: number, productId: number, newQuantity: number) => Promise<void>;
};

function getCartFromLocalStorage(userId: number) {
  const cart = localStorage.getItem(`cart_user_${userId}`);
  return cart ? JSON.parse(cart) : [];
}

function saveCartToLocalStorage(userId: number, cart: TCartItem[]) {
  localStorage.setItem(`cart_user_${userId}`, JSON.stringify(cart));
}

export const useCartStore = create<CartState>((set) => ({
  cart: [], // initially empty

  fetchCart: async (userId: number) => {
    const userCart = getCartFromLocalStorage(userId);
    set({ cart: userCart });
  },

  addToCart: async (item: TCartProduct & {userId:number}) => {
    const currentCart = getCartFromLocalStorage(item.userId);

    let itemFound = false;

    currentCart.forEach((cartItem: TCartItem) => {
      cartItem.products.forEach((product: TCartProduct) => {
        if (product.id === item.id) {
          product.quantity += item.quantity ?? 1;
          itemFound = true;
        }
      });
    });

    if (!itemFound) {
      // Create a new cartItem structure if needed
      const existingUserCart = currentCart.find((ci:TCartItem) => ci.userId === item.userId);
      if (existingUserCart) {
        existingUserCart.products.push(item);
      } else {
        currentCart.push({ userId: item.userId, products: [item] });
      }
    }

    saveCartToLocalStorage(item.userId, currentCart);
    set({ cart: currentCart });
  },

  clearCart: async (userId) => {
    localStorage.removeItem(`cart_user_${userId}`);
    set({ cart: [] });
  },

  updateQuantity: async (userId, productId, newQuantity) => {
    const currentCart = getCartFromLocalStorage(userId);
    currentCart.forEach((cartItem: TCartItem) => {
      cartItem.products.forEach((product) => {
        if (product.id === productId) {
          product.quantity = newQuantity;
        }
      });
    });
    saveCartToLocalStorage(userId, currentCart);
    set({ cart: currentCart });
  },
}));
