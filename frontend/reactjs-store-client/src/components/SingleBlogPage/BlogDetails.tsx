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
import ScrollToTop from "@/lib/scrollToTop";

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
      ScrollToTop();
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
      <div className="">
        <img className="bg-off-white rounded-[6px] w-[870px] h-[453px] mb-[27px]" src={blog.image} />
        <div className="flex flex-col justify-start items-start">
          <div className="flex flex-row w-[360px] h-[23px] mb-[28px]">
            <div className="flex flex-row items-center">
              <img src={pen} alt="pen" className="w-[11.3px] h-[11.3px] mr-[8px]" />
              <h1 className="text-navy-blue bg-[#FFE7F9] w-[160px] text-center border border-transparent rounded mr-[27px] h-[23px] text-[14px]">
                {blog.author}
              </h1>
            </div>
            <div className="flex flex-row items-center">
              <Icon icon="uil:calendar-alt" className=" mr-[6px]" color="#FFA454" />
              <h1 className="text-navy-blue bg-[#FFECE2] w-[127px] text-center border border-transparent rounded">{blog.date}</h1>
            </div>
          </div>
          <div className="w-[871px]">
            <h1 className="font-bold text-navy-blue mb-[23px] text-[30px] h-[35px]">{blog.title}</h1>
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
            <h1 className="text-gray h-[141px] w-[867px] font-semibold italic text-lg bg-[#FAFAFB] pl-[14px] pt-[35px] pb-[18px] border-l-2 border-pink">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo dictum sapien, amet, consequat. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Commodo dictum sapien, amet, consequat toamk risusu”
            </h1>
          </div>
          <div className="mb-[51px]">
            <div className="flex flex-row gap-x-[32.26px] mt-[43px] mb-[45px] ">
              <img src={blog.image} alt="video" className="w-[417px] h-[245px]"></img>
              <img src={blog.image} className="w-[417px] h-[245px]"></img>
            </div>
            <p className="text-gray w-[871px] text-[16px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo at asperiores cupiditate, laboriosam repellendus harum unde impedit
              voluptatem veniam eligendi maxime, consequuntur enim modi dolorum mollitia exercitationem officia incidunt adipisci. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Facere commodi unde quas, assumenda ad, at dolor nam hic nesciunt eaque voluptates sunt accusamus
              possimus. Quam facilis exercitationem aspernatur explicabo dolorem.
            </p>
          </div>
          <div>
            <div className="w-[871px] grid grid-cols-4 gap-x-[12.4px] mb-[49px]">
              {products && products.slice(0, 4).map((product) => <RelatedProduct key={product.id} data={product} />)}
            </div>
            <p className="text-gray w-[871px] mb-[32px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt nostrum error maxime nisi fuga nihil vitae, laborum porro praesentium
              numquam debitis reiciendis delectus consequuntur quaerat atque ex commodi in quam. Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Mollitia consequatur quisquam velit natus sunt quidem minima non possimus blanditiis repellat! Provident, soluta ut dolor ipsum
              rerum quidem qui et cupiditate.
            </p>
            <p className="text-gray w-[871px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloremque quibusdam reiciendis quae. Provident, vel non aliquam, alias
              ratione perferendis accusamus deleniti quibusdam veritatis labore rem earum necessitatibus eligendi? Totam. Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Cum libero facere sed unde non illo atque cumque fugit dolorum odio quisquam aperiam, optio beatae iste.
              Officiis dolor minus voluptas autem.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-x-[14px] mb-[27px] h-[41px] ml-[390px] mt-[59px]">
          <div className="flex items-center justify-center w-[25px] h-[25px] rounded-full bg-purple text-white hover:bg-pink transition-colors">
            <Icon icon="bx:bxl-facebook" className="w-[16px] h-[16px]" />
          </div>
          <div className="flex items-center justify-center w-[25px] h-[25px] rounded-full bg-pink text-white hover:bg-pink transition-colors">
            <Icon icon="bx:bxl-instagram-alt" className="w-[16px] h-[16px]" />
          </div>
          <div className="flex items-center justify-center w-[25px] h-[25px] rounded-full bg-cyan-400 text-white hover:bg-pink transition-colors">
            <Icon icon="akar-icons:twitter-fill" className="w-[16px] h-[16px]" />
          </div>
        </div>
        <div className="flex items-center justify-between bg-off-white mb-[111px] w-[882px] h-[45px] rounded-[2.3px]">
          <Button
            variant="ghost"
            onClick={goToPrevious}
            disabled={currentIndex === 0}
            className={
              currentIndex === 0
                ? "text-transparent bg-transparent"
                : "text-gray pl-[20px] py-[12.5px] border-pantone-purple rounded  hover:text-navy-blue font-medium"
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
                : "text-gray pr-[12.6px] py-[12.5px] border-pantone-purple rounded  hover:text-navy-blue font-medium"
            }
          >
            Next Post →
          </Button>
        </div>
        <div>
          <div>
            {blogs.slice(3, 5).map((blog) => (
              <ul>
                <li className="flex flex-col shadow mb-[29.8px] h-[137px] w-[667px] border-1 border-gray-200 hover:shadow-2xl" key={blog.id}>
                  <Linkable to={`/blog/${blog.id}`}>
                    <div className="flex flex-row">
                      <img src={blog.image} className="w-[103px] h-[106px] ml-[13.6px] mt-[15.8px] mr-[14.3px]" />
                      <div className="flex flex-col justify-center">
                        <div className="flex flex-row gap-x-[31.7px]">
                          <h1 className="text-lg text-navy-blue text-left">{blog.title}</h1>
                          <h1 className="text-[12px] text-gray text-left h-[15px] pt-[6px]">{blog.date}</h1>
                        </div>
                        <div className="text-[12px] text-gray text-left">{blog.description}</div>
                      </div>
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
