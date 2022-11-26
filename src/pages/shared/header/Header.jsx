import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CgMenuMotion } from "react-icons/cg";
import watchAdoraLogo from "../../../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";

const Header = () => {
  const { logOutUser } = useContext(AuthContext);
  const [isOpen, setOpen] = useState(false);
  const logOut = () => {
    logOutUser()
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <div className="w-full backdrop-blur-sm z-50 bg-white/20 h-12 fixed inset-0">
      <nav className="w-full lg:px-0 px-8 flex items-center justify-between max-w-6xl mx-auto">
        <div>
          <img src={watchAdoraLogo} className="w-32" alt="" />
        </div>
        <button className="lg:hidden" onClick={() => setOpen(!isOpen)}>
          <CgMenuMotion />
        </button>
        <div className="lg:flex lg:flex-row space-x-4 hidden text-orange-500 font-semibold">
          <Link to="/">Home</Link>
          <Link to="/">Home</Link>
          <Link to="/">Home</Link>
          <Link to="/">Home</Link>
        </div>

        <div className="space-x-4 lg:block hidden">
          <Link>DashBoard</Link>
          <button onClick={logOut}>LogOut</button>
        </div>

        {isOpen && (
          <div className="flex flex-col justify-center items-center lg:hidden absolute inset-0 bg-orange-500 dark:bg-black h-screen w-1/2 right-0 ">
            <button
              className="absolute top-0 right-0 mr-10"
              onClick={() => setOpen(!isOpen)}>
              X
            </button>
            <Link to="/">Home</Link>
            <Link to="/">Home</Link>
            <Link to="/">Home</Link>
            <Link to="/">Home</Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header;
