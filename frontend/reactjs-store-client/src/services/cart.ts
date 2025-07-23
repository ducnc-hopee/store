import { fromCartResponseToCartItem, type TCartItemResponse, type TCartItem } from './../types/cartItem';
import axios from "axios";

const baseURL = "http://localhost:8765"

// Get all cart items
export const getCart = async (): Promise<TCartItem[]> => {
  const response = await axios.get(`${baseURL}/carts`);
  const data = response.data as TCartItemResponse[];

  const converted = data.map(fromCartResponseToCartItem);
  return converted;
};

// Get a specific item by ID
export const getCartByUserId = async (userId: number): Promise<TCartItem> => {
  const cartItems = await getCart();
  const userCart = cartItems.find((cart) => cart.userId === userId);

  if (!userCart) {
    throw new Error(`Cart for user ${userId} not found`);
  }

  return userCart;
};


