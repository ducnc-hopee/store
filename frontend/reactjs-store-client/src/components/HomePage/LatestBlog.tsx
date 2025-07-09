import type { TBlog } from "@/types/blog";
import BlogItem from "../BlogItem";

type TBlogListProps = {
  data: TBlog[];
};

export const LatestBlog: React.FC<TBlogListProps> = ({ data }) => {
  return (
    <div className="flex flex-col items-center justify-center mt-[152px] mb-[80px]">
      <div className="text-navy-blue text-[42px] font-bold mb-[80px]">
        <h1>Latest Blog</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[56px] pl-[356px] pr-[342px] ">
        {data.slice(0,3).map((blog) => (
          <BlogItem key={blog.id} data={blog} />
        ))}
      </div>
    </div>
  );
};
export default LatestBlog;
