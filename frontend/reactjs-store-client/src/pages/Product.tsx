import { useEffect, useState } from "react";
import { getProducts } from "../services/product";
import type { TProduct } from "../types/product";
import { ProductList } from "../components/ProductList";
import SidebarFilter from "@/components/ui/SideBar/SideBarFilter";

const Product = () => {
  const [data, setData] = useState<TProduct[]>([]);
  
  useEffect(() => {
    getProducts().then((products) => setData(products));
  }, []);

  return (
    <div className="flex min-h-screen">
      <SidebarFilter/>
      <main className="w-3/4 p-6">
        <ProductList data={data}/>
      </main>
    </div>
  );
};

export default Product;
