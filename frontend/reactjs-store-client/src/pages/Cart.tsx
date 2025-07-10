import CalculateShipping from "@/components/CartPage/CalculateShipping";
import { CartList } from "@/components/CartPage/CartList";
import CartTotals from "@/components/CartPage/CartTotals";
import { useCartStore } from "@/gobalStates/useCartStore"; // ✅ Zustand store

function Cart() {
  const [data, setData] = useState<TCartItem[]>([]);

  useEffect(() => {
    getCart().then((products) => setData(products));
  }, []);

  return (
    <div>
      <div className="flex flex-row  ml-[320px]">
        <div>
        <CartList data={data} />
        </div>
        <div className="py-20 pr-20">
          <CartTotals data={cart} />
          <CalculateShipping />
        </div>
      </div>
    </div>
  );
}

export default Cart;
