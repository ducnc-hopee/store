export type TCartProduct = {
    id: string;
    name: string;
    color: string;
    size: string;
    price: string;
    quantity: string;
    image: string;
  };

export type TCartItem={
  userId: string;
  products: TCartProduct[];
}

export type TCartProductResponse = {
  product_id: string;
  title: string;
  color?: string;
  size?: string;
  price: number;
  quantity: number;
  image: string;
};

export type TCartItemResponse = {
  user_id: string;
  products: TCartProductResponse[];
};

export const fromCartResponseToCartItem = (cart: TCartItemResponse): TCartItem => {
  return {
      userId: cart.user_id,
      products: cart.products.map((product: TCartProductResponse) => ({
      id: product.product_id,
      name: product.title,
      color: product.color,
      size: product.size,
      price: product.price,
      quantity: product.quantity,
      image: product.image,
    })),
  };
};