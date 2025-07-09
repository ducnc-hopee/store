import type { TProduct } from "../types/product";
import React from "react";
import { Linkable } from "./commons/Linkable";

type TProductItemProps = {
  data: TProduct;
};

export const ProductItem: React.FC<TProductItemProps> = ({ data }) => {
  return (
    <Linkable to={`/product/${data.id}`}>
      <div className="w-[390px] h-[623px] flex flex-col">
        <div className="bg-off-white h-[480.5px] w-full flex items-center justify-center">
          <img className="w-[290px] object-contain" src={data.image} alt="product" />
        </div>

        <div className="flex flex-col justify-start items-center flex-1 pb-[16px]">
          <h1 className="font-bold text-navy-blue mt-[30.89px] text-[18px]">{data.name}</h1>
          <div className="flex h-[17.1px] w-[60.6px] gap-[9px] mt-[26.62px]">
            <div className="w-[14.5px] h-[17px] rounded-[50%/50%] bg-orange-300" />
            <div className="w-[14.5px] h-[17px] rounded-[50%/50%] bg-pink" />
            <div className="w-[14.5px] h-[17px] rounded-[50%/50%] bg-purple" />
          </div>
          <div className="flex justify-between gap-[33.56px] text-[14px] mt-[25.75px]">
            <h1>${data.price}</h1>
            <h1 className="line-through text-pink">${data.discountedPrice}</h1>
          </div>
          <div className="mt-auto" />
        </div>
      </div>
    </Linkable>
  );
};
