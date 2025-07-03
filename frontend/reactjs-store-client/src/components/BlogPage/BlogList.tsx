import type { TBlog } from "@/types/blog";
import React from "react";
import BlogItem from "./BlogItem";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";

type TBlogListProps = {
  data: TBlog[];
};
const BlogList: React.FC<TBlogListProps> = ({ data }) => {
  return (
    <div>
      <div>
        <Tabs defaultValue="1" className="">
          <TabsContent value="1" className="">
            <div>
              {data.slice(0, 3).map((blog) => (
                <BlogItem key={blog.id} data={blog} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="2" className="">
            <div>
              {data.slice(3, 6).map((blog) => (
                <BlogItem key={blog.id} data={blog} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="3" className="">
            <div>
              {data.slice(6, 9).map((blog) => (
                <BlogItem key={blog.id} data={blog} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="4" className="">
            <div>
              {data.slice(8, 10).map((blog) => (
                <BlogItem key={blog.id} data={blog} />
              ))}
            </div>
          </TabsContent>
          <TabsList className="py-5 gap-5 flex items-center justify-center">
            <TabsTrigger
              value="1"
              className="w-[32px] h-[24px] rounded font-semibold border border-pantone-purple text-pantone-purple data-[state=active]:bg-pink data-[state=active]:text-white"
            >
              1
            </TabsTrigger>
            <TabsTrigger
              value="2"
              className="w-[32px] h-[24px] rounded font-semibold border border-pantone-purple text-pantone-purple data-[state=active]:bg-pink data-[state=active]:text-white"
            >
              2
            </TabsTrigger>
            <TabsTrigger
              value="3"
              className="w-[32px] h-[24px] rounded font-semibold border border-pantone-purple text-pantone-purple data-[state=active]:bg-pink data-[state=active]:text-white"
            >
              3
            </TabsTrigger>
            <TabsTrigger
              value="4"
              className="w-[32px] h-[24px] rounded font-semibold border border-pantone-purple text-pantone-purple data-[state=active]:bg-pink data-[state=active]:text-white"
            >
              4
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
};

export default BlogList;
