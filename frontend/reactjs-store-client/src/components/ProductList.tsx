import type { TProduct } from "../types/product";
import { ProductItem } from "./ProductItem";
import ProductCardRow from "./ProductRowPage/ProductCardRow";
import brandLogo from "/images/brand.png";

type TProductListProps = {
  data: TProduct[];
  viewType: "grid" | "list";
  sort: string;
  selectedRatings: number[];
  selectedPrices: [number, number][];
};

export const ProductList: React.FC<TProductListProps> = ({
  data,
  viewType,
  sort,
  selectedRatings,
  selectedPrices,
}) => {
  // Apply filters
  const filteredData = data.filter((product) => {
    const rating = parseInt(product.rating || "0");
    const price = product.discountedPrice;

    const matchesRating =
      selectedRatings.length === 0 || selectedRatings.includes(rating);

    const matchesPrice =
      selectedPrices.length === 0 ||
      selectedPrices.some(([min, max]) => price >= min && price <= max);

    return matchesRating && matchesPrice;
  });

  //  Apply sorting
  const sortedData = [...filteredData].sort((a, b) => {
    switch (sort) {
      case "Price: Low to High":
        return a.discountedPrice - b.discountedPrice;
      case "Price: High to Low":
        return b.discountedPrice - a.discountedPrice;
      default:
        return 0;
    }
  });

  return (
    <div className="w-[1200px] mr-[210px] bg-white">
      <div
        className={
          viewType === "grid"
            ? "grid grid-cols-3 gap-[12px]"
            : "flex flex-col gap-[28px]"
        }
      >
        {sortedData.slice(0, 6).map((product) =>
          viewType === "grid" ? (
            <div
              key={product.id}
              className="w-[390px] h-[623px] bg-white"
            >
              <ProductItem data={product} viewType="grid" />
            </div>
          ) : (
            <div
              key={product.id}
              className="w-[921px] h-[230px] shrink-0 bg-white shadow-[0px_0px_20px_5px_rgba(248,246,253,0.75)] rounded-md"
            >
              <ProductCardRow {...product} />
            </div>
          )
        )}

        {/* Brand logo at bottom (only in list view) */}
        {viewType === "list" && (
          <div className="w-[904px] h-[93px] mt-[200px] mr-[508px] mb-[63px] flex justify-center">
            <img src={brandLogo} alt="Brand Logo" />
          </div>
        )}
      </div>
    </div>
  );
};
