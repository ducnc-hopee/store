import  LoginPage  from '@/pages/LoginPage';
import { createBrowserRouter } from "react-router-dom";
import { HomeLayout } from "../components/layouts/HomeLayout";
import Home from "../pages/Home";
import { AppLayout } from "../components/layouts/AppLayout";
import Product from "../pages/Product";
import { routes } from "./config";
import ProductDetail from "../pages/ProductDetail";
import ShoppingCart from "../pages/ShoppingCart";
import OrderCompleted from '@/pages/OrderCompleted';
import BlogPage from '@/pages/BlogPage';
import ContactUs from '@/pages/ContactUs';
import PageNotFound from '@/pages/PageNotFound';
import AboutUs from '@/pages/AboutUs';

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
        path: routes.shoppingCart,
        Component: ShoppingCart,
      },

            {
        path: routes.orderCompleted,
        Component: OrderCompleted,
      },

      {
        path: routes.loginPage,
        Component: LoginPage,
      },
      {
      path: routes.blogPage,
      Component: BlogPage,
      },

      {
      path: routes.singleBlog,
      Component: BlogPage,
      },

      {
      path: routes.aboutUs,
      Component:AboutUs,
      },

      {
      path: routes.contactUs,
      Component: ContactUs
      },
      {
      path:"*",
      Component:PageNotFound,
      }
    ],
  },
]);