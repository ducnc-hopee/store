import Categories from "@/components/HomePage/HomeCategories";
import HomeBanner from "@/components/HomePage/HomeBanner";
import { getProducts } from "@/services/product";
import type { TProduct } from "@/types/product";
import { useEffect, useState } from "react";
import BlogList from "@/components/HomePage/BlogList";
import HomeProducts from "@/components/HomePage/HomeProducts";
import { getBlogs } from "@/services/blogs";
import type { TBlog } from "@/types/blog";

const Home = () => {
  const [data, setData] = useState<TProduct[]>([]);
  const [dataBlog, setDataBlog] = useState<TBlog[]>([]);

  useEffect(() => {
    getBlogs().then((blogs) => setDataBlog(blogs));
  }, []);

  useEffect(() => {
    getProducts().then((products) => setData(products));
  }, []);
  return (
    <div>
      <HomeBanner />
      <HomeProducts data={data} />
      <Categories />
      <BlogList data={dataBlog} />
    </div>
  );
};

export default Home;
