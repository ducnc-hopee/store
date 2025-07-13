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
      <div className="rounded-2xl hover:shadow-xl pb-10">
        <img className="bg-off-white rounded-2xl" src={data.image} />
        <div className="flex flex-col justify-start items-start p-5">
          <div className="flex flex-row gap-10">
            <div className="flex flex-row gap-1">
              <img src={pen} alt="pen" />
              <h1 className="text-navy-blue bg-pantone-purple w-[160px] text-center border border-transparent rounded">{data.author}</h1>
            </div>
            <div className="flex flex-row pr-5 items-center gap-1">
              <Icon icon="uil:calendar-alt" className="inline-block" color="#FFA454" />
              <h1 className="text-navy-blue bg-[#FFECE2] w-[160px] text-center border border-transparent rounded mx-1">{data.date}</h1>
            </div>
          </div>
          <div className="my-3">
            <h1 className="font-bold text-navy-blue mb-2">{data.title}</h1>
            <p className="text-gray">{data.description}</p>
          </div>
          <NavItem href={routes.singleBlog} isActive={pathname === routes.singleBlog}>
            <p className="hover:text-pink">Read more</p>
          </NavItem>
        </div>
      </div>
    </Linkable>
  );
};

export default BlogItem;
