import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import CategoriesCard from "../../components/CategoriesCard";

const Categories = () => {
  const { data: categories, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${process.env.REACT_APP_SERVER_API}/categories`
      );
      return data?.data;
    },
  });

  console.log(categories);
  return (
    <div className="w-ful bg-white dark:bg-slate-800 relative mb-10">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 absolute inset-0 -top-16 w-10/12 mx-auto group">
        {isLoading
          ? "loading"
          : categories?.map((category) => (
              <CategoriesCard key={category?._id} category={category} />
            ))}
      </div>
    </div>
  );
};

export default Categories;
