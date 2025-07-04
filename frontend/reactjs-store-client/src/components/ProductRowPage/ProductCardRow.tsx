import type { TProduct } from "@/types/product";
import { FaHeart, FaShoppingCart, FaSearch } from "react-icons/fa";

const ProductCardRow : React.FC<TProduct> = ({
  name,
  price,
  discountedPrice,
  description,
  image,
  rating
}) => {
  const parsedRating = parseInt(rating || "0");

  return (
    <div className="flex gap-4 p-4 border rounded-lg shadow-sm hover:shadow-md transition-all bg-white w-full">
      {/* Image */}
      <img src={image} alt={name} className="w-32 h-32 object-cover rounded" />

      {/* Info */}
      <div className="flex-1">
        <h2 className="text-sm font-bold text-primary mb-1">{name}</h2>

        {/* Price */}
        <div className="flex items-center text-sm mb-1">
          {/* Price Section */}
          <div className="flex items-baseline gap-2">
            <span className="text-[#333] font-semibold">
              ${discountedPrice.toFixed(2)}
            </span>
            {price > discountedPrice && (
              <span className="text-red-500 line-through text-xs">
                ${price.toFixed(2)}
              </span>
            )}
          </div>

          {/* Rating Section */}
          <div className="text-yellow-500 text-xs gap-2 ml-4">
            {"★".repeat(parsedRating)}
            {"☆".repeat(5 - parsedRating)}
          </div>
        </div>

        {/* Description */}
        <p className="text-xs text-gray-400 mb-2">{description}</p>

        {/* Action Icons */}
        <div className="flex gap-4 text-gray-500">
          <FaHeart className="cursor-pointer hover:text-red-400" />
          <FaShoppingCart className="cursor-pointer hover:text-blue-500" />
          <FaSearch className="cursor-pointer hover:text-purple-500" />
        </div>
      </div>
    </div>
  );
};

export default ProductCardRow;