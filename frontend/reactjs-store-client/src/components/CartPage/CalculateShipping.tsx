import { Button } from "../ui/Button";
import { Input } from "../ui/input";

function CalculateShipping() {
  return (
    <div className="flex flex-col items-center justify-center mt-5">
      <h2 className="text-xl font-bold text-navy-blue pb-4">Calculate Shipping</h2>
      <div className="bg-off-white w-[300px] border-transparent rounded-xl pt-5">
        <div className="flex flex-col justify-between mx-5">
          <div className="flex flex-row items-end justify-between py-1 border-b-2 border-[#E8E6F1]">
            <Input
              defaultValue="Bangladesh"
              className="shadow-none border-none focus-visible:ring-0 focus-visible:border-transparent focus:outline-none text-gray"
            ></Input>
          </div>
          <div className="flex flex-row items-end justify-between py-1 border-b-2 border-[#E8E6F1]">
            <Input
              defaultValue="Mirpur Dhaka - 1200"
              className="shadow-none border-none focus-visible:ring-0 focus-visible:border-transparent focus:outline-none text-gray"
            ></Input>
          </div>
          <div className="flex flex-row items-end justify-between py-1 border-b-2 border-[#E8E6F1]">
            <Input
              defaultValue="Postal Code"
              className="shadow-none border-none focus-visible:ring-0 focus-visible:border-transparent focus:outline-none text-gray"
            ></Input>
          </div>
        </div>
        <div className="flex flex-row justify-start items-center py-5 mx-5">
          <Button className="">
            <span>Calculate Shipping</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CalculateShipping;
