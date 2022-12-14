import React from "react";
import loginImg from "../../assets/login img@3x.png";
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { saveUser } from "../../api/registerApi";
import { toast } from "react-toastify";

const Login = () => {
  const { loginUserByEmail, loginWithGoogle } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const { state } = useLocation();

  const loginUser = (data) => {
    const { email, pass } = data;
    loginUserByEmail(email, pass)
      .then((res) => {
        const mail = res?.user?.email;
        fetch(`${process.env.REACT_APP_SERVER_API}/jwt?email=${mail}`)
          .then((res) => res.json())
          .then((token) =>
            localStorage.setItem("access-token", token?.accesstoken)
          );
        toast.success("Login Successful");
        navigate(state?.from || "/", { replace: true });
      })
      .catch((err) => toast.error(err.message));
  };

  const googleLogin = () => {
    loginWithGoogle()
      .then((res) => {
        const mail = res?.user?.email;
        fetch(`${process.env.REACT_APP_SERVER_API}/jwt?email=${mail}`)
          .then((res) => res.json())
          .then((token) =>
            localStorage.setItem("access-token", token?.accesstoken)
          );
        const { displayName: name, photoURL: img, email } = res?.user;
        const user = {
          name,
          email,
          status: "unverified",
          userRule: "buyer",
          img,
        };
        saveUser(user);
        toast.success("Login Successful");
        navigate(state?.from || "/", { replace: true });
      })
      .catch((err) => toast.error(err.message));
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
              Please Login for use Our Feature
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
          <form onSubmit={handleSubmit(loginUser)}>
            <div className="w-10/12 lg:w-9/12 dark:text-white mx-auto space-y-3 my-5">
              <input
                className="w-full border-b border-slate-200 bg-transparent outline-none py-1"
                type="email"
                placeholder="Email"
                {...register("email")}
              />
              <input
                className="w-full border-b border-slate-200 bg-transparent outline-none py-1"
                type="password"
                placeholder="password"
                {...register("pass")}
              />
            </div>
            <div className="flex justify-center my-5">
              <button
                type="submit"
                className="btn bg-orange-500 hover:bg-orange-400 w-1/2 text-white font-roboto py-2">
                Login
              </button>
            </div>
          </form>
          <p className="text-center font-roboto text-sm">
            Don't have an Account?{" "}
            <Link className="text-orange-500" to="/register">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
