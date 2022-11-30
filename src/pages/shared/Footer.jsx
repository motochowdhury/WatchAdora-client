import React from "react";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-black h-full w-full dark:bg-gray-900">
      <div className="py-20 flex flex-col items-center">
        <img src={logo} className="w-28" alt="" />
        <div className="font-poppins text-sm text-white lg:w-96 w-4/5 mx-auto text-center">
          Watch Adora is Resale Website where People can buy and sell product
        </div>
        <div className="font-roboto text-sm text-white mt-10">
          All Right Reserved by Watch Adora
        </div>
      </div>
    </footer>
  );
};

export default Footer;
