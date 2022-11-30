import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/Footer";
import Header from "../pages/shared/header/Header";

const Main = () => {
  return (
    <div className="relative max-w-full mx-auto">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
