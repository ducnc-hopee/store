import type { TCartItem } from "@/types/cartItem";
import React, { useState } from "react";
import CartItem from "./CartItem";
import { Button } from "../ui/Button";
import { useCartStore } from "@/gobalStates/useCartStore";

type TCartListProps = {
  data: TCartItem[];
  onRemove: (id: string) => void;
  onClear: () => void;
};

export const CartList: React.FC<TCartListProps> = ({ data }) => {
  return (
    <div className="flex flex-col py-20 pr-20">
      <div className="grid grid-cols-5 text-[20px] text-navy-blue font-bold py-2">
        <div className="col-span-2">Product</div>
        <div className="text-center">Price</div>
        <div className="text-center pl-7">Quantity</div>
        <div className="text-right">Total</div>
      </div>

      <div>
        {data.map((product) => (
          <CartItem key={product.id} data={product} onRemove={onRemove} />
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
