import type { TProduct } from "@/types/product";
import { FaRegHeart, FaSearchPlus } from "react-icons/fa";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import CircleIconButton from "./circleIconButton";

const ProductCardRow: React.FC<TProduct> = ({ name, price, discountedPrice, description, image, rating }) => {
  const parsedRating = parseInt(rating || "0");

  return (
    <div className="flex gap-4 p-4 border rounded-lg shadow-sm hover:shadow-md transition-all bg-white w-full">
      {/* Product Image */}
      <img src={image} alt={name} className="w-32 h-32 object-cover rounded" />

      {/* Product Info */}
      <div className="flex-1">
        {/* Product Name + Color Dots */}
        <div className="flex items-center gap-2 mb-1">
          <h2 className="text-[18px] font-bold text-[color:#111C85]">{name}</h2>
          {/* Color Dots beside name */}
          <span className="w-3 h-3  rounded-full bg-[#DE9034] inline-block ml-2"></span> {/* Brown */}
          <span className="w-3 h-3  rounded-full bg-[#FB2E86] inline-block"></span> {/* Pink */}
          <span className="w-3 h-3  rounded-full bg-[#5E37FF] inline-block"></span> {/* Purple */}
        </div>

        {/* Price & Rating */}
        <div className="flex items-center text-sm mb-1">
          <div className="flex items-baseline gap-2">
            <span className="text-[#111C85] text-[14px] font-semibold">${discountedPrice.toFixed(2)}</span>
            {price > discountedPrice && <span className="text-[#FF2AAA] text-[14px] line-through text-xs">${price.toFixed(2)}</span>}
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
        <p className="text-xs text-gray-400 mb-2">{description}</p>

        {/* Action Icons */}
        <div className="flex gap-4 text-xs">
          <CircleIconButton>
            <FiShoppingCart className="w-[14px] h-[14px] relative top-[0.5px]" />
          </CircleIconButton>
          <CircleIconButton>
            <FaRegHeart className="w-[14px] h-[14px] relative top-[0.5px]" />
          </CircleIconButton>
            <CircleIconButton>
              <FaSearchPlus className="w-[14px] h-[14px] relative top-[0.5px]" />
         </CircleIconButton>
          </div>
        </div>
      </div>
  );
};

export default ProductCardRow;
