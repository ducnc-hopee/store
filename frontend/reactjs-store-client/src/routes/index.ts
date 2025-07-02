import  LoginPage  from '@/pages/LoginPage';
import { createBrowserRouter } from "react-router-dom";
import { HomeLayout } from "../components/layouts/HomeLayout";
import Home from "../pages/Home";
import { AppLayout } from "../components/layouts/AppLayout";
import Product from "../pages/Product";
import { routes } from "./config";
import ProductDetail from "../pages/ProductDetail";
import OrderCompleted from '@/pages/OrderCompleted';
import PageNotFound from '@/pages/PageNotFound';
import AboutUs from '@/pages/AboutUs';
import Cart from '@/pages/Cart';
import Blog from '@/pages/Blog';
import SingleBlog from '@/pages/SingleBlog';
import ContactUs from '@/pages/ContactUs';

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

      {
        path: routes.cart,
        Component: Cart,
      },

            {
        path: routes.orderStatus,
        Component: OrderCompleted,
      },

      {
        path: routes.account,
        Component: LoginPage,
      },
      {
      path: routes.blog,
      Component: Blog,
      },

      {
      path: routes.singleBlog,
      Component: SingleBlog,
      },

      {
      path: routes.about,
      Component:AboutUs,
      },

      {
      path: routes.contact,
      Component: ContactUs,
      },
      {
      path:"*",
      Component:PageNotFound,
      }
    ],
  },
]);
