import { create } from "zustand";
import type { TCartItemWithProduct, TCartItem } from "@/types/cartItem";
import axios from "axios";

const baseURL = "http://localhost:8765";

type CartState = {
  cart: TCartItemWithProduct[];
  fetchCart: (userId: string) => Promise<void>;
  addToCart: (item: TCartItem) => Promise<void>;
  clearCart: (userId: string) => Promise<void>;
  updateQuantity: (CartItemId: string, userId: string, productId: string, newQuantity: number) => Promise<void>;
};



export const useCartStore = create<CartState>((set) => ({
  cart: [],

  fetchCart: async (userId: string) => {
    try {
      const response = await axios.get(`${baseURL}/carts/user/${userId}`);
       console.log("Fetched Cart:", response.data); 
          
      const transformedCart = response.data.map((item: any) => ({
      item: {
        _id: item._id,
        userId: item.userId,
        quantity: item.quantity,
        productId: item.productId,
      },
      product: item.product, // assuming you used `.populate("productId")` on backend
    }));
      set({ cart: transformedCart});
    } catch (err) {
      console.error("Failed to fetch cart:", err);
    }
  },
  
  addToCart: async (item: TCartItem) => {
    try {
      const cartPayload = {
        userId: item.userId,
        productId: item.productId,
        quantity: item.quantity || 1,
        selectedColor: item.selectedColor,
      };
      await axios.post(`${baseURL}/carts`, cartPayload);
      const updated = await axios.get(`${baseURL}/carts/user/${item.userId}`);
      set({ cart: updated.data });
    } catch (err) {
      console.error("Failed to add to cart:", err);
    }
  },

  clearCart: async (userId: string) => {
    try {
      await axios.delete(`${baseURL}/carts/user/${userId}`);
      set({ cart: [] });
    } catch (err) {
      console.error("Failed to clear cart:", err);
    }
  },

  updateQuantity: async (cartItemId: string, userId: string, productId: string, newQuantity: number) => {
    try {
      await axios.put(`${baseURL}/carts/${cartItemId}`, {
        productId,
        quantity: newQuantity,
      });
      const updated = await axios.get(`${baseURL}/cart/user/${userId}`);
      set({ cart: updated.data });
    } catch (err) {
      console.error("Failed to update quantity:", err);
    }
  },
}));
