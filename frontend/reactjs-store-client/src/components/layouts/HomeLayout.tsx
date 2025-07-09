import React from "react";
import { Layout } from "./Layout";
import { Outlet } from "react-router-dom";

type THomeLayoutProps = {};

export const HomeLayout: React.FC<THomeLayoutProps> = () => {
  return (
    <div className="flex justify-center overflow-x-auto min-h-screen bg-off-white">
      <div className="w-[1920px] bg-white">
        <Layout>
          <Outlet />
        </Layout>
      </div>
    </div>
  );
};
