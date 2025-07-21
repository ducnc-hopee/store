import { create } from "zustand";
import type { TCartItem } from "@/types/cartItem";
import axios from "axios";

type CartState = {
  cart: TCartItem[];
  fetchCart: (userId: string) => Promise<void>;
  addToCart: (item: TCartItem) => Promise<void>
  clearCart: (userId: string) => Promise<void>;
  updateQuantity: (userId: string, productId: string, newQuantity: number) => Promise<void>;
};

export const useCartStore = create<CartState>((set) => ({
  cart: [],

  fetchCart: async (userId) => {
    const res = await axios.get(`/carts/user/${userId}`);
    set({ cart: res.data });
  },

  addToCart: async (item) => {
    const { userId } = item;
    const res = await axios.post(`/carts`, {
      userId,
      products: [item],
    });
    set({ cart: res.data.data.products }); // Adjust this if backend response differs
  },

  clearCart: async (userId) => {
    await axios.delete(`/carts/${userId}`);
    set({ cart: [] });
  },

  updateQuantity: async (userId, productId, newQuantity) => {
    const res = await axios.put(`/carts/${userId}`, {
      productId,
      quantity: newQuantity,
    });
    set({ cart: res.data.products });
  },
}));
