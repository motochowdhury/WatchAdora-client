import React from "react";
import { Link } from "react-router-dom";

const CategoriesCard = ({ category }) => {
  const { catName, catId, img } = category;
  return (
    <Link to={`/products/${catId}`}>
      <div className="bg-white dark:bg-slate-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.90] hover:!scale-100 duration-500 shadow-xl flex items-center ">
        <div className="flex items-center">
          <div className="w-1/2">
            <img src={img} className="w-full" alt="" />
          </div>
          <div className="mx-5">
            <h4 className="text-lg font-poppins dark:text-white">{catName}</h4>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CategoriesCard;
