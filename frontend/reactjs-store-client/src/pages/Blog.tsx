import BlogList from "@/components/BlogPage/BlogList";
import SideBar from "@/components/BlogSideBar";
import BrandLogo from "@/components/BrandLogo";
import { getBlogs } from "@/services/blogs";
import { getProducts } from "@/services/product";
import type { TBlog } from "@/types/blog";
import type { TProduct } from "@/types/product";
import { useEffect, useState } from "react";

function Blog() {
  const [blogs, setBlogs] = useState<TBlog[]>([]);
  const [products, setProducts] = useState<TProduct[]>([]);

  useEffect(() => {
    getBlogs().then((blogs) => setBlogs(blogs));
  }, []);

  useEffect(() => {
    getProducts().then((products) => setProducts(products));
  }, []);

  return (
    <div>
      <div className="flex flex-row ml-[371px] mt-[125px]">
        <div className="">
          <BlogList data={blogs} />
        </div>
        <div className="ml-[58px]">
          <SideBar data={blogs} products={products} />
        </div>
      </div>
      <BrandLogo />
    </div>
  );
}

export default Blog;
