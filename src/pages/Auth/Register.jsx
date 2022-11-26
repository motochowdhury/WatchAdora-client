import React, { useContext } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaGoogle, FaRegFileImage } from "react-icons/fa";
import { saveUser, uploadImage } from "../../api/registerApi";
import loginImg from "../../assets/login img@3x.png";
import { AuthContext } from "../../contexts/AuthProvider";
const Register = () => {
  const { createUserWithEmail, updateUserProfile, user, loginWithGoogle } =
    useContext(AuthContext);
  const [imgUrl, setImgUrl] = useState("");
  const { register, handleSubmit } = useForm();
  const createUser = (data) => {
    const { email, pass, userRule, name, img } = data;
    const user = { name, email, status: false, userRule, img: imgUrl };
    createUserWithEmail(email, pass)
      .then((result) => {
        uploadImage(img[0]).then((data) => setImgUrl(data));
        updateUserProfile(name, imgUrl);
        saveUser(user);
      })
      .catch((err) => console.log(err.message));

    // console.log(email, pass, userRule, img[0], data, imgUrl);
    console.log(user);
  };

  const googleLogin = () => {
    loginWithGoogle()
      .then((res) => console.log(res.user))
      .catch((err) => console.log(err));
  };

  return (
    <div className="py-20">
      <div className="lg:w-1/2 w-10/12 shadow-xl mx-auto lg:flex h-[600px]">
        <div className="bg-orange-500 w-1/2 hidden lg:flex items-center justify-center rounded-l-md">
          <img src={loginImg} className="w-10/12" alt="" />
        </div>
        <div className="rounded-md lg:rounded-r-md dark:bg-white/25 w-full lg:my-0 my-10 h-full">
          <div className="ml-5 text-center py-5">
            <h2 className="font-poppins text-lg dark:text-white ">
              Welcome to
              <br />
              <span className="text-orange-500 text-2xl leading-3">
                WatchAdora
              </span>
            </h2>
            <p className="font-roboto font-semibold dark:text-white">
              Please Register for use Our Feature
            </p>
          </div>
          <div className="flex justify-center space-x-2 mb-5">
            <button
              onClick={googleLogin}
              className="btn border-2 border-green-300 hover:bg-green-300 dark:bg-white/20 py-2 px-2 flex items-center dark:text-white dark:hover:bg-green-300">
              <FaGoogle className="mr-3" /> Login With Google
            </button>
          </div>

          <div className="relative w-10/12 mx-auto flex py-5 items-center">
            <div className="flex-grow border-t border-gray-400"></div>
            <span className="flex-shrink mx-4 text-gray-400">or</span>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>
          <form onSubmit={handleSubmit(createUser)}>
            <div className="w-10/12 lg:w-9/12 dark:text-white mx-auto space-y-3 my-5">
              <input
                className="w-full border-b border-slate-200 bg-transparent outline-none py-1"
                type="text"
                placeholder="Name"
                {...register("name")}
              />
              <input
                className="w-full border-b border-slate-200 bg-transparent outline-none py-1"
                type="email"
                placeholder="Email"
                {...register("email")}
              />
              <input
                id="img"
                className="hidden"
                type="file"
                accept="image/png, image/gif, image/jpeg"
                placeholder="password"
                {...register("img")}
              />
              <label
                htmlFor="img"
                className="border border-dashed border-gray-400 block w-full p-4 flex justify-center items-center">
                Upload Image
                <FaRegFileImage />
              </label>
              <input
                className="w-full border-b border-slate-200 bg-transparent outline-none py-1"
                type="text"
                placeholder="password"
                {...register("pass")}
              />

              <div className="flex items-center">
                <input
                  checked
                  type="radio"
                  value="buyer"
                  className=""
                  {...register("userRule")}
                />
                <label className="ml-2 mr-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Buyer
                </label>
                <input
                  type="radio"
                  value="seller"
                  className=""
                  {...register("userRule")}
                />
                <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Seller
                </label>
              </div>
            </div>
            <div className="flex justify-center my-5">
              <button
                type="submit"
                className="btn bg-orange-500 hover:bg-orange-400 w-1/2 text-white font-roboto py-2">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;