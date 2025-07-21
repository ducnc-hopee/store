import CalculateShipping from "@/components/CartPage/CalculateShipping";
import { CartList } from "@/components/CartPage/CartList";
import CartTotals from "@/components/CartPage/CartTotals";
import { useCartStore } from "@/gobalStates/useCartStore"; //  Zustand store

function Cart() {
  const cart = useCartStore((state) => state.cart); // Get cart from Zustand
  const userId = cart[0]?.userId??""
  
  return (
    <div>
      <div className="flex flex-row  ml-[320px]">
        <div>
          <CartList data={cart} userId={userId} /> {/*Pass cart directly */}
        </div>
        <div className="py-20 pr-20">
          <CartTotals products={cart.flatMap(item => item.products)} />
          <CalculateShipping />
        </div>
      </div>
    </div>
  );
}

export default Cart;