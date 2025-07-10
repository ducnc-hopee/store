import { useEffect, useState } from "react";
import { getProducts } from "../services/product";
import type { TProduct } from "../types/product";
import { ProductList } from "../components/ProductList";
import SidebarFilter from "@/components/ui/SideBar/components/SideBarFilter";
import FilterToolbar from "@/components/ui/Toolbar/FilterToolbar";

const Product = () => {
  const [data, setData] = useState<TProduct[]>([]);
  const [viewType, setViewType] = useState<"grid" | "list">("grid");
  const [sort, setSort] = useState<string>("Best Match");

   const sortOptions = ["Best Match", "Price: Low to High", "Price: High to Low"];


  useEffect(() => {
    getProducts().then((products) => setData(products));
  }, []);

return (
  <div className="min-h-screen pt-[124px]">
    {/* Toolbar */}
    <div className="max-w-[1200px] mx-auto px-4">
      <FilterToolbar
        sortOptions={sortOptions}
        selectedSort={sort}
        onSortChange={setSort}
        viewType={viewType}
        onViewChange={setViewType}
      />
    </div>

    {/* Sidebar + Product List Container */}
    <div className="w-screen overflow-x-auto ml-[210px]">
      <div className="flex min-w-[1200px]">
        {/* Sidebar */}
        <div className="w-[300px] shrink-0 bg-white">
          <SidebarFilter />
        </div>

        {/* Product List */}
        <div className="flex-1 bg-white">
          <ProductList data={data} viewType={viewType} sort={sort}/>
        </div>
      </div>
    </div>
  </div>
);
};

export default Product;