import React from "react";

const Loader = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="w-10 h-10 border-2 border-b border-t spinner-border animate-spin border-blue-500"></div>
      <p className="text-md font-poppins text-center mt-10">Loading...</p>
    </div>
  );
};

export default Loader;
