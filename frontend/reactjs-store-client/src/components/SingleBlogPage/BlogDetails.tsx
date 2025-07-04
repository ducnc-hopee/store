import PageNotFound from "@/pages/PageNotFound";
import type { TBlog } from "@/types/blog";
import { Icon } from "@iconify/react";
import React from "react";
import pen from "/images/vector.svg";
import type { TProduct } from "@/types/product";
import { RelatedProduct } from "../RelatedProduct";
import { Button } from "../ui/Button";
import { Linkable } from "../commons/Linkable";
import { useNavigate } from "react-router-dom";

type TBlogDetailsProps = {
  blog: TBlog | null;
  products: TProduct[] | null;
  blogs: TBlog[];
};

const BlogDetails: React.FC<TBlogDetailsProps> = ({ blog, products, blogs }) => {
  const navigate = useNavigate();

  if (!blog || blogs.length === 0) {
    return <PageNotFound />;
  }

  const currentIndex = blogs.findIndex((b) => b.id === blog.id);

  const goToPrevious = () => {
    const prevBlog = blogs[currentIndex - 1];
    if (prevBlog) {
      navigate(`/blog/${prevBlog.id}`);
    }
  };

  const goToNext = () => {
    const nextBlog = blogs[currentIndex + 1];
    if (nextBlog) {
      navigate(`/blog/${nextBlog.id}`);
    }
  };

  return (
    <div>
      <div className="rounded pb-10">
        <img className="bg-off-white rounded-2xl" src={blog.image} />
        <div className="flex flex-col justify-start items-start p-5">
          <div className="flex flex-row gap-10">
            <div className="flex flex-row gap-1">
              <img src={pen} alt="pen" />
              <h1 className="text-navy-blue bg-pantone-purple w-[160px] text-center border border-transparent rounded">{blog.author}</h1>
            </div>
            <div className="flex flex-row pr-5 items-center gap-1">
              <Icon icon="uil:calendar-alt" className="inline-block" color="#FFA454" />
              <h1 className="text-navy-blue bg-[#FFECE2] w-[160px] text-center border border-transparent rounded mx-1">{blog.date}</h1>
            </div>
          </div>
          <div className="my-5">
            <h1 className="font-bold text-navy-blue mb-2 text-[30px]">{blog.title}</h1>
            <p className="text-gray text-[16px]">{blog.description}</p>
            <p className="text-gray text-[16px] py-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dolorem aliquid quos hic animi aspernatur eos tempore repudiandae facilis
              porro unde ab odit illo officia quo in, deserunt iure provident. Lorem ipsum dolor sit amet consectetur adipisicing elit. At adipisci
              magni culpa eveniet, harum a aspernatur provident soluta. Quasi placeat odio vitae autem explicabo, doloribus animi non ut obcaecati in!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium mollitia quos adipisci velit reiciendis esse doloremque, quia amet
              sed eaque facere quasi non. Omnis officia veniam laboriosam quaerat optio fuga?
            </p>
          </div>
          <div>
            <h1 className="text-gray font-semibold italic text-lg bg-[#FAFAFB] px-5 pt-8 pb-5 border-l-2 border-pink">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo dictum sapien, amet, consequat. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Commodo dictum sapien, amet, consequat toamk risusu”
            </h1>
          </div>
          <div>
            <div className="grid grid-cols-2 gap-x-10 py-10 ">
              <img src={blog.image} alt="video"></img>
              <img src={blog.image} className=""></img>
            </div>
            <p className="text-gray">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo at asperiores cupiditate, laboriosam repellendus harum unde impedit
              voluptatem veniam eligendi maxime, consequuntur enim modi dolorum mollitia exercitationem officia incidunt adipisci. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Facere commodi unde quas, assumenda ad, at dolor nam hic nesciunt eaque voluptates sunt accusamus
              possimus. Quam facilis exercitationem aspernatur explicabo dolorem.
            </p>
          </div>
          <div>
            <div className="grid grid-cols-4 gap-5 py-15">
              {products && products.slice(0, 4).map((product) => <RelatedProduct key={product.id} data={product} />)}
            </div>
            <p className="text-gray">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt nostrum error maxime nisi fuga nihil vitae, laborum porro praesentium
              numquam debitis reiciendis delectus consequuntur quaerat atque ex commodi in quam. Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Mollitia consequatur quisquam velit natus sunt quidem minima non possimus blanditiis repellat! Provident, soluta ut dolor ipsum
              rerum quidem qui et cupiditate.
            </p>
            <p className="text-gray py-15">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloremque quibusdam reiciendis quae. Provident, vel non aliquam, alias
              ratione perferendis accusamus deleniti quibusdam veritatis labore rem earum necessitatibus eligendi? Totam. Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Cum libero facere sed unde non illo atque cumque fugit dolorum odio quisquam aperiam, optio beatae iste.
              Officiis dolor minus voluptas autem.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-3 pb-15">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple text-white hover:bg-pink transition-colors">
            <Icon icon="bx:bxl-facebook" className="w-4 h-4" />
          </div>

          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-pink text-white hover:bg-pink transition-colors">
            <Icon icon="bx:bxl-instagram-alt" className="w-4 h-4" />
          </div>
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-cyan-400 text-white hover:bg-pink transition-colors">
            <Icon icon="akar-icons:twitter-fill" className="w-4 h-4" />
          </div>
        </div>
        <div className="flex items-center justify-between bg-off-white mb-15">
          <Button
            variant="ghost"
            onClick={goToPrevious}
            disabled={currentIndex === 0}
            className={
              currentIndex === 0
                ? "text-transparent bg-transparent"
                : "text-gray px-4 py-2 border-pantone-purple rounded  hover:text-navy-blue font-medium"
            }
          >
            ← Previous Post
          </Button>
          <Button
            variant="ghost"
            onClick={goToNext}
            disabled={currentIndex === blogs.length - 1}
            className={
              currentIndex === blogs.length - 1
                ? "text-transparent bg-transparent"
                : "text-gray px-4 py-2 border-pantone-purple rounded  hover:text-navy-blue font-medium"
            }
          >
            Next Post →
          </Button>
        </div>
        <div>
          <div>
            {blogs.slice(3, 5).map((blog) => (
              <ul>
                <li className="flex flex-row shadow gap-2 my-5 w-[650px] border-1 border-gray-200 p-5 hover:shadow-2xl" key={blog.id}>
                  <Linkable to={`/blog/${blog.id}`}>
                    <img src={blog.image} className="w-[100px] h-[100px]" />
                    <div className="flex flex-col justify-center">
                      <div className="flex flex-row gap-10">
                        <h1 className="text-lg text-navy-blue text-left">{blog.title}</h1>
                        <h1 className="text-[12px] text-gray text-left py-1">{blog.date}</h1>
                      </div>
                      <div className="text-[12px] text-gray text-left">{blog.description}</div>
                    </div>
                  </Linkable>
                </li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
