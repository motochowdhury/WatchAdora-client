import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CgMenuMotion } from "react-icons/cg";
import watchAdoraLogo from "../../../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";

const Header = () => {
  const { logOutUser, user } = useContext(AuthContext);
  const [isOpen, setOpen] = useState(false);
  const logOut = () => {
    logOutUser()
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <div className="w-full backdrop-blur-sm z-50 bg-white/20 h-12 fixed inset-0">
      <nav className="w-full lg:px-0 px-8 flex items-center justify-between max-w-6xl mx-auto">
        <Link to="/">
          <div>
            <img src={watchAdoraLogo} className="w-32" alt="" />
          </div>
        </Link>
        <button className="lg:hidden" onClick={() => setOpen(!isOpen)}>
          <CgMenuMotion />
        </button>

        <div className="space-x-4 lg:block hidden">
          <Link className="text-orange-500 font-poppins text-sm" to="/blogs">
            Blogs
          </Link>
          {user?.email ? (
            <>
              <Link
                to="/dashboard"
                className="text-orange-500 font-poppins text-sm">
                DashBoard
              </Link>
              <button
                className="btn bg-orange-500 px-2 py-1 rounded-full text-white hover:text-black font-poppins text-sm"
                onClick={logOut}>
                LogOut
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="btn bg-orange-500 px-3 py-1 rounded-full text-white hover:text-black font-poppins text-sm"
              onClick={logOut}>
              Login
            </Link>
          )}
        </div>

        {isOpen && (
          <div className="flex flex-col justify-center items-center lg:hidden absolute inset-0 bg-orange-500 dark:bg-black h-screen w-1/2 right-0 ">
            <button
              className="absolute top-0 right-0 mr-10"
              onClick={() => setOpen(!isOpen)}>
              X
            </button>
            <Link className="text-white-500 font-poppins" to="/blogs">
              Blogs
            </Link>
            {user?.email ? (
              <>
                <Link to="/dashboard" className="text-white-500 font-poppins">
                  DashBoard
                </Link>
                <button
                  className="btn bg-white/50 hover:bg-white/40 mt-5 px-2 py-1 rounded-full text-black hover:text-black font-poppins text-sm"
                  onClick={logOut}>
                  LogOut
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="btn bg-green-500 px-2 py-1 rounded-full text-white hover:text-black font-poppins text-sm"
                onClick={logOut}>
                Login
              </Link>
            )}
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header;
