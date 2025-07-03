import ProductDetails from "@/components/ProductDetailPage/Details";
import MoreDetails from "@/components/ProductDetailPage/MoreDetails";
import RelatedProducts from "@/components/ProductDetailPage/RelatedProducts";
import { getProduct, getProducts } from "@/services/product";
import type { TProduct } from "@/types/product";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BrandLogo from "@/components/BrandLogo";

function ProductDetail() {
  const { id } = useParams();
  const [data, setData] = useState<TProduct | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<TProduct[]>([]);

  useEffect(() => {
    if (id) {
      getProduct(id).then((product) => setData(product));
    }
  }, [id]);
  useEffect(() => {
    getProducts().then((products) => setRelatedProducts(products));
  }, []);

  return (
    <div>
      <ProductDetails data={data} />
      <MoreDetails data={data} />
      <RelatedProducts data={relatedProducts} />
      <BrandLogo/>
    </div>
  );
}

export default ProductDetail;
