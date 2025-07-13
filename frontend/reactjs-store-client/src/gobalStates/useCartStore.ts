import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { TCartItem } from "@/types/cartItem";

type CartState = {
  cart: TCartItem[];
  addToCart: (item: TCartItem) => void;
  clearCart: () => void;
  updateQuantity: (id: string, newQuantity: number) => void;
};

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cart: [],
      // Add product to cart (or update quantity if already exists)
      addToCart: (item) => {
        const existing = get().cart;
        const itemIndex = existing.findIndex((p) => p.id === item.id);

        let updatedCart;
        if (itemIndex > -1) {
          updatedCart = [...existing];
          updatedCart[itemIndex] = {
            ...updatedCart[itemIndex]!,
            quantity: updatedCart[itemIndex]!.quantity + 1,
          };
        } else {
          updatedCart = [...existing, { ...item, quantity: 1 }];
        }

        set({ cart: updatedCart });
      },

      //clear all cart items
      clearCart: () => set({ cart: [] }),

      // Change quanity of Product
      updateQuantity: (id, newQuantity) => {
        const cart = get().cart;
        const updatedCart = cart.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        );
        set({ cart: updatedCart });
      },
    }),
    { name: "cart-storage" }
  )
);