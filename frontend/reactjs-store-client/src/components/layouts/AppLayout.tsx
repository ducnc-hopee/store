import React from "react";
import { Banner } from "./elements/Banner";
import { Layout } from "./Layout";
import { Outlet } from "react-router-dom";

type TAppLayoutProps = {};

export const AppLayout: React.FC<TAppLayoutProps> = () => {
  return (
    <div className="flex justify-center overflow-x-auto min-h-screen bg-off-white">
      <div className="w-[1920px] bg-white">
        <Layout>
          <Banner />
          <Outlet />
        </Layout>
      </div>
    </div>
  );
};
