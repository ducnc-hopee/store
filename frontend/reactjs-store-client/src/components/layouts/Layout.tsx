import React from "react";
import { Navbar } from "./elements/Navbar";
import Header from "./elements/Header";
import Footer from "./elements/Footer";
import Copyright from "./elements/Copyright";

type TLayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<TLayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <Navbar />
      {children}
      <Footer />
      <Copyright />
    </div>
  );
};
