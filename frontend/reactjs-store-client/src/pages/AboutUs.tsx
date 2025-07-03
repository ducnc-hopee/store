import { Button } from "@/components/ui/Button";
import about from "/images/aboutUs.jpg";
import { Link } from "react-router-dom";
import { routes } from "@/routes/config";
import { Icon } from "@iconify/react";
import client from "/images/client.jpg";
import { useState } from "react";
import { clientReviews } from "@/consts/reviews";
import { Tabs, TabsList, TabsTrigger } from "@radix-ui/react-tabs";

function AboutUs() {
  const [activeReview, setActiveReview] = useState(1);
  return (
    <div>
      <div className="grid grid-cols-2 mx-50 my-30 gap-15">
        <div className="relative w-[555px] h-[390px]">
          <div className="absolute left-[-15px] bg-navy-blue w-[552px] h-[409px] z-0 rounded"></div>
          <img src={about} className="relative z-10 w-full h-full object-cover rounded" alt="About" />
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="text-[36px] font-bold text-navy-blue">Know About Our Ecomerce Business, History</h1>
          <p className="text-gray font-semibold pb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique
            amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.
          </p>
          <Link to={routes.contact}>
            <Button className="w-[145px]">Contact Us</Button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-bold text-[42px] pb-15">Our Features</h1>
        <div className="grid grid-cols-4 gap-5">
          <div className="border-1 border-gray-100 shadow-lg w-[270px] p-10 flex flex-col items-center justify-center">
            <Icon icon="mdi:truck-delivery" className="w-[65px] h-[65px]" color="orange" />
            <h1 className="text-navy-blue py-5">Free Delivery</h1>
            <p className="text-gray text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
          </div>
          <div className="border-1 border-gray-100 shadow-lg w-[270px] p-10 flex flex-col items-center justify-center">
            <Icon icon="mdi:cash-refund" className="w-[65px] h-[65px]" color="blue" />
            <h1 className="text-navy-blue py-5">100% Cash Back</h1>
            <p className="text-gray text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
          </div>
          <div className="border-1 border-gray-100 shadow-lg w-[270px] p-10 flex flex-col items-center justify-center">
            <Icon icon="mdi:star-circle" className="w-[65px] h-[65px]" color="purple" />
            <h1 className="text-navy-blue py-5">Quality Product</h1>
            <p className="text-gray text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
          </div>
          <div className="border-1 border-gray-100 shadow-lg w-[270px] p-10 flex flex-col items-center justify-center">
            <Icon icon="mdi:clock-outline" className="w-[65px] h-[65px]" color="gray" />
            <h1 className="text-navy-blue py-5">24/7 Support</h1>
            <p className="text-gray text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center py-10 bg-off-white mt-20 h-[503px] mb-60">
        <h1 className="text-[42px] font-bold">Our Client Say!</h1>

        <div className="flex flex-row gap-2 py-5 items-center justify-center">
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
          <p className="text-[22px] font-semibold">{clientReviews[activeReview]?.name}</p>
          <p className="text-[12px] font-semibold text-gray">{clientReviews[activeReview]?.role}</p>
          <p className="text-center w-full px-20 py-5 font-bold text-gray max-w-[700px]">{clientReviews[activeReview]?.review}</p>
        </div>
        <div>
          <Tabs value={String(activeReview)}>
            <TabsList className="gap-x-2 flex">
              <TabsTrigger
                value="0"
                onClick={() => setActiveReview(0)}
                className="border-4 rounded border-pink w-[18px] data-[state=active]:w-[37px]"
              ></TabsTrigger>
              <TabsTrigger
                value="1"
                onClick={() => setActiveReview(1)}
                className="border-4 rounded border-pink w-[18px] data-[state=active]:w-[37px]"
              ></TabsTrigger>
              <TabsTrigger
                value="2"
                onClick={() => setActiveReview(2)}
                className="border-4 rounded border-pink w-[18px] data-[state=active]:w-[37px]"
              ></TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
