import type { TCartItem } from "@/types/cartItem";
import React, { useState } from "react";
import CartItem from "./CartItem";
import { Button } from "../ui/Button";
import { useCartStore } from "@/gobalStates/useCartStore";

type TCartListProps = {
  data: TCartItem[];
  userId:string;
};

export const CartList: React.FC<TCartListProps> = ({ data, userId}) => {
  const clearCart = useCartStore((state) => state.clearCart);

  const handleUpdateCart = () => {
    alert("Cart updated! (Quantity is auto-synced as you adjust it.)");
  };

  const handleClearCart = () => {
    
    clearCart(userId);
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-row mb-[48px] ">
        <div className="text-[20px] font-bold text-navy-blue mr-[226px]">Product</div>
        <div className="text-[20px] font-bold text-navy-blue mr-[104px]">Price</div>
        <div className="text-[20px] font-bold text-navy-blue mr-[122px]">Quantity</div>
        <div className="text-[20px] font-bold text-navy-blue">Total</div>
      </div>

      <div>
        {data.map((cartItem) => 
          cartItem.products.map((product) => (
         <CartItem key={product.id} data={{ ...product, userId: cartItem.userId }} />
          ))
          )}
          </div>

      <div className="flex flex-row justify-between pt-[37px]">
        <Button className="w-[134px] font-semibold">
          <h1>Update Cart</h1>
        </Button>
        <Button className="w-[134px] font-semibold" onClick={onClear}>
          <h1>Clear Cart</h1>
        </Button>
      </div>
    </div>
  );
};
