import React from "react";

const CategoriesCard = ({ category }) => {
  const { catName, catId, img } = category;
  return (
    <div className="relative">
      <img src={img} alt="" />
      <div className="absolute inset-0 hidden hover:block">
        <h1>{catName}</h1>
      </div>
    </div>
  );
};

export default CategoriesCard;
