import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import unknown from "../assets/unknown.png";

const ProductsCard = ({ product }) => {
  const {
    name,
    location,
    originalPrice,
    postAt,
    resalePrice,
    used,
    img,
    user: seller,
  } = product;
  const { name: sellerName, img: sellerImg, varified } = seller;

  return (
    <div className="w-10/12 mx-auto my-5">
      <div className="md:w-full w-10/12 mx-auto bg-white shadow-md dark:bg-slate-500 group relative rounded">
        <div className="p-2">
          <div className="h-48">
            <img src={img} className="w-full h-full rounded" alt="" />
          </div>
          <div className="my-5">
            <h1 className="text-xl font-poppins leading-5">{name}</h1>
            <div className="flex my-2 space-x-2">
              <span className="bg-green-300 px-2 py-1 rounded-full font-roboto text-xs">
                Resale Price: ${resalePrice}
              </span>
              <span className="bg-blue-300 px-2 py-1 rounded-full font-roboto text-xs">
                Original Price: ${originalPrice}
              </span>
            </div>
            <div className="font-poppins text-xs my-3">
              <p>Publish date: {postAt}</p>
              <p>location: {location}</p>
            </div>
            <div className="flex items-center space-x-2">
              <img
                src={sellerImg ? sellerImg : unknown}
                className="w-10 h-10 rounded-full"
                alt=""
              />
              <div className="flex items-center space-x-1">
                <h5 className="font-roboto text-sm">{sellerName}</h5>
                {varified && (
                  <FaCheckCircle className="text-green-500 text-sm" />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-gradient-to-t from-gray-300 backdrop-blur-sm -bottom-0 opacity-0 group-hover:opacity-100 group-hover:inset-0 rounded flex items-center">
          <div className="w-full mx-auto flex flex-col items-center justify-center space-y-3">
            <button className="btn bg-orange-500 rounded-full py-1 text-white font-roboto px-3">
              Book Now
            </button>
            <button className="btn bg-blue-500 rounded-full py-1 text-white font-roboto px-3">
              WishList
            </button>
            <button className="btn bg-red-500 rounded-full py-1 text-white font-roboto px-3">
              Report Admin
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
