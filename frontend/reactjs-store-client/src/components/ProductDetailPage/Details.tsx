import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Button } from "@/components/ui/Button";
import { Icon } from "@iconify/react";
import PageNotFound from "@/pages/PageNotFound";
import type { TProduct } from "@/types/product";
import CircleIconButton from "../ProductRowPage/CircleIconButton";

type TProductDetailsProps = {
  data: TProduct | null;
};

const ProductDetails: React.FC<TProductDetailsProps> = ({ data }) => {
  return !data ? (
    <PageNotFound />
  ) : (
    <div className="flex flex-row items-start justify-start shadow-md ml-[371px] mt-[121px] border border-gray-200 rounded-md overflow-hidden w-[1170px] h-[509px] mb-[131px]">
      <div className="flex flex-row gap-[11px] pl-[13px] pt-[13px] justify-between">
        <div className="flex flex-col gap-3">
          <img src={data.image} className=" h-[155px] object-cover border border-gray-100 rounded-[3px]" />
          <img src={data.image} className=" h-[155px] object-cover border border-gray-100 rounded-[3px]" />
          <img src={data.image} className=" h-[155px] object-cover border border-gray-100 rounded-[3px]" />
        </div>
        <img src={data.image} alt="Main product" className="w-[375px] h-[487px] object-contain border border-gray-100 shadow rounded-md" />
      </div>

      <div className="pt-[74px] pl-[41px]">
        <h1 className="text-[36px] text-navy-blue font-semibold pb-[5px]">{data.name}</h1>

        <div className="flex items-center pb-[5px]">
          <div className="flex text-yellow-500">
            {[...Array(Number(data.rating))].map((_, i) => (
              <AiFillStar key={`fill-${i}`} />
            ))}
            {[...Array(5 - Number(data.rating))].map((_, i) => (
              <AiOutlineStar key={`empty-${i}`} className="text-gray-300" />
            ))}
          </div>
          <span className="pl-[5px] text-sm text-navy-blue">({data.numRating})</span>
        </div>

        <div className="flex gap-[18px] pb-4 h-[29px] pt-[5px]">
          <h1 className=" text-navy-blue">${data.price}</h1>
          <h1 className=" line-through text-pink">${data.discountedPrice}</h1>
        </div>

        <h2 className="text-navy-blue font-semibold pt-[12px]">Color</h2>
        <p className="text-gray font-medium pt-[12px]">{data.description}</p>

        <div className="flex pt-[14px] items-center gap-[26px] pb-[17px]">
          <Button variant="ghost">
            <span className="text-[16px] text-navy-blue">Add to cart</span>
          </Button>
          <CircleIconButton>
            <Icon icon="uil:heart-alt" color="dark-blue" />
          </CircleIconButton>
        </div>

        <div className="">
          <h2 className="text-navy-blue font-semibold pb-[10px]">Categories</h2>
          <h2 className="text-navy-blue font-semibold pb-[10px]">Tags</h2>
        </div>
        <div className="flex flex-row gap-5">
          <h1 className="text-navy-blue font-semibold pr-[17.9px]">Share</h1>
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="flex items-center justify-center w-[12px] h-[12px] rounded-full bg-navy-blue text-white hover:bg-pink transition-colors">
              <Icon icon="bx:bxl-facebook" className="w-[7.68px] h-[7.68px]" />
            </div>

            <div className="flex items-center justify-center w-[12px] h-[12px] rounded-full bg-navy-blue text-white hover:bg-pink transition-colors">
              <Icon icon="bx:bxl-instagram-alt" className="w-[7.68px] h-[7.68px]" />
            </div>
            <div className="flex items-center justify-center w-[12px] h-[12px] rounded-full bg-navy-blue text-white hover:bg-pink transition-colors">
              <Icon icon="akar-icons:twitter-fill" className="w-[7.68px] h-[7.68px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
