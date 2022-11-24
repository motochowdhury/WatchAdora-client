import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../pages/shared/header/Header";

const Main = () => {
  return (
    <div className="relative max-w-full mx-auto">
      <Header />
      <Outlet />
    </div>
  );
};

export default Main;
