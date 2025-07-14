export type TProduct = {
  id: string;
  name: string;
  price: number;
  discountedPrice: number;
  category: string;
  description: string;
  image: string;
  rating?: string;
  numRating: string;
};

export type TProductResponse = {
  _id: string;
  title: string;
  price: number;
  discountPercentage: number;
  description: string;
  code: string;
  categoryId: string;
  categoryName: string;
  image: string;
  rating: number;
  colors: string[];
  createdAt: string;
};

export const fromProductResponseAPIToProduct = (product: TProductResponse): TProduct => {
  return {
    id: product._id,
    name: product.title,
    price: product.price,
    discountedPrice: product.price * product.discountPercentage,
    category: product.categoryName,
    description: product.description,
    image: product.image,
    rating: product.rating.toString(),
    numRating: "123",
  };
};
