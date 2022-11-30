import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import profile from "../../assets/unknown.png";
import { bookWishProd, deleteWishProd } from "../../api/savewishlist";

const MyWishList = () => {
  const { user } = useContext(AuthContext);
  const { data, refetch } = useQuery({
    queryKey: ["wishlist"],
    queryFn: () =>
      fetch(
        `${process.env.REACT_APP_SERVER_API}/wishlist?email=${user?.email}`,
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
                Price
              </th>
              <th scope="col" className="py-3 px-6">
                Delete
              </th>
              <th scope="col" className="py-3 px-6">
                Book
              </th>
            </tr>
          </thead>
          {data?.length <= 0 ? (
            <tbody>
              <tr>
                <td>No data Found</td>
              </tr>
            </tbody>
          ) : (
            data?.map((prod) => {
              const { productName, productImg, _id, resalePrice } = prod;
              return (
                <tbody key={_id}>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="p-4 w-32">
                      <img
                        src={`${productImg ? productImg : profile}`}
                        className="w-10 h-10"
                        alt=""
                      />
                    </td>
                    <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                      {productName}
                    </td>
                    <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                      {resalePrice}
                    </td>
                    <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                      <button
                        onClick={() => deleteWishProd(_id, prod, refetch)}
                        className="bg-red-300 px-2 rounded-full font-poppins text-sm">
                        Delete
                      </button>
                    </td>
                    <td className="py-4 px-6">
                      <button
                        className="bg-blue-300 px-2 rounded-full font-poppins text-sm"
                        onClick={() => bookWishProd(_id, prod, refetch)}>
                        Book
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

export default MyWishList;
