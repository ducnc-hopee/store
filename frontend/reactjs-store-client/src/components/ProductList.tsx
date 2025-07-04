import React, { useState } from "react";
import type { TProduct } from "../types/product";
import { ProductItem } from "./ProductItem";
import FilterToolbar from "./ui/Toolbar/FilterToolbar";

type TProductListProps = {
  data: TProduct[];
};

export const ProductList: React.FC<TProductListProps> = ({ data }) => {
  const [selectedSort, setSelectedSort] = useState("Best Match");
  const [viewType, setViewType] = useState<"grid" | "list">("grid");

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
        {data.map((product) => (
          <ProductItem key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};
