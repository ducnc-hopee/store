import BrandLogo from "@/components/BrandLogo";
import { Button } from "@/components/ui/Button";
import { Icon } from "@iconify/react";
import { CircleCheckBig } from "lucide-react";
import { Link } from "react-router-dom";

function OrderCompleted() {
  return (
    <div>
      <div className="flex flex-row justify-center items-center gap-10 px-20 mt-40 mb-50">
        <div className="flex flex-col items-start">
          <Icon icon="mdi:clock-outline" className=" absolute w-[94px] h-[94px] text-navy-blue mb-[-6px] left-[280px] top-[630px] z-10" />
          <div className="left-[324px] top-[720px] absolute h-[300px] border-l-2 border-dashed border-gray" />
        </div>
        <div className="flex flex-col items-center text-center max-w-[600px]">
          <CircleCheckBig className="w-[65px] h-[65px] mb-5 text-pink" />
          <h1 className="text-navy-blue font-bold text-[32px] md:text-[42px]">Your Order Is Completed!</h1>
          <p className="text-gray font-semibold mt-4">
            Thank you for your order! Your order is being processed and will be completed within 3-6 hours. You will receive an email confirmation
            when your order is completed.
          </p>
          <Link to="/product">
            <Button className="w-[200px] h-[60px] mt-10">Continue Shopping</Button>
          </Link>
        </div>
        <div className="flex flex-col items-center justify-start">
          <Icon icon="mdi:clipboard-check-outline" className=" absolute left-[1200px] top-[990px] w-[64px] h-[64px] text-pink" />
          <div className="left-[324px] top-[1020px] absolute w-[885px] border-b-2 border-dashed border-gray " />
        </div>
      </div>
      <BrandLogo />
    </div>
  );
}

export default OrderCompleted;
