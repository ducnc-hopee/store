export type TCartProduct = {
  id: number | string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  quantity: number;
};

export type TCartItem = {
  id: number;
  userId: number;
  products: TCartProduct[];
};

export type TCartProductResponse = {
  product_id: number;
  title: string;
  color?: string;
  size?: string;
  price: number;
  quantity: number;
  image: string;
};

export type TCartItemResponse = {
  user_id: number;
  id: number;
  products: TCartProductResponse[];
};

export const fromCartResponseToCartItem = (cart: TCartItemResponse): TCartItem => {
  return {
    id:cart.id,
    userId: cart.user_id,
    products: cart.products.map((product: TCartProductResponse) => ({
      id: product.product_id,
      title: product.title,
      price: product.price,
      description: "", // Add empty string or map if available
      category: "",    // Add empty string or map if available
      image: product.image,
      quantity: product.quantity,
    })),
  };
};