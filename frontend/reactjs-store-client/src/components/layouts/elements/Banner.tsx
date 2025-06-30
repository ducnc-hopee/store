import { routes } from "@/routes/config";
import { routeNames } from "@/routes/routeNames";
import { useMemo } from "react";
import { useMatch } from "react-router-dom";

export const Banner = () => {
  const isProduct = useMatch(routes.product);
  const isProductDetail = useMatch(routes.productDetail);
  const isCart = useMatch(routes.cart);
  const isOrderStatus = useMatch(routes.orderStatus);
  const isAccount = useMatch(routes.account);
  const isBlog = useMatch(routes.blog);
  const isSingleBlog = useMatch(routes.singleBlog);
  const isAbout = useMatch(routes.about);
  const isContact = useMatch(routes.contact);
  const isNotFound = useMatch(routes.notFound);
  const isFaq = useMatch(routes.faq);

  const bannerName = useMemo(() => {
    if (isProduct) return routeNames.product;
    if (isProductDetail) return routeNames.productDetail;
    if (isCart) return routeNames.cart;
    if (isOrderStatus) return routeNames.orderStatus;
    if (isAccount) return routeNames.account;
    if (isBlog) return routeNames.blog;
    if (isSingleBlog) return routeNames.singleBlog;
    if (isAbout) return routeNames.about;
    if (isContact) return routeNames.contact;
    if (isNotFound) return routeNames.notFound;
    if (isFaq) return routeNames.faq;
    return "";
  }, [isProduct, isProductDetail, isCart, isOrderStatus, isAccount, isBlog, isSingleBlog, isAbout, isContact, isNotFound, isFaq]);

  return (
    <div className="w-full h-[286px] bg-off-white flex items-center justify-start px-45 py-10">
      <div>
        <h1 className="text-4xl font-bold text-navy-blue mb-3">{bannerName}</h1>
        <div className="flex items-center justify-start space-x-1 text-sm text-black">
          <p>Home . Pages </p>
          <span className="text-pink font-semibold">. {bannerName}</span>
        </div>
      </div>
    </div>
  );
};
