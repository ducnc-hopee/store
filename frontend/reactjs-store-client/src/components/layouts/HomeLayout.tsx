import React from "react";
import { Layout } from "./Layout";
import { Outlet } from "react-router-dom";

type THomeLayoutProps = {};

export const HomeLayout: React.FC<THomeLayoutProps> = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};
