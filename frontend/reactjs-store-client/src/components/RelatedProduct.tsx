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
      <img className="w-[209px] h-[254px] border border-gray-100 shadow-lg mb-[15px]" src={data.image}></img>
      <div className=" ">
        <h1 className="font-bold text-black text-[14px] ml-[23px] mb-[16.2px]">{data.name}</h1>
      </div>
      <div className="flex flex-row ml-[13.8px]">
        <h1 className="h-[13.8px] w-[44px] text-navy-blue">${data.price}</h1>
        <h1 className="h-[13.8px] line-through text-pink ml-[9.26px]">${data.discountedPrice}</h1>
        <div className="h-[13.8px] flex text-yellow-500 w-[66px] ml-[18.5px]">
          {[...Array(Number(data.rating))].map((_, i) => (
            <AiFillStar key={`fill-${i}`} />
          ))}
          {[...Array(5 - Number(data.rating))].map((_, i) => (
            <AiOutlineStar key={`empty-${i}`} className="text-gray-300" />
          ))}
        </div>
      </div>
    </Linkable>
  );
};
