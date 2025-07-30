import CalculateShipping from "@/components/CartPage/CalculateShipping";
import CartList from "@/components/CartPage/CartList";
import CartTotals from "@/components/CartPage/CartTotals";
import { useCartStore } from "@/gobalStates/useCartStore"; //  Zustand store
import { useEffect } from "react";

function Cart() {
  const cart = useCartStore((state) => state.cart);
  const fetchCart = useCartStore((state) => state.fetchCart);
    const userId = "6881a8adf936c7791d186ccb";

    useEffect(() => {
    if (userId) {
      fetchCart(userId);
    }
  }, [userId, fetchCart]);

  return (
    <div>
      <div className="flex flex-row  ml-[320px]">
        <div>
          <CartList/>
        </div>
        <div className="py-20 pr-20">
          <CartTotals items={cart} />
          <CalculateShipping />
        </div>
      </div>
    </div>
  );
}

export default Cart;
