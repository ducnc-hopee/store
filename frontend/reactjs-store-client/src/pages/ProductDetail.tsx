import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../services/product";
import type { TProduct } from "../types/product";

const ProductDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState<TProduct | null>(null);
  
  useEffect(() => {
    if (id) {
      getProduct(id).then((product) => setData(product));
    }
  }, [id]);

  return <div>{data?.name}</div>;
};

export default ProductDetail;
