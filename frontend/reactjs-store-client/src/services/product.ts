import axios from "axios";
import { fromProductResponseAPIToProduct, type TProduct, type TProductResponse } from "../types/product";

const baseURL = "http://localhost:8765";
export const getProducts = async (): Promise<TProduct[]> => {
  const response = await axios.get<TProductResponse[]>(`${baseURL}/products`);
  const data = response.data.map((item) => fromProductResponseAPIToProduct(item));
  return data;
};

export const getProductDetail = async (id: string): Promise<TProduct> => {
  const response = await axios.get<TProductResponse>(`${baseURL}/products/${id}`);
  const data = fromProductResponseAPIToProduct(response.data)
  console.log(data);
  
  return data;
};
