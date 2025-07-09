import React from "react";
import type { TProduct } from "@/types/product";
import { RelatedProduct } from "../RelatedProduct";

type TProductListProps = {
  data: TProduct[]|null;
};

const RelatedProducts: React.FC<TProductListProps> = ({ data }) => {
  return !data?(<><h1>No Related Products!</h1></>):(
    <div className="flex flex-col  items-right ml-[371px] pt-[126px]">
      <h1 className="text-navy-blue text-[36px] font-bold mb-[47px]">Related Products</h1>
      <div className=" bg-muted rounded-md text-sm">
        <div className="flex flex-row gap-[29px]">
          {data.slice(0, 4).map((product) => (
            <RelatedProduct key={product.id} data={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;
