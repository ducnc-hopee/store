import type { TProduct } from "../types/product";
import React from "react";
import { Linkable } from "./commons/Linkable";

type TProductItemProps = {
  data: TProduct;
};

export const ProductItem: React.FC<TProductItemProps> = ({ data }) => {
  return (
    <Linkable to={`/product/${data.id}`}>
      <div className="border-2 border-gray-300 rounded-md p-4">{data.name}</div>
    </Linkable>
  );
};
