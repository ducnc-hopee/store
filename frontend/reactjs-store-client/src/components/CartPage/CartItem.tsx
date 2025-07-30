import type { TCartItem  } from "@/types/cartItem";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/Button";
import { useCartStore } from "@/gobalStates/useCartStore";
import type { TProduct } from "@/types/product";

type TCartItemProps = {
  cartItem : TCartItem,
  product: TProduct
};



const CartItem: React.FC<TCartItemProps> = ({cartItem, product }) => {
  const [quantity, setQuantity] = useState(Number(cartItem.quantity));
  const [total, setTotal] = useState(product.discountedPrice*quantity);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  

  useEffect(() => {
    setTotal(product.discountedPrice * Number(quantity));
    updateQuantity( cartItem._id,cartItem.userId, product.id ,quantity);
   
  }, [quantity]);

  const handleIncrement = () => setQuantity((q) => q + 1);
  const handleDecrement = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  return (
    <div className="grid gap-x-10 grid-cols-5 py-5 border-b-2 border-[#E1E1E4] items-center">
      <div className="col-span-2 flex items-center gap-2">
        <img className="w-[80px] h-[80px] object-cover rounded" src={product.image} alt={product.title} />
        <div className="flex flex-col justify-start text-left gap-1">
          <h1 className="font-bold text-navy-blue">{product.title}</h1>
          <p className="text-sm text-gray">Color:{cartItem.selectedColor}</p>
          <p className="text-sm text-gray">Size:</p> 
        </div>
      </div>

      <div className="flex justify-center font-medium text-gray-800">${product.discountedPrice}</div>

      <div className="flex items-center">
        <Button className="w-5 h-8 bg-[#E7E7EF] text-[#6B6C72] text-xl font-bold hover:bg-[#dcdce3]" onClick={handleDecrement}>
          -
        </Button>
        <span className="w-10 h-8 flex items-center justify-center bg-[#F0EFF2] text-[#BEBFC2]">{quantity}</span>
        <Button className="w-5 h-8 bg-[#E7E7EF] text-[#6B6C72] text-xl font-bold hover:bg-[#dcdce3]" onClick={handleIncrement}>
          +
        </Button>
      </div>

      <div className="text-right font-semibold text-navy-blue">${total.toFixed(2)}</div>
    </div>
  );
};

export default CartItem;