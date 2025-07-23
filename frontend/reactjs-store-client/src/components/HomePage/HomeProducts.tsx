import type { TProduct } from "@/types/product";
import { ProductItem } from "../ProductItem";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type TProductListProps = {
  data: TProduct[];
};

export const HomeProducts: React.FC<TProductListProps> = ({ data }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-navy-blue font-bold text-[42px] w-[338px] mt-[64px]">Latest Products</h1>
      <Tabs defaultValue="overview">
        <TabsList className="flex justify-center items-center text-[18px] text-navy-blue p-0 mt-[19px] ml-[671px] gap-[58px] mr-[722px] mb-[64px]">
          <TabsTrigger value="overview" className="flex items-center justify-center whitespace-nowrap p-0">
            New Arrival
          </TabsTrigger>
          <TabsTrigger value="features" className="flex items-center justify-center whitespace-nowrap p-0">
            Best Seller
          </TabsTrigger>
          <TabsTrigger value="pricing" className="flex items-center justify-center whitespace-nowrap p-0 ">
            Featured
          </TabsTrigger>
          <TabsTrigger value="reviews" className="flex items-center justify-center whitespace-nowrap p-0">
            Special Offer
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="mb-[115px]">
            <div className="grid grid-cols-4 gap-[12px] mx-[162px] w-[1596px] h-[1258px]">
              {data.slice(0, 8).map((product) => (
                <ProductItem key={product.id} data={product} />
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="features">
          <div className="mb-[115px]">
            <div className="mx-[162px] w-[1596px] h-[1258px]">Best Seller</div>
          </div>
        </TabsContent>

        <TabsContent value="pricing">
          <div className="mb-[115px]">
            <div className="mx-[162px] w-[1596px] h-[1258px]">Featured</div>
          </div>
        </TabsContent>

        <TabsContent value="reviews">
          <div className="mb-[115px]">
            <div className="mx-[162px] w-[1596px] h-[1258px]">Special Offer</div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default HomeProducts;
