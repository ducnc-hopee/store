import { routes } from "@/routes/config";
import { routeNames } from "@/routes/routeNames";
import { useMemo } from "react";
import { useMatch } from "react-router-dom";

export const Banner = () => {
  const isHome = useMatch(routes.home);
  const isProduct = useMatch(routes.product);
  const isProductDetail = useMatch(routes.productDetail);

  const bannerName = useMemo(() => {
    if (isHome) return routeNames.home;
    if (isProduct) return routeNames.product;
    if (isProductDetail) return routeNames.productDetail;
    return "";
  }, [isHome, isProduct, isProductDetail]);

  return <div>{bannerName}</div>;
};
