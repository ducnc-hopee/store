import { useState } from "react";
import type { TProduct } from "../types/product";
import { ProductItem } from "./ProductItem";
import ProductCardRow from "./ProductRowPage/ProductCardRow";
import FilterToolbar from "./ui/Toolbar/FilterToolbar";
import BrandLogo from "./BrandLogo";

type TProductListProps = {
  data: TProduct[];
};

export const ProductList: React.FC<TProductListProps> = ({ data }) => {
  const [selectedSort, setSelectedSort] = useState("Best Match");
  const [viewType, setViewType] = useState<"grid" | "list">("grid");

  const sortedData = [...data].sort((a, b) => {
    switch (selectedSort) {
      case "Price: Low to High":
        return a.discountedPrice - b.discountedPrice;
      case "Price: High to Low":
        return b.discountedPrice - a.discountedPrice;
      default:
        return 0;
    }
  });

  return (
    <div className="space-y-4">
      <FilterToolbar
        sortOptions={["Best Match", "Price: Low to High", "Price: High to Low"]}
        selectedSort={selectedSort}
        onSortChange={setSelectedSort}
        viewType={viewType}
        onViewChange={setViewType}
      />

      <div className={viewType === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" : "space-y-4"}>
        {sortedData.map((product) =>
          viewType === "grid" ? (
            <ProductItem key={product.id} data={product} viewType="grid" />
          ) : (
              <ProductCardRow key={product.id} {...product} />
          ),
        )}
      </div>
      {viewType =="list" && <BrandLogo/>}
    </div>
  );
};
