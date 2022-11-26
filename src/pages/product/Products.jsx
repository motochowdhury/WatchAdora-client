import React from "react";
import { useLoaderData } from "react-router-dom";
import ProductsCard from "../../components/ProductsCard";

const Products = () => {
  const { data } = useLoaderData();
  const products = data?.data;
  return (
    <div>
      <div className="max-w-6xl grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-1 gap-4 mx-auto my-20">
        {products.map((product, idx) => (
          <ProductsCard key={idx} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
