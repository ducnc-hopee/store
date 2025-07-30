import React from "react";
import type { TCartItemWithProduct } from "@/types/cartItem";
import { Button } from "../ui/Button";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

type TCartTotalsProps = {
  items: TCartItemWithProduct[];
};

const CartTotals: React.FC<TCartTotalsProps> = ({ items = [] }) => {
  const total = items.reduce((sum, item) => {
  const price = item?.product?.discountedPrice ?? 0;
  const quantity = item?.item?.quantity ?? 0;
  return sum + price * quantity;
}, 0);


  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-xl font-bold text-navy-blue pb-[42px]">Cart Totals</h2>
      <div className="bg-off-white w-[371px] border-transparent rounded-[3px] pt-[34px]">
        <div className="flex flex-col justify-between pb-4 border-b-2 border-[#E8E6F1] ml-[23px]">
          <span className="text-navy-blue">
            {items.map((item) => 
            item?.item && item?.product ?(
              <div key={item.item._id} className="flex justify-between text-sm text-navy-blue py-1">
                <span>
                  {item.product.title} (x{item.item.quantity})
                </span>
                <span>${(Number(item.product.discountedPrice) * Number(item.item.quantity)).toFixed(2)}</span>
              </div>
            ): null
          )}
          </span>
          <div className="flex flex-row items-end justify-between py-1">
            <span className="font-semibold text-navy-blue">Subtotal</span>
            <p className=" text-navy-blue">${total.toFixed(2)}</p>
          </div>
        </div>

        <div className="flex justify-between pb-4 pt-10 border-b-2 border-[#E8E6F1] ml-[23px] mr-[35px]">
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
          <Link to="/orderStatus" className="w-full">
            <Button className="bg-green-500 w-full">
              <span>Proceed to checkout</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartTotals;
