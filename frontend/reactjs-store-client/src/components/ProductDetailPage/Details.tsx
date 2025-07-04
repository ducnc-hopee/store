import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Button } from "@/components/ui/Button";
import { Icon } from "@iconify/react";
import PageNotFound from "@/pages/PageNotFound";
import type { TProduct } from "@/types/product";

type TProductDetailsProps = {
  data: TProduct | null;
};

const ProductDetails: React.FC<TProductDetailsProps> = ({ data }) => {
  return !data ? (
    <PageNotFound />
  ) : (
    <div className="flex flex-row items-start justify-center shadow-xl mx-60 my-20 border border-gray-200 rounded-md overflow-hidden">
      <div className="w-5/10 flex flex-row gap-4 p-6 justify-between">
        <div className="flex flex-col gap-3">
          <img src={data.image} className=" h-[125px] object-cover border border-gray-100 rounded-md shadow" />
          <img src={data.image} className=" h-[125px] object-cover border border-gray-100 rounded-md shadow" />
          <img src={data.image} className=" h-[125px] object-cover border border-gray-100 rounded-md shadow" />
        </div>
        <img src={data.image} alt="Main product" className="w-[254px] h-[400px] object-contain border border-gray-100 shadow rounded-md" />
      </div>

      <div className="w-7/10 py-10 px-10">
        <h1 className="text-[36px] text-navy-blue font-bold pb-2">{data.name}</h1>

        <div className="flex items-center pb-2">
          <div className="flex text-yellow-500">
            {[...Array(Number(data.rating))].map((_, i) => (
              <AiFillStar key={`fill-${i}`} />
            ))}
            {[...Array(5 - Number(data.rating))].map((_, i) => (
              <AiOutlineStar key={`empty-${i}`} className="text-gray-300" />
            ))}
          </div>
          <span className="pl-3 text-sm text-gray-500">({data.numRating})</span>
        </div>

        <div className="flex gap-4 pb-4">
          <h1 className=" text-navy-blue">${data.price}</h1>
          <h1 className=" line-through text-pink">${data.discountedPrice}</h1>
        </div>

        <h2 className="text-navy-blue font-semibold pb-1">Color</h2>
        <p className="text-gray font-medium pb-4">{data.description}</p>

        <div className="flex items-center gap-4 pb-6">
          <Button variant="ghost">
            <span className="text-[16px] text-navy-blue">Add to cart</span>
          </Button>
          <Button variant="ghost">
            <Icon icon="uil:heart-alt" color="dark-blue" />
          </Button>
        </div>

        <div className="pb-2">
          <h2 className="text-navy-blue font-semibold">Categories</h2>
          <h2 className="text-navy-blue font-semibold">Tags</h2>
        </div>
        <div className="flex flex-row gap-5 pb-2">
          <h1 className="text-navy-blue font-semibold">Share</h1>
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-navy-blue text-white hover:bg-pink transition-colors">
              <Icon icon="bx:bxl-facebook" className="w-4 h-4" />
            </div>

            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-navy-blue text-white hover:bg-pink transition-colors">
              <Icon icon="bx:bxl-instagram-alt" className="w-4 h-4" />
            </div>
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-navy-blue text-white hover:bg-pink transition-colors">
              <Icon icon="akar-icons:twitter-fill" className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
