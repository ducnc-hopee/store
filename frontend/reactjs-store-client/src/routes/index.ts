import { createBrowserRouter } from "react-router-dom";
import { HomeLayout } from "../components/layouts/HomeLayout";
import Home from "../pages/Home";
import { AppLayout } from "../components/layouts/AppLayout";
import Product from "../pages/Product";
import { routes } from "./config";
import ProductDetail from "../pages/ProductDetail";

export const routerConfig = createBrowserRouter([
  {
    Component: HomeLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
  {
    Component: AppLayout,
    children: [
      {
        path: routes.product,
        Component: Product,
      },
      {
        path: routes.productDetail,
        Component: ProductDetail,
      },
    ],
  },
]);