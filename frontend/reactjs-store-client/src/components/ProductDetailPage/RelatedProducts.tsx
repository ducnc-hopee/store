import React from "react";
import type { TProduct } from "@/types/product";
import { RelatedProduct } from "../ui/RelatedProduct";

type TProductListProps = {
  data: TProduct[] | null;
};

const RelatedProducts: React.FC<TProductListProps> = ({ data }) => {
  return !data ? (
    <>
      <h1>No Related Products!</h1>
    </>
  ) : (
    <div className="flex flex-col  items-right ml-[371px] pt-[126px]">
      <h1 className="text-navy-blue text-[36px] font-bold mb-[47px]">Related Products</h1>
      <div className=" bg-muted rounded-md text-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-5">
          {data.slice(0, 4).map((product) => (
            <RelatedProduct key={product.id} data={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;
