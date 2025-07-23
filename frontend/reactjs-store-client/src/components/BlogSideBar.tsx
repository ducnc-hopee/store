import React from "react";
import { Input } from "./ui/input";
import { SearchIcon } from "lucide-react";
import { TabsTrigger, Tabs, TabsList, TabsContent } from "./ui/tabs";
import type { TBlog } from "@/types/blog";
import type { TProduct } from "@/types/product";
import { Icon } from "@iconify/react";
import { NavItem } from "./ui/NavItem";
import { Linkable } from "./commons/Linkable";

type TSideBarProps = {
  data: TBlog[];
  products: TProduct[];
};

const SideBar: React.FC<TSideBarProps> = ({ data, products }) => {
  return (
    <div className="flex flex-col">
      <div>
        <h1 className="text-navy-blue font-semibold text-[22px] mb-[15px]">Search</h1>
        <div className="flex flex-row items-center border border-[#BDBDD8] focus-visible:ring-[1px] h-[40px] w-[270px] rounded-[2px] mb-[52px]">
          <Input
            placeholder="Search For Posts"
            className="border border-transparent focus-visible:outline-none focus-visible:none focus-visible:ring-0 shadow-none "
          />
          <SearchIcon className="text-[#BDBDD8] mr-[26px] " size={24} />
        </div>
      </div>
      <div className="w-[254px] h-[161px] mb-[37px]">
        <h1 className="text-navy-blue font-semibold text-[22px] mb-[25px] h-[22px] ">Categories</h1>
        <div className="mb-[]">
          <Tabs defaultValue="1">
            <TabsList className="grid grid-cols-2 gap-x-[10px] gap-y-[12px]">
              <TabsTrigger
                value="1"
                className="h-[30px] w-[122px] text-navy-blue text-sm text-left rounded justify-start hover:bg-pink-100 data-[state=active]:bg-pink data-[state=active]:text-white data-[state=active]:no-underline"
              >
                Hobbies (14)
              </TabsTrigger>
              <TabsTrigger
                value="2"
                className="h-[30px] w-[122px] text-navy-blue text-sm text-left rounded justify-start hover:bg-pink-100 data-[state=active]:bg-pink data-[state=active]:text-white data-[state=active]:no-underline"
              >
                Women (21)
              </TabsTrigger>
              <TabsTrigger
                value="3"
                className="h-[30px] w-[122px] text-navy-blue text-sm text-left rounded justify-start hover:bg-pink-100 data-[state=active]:bg-pink data-[state=active]:text-white data-[state=active]:no-underline"
              >
                Women (21)
              </TabsTrigger>
              <TabsTrigger
                value="4"
                className="h-[30px] w-[122px]  text-navy-blue text-sm text-left justify-start rounded hover:bg-pink-100 data-[state=active]:bg-pink data-[state=active]:text-white data-[state=active]:no-underline"
              >
                Women (21)
              </TabsTrigger>
              <TabsTrigger
                value="5"
                className="h-[30px] w-[122px]  text-navy-blue text-sm justify-start text-left rounded hover:bg-pink-100 data-[state=active]:bg-pink data-[state=active]:text-white data-[state=active]:no-underline"
              >
                Women (21)
              </TabsTrigger>
              <TabsTrigger
                value="6"
                className="h-[30px] w-[122px] text-navy-blue text-sm text-left justify-start rounded hover:bg-pink-100 data-[state=active]:bg-pink data-[state=active]:text-white data-[state=active]:no-underline"
              >
                Women (21)
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>
      <div className="flex flex-col mb-[15px]">
        <h1 className="text-navy-blue font-semibold text-[22px] h-[22px] mb-[37px]">Recent Post</h1>
        <div className="gap-y-[22px]">
          {data.slice(0, 4).map((blog) => (
            <ul className="">
              <Linkable to={`/blog/${blog.id}`}>
                <li className="flex flex-row w-[250px] h-[51px] mb-[22px]" key={blog.id}>
                  <img src={blog.image} className="w-[70px] h-[51px] mr-[6px]" />
                  <div>
                    <h1 className="text-sm text-navy-blue mb-[5px] h-[14px] whitespace-nowrap mt-[7px]">{blog.title}</h1>
                    <h1 className="text-[11px] text-gray h-[13px]">{blog.date}</h1>
                  </div>
                </li>
              </Linkable>
            </ul>
          ))}
        </div>
      </div>
      <div className=" ">
        <h1 className="text-navy-blue font-semibold text-[22px] mb-[37px]">Sale Product</h1>
        <div>
          {data.slice(0, 4).map((blog) => (
            <ul>
              <Linkable to={`/blog/${blog.id}`}>
                <li className="flex flex-row mb-[15px]" key={blog.id}>
                  <img src={blog.image} className="w-[70px] h-[57px] rounded-[3px] mr-[6px]" />
                  <div>
                    <h1 className="text-sm text-navy-blue h-[14px] whitespace-nowrap mb-[5px] mt-[7px]">{blog.title}</h1>
                    <h1 className="text-[11px] text-gray h-[13px] ">{blog.date}</h1>
                  </div>
                </li>
              </Linkable>
            </ul>
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-navy-blue font-semibold text-[22px] mt-[22px] mb-[37px]">Offer product</h1>
        <div className="grid grid-cols-2 grid-rows-2 w-[267px] h-[282px] gap-x-[15px] gap-y-[30px] mb-[37px]">
          {products.slice(0, 4).map((product) => (
            <ul>
              <Linkable to={`/product/${product.id}`}>
                <li className="flex flex-col" key={product.id}>
                  <img src={product.image} className="w-[126px] h-[80px] mb-[9px]" />
                  <div>
                    <h1 className="text-sm text-navy-blue text-center whitespace-nowrap mb-[6px]">{product.name}</h1>
                    <h1 className="text-[12px] text-gray text-center">{product.price}</h1>
                  </div>
                </li>
              </Linkable>
            </ul>
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-navy-blue font-semibold text-[22px] h-[22px] mb-[15px]">Follow</h1>
        <div className="flex items-center gap-x-[14px] mb-[38px] h-[41px]">
          <div className="flex items-center justify-center w-[25px] h-[25px] rounded-full bg-purple text-white hover:bg-pink transition-colors">
            <Icon icon="bx:bxl-facebook" className="w-[16px] h-[16px]" />
          </div>

          <div className="flex items-center justify-center w-[25px] h-[25px] rounded-full bg-pink text-white hover:bg-pink transition-colors">
            <Icon icon="bx:bxl-instagram-alt" className="w-[16px] h-[16px]" />
          </div>
          <div className="flex items-center justify-center w-[25px] h-[25px] rounded-full bg-cyan-400 text-white hover:bg-pink transition-colors">
            <Icon icon="akar-icons:twitter-fill" className="w-[16px] h-[16px]" />
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-navy-blue font-semibold text-[22px] h-[22px] mb-[18px]">Tags</h1>
        <div className="grid grid-cols-3 gap-y-[12px]">
          <NavItem isActive={false} href="#">
            <h1 className="underline">General</h1>
          </NavItem>
          <NavItem isActive={true} href="#">
            <h1 className="underline">Atsanil</h1>
          </NavItem>
          <NavItem isActive={false} href="#">
            <h1 className="underline">Insas.</h1>
          </NavItem>
          <NavItem isActive={false} href="#">
            <h1 className="underline">Bibsaas</h1>
          </NavItem>
          <NavItem isActive={false} href="#">
            <h1 className="underline">Nulla.</h1>
          </NavItem>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
