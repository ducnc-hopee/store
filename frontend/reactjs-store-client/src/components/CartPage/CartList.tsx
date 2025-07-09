import type { TCartItem } from "@/types/cartItem";
import React from "react";
import CartItem from "./CartItem";
import { Button } from "../ui/Button";

type TCartListProps = {
  data: TCartItem[];
};

export const CartList: React.FC<TCartListProps> = ({ data }) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row mb-[48px] ">
        <div className="text-[20px] font-bold text-navy-blue mr-[226px]">Product</div>
        <div className="text-[20px] font-bold text-navy-blue mr-[104px]">Price</div>
        <div className="text-[20px] font-bold text-navy-blue mr-[122px]">Quantity</div>
        <div className="text-[20px] font-bold text-navy-blue">Total</div>
      </div>

      <div>
        {data.map((product) => (
          <CartItem key={product.id} data={product} />
        ))}
      </div>

      <div className="flex flex-row justify-between pt-[37px]">
        <Button className="w-[134px] font-semibold">
          <h1>Update Cart</h1>
        </Button>
        <Button className="w-[134px] font-semibold">
          <h1>Clear Cart</h1>
        </Button>
      </div>
    </div>
  );
};
