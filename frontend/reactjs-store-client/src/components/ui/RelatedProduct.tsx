import type { TProduct } from "@/types/product";
import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Linkable } from "../commons/Linkable";

type TProductItemProps = {
  data: TProduct;
};

export const RelatedProduct: React.FC<TProductItemProps> = ({ data }) => {
  return (
    <Linkable to={`/product/${data.id}`}>
      <img className="w-[270px] h-[340px] border border-gray-100 shadow-lg mb-[17px]" src={data.image}></img>
      <div className="flex flex-row justify-between">
        <h1 className="font-bold text-black text-[14px] ml-[6px] mb-[15px]">{data.name}</h1>
        <div className="h-[13.8px] flex text-yellow-500 w-[66px] mr-[10px]">
          {[...Array(Number(data.rating))].map((_, i) => (
            <AiFillStar key={`fill-${i}`} />
          ))}
          {[...Array(5 - Number(data.rating))].map((_, i) => (
            <AiOutlineStar key={`empty-${i}`} className="text-gray-300" />
          ))}
        </div>
      </div>
      <div className="flex flex-row ml-[7px]">
        <h1 className="h-[13.8px] w-[44px] text-navy-blue">${data.price}</h1>
        <h1 className="h-[13.8px] line-through text-pink ml-[9.26px]">${data.discountedPrice}</h1>
      </div>
    </Linkable>
  );
};
