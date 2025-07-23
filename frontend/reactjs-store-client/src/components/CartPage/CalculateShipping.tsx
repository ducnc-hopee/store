import { Button } from "../ui/Button";
import { Input } from "../ui/input";

function CalculateShipping() {
  return (
    <div className="flex flex-col items-center justify-center mt-[32px]">
      <h2 className="text-xl font-bold text-navy-blue mb-[26px]">Calculate Shipping</h2>
      <div className="bg-off-white w-[371px] h-[335px] border-transparent rounded-xl">
        <div className="flex flex-col justify-between mx-[32px]">
          <div className="flex flex-row items-end justify-between mt-[44px] border-b-2 border-[#E8E6F1]">
            <Input
              defaultValue="Bangladesh"
              className="p-0 pb-[8px] shadow-none border-none focus-visible:ring-0 focus-visible:border-transparent focus:outline-none text-gray text-[14px]"
            ></Input>
          </div>
          <div className="flex flex-row items-end justify-between mt-[38px] border-b-2 border-[#E8E6F1]">
            <Input
              defaultValue="Mirpur Dhaka - 1200"
              className="p-0 pb-[8px] shadow-none border-none focus-visible:ring-0 focus-visible:border-transparent focus:outline-none text-gray text-[14px]"
            ></Input>
          </div>
          <div className="flex flex-row items-end justify-between mt-[39px] border-b-2 border-[#E8E6F1]">
            <Input
              defaultValue="Postal Code"
              className="p-0 pb-[8px] shadow-none border-none focus-visible:ring-0 focus-visible:border-transparent focus:outline-none text-gray text-[14px]"
            ></Input>
          </div>
        </div>
        <div className="flex flex-row justify-start items-center ml-[32px] mt-[32px]">
          <Button className="w-[179px] h-[41px]">
            <span>Calculate Shipping</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CalculateShipping;
