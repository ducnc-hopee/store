import React from "react";
import type { TProduct } from "../types/product";
import { ProductItem } from "./ProductItem";

type TProductListProps = {
  data: TProduct[];
};

export const ProductList: React.FC<TProductListProps> = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((product) => (
        <ProductItem key={product.id} data={product} />
      ))}
    </div>
  );
};