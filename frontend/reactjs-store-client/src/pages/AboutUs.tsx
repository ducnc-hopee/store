import { Button } from "@/components/ui/Button";
import about from "/images/aboutUs.jpg";
import { Link } from "react-router-dom";
import { routes } from "@/routes/config";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { clientReviews } from "@/consts/reviews";
import { Tabs, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import Truck from "@/components/icon/Truck";
import Cashback from "@/components/icon/Cashback";
import Quality from "@/components/icon/Quality";
import Support from "@/components/icon/Support";

function AboutUs() {
  const [activeReview, setActiveReview] = useState(1);
  return (
    <div>
      <div className="grid grid-cols-2 mt-[119px] gap-x-[30px] mb-[160px]">
        <div className="relative w-[555px] h-[390px] ml-[390px]">
          <div className="absolute left-[-15px] bg-navy-blue w-[552px] h-[409px] z-0 rounded"></div>
          <img src={about} className="relative z-10 w-full h-full object-cover rounded" alt="About" />
        </div>
        <div className="flex flex-col">
          <h1 className="text-[36px] font-bold text-navy-blue h-[96px] mt-[41px] w-[522px]">Know About Our Ecomerce Business, History</h1>
          <p className="text-gray font-semibold mt-[14px] w-[550px] mb-[100px] h-[49px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique
            amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.
          </p>
          <Link to={routes.contact}>
            <Button className="w-[145px] h-[44px]">
              <p className="text-[18px]">Contact Us</p>
            </Button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-bold text-[42px] mb-[67px]">Our Features</h1>
        <div className="grid grid-cols-4 gap-[28px]">
          <div className="border-1 border-gray-100 shadow-lg w-[270px] h-[320px] flex flex-col items-center pt-[62px]">
            <Truck />
            <h1 className="text-navy-blue text-[22px] font-semibold mb-[20px] mt-[21px]">Free Delivery</h1>
            <p className="text-gray text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
          </div>
          <div className="border-1 border-gray-100 shadow-lg w-[270px] flex flex-col items-center pt-[62px]">
            <Cashback />
            <h1 className="text-navy-blue text-[22px] font-semibold mb-[20px] mt-[21px]">100% Cash Back</h1>
            <p className="text-gray text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
          </div>
          <div className="border-1 border-gray-100 shadow-lg w-[270px] flex flex-col items-center pt-[62px]">
            <Quality />
            <h1 className="text-navy-blue text-[22px] font-semibold mb-[20px] mt-[21px]">Quality Product</h1>
            <p className="text-gray text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
          </div>
          <div className="border-1 border-gray-100 shadow-lg w-[270px] flex flex-col items-center pt-[62px]">
            <Support />
            <h1 className="text-navy-blue text-[22px] font-semibold mb-[20px] mt-[21px]">24/7 Support</h1>
            <p className="text-gray text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center pt-[71px] bg-off-white mt-[133px] h-[503px] mb-[305px]">
        <h1 className="text-[42px] font-bold mb-[64px] h-[26px]">Our Client Say!</h1>

        <div className="flex flex-row gap-[13px] items-center justify-center mb-[25px]">
          {clientReviews.map((client, index) => (
            <img
              key={index}
              src={client.image}
              alt={client.name}
              className={`w-[55px] h-[55px] object-cover ${activeReview === index ? "" : "mt-2"}`}
            />
          ))}
        </div>
        <div className="flex flex-col items-center">
          <p className="text-[22px] h-[26px] font-semibold">{clientReviews[activeReview]?.name}</p>
          <p className="text-[12px] font-semibold text-gray mb-[14px]">{clientReviews[activeReview]?.role}</p>
          <p className="text-center h-[97px] mb-[14px] font-bold text-gray max-w-[689px]">{clientReviews[activeReview]?.review}</p>
        </div>
        <div>
          <Tabs value="1">
            <TabsList className="gap-x-2 flex">
              <TabsTrigger
                value="0"
                onClick={() => setActiveReview(0)}
                className={`border-4 rounded border-pink ${activeReview === 0 ? "w-[37px]" : "w-[18px]"}`}
              />
              <TabsTrigger
                value="1"
                onClick={() => setActiveReview(1)}
                className={`border-4 rounded border-pink ${activeReview === 1 ? "w-[37px]" : "w-[18px]"}`}
              />

              <TabsTrigger
                value="2"
                onClick={() => setActiveReview(2)}
                className={`border-4 rounded border-pink ${activeReview === 2 ? "w-[37px]" : "w-[18px]"}`}
              />
            </TabsList>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
