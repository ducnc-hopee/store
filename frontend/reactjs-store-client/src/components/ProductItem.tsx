import type { TProduct } from "../types/product";
import React from "react";
import { Linkable } from "./commons/Linkable";

type TProductItemProps = {
  data: TProduct;
  viewType: "grid" | "list";
};

export const ProductItem: React.FC<TProductItemProps> = ({ data }) => {
  return (
    <Linkable to={`/product/${data.id}`}>
      <img className="bg-off-white" src={data.image}></img>
      <div className="flex flex-col justify-center items-center p-5">
        <h1 className="font-bold text-navy-blue">{data.name}</h1>
        <div className="flex gap-2 p-2">
          <div className="w-3 h-4 rounded-full bg-orange-300" />
          <div className="w-3 h-4 rounded-full bg-pink" />
          <div className="w-3 h-4 rounded-full bg-purple" />
        </div>
        <div className="flex justify-between gap-10 pt-2">
          <h1>${data.price}</h1>
          <h1 className="line-through text-pink">${data.discountedPrice}</h1>
        </div>
      </div>
    </Linkable>
  );
};
