import axios from "axios";
import type { TProduct } from "../types/product";


export const getProducts = async (): Promise<TProduct[]> => {
  const response = await axios.get("/mock/productData.json");
  const data = response.data as TProduct[];
  return data;
};

export const getProduct = async (id: string): Promise<TProduct> => {
  const products = await getProducts();
  const product = products.find((product) => product.id === id);
  if (!product) {
    throw new Error(`Product with id ${id} not found`);
  }
  return product;
};