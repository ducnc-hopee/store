import type { TCartItem } from "@/types/cartItem";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/Button";
import { useCartStore } from "@/gobalStates/useCartStore";

type TCartItemProps = {
  data: TCartItem;
  onRemove: (id: string) => void;
};

const CartItem: React.FC<TCartItemProps> = ({ data, onRemove }) => {
  const [quantity, setQuantity] = useState(Number(data.quantity));
  const [total, setTotal] = useState(Number(data.price) * Number(quantity));
  const updateQuantity = useCartStore((state) => state.updateQuantity);

  useEffect(() => {
    setTotal(Number(data.price) * Number(quantity));
    updateQuantity(data.id, quantity);
  }, [quantity]);

  const handleIncrement = () => setQuantity((q) => q + 1);
  const handleDecrement = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  return (
    <div className="flex py-[15px] border-b-2 border-[#E1E1E4] items-center">
      <div className="flex flex-row gap-x-[15px]">
        <img className="w-[83px] h-[87px] object-cover rounded" src={data.image} alt={data.name} />
        <div className="flex flex-col justify-start text-left gap-y-[8px] w-[200px]">
          <h1 className="font-bold text-navy-blue whitespace-nowrap">{data.name}</h1>
          <p className="text-sm text-gray">Color: {data.color}</p>
          <p className="text-sm text-gray">Size: {data.size}</p>
        </div>
      </div>

      <div className="flex justify-center font-medium text-gray-800">${data.price}</div>

      <div className="flex items-center w-[51px] h-[15px]">
        <Button className="w-[12px] h-[15px] bg-[#E7E7EF] text-[#6B6C72] text-[10px] font-bold hover:bg-[#dcdce3] p-0 rounded-none" onClick={handleDecrement}>
          -
        </Button>
        <h1 className="w-[26px] h-[15x] flex items-center justify-center bg-[#F0EFF2] text-[#BEBFC2] text-[10px]">{quantity}</h1>
        <Button className="w-[12px] h-[15px] bg-[#E7E7EF] text-[#6B6C72] text-[10px] font-bold hover:bg-[#dcdce3] p-0 rounded-none" onClick={handleIncrement}>
          +
        </Button>
      </div>

      <div className="text-right font-semibold text-navy-blue">${total.toFixed(2)}</div>
    </div>
  );
};

export default CartItem;
