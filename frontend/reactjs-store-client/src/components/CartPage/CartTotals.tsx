import React from "react";
import type { TCartItem } from "@/types/cartItem";
import { Icon } from "@iconify/react";
import { Button } from "../ui/Button";

type TCartTotalsProps = {
  data: TCartItem[];
};

const CartTotals: React.FC<TCartTotalsProps> = ({ data }) => {
  const total = data.reduce((sum, item) => {
    return sum + Number(item.price) * Number(item.quantity);
  }, 0);

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-xl font-bold text-navy-blue pb-4">Cart Totals</h2>
      <div className="bg-off-white w-[300px] border-transparent rounded-xl pt-5">
        <div className="flex flex-col justify-between pb-4 border-b-2 border-[#E8E6F1] mx-5">
          <span className="text-navy-blue">
            {data.map((item) => (
              <div key={item.id} className="flex justify-between text-sm text-navy-blue py-1">
                <span>
                  {item.name} (x{item.quantity})
                </span>
                <span>${(Number(item.price) * Number(item.quantity)).toFixed(2)}</span>
              </div>
            ))}
          </span>
          <div className="flex flex-row items-end justify-between py-1">
            <span className="font-semibold text-navy-blue">Subtotal</span>
            <p className=" text-navy-blue">${total.toFixed(2)}</p>
          </div>
        </div>

        <div className="flex justify-between pb-4 pt-10 border-b-2 border-[#E8E6F1] mx-5">
          <span className="font-semibold text-navy-blue">Totals:</span>
          <span className="text-navy-blue">${total.toFixed(2)}</span>
        </div>

        <div className="flex flex-row items-center gap-2 mx-5 py-5">
          <div className="w-3 h-3 rounded-full bg-green-500 flex items-center justify-center">
            <Icon icon="uil:check" className="w-4 h-4 text-white" />
          </div>
          <h1 className="text-gray text-[12px]">Shipping & taxes calculated at checkout</h1>
        </div>
        <div className="flex flex-col justify-center items-center pb-5 mx-5">
          <Button className="bg-green-500 w-full">
            <span>Proceed to checkout</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartTotals;
