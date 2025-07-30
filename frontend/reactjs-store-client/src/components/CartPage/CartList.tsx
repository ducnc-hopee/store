import { Button } from "../ui/Button";
import CartItem from "./CartItem";
import { useCartStore } from "@/gobalStates/useCartStore";

export default function CartList() {
  const cart = useCartStore((state) => state.cart); // Get cart from Zustan
  const clearCart = useCartStore((state) => state.clearCart);
  const fetchCart = useCartStore((state) => state.fetchCart);
  const userId = "6881a8adf936c7791d186ccb"; // Replace with actual user ID

  const handleUpdateCart = async () => {
    await fetchCart(userId);
    alert("Cart updated!");
  };

  const handleClearCart = async () => {
    await clearCart(userId);
    alert("Cart cleared!");
  };

  return (
    <div className="flex flex-col py-20 pr-20">
      <div className="grid grid-cols-5 text-[20px] text-navy-blue font-bold py-2">
        <div className="col-span-2">Product</div>
        <div className="text-center">Price</div>
        <div className="text-center pl-7">Quantity</div>
        <div className="text-right">Total</div>
      </div>

      <div>
        {cart
          ?.filter((cartItem) => cartItem?.item && cartItem?.product)
          .map((cartItem) => (
            <CartItem
              key={cartItem.item._id}
              cartItem={cartItem.item}
              product={cartItem.product}
            />
          ))}
      </div>


      <div className="flex flex-row justify-between py-10">
        <Button onClick={handleUpdateCart}>Update Cart</Button>
        <Button onClick={handleClearCart}>Clear Cart</Button>
      </div>
    </div>
  );
}
