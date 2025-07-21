import type { TCartProduct  } from "@/types/cartItem";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/Button";

type TCartItemProps = {
  data: TCartProduct & { userId: string };
};

const CartItem: React.FC<TCartItemProps> = ({ data, onRemove }) => {
  const [quantity, setQuantity] = useState(Number(data.quantity));
  const [total, setTotal] = useState(Number(data.price) * Number(quantity));

  useEffect(() => {
    setTotal(Number(data.price) * Number(quantity));
    updateQuantity(data.userId, data.id, quantity);
  }, [quantity]);

  const handleIncrement = () => setQuantity((q) => q + 1);
  const handleDecrement = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  return (
    <div className="flex py-[15px] border-b-2 border-[#E1E1E4] items-center">
      <div className="flex flex-row gap-x-[15px]">
        <div className="relative w-[83px] h-[87px]">
          <img className="w-[83px] h-[87px] object-cover rounded" src={data.image} alt={data.name} />
          <Button className="absolute top-[-18px] right-[-16.5px] bg-transparent border-none hover:bg-transparent shadow-none" onClick={() => onRemove(data.id)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z" fill="black" />
              <path d="M7.8002 4.19995L4.2002 7.79995" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M4.2002 4.19995L7.8002 7.79995" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </Button>
        </div>
        <div className="flex flex-col justify-start text-left gap-y-[8px] w-[200px]">
          <h1 className="font-bold text-navy-blue whitespace-nowrap">{data.name}</h1>
          <p className="text-sm text-gray">Color: {data.color}</p>
          <p className="text-sm text-gray">Size: {data.size}</p>
        </div>
      </div>

      <div className="flex justify-start font-medium text-navy-blue w-[43px] mr-[122px]">${data.price}</div>

      <div className="flex items-center w-[51px] h-[15px]">
        <Button
          className="w-[12px] h-[15px] bg-[#E7E7EF] text-[#6B6C72] text-[10px] font-bold hover:bg-[#dcdce3] p-0 rounded-none"
          onClick={handleDecrement}
        >
          -
        </Button>
        <h1 className="w-[26px] h-[15x] flex items-center justify-center bg-[#F0EFF2] text-[#BEBFC2] text-[10px]">{quantity}</h1>
        <Button
          className="w-[12px] h-[15px] bg-[#E7E7EF] text-[#6B6C72] text-[10px] font-bold hover:bg-[#dcdce3] p-0 rounded-none"
          onClick={handleIncrement}
        >
          +
        </Button>
      </div>

      <div className="text-right text-[14px] text-navy-blue ml-[140px]">${total.toFixed(2)}</div>
    </div>
  );
};

export default CartItem;
