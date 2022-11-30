import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import CategoriesCard from "../../components/CategoriesCard";
import SmallLoader from "../../components/SmallLoader";

const Categories = () => {
  const { data: categories = [], isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${process.env.REACT_APP_SERVER_API}/categories`
      );
      return data?.data;
    },
  });
  return (
    <div className="w-full h-full bg-white dark:bg-slate-800 mb-10">
      <div className="font-bold font-poppins text-4xl text-center my-10">
        Categories
      </div>
      {isLoading ? (
        <SmallLoader />
      ) : categories?.length === 0 ? (
        <div>
          <h1 className="text-center font-roboto text-xl">No Data Found</h1>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 my-10 w-10/12 mx-auto group">
          {categories?.map((category) => (
            <CategoriesCard key={category?._id} category={category} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Categories;
