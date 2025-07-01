import React from "react";
import { Linkable } from "./commons/Linkable";
import type { TBlog } from "@/types/blog";
import { NavItem } from "./ui/NavItem";
import { routes } from "@/routes/config";
import pen from "/images/vector.svg";
import { Icon } from "@iconify/react";
import { useLocation } from "react-router-dom";
import { Calendar } from "lucide-react";

type TBlogProps = {
  data: TBlog;
};

export const BlogItem: React.FC<TBlogProps> = ({ data }) => {
  const { pathname } = useLocation();
  return (
    <Linkable to={`/blog/${data.id}`}>
      <div className="rounded-2xl shadow-lg hover:shadow-xl">
        <img className="bg-off-white rounded-2xl" src={data.image} />
        <div className="flex flex-col justify-start items-start p-5">
          <div className="flex flex-row justify-between w-full">
            <div className="flex flex-row gap-1">
              <img src={pen} alt="pen" />
              <h1 className="text-navy-blue">{data.author}</h1>
            </div>
            <div className="flex flex-row pr-5">
              <Icon icon="uil:calendar-alt" className="inline-block mr-1" color="#FFA454" />
              <h1 className="text-navy-blue">{data.date}</h1>
            </div>
          </div>
          <div className="my-3">
            <h1 className="font-bold text-navy-blue mb-2">{data.title}</h1>
            <p>{data.description}</p>
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
