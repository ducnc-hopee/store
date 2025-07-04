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
    <div className="flex flex-col gap-10">
      <div>
        <h1 className="text-navy-blue font-semibold text-[22px]">Search</h1>
        <div className="flex flex-row items-center border border-gray rounded-none focus-visible:ring-[1px]">
          <Input
            placeholder="Search For Posts"
            className="border border-transparent focus-visible:outline-none focus-visible:none focus-visible:ring-0 shadow-none "
          />
          <SearchIcon className="text-gray-400 mr-3 " size={24} />
        </div>
      </div>
      <div>
        <h1 className="text-navy-blue font-semibold text-[22px] ">Categories</h1>
        <div className="mb-20">
          <Tabs defaultValue="1">
            <TabsList className="grid grid-cols-2 gap-1">
              <TabsTrigger
                value="1"
                className="text-navy-blue text-sm text-left rounded hover:bg-pink-100 data-[state=active]:bg-pink data-[state=active]:text-white data-[state=active]:no-underline"
              >
                Hobbies (14)
              </TabsTrigger>
              <TabsTrigger
                value="2"
                className="text-navy-blue text-sm text-left rounded hover:bg-pink-100 data-[state=active]:bg-pink data-[state=active]:text-white data-[state=active]:no-underline"
              >
                Women (21)
              </TabsTrigger>
              <TabsTrigger
                value="3"
                className="text-navy-blue text-sm text-left rounded hover:bg-pink-100 data-[state=active]:bg-pink data-[state=active]:text-white data-[state=active]:no-underline"
              >
                Women (21)
              </TabsTrigger>
              <TabsTrigger
                value="4"
                className="text-navy-blue text-sm text-left  rounded hover:bg-pink-100 data-[state=active]:bg-pink data-[state=active]:text-white data-[state=active]:no-underline"
              >
                Women (21)
              </TabsTrigger>
              <TabsTrigger
                value="5"
                className="text-navy-blue text-sm text-left rounded hover:bg-pink-100 data-[state=active]:bg-pink data-[state=active]:text-white data-[state=active]:no-underline"
              >
                Women (21)
              </TabsTrigger>
              <TabsTrigger
                value="6"
                className="text-navy-blue text-sm text-left rounded hover:bg-pink-100 data-[state=active]:bg-pink data-[state=active]:text-white data-[state=active]:no-underline"
              >
                Women (21)
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>
      <div>
        <h1 className="text-navy-blue font-semibold text-[22px] pb-5">Recent Post</h1>
        <div>
          {data.slice(0, 4).map((blog) => (
            <ul>
              <Linkable to={`/blog/${blog.id}`}>
                <li className="flex flex-row pb-5 gap-2" key={blog.id}>
                  <img src={blog.image} className="w-[100px] h-[70px] rounded" />
                  <div>
                    <h1 className="text-sm text-navy-blue">{blog.title}</h1>
                    <h1 className="text-[11px] text-off-purple">{blog.date}</h1>
                  </div>
                </li>
              </Linkable>
            </ul>
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-navy-blue font-semibold text-[22px] pb-5">Sale Product</h1>
        <div>
          {data.slice(0, 4).map((blog) => (
            <ul>
              <Linkable to={`/blog/${blog.id}`}>
                <li className="flex flex-row pb-5 gap-2" key={blog.id}>
                  <img src={blog.image} className="w-[100px] h-[70px] rounded" />
                  <div>
                    <h1 className="text-sm text-navy-blue">{blog.title}</h1>
                    <h1 className="text-[11px] text-off-purple">{blog.date}</h1>
                  </div>
                </li>
              </Linkable>
            </ul>
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-navy-blue font-semibold text-[22px] pb-5">Offer product</h1>
        <div className="grid grid-cols-2 grid-rows-2">
          {products.slice(0, 4).map((product) => (
            <ul>
              <Linkable to={`/product/${product.id}`}>
                <li className="flex flex-col pb-5 gap-2" key={product.id}>
                  <img src={product.image} className="w-[126px] h-[80px]" />
                  <div>
                    <h1 className="text-sm text-navy-blue text-center">{product.name}</h1>
                    <h1 className="text-[11px] text-off-purple text-center">{product.price}</h1>
                  </div>
                </li>
              </Linkable>
            </ul>
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-navy-blue font-semibold text-[22px] pb-5">Follow</h1>
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple text-white hover:bg-pink transition-colors">
            <Icon icon="bx:bxl-facebook" className="w-4 h-4" />
          </div>

          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-pink text-white hover:bg-pink transition-colors">
            <Icon icon="bx:bxl-instagram-alt" className="w-4 h-4" />
          </div>
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-cyan-400 text-white hover:bg-pink transition-colors">
            <Icon icon="akar-icons:twitter-fill" className="w-4 h-4" />
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-navy-blue font-semibold text-[22px] pb-5">Tags</h1>
        <div className="grid grid-cols-3 gap-y-5">
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
