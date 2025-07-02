import { useEffect, useState } from "react";
import { getProducts } from "../services/product";
import type { TProduct } from "../types/product";
import { ProductList } from "../components/ProductList";

const Product = () => {
  const [data, setData] = useState<TProduct[]>([]);
  
  useEffect(() => {
    getProducts().then((products) => setData(products));
  }, []);

  return <ProductList data={data} />;
};

export default Product;
