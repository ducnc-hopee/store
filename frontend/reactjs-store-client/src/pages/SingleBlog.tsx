import SideBar from "@/components/BlogSideBar";
import BrandLogo from "@/components/BrandLogo";
import BlogDetails from "@/components/SingleBlogPage/BlogDetails";
import CommentForm from "@/components/SingleBlogPage/CommentForm";
import { getBlog, getBlogs } from "@/services/blogs";
import { getProducts } from "@/services/product";
import type { TBlog } from "@/types/blog";
import type { TProduct } from "@/types/product";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SingleBlog() {
  const { id } = useParams();
  const [blog, setBlog] = useState<TBlog | null>(null);
  const [blogs, setBlogs] = useState<TBlog[]>([]);
  const [products, setProducts] = useState<TProduct[]>([]);

  useEffect(() => {
    if (id) {
      getBlog(id).then((blog) => setBlog(blog));
    }
  }, [id]);

  useEffect(() => {
    getBlogs().then((blogs) => setBlogs(blogs));
  }, []);

  useEffect(() => {
    getProducts().then((products) => setProducts(products));
  }, []);

  return (
    <div>
      <div className="flex flex-row ml-[371px] mt-[125px]">
        <div className="flex flex-col">
          <BlogDetails blog={blog} products={products} blogs={blogs} />
          <div className="mt-[105px]">
            <CommentForm />
          </div>
        </div>
        <div className="flex ml-[30px]">
          <SideBar data={blogs} products={products} />
        </div>
      </div>
      <BrandLogo />
    </div>
  );
}

export default SingleBlog;
