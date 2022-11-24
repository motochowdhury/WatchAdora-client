import React from "react";
import Banner from "./Banner";
import Categories from "./Categories";

const Home = () => {
  return (
    <div className="h-screen w-full z-20 backdrop-blur-md dark:bg-white/20">
      <Banner />
      <Categories />
    </div>
  );
};

export default Home;
