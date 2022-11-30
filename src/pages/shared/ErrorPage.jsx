import React from "react";
import { Link } from "react-router-dom";
import errorImage from "../../assets/error@3x.png";

const ErrorPage = () => {
  return (
    <div>
      <div className="flex justify-center flex-col h-screen items-center">
        <img src={errorImage} className="w-[500px]" alt="" />
        <button className="btn bg-orange-500 px-3 py-1 rounded-full text-black font-semibold">
          <Link to="/">Home</Link>
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
