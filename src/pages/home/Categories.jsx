import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import CategoriesCard from "../../components/CategoriesCard";

const Categories = () => {
  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const { data } = await axios.get("http://localhost:5000/categories");
      return data?.data;
    },
  });

  console.log(categories);
  return (
    <div className="w-full bg-black h-screen relative">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 absolute inset-0 -top-20 w-10/12 mx-auto">
        {categories?.map((category) => (
          <CategoriesCard key={category?._id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
