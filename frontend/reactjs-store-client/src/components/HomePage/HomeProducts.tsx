import type { TProduct } from "@/types/product";
import { ProductItem } from "../ProductItem";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type TProductListProps = {
  data: TProduct[];
};

export const HomeProducts: React.FC<TProductListProps> = ({ data }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-navy-blue font-bold text-[42px]">Latest Products</h1>
      <Tabs defaultValue="overview">
        <TabsList className="flex gap-10 justify-center text-[18px] py-5 text-navy-blue mx-auto">
          <TabsTrigger value="overview">New Arrival</TabsTrigger>
          <TabsTrigger value="features">Best Seller</TabsTrigger>
          <TabsTrigger value="pricing">Featured</TabsTrigger>
          <TabsTrigger value="reviews">Special Offer</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="p-4 bg-muted rounded-md text-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-30">
              {data.slice(0, 8).map((product) => (
                <ProductItem key={product.id} data={product} />
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="features">
          <div className="p-4 bg-muted rounded-md text-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-30">
             Best Seller
            </div>
          </div>
        </TabsContent>

        <TabsContent value="pricing">
          <div className="p-4 bg-muted rounded-md text-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-30">
              Featured
            </div>
          </div>
        </TabsContent>

        <TabsContent value="reviews">
          <div className="p-4 bg-muted rounded-md text-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-30">
              Special Offer
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default HomeProducts;
