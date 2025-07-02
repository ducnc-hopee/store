import type { TProduct } from "../types/product";
import React from "react";
import { Linkable } from "./commons/Linkable";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

type TProductItemProps = {
  data: TProduct;
};

export const RelatedProduct: React.FC<TProductItemProps> = ({ data }) => {
  return (
    <Linkable to={`/product/${data.id}`}>
      <img className="wi-[270px] h-[300px] border border-gray-100 shadow-lg rounded-xl" src={data.image}></img>
      <div className="flex flex-row items-right py-5 justify-between px-1 ">
        <h1 className="font-bold text-navy-blue text-[14px]">{data.name}</h1>
        <div className="flex text-yellow-500 w-[69px]">
          {[...Array(Number(data.rating))].map((_, i) => (
            <AiFillStar key={`fill-${i}`} />
          ))}
          {[...Array(5 - Number(data.rating))].map((_, i) => (
            <AiOutlineStar key={`empty-${i}`} className="text-gray-300" />
          ))}
        </div>
      </div>
      <div className="flex justify-between gap-10 pt-2">
        <h1>${data.price}</h1>
        <h1 className="line-through text-pink">${data.discountedPrice}</h1>
      </div>
    </Linkable>
  );
};
