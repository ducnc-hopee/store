export type TProduct = {
  id: string;
  name: string;
  price: number;
  discountedPrice: number;
  category: string;
  description: string;
  image: string;
  rating?: number;
};