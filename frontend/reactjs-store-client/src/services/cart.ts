import type { TCartItem } from "@/types/cartItem";
import axios from "axios";



export const getCart = async (): Promise<TCartItem[]> => {
  const response = await axios.get("/mock/cartData.json");
  const data = response.data as TCartItem[];
  return data;
};

export const getCartItem = async (id: string): Promise<TCartItem> => {
  const products = await getCart();
  const product = products.find((product) => product.id === id);
  if (!product) {
    throw new Error(`Product with id ${id} not found`);
  }
  return product;
};