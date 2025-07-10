import type { TProduct } from "@/types/product";
import { FaRegHeart } from "react-icons/fa";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import CircleIconButton from "./CircleIconButton";
import { Icon } from '@iconify/react';
import searchPlus from '@iconify/icons-uil/search-plus';


const ProductCardRow: React.FC<TProduct> = ({ name, price, discountedPrice, description, image, rating }) => {
  const parsedRating = parseInt(rating || "0");

  return (
    <div className="w-[1000px] h-[230px] shrink-0 flex gap-6 p-6 rounded-[6px] bg-white shadow-[0px_0px_20px_5px_rgba(248,246,253,0.75)]">
      {/* Product Image */}
      <img src={image} alt={name} className="w-284px h-197px object-cover rounded px-[18px] border" />

      {/* Product Info */}
      <div className="flex-1">
        {/* Product Name + Color Dots */}
        <div className="flex items-center gap-2 mb-1">
          <h2
            className="text-[18px] font-bold text-[color:#111C85]"
            style={{
              width: "210px",
              height: "18px",
              marginTop:"30px",
              marginBottom:"13px",
            }}
          >
            {name}
          </h2>
          {/* Color Dots beside name */}
          <span className="w-[11px] h-[11px]  rounded-full bg-[#DE9034] inline-block mt-[25px]"></span> {/* Brown */}
          <span className="w-[11px] h-[11px]  rounded-full bg-[#FB2E86] inline-block mt-[25px]"></span> {/* Pink */}
          <span className="w-[11px] h-[11px]  rounded-full bg-[#5E37FF] inline-block mt-[25px]"></span> {/* Purple */}
        </div>

        {/* Price & Rating */}
        <div className="flex items-center text-sm mb-1">
          <div className="flex items-baseline gap-2">
            <span className="font-josefin text-[#111C85] text-[16px] w-[43px] font-normal leading-none  mr-[9px] ">${discountedPrice.toFixed(2)}</span>
            {price > discountedPrice && <span className="text-[#FF2AAA] text-[16px] line-through text-xs">${price.toFixed(2)}</span>}
          </div>

          {/* Rating Stars */}
          <div className="text-yellow-500 text-xs gap-2 ml-4 flex">
            {[...Array(parsedRating)].map((_, i) => (
              <AiFillStar key={`filled-${i}`} />
            ))}
            {[...Array(5 - parsedRating)].map((_, i) => (
              <AiOutlineStar key={`outline-${i}`} />
            ))}
          </div>
        </div>

        {/* Description */}
        <p className="text-[16px] w-[536px] h-[42px] text-gray-400 mb-2 mt-[10px]">{description}</p>

        {/* Action Icons */}
        <div className="flex gap-4 text-xs mt-28px">
          <CircleIconButton>
            <FiShoppingCart className="w-[15px] h-[15px] relative top-[0.5px]" />
          </CircleIconButton>
          <CircleIconButton>
            <FaRegHeart className="w-[15px] h-[15px] relative top-[0.5px]" />
          </CircleIconButton>
          <CircleIconButton>
            <Icon icon={searchPlus} className="w-[15px] h-[15px] relative top-[0.5px]" />
          </CircleIconButton>
        </div>
      </div>
    </div>
  );
};

export default ProductCardRow;
