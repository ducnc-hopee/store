import React from "react";
import { Linkable } from "./commons/Linkable";
import type { TBlog } from "@/types/blog";
import pen from "/images/vector.svg";
import { Icon } from "@iconify/react";

type TBlogProps = {
  data: TBlog;
};

export const BlogItem: React.FC<TBlogProps> = ({ data }) => {
  return (
    <Linkable to={`/blog/${data.id}`} className="group block">
      <div className="rounded-[5px] shadow-sm h-[493px] cursor-pointer">
        <img className="bg-off-white rounded-[5px] w-[370px] h-[255px]" src={data.image} alt="Blog cover" />
        <div className="flex flex-col justify-start items-start p-[19px]">
          <div className="flex flex-row">
            <div className="flex flex-row items-center pr-[7.67px]">
              <img src={pen} alt="pen" className="w-[11px] h-[11px] mr-[7.67px]" />
              <h1 className="text-[14px] pr-[29px] text-navy-blue group-hover:text-pink">{data.author}</h1>
            </div>
            <div className="flex flex-row items-center pr-[4px]">
              <Icon icon="uil:calendar-alt" className="w-[12px] h-[12px] mr-[4px]" color="#FFA454" />
              <h1 className="text-[14px] pt-[3.5px] text-navy-blue group-hover:text-pink">{data.date}</h1>
            </div>
          </div>
          <div className="mt-[30px]">
            <h1 className="font-bold text-[18px] mb-[17px] text-navy-blue group-hover:text-pink">{data.title}</h1>
            <p className="text-[16px] text-gray mb-[14px] group-hover:text-pink">{data.description}</p>
          </div>
          <p className="underline text-[16px] text-navy-blue group-hover:text-pink">Read More</p>
        </div>
      </div>
    </Linkable>
  );
};

export default BlogItem;
