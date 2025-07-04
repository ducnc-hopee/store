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
import Contact from "../pages/Contact";
import Blog from "@/pages/Blog";
import Cart from "@/pages/Cart";

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
        path: routes.cart, /*config*/
        Component: ShoppingCart, /* pages*/
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
      Component: BlogPage,
      },

      {
      path: routes.singleBlog,
      Component: BlogPage,
      },

      {
      path: routes.about,
      Component:AboutUs,
      },

      {
      path: routes.contact,
      Component: ContactUs
      },
      {
      path:"*",
      Component:PageNotFound,
      },
      {
        path: routes.blog,
        Component: Blog,
      },
      {
        path: routes.contact,
        Component: Contact,
      },
      {
        path: routes.cart,
        Component: Cart,
      },
    ],
  },
]);
