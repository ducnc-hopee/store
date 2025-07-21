import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Button } from "@/components/ui/Button";
import { Icon } from "@iconify/react";
import PageNotFound from "@/pages/PageNotFound";
import type { TProduct } from "@/types/product";
import CircleIconButton from "../ProductRowPage/CircleIconButton";
import { useCartStore } from "@/gobalStates/useCartStore";
import React, {useState} from "react";

type TProductDetailsProps = {
  data: TProduct | null;
  userId: string;
  selectedColor?: string | null;
};

const ProductDetails: React.FC<TProductDetailsProps> = ({ data, userId}) => {
  const addToCart = useCartStore((state) => state.addToCart);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  if (!data) return <PageNotFound />;

  const handleAddToCart = () => {
    if (!data) return;

    const product = {
      id: data.id,
      name: data.name,
      price: data.discountedPrice, // use correct price field
      quantity: 1,
      image: data.image,
    };

    const cartItem = {
      userId: userId,
      products: [product],
    };

    addToCart(cartItem);
    alert("Added to cart!");
  };

  return (
    <div className="flex flex-row items-start justify-center shadow-xl mx-60 my-20 border border-gray-200 rounded-md overflow-hidden">
      <div className="w-5/10 flex flex-row gap-4 p-6 justify-between">
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

        <div className="flex gap-4 pb-4">
          <h1 className=" text-navy-blue">${data.discountedPrice}</h1>
          <h1 className=" line-through text-pink">${data.price}</h1>
        </div>

        <h2 className="text-navy-blue font-semibold pb-1">Color</h2>

        {data.colors && data.colors.length > 0 && (
          <div className="flex gap-2 pb-3">
            {data.colors.map((color) => (
              <button
                key={color}
                onClick={()=> setSelectedColor(color)}
                className={`w-6 h-6 rounded-full border transition-transform duration-150 ${selectedColor === color ? "border-black scale-110" : "border-gray-300"}`}
                style={{ backgroundColor: color }}
                title={color}
              />
            ))}
          </div>
        )}

        <p className="text-gray font-medium pb-4">{data.description}</p>

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
