import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { TiThLargeOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import unkown from "../assets/unknown.png";

const SideBar = () => {
  const [isOpen, setOpen] = useState(false);
  const { user } = useContext(AuthContext);

  const { data = {} } = useQuery({
    queryKey: ["data"],
    queryFn: () =>
      fetch(`${process.env.REACT_APP_SERVER_API}/user?email=${user?.email}`, {
        headers: {
          authorization: `bearar ${localStorage.getItem("access-token")}`,
        },
      }).then((res) => res.json()),
  });

  const { name, img, userRule } = data;
  return (
    <div>
      <div className="h-16 bg-white/25 backdrop-blur-sm fixed inset-0 w-full lg:hidden flex justify-end">
        <button onClick={() => setOpen(!isOpen)}>
          <TiThLargeOutline className="text-2xl mr-10 hover:bg-gray-300 m-2 rounded-full" />
        </button>
      </div>
      <div
        className={`lg:static block fixed inset-0 w-1/2 lg:w-80 lg:py-10 lg:block bg-orange-500 min-h-screen py-10 ${
          isOpen ? "block" : "hidden"
        }`}>
        <div className="flex flex-col justify-center items-center h-1/2">
          <div>
            <img
              src={img ? img : unkown}
              className="w-14 h-14 rounded-full mx-auto"
              alt=""
            />
            <h1 className="text-center font-poppins text-lg">{name}</h1>
          </div>
          <div className="flex flex-col items-center mt-28">
            {userRule === "admin" && (
              <>
                <Link
                  className="btn bg-white/30 my-2 px-2 py-1 font-poppins text-sm rounded-full"
                  to="/dashboard/allusers">
                  All Users
                </Link>
                <Link
                  className="btn bg-white/30 my-2 px-2 py-1 font-poppins text-sm rounded-full"
                  to="/dashboard/allsellers">
                  All Sellers
                </Link>
                <Link
                  className="btn bg-white/30 my-2 px-2 py-1 font-poppins text-sm rounded-full"
                  to="/dashboard/reportedproducts">
                  Reported Products
                </Link>
              </>
            )}
            {userRule === "buyer" && (
              <>
                <Link
                  className="btn bg-white/30 my-2 px-2 py-1 font-poppins text-sm rounded-full"
                  to="/dashboard/booking">
                  My Booking
                </Link>
                <Link
                  className="btn bg-white/30 my-2 px-2 py-1 font-poppins text-sm rounded-full"
                  to="/dashboard/wishlist">
                  My WishList
                </Link>
              </>
            )}

            {userRule === "seller" && (
              <>
                <Link
                  className="btn bg-white/30 my-2 px-2 py-1 font-poppins text-sm rounded-full"
                  to="/dashboard/myproducts">
                  My products
                </Link>
                <Link
                  className="btn bg-white/30 my-2 px-2 py-1 font-poppins text-sm rounded-full"
                  to="/dashboard/addproduct">
                  Add a product
                </Link>
              </>
            )}

            <Link
              className="btn bg-green-400 my-2 px-2 py-1 font-poppins text-sm rounded-full"
              to="/">
              Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
