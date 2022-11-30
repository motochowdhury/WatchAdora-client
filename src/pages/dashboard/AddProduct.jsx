import React, { useState } from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { FaRegFileImage } from "react-icons/fa";
import { AuthContext } from "../../contexts/AuthProvider";
import { format } from "date-fns";
import { uploadImage } from "../../api/registerApi";
import { addProduct } from "../../api/addProduct";
import SmallLoader from "../../components/SmallLoader";
import useUser from "../../hook/useUser";

const AddProduct = () => {
  const { user: fiUser } = useContext(AuthContext);
  const [processing, setProccessing] = useState(false);
  const [user] = useUser(fiUser?.email);
  const { email: sellerEmail, name: sellerName, status, img: sellerImg } = user;
  const { register, handleSubmit, reset } = useForm();

  return (
    <div className="mt-20">
      <div className="bg-gray-200 lg:w-4/12 w-1/2 mx-auto py-10">
        <form onSubmit={handleSubmit(productData)}>
          <div className="lg:w-4/5 w-[90%] mx-auto space-y-3">
            <input
              className="w-full border-b bg-black border-gray-500 bg-transparent outline-none py-1"
              type="text"
              placeholder="Product Name"
              {...register("name")}
            />
            <input
              className="w-full border-b bg-black border-gray-500 bg-transparent outline-none py-1"
              type="text"
              placeholder="Location"
              {...register("location")}
            />
            <input
              className="w-full border-b bg-black border-gray-500 bg-transparent outline-none py-1"
              type="text"
              placeholder="Use Time"
              {...register("used")}
            />
            <input
              className="w-full border-b bg-black border-gray-500 bg-transparent outline-none py-1"
              type="text"
              placeholder="Resale Price"
              {...register("resalePrice")}
            />
            <input
              className="w-full border-b bg-black border-gray-500 bg-transparent outline-none py-1"
              type="text"
              placeholder="Original Price"
              {...register("originalPrice")}
            />
            <div className="text-sm font-roboto space-x-3">
              <p className="font-semibold">Category</p>
              <input
                checked
                type="radio"
                value="1"
                className=""
                {...register("catId")}
              />
              <label className="ml-2 mr-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Man's Watch
              </label>
              <input
                type="radio"
                value="2"
                className=""
                {...register("catId")}
              />
              <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Woman's Watch
              </label>
              <input
                type="radio"
                value="3"
                className=""
                {...register("catId")}
              />
              <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Sport's Watch
              </label>
            </div>
            <div className="text-sm font-roboto space-x-2">
              <p className="font-semibold">Condition</p>
              <input
                checked
                type="radio"
                value="Good"
                className=""
                {...register("condition")}
              />
              <label className="ml-2 mr-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Good
              </label>
              <input
                type="radio"
                value="Excellent"
                className=""
                {...register("condition")}
              />
              <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Excellent
              </label>
              <input
                type="radio"
                value="Poor"
                className=""
                {...register("condition")}
              />
              <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Poor
              </label>
            </div>
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
              className="border border-dashed border-gray-400 w-full p-4 flex justify-center items-center">
              Upload Image
              <FaRegFileImage />
            </label>
          </div>
          <div className="w-4/5 mx-auto">
            <button
              className="btn bg-orange-500 my-5 w-full py-1 font-poppins text-sm"
              type="submit">
              {processing ? <SmallLoader /> : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
