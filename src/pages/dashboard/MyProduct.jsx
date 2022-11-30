import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import profile from "../../assets/unknown.png";
import {
  advertiseProd,
  deleteMyProduct,
  unsoldPro,
} from "../../api/addProduct";

const MyProduct = () => {
  const { user } = useContext(AuthContext);
  const { data = [], refetch } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch(
        `${process.env.REACT_APP_SERVER_API}/seller/products?email=${user?.email}`,
        {
          headers: {
            authorization: `bearar ${localStorage.getItem("access-token")}`,
          },
        }
      ).then((res) => res.json()),
  });

  return (
    <div>
      <div className="my-28 w-4/5 mx-auto">
        <table className="mx-auto">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                <span className="">Image</span>
              </th>
              <th scope="col" className="py-3 px-6">
                Name
              </th>
              <th scope="col" className="py-3 px-6">
                Sale Status
              </th>
              <th scope="col" className="py-3 px-6">
                Advertisement
              </th>
              <th scope="col" className="py-3 px-6">
                Unsold
              </th>
              <th scope="col" className="py-3 px-6">
                Action
              </th>
            </tr>
          </thead>
          {data?.length <= 0 ? (
            <div>No seller Found</div>
          ) : (
            data?.map((prod, idx) => {
              const { productName, productImg, _id, paymentStatus, ad } = prod;
              return (
                <tbody key={idx}>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="p-4 w-20">
                      <img
                        src={`${productImg ? productImg : profile}`}
                        alt=""
                      />
                    </td>
                    <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                      <p className="text-lg font-roboto font-semibold">
                        {productName}
                      </p>
                    </td>
                    <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                      <p className="bg-yellow-300 px-2 rounded-full font-poppins text-sm">
                        {paymentStatus}
                      </p>
                    </td>
                    <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                      <button
                        disabled={ad}
                        onClick={() => advertiseProd(_id, refetch)}
                        className="btn bg-green-500 rounded-full px-2 text-sm font-poppins">
                        Avertisement
                      </button>
                    </td>
                    <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                      <button
                        disabled={paymentStatus === "unpaid"}
                        onClick={() => unsoldPro(_id, refetch)}
                        className="btn bg-blue-500 rounded-full px-2 text-sm font-poppins">
                        Unsold
                      </button>
                    </td>
                    <td className="py-4 px-6">
                      <button
                        onClick={() => deleteMyProduct(_id, refetch)}
                        className="btn bg-red-500 rounded-full px-2 text-sm font-poppins">
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              );
            })
          )}
        </table>
      </div>
    </div>
  );
};

export default MyProduct;
