import axios from "axios";
import type { TBlog } from "@/types/blog";

export const getBlogs = async (): Promise<TBlog[]> => {
  const response = await axios.get("/mock/blogData.json");
  const data = response.data as TBlog[];
  return data;
};

export const getBlog = async (id: string): Promise<TBlog> => {
  const blogs = await getBlogs();
  const blog = blogs.find((blog) => blog.id === id);
  if (!blog) {
    throw new Error(`Blog with id ${id} not found`);
  }
  return blog;
};
