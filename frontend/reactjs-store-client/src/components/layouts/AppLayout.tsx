import React from "react";
import { Banner } from "./elements/Banner";
import { Layout } from "./Layout";
import { Outlet } from "react-router-dom";

type TAppLayoutProps = {
};

export const AppLayout: React.FC<TAppLayoutProps> = () => {
  return (
    <Layout>
      <Banner />
      <Outlet />
    </Layout>
  );
};