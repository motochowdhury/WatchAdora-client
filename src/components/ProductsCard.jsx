import React from "react";
import { useContext } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { reportAdmin } from "../api/reportAdmin";
import { saveWishList } from "../api/savewishlist";
import unknown from "../assets/unknown.png";
import { AuthContext } from "../contexts/AuthProvider";
import useUser from "../hook/useUser";
import Loader from "./Loader";

const ProductsCard = ({ product, setIsOpen, setBook }) => {
  const { user: fiUser } = useContext(AuthContext);
  const [user, loading] = useUser(fiUser?.email);
  const {
    _id: productId,
    productName,
    location,
    originalPrice,
    postAt,
    resalePrice,
    usingTime,
    condition,
    productImg,
    seller,
    paymentStatus,
  } = product;
  const { sellerName, sellerEmail, sellerImg, status } = seller;
  const productData = {
    productId,
    userName: user?.name,
    productName,
    productImg,
    email: user?.email,
    sellerEmail,
    resalePrice,
    paymentStatus,
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="w-10/12 mx-auto my-5">
      <div className="md:w-full w-10/12 mx-auto bg-white shadow-md dark:bg-slate-500 group relative rounded">
        <div className="p-2">
          <div className="h-48">
            <img src={productImg} className="w-full h-full rounded" alt="" />
          </div>
          <div className="my-5">
            <h1 className="text-xl font-poppins leading-5">{productName}</h1>
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
            <div className="text-sm font-roboto my-2">
              <p>Condition: {condition}</p>
              <p>UsingTime: {usingTime}</p>
            </div>
            <div className="flex items-center space-x-2">
              <img
                src={sellerImg ? sellerImg : unknown}
                className="w-10 h-10 rounded-full"
                alt=""
              />
              <div className="flex items-center space-x-1">
                <h5 className="font-roboto text-sm">{sellerName}</h5>
                {status === "varified" && (
                  <FaCheckCircle className="text-green-500 text-sm" />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-gradient-to-t from-gray-300 backdrop-blur-sm -bottom-0 opacity-0 group-hover:opacity-100 group-hover:inset-0 rounded flex items-center">
          <div className="w-full mx-auto flex flex-col items-center justify-center space-y-3">
            <button
              onClick={() => {
                setIsOpen(true);
                setBook(productData);
              }}
              className="btn bg-orange-500 hover:bg-orange-400  rounded-full py-1 text-white font-roboto px-3">
              Book Now
            </button>
            <button
              onClick={() => saveWishList(productData)}
              className="btn bg-blue-500 hover:bg-blue-400 rounded-full py-1 text-white font-roboto px-3">
              WishList
            </button>
            <button
              onClick={() => reportAdmin(productData)}
              className="btn bg-red-500 hover:bg-red-400 rounded-full py-1 text-white font-roboto px-3">
              Report Admin
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
