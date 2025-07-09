import CalculateShipping from "@/components/CartPage/CalculateShipping";
import { CartList } from "@/components/CartPage/CartList";
import CartTotals from "@/components/CartPage/CartTotals";
import { getCart } from "@/services/cart";
import type { TCartItem } from "@/types/cartItem";
import { useEffect, useState } from "react";

function Cart() {
  const [data, setData] = useState<TCartItem[]>([]);

  useEffect(() => {
    getCart().then((products) => setData(products));
  }, []);

  return (
    <div>
      <div className="flex flex-row pl-[375px] pt-[131px]">
        <div>
        <CartList data={data} />
        </div>
        <div className="ml-[95px] mb-[145px]">
          <CartTotals data={data} />
          <CalculateShipping />
        </div>
      </div>
    </div>
  );
}

export default Cart;
