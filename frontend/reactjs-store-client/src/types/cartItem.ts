import type { TProduct } from "./product";

export type TCartItem = {
  _id: string;
  userId: string;
  quantity: number;
  selectedColor?: string | null; 
  productId: string;
};


export type TCartItemResponse = {
  _id: string;
  userId: string;
  quantity: number;
  selectedColor?: string | null;
  productId: string; // Assuming productId is a string ID
};

export type TCartItemWithProduct = {
  item: TCartItem;
  product: TProduct;
};

export const fromCartResponseToCartItem = (cart: TCartItemResponse): TCartItem => {
  return {
    _id: cart._id,
    userId: cart.userId,
    quantity: cart.quantity,
    selectedColor: cart.selectedColor ?? null,
    productId: cart.productId, // Assuming product is a string ID
  };
};