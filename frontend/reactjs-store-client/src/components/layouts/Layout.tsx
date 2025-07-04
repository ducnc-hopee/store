import React from "react";
import { Navbar } from "./elements/Navbar";
import Header from "./elements/Header";
import Footer from "./elements/Footer";
import Copyright from "./elements/Copyright";

export const Layout = ({ children }: { children: React.ReactNode }) => {
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
