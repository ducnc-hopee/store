import React from "react";
import type { TBlog } from "@/types/blog";
import { Linkable } from "../commons/Linkable";
import { Icon } from "@iconify/react";
import { NavItem } from "../ui/NavItem";
import { routes } from "@/routes/config";
import { useLocation } from "react-router-dom";
import pen from "/images/vector.svg";

type TBlogItemProps = {
  data: TBlog;
};

const BlogItem: React.FC<TBlogItemProps> = ({ data }) => {
  const { pathname } = useLocation();
  return (
    <Linkable to={`/blog/${data.id}`}>
      <div className="hover:shadow-xl ">
        <img className="bg-off-white rounded-[6px] w-[870px] h-[453px] mb-[27px]" src={data.image} />
        <div className="flex flex-col justify-start items-start">
          <div className="flex flex-row w-[360px] h-[23px] mb-[28px]">
            <div className="flex flex-row items-center">
              <img src={pen} alt="pen" className="w-[11.3px] h-[11.3px] mr-[8px]" />
              <h1 className="text-navy-blue bg-[#FFE7F9] w-[160px] text-center border border-transparent rounded mr-[27px] h-[23px] text-[14px]">{data.author}</h1>
            </div>
            <div className="flex flex-row items-center">
              <Icon icon="uil:calendar-alt" className=" mr-[6px]" color="#FFA454" />
              <h1 className="text-navy-blue bg-[#FFECE2] w-[127px] text-center border border-transparent rounded">{data.date}</h1>
            </div>
          </div>
          <div className="">
            <h1 className="font-bold text-navy-blue text-[30px] h-[35px] w-[729px] mb-[23px]">{data.title}</h1>
            <p className="text-gray text-[16px] w-[852px] mb-[31px] ">{data.description}</p>
          </div>
          <NavItem href={routes.singleBlog} isActive={pathname === routes.singleBlog}>
            <p className="hover:text-pink mb-[40px] text-[18px]">Read more</p>
          </NavItem>
        </div>
      </div>
    </Linkable>
  );
};

export default BlogItem;
