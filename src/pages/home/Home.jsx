import React from "react";
import Advertisement from "./Advertisement";
import Banner from "./Banner";
import Categories from "./Categories";
import Marketing from "./Marketing";

const Home = () => {
  return (
    <div>
      <Banner />
      <Categories />
      <Advertisement />
      <Marketing />
    </div>
  );
};

export default Home;
