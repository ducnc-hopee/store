import BrandLogo from "@/components/BrandLogo";
import { Button } from "@/components/ui/Button";
import { Link } from "react-router-dom";
import orderTick from "/images/orderTick.png";
import orderClock from "/images/orderClock.png";
import orderCheck from "/images/orderChecklist.png";

function OrderCompleted() {
  return (
    <div>
      <div className="flex flex-row justify-center items-center my-[181px]">
        <div className="flex flex-col items-start">
          <img src={orderClock} className="absolute w-[94px] h-[94px] text-navy-blue left-[415px] top-[630px] z-10" />
          <div className="absolute left-[462px] top-[735px] flex flex-col h-[244px]">
            {Array.from({ length: 31 }).map((_, i) => (
              <div key={i} className="border-[1px] w-[4px] h-[0px] rotate-90 border-[#D2D1D1] mb-[6px]" />
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center text-center w-[625px] h-[326px]">
          <img src={orderTick} className="w-[87px] h-[80px] mb-[22.56px]" />
          <h1 className="text-navy-blue font-bold text-[32px] mb-[28px] w-[437px]">Your Order Is Completed!</h1>
          <p className="text-gray text-[16px] w-[625px] h-[90px] leading-[30px]">
            Thank you for your order! Your order is being processed and will be completed within 3-6 hours. You will receive an email confirmation
            when your order is completed.
          </p>
          <Link to="/product">
            <Button className="w-[200px] h-[59px] mt-[10px] rounded-[3px]">Continue Shopping</Button>
          </Link>
        </div>
        <div className="flex flex-col items-center justify-start">
          <img src={orderCheck} className=" absolute left-[1483px] top-[945px] w-[70px] h-[70px]" />
          <div className="absolute left-[463px] top-[983px] flex flex-row gap-[4px] w-[1016px]">
            {Array.from({ length: 127 }).map((_, i) => (
              <div key={i} className="border-[1px] w-[4px] h-[0px] border-[#D2D1D1]" />
            ))}
          </div>
        </div>
      </div>
      <BrandLogo />
    </div>
  );
}

export default OrderCompleted;
