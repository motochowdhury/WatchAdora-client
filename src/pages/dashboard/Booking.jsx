import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import profile from "../../assets/unknown.png";
import { Link } from "react-router-dom";
import { deleteBookedProd } from "../../api/bookedProd";

const Booking = () => {
  const { user } = useContext(AuthContext);
  const { data = [], refetch } = useQuery({
    queryKey: ["orders"],
    queryFn: () =>
      fetch(
        `${process.env.REACT_APP_SERVER_API}/booking?email=${user?.email}`,
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
                Product Name
              </th>
              <th scope="col" className="py-3 px-6">
                Price
              </th>
              <th scope="col" className="py-3 px-6">
                Delete
              </th>

              <th scope="col" className="py-3 px-6">
                Pay
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
            data?.map((product, idx) => {
              const {
                productName,
                productImg,
                resalePrice,
                paymentStatus,
                _id,
              } = product;
              return (
                <tbody key={idx}>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="p-4 w-32">
                      <img
                        className="w-10 h-10 mx-auto"
                        src={`${productImg ? productImg : profile}`}
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
                        onClick={() => deleteBookedProd(_id, refetch)}
                        className="bg-red-300 px-2 rounded-full font-poppins text-sm">
                        Delete
                      </button>
                    </td>
                    <td className="py-4 px-6">
                      {paymentStatus === "unpaid" ? (
                        <Link
                          className="bg-blue-300 px-2 font-poppins text-sm rounded-full"
                          to={`/dashboard/payment/${_id}`}>
                          Pay
                        </Link>
                      ) : (
                        <p className="bg-green-300 px-2 font-poppins text-sm rounded-full">
                          Paid
                        </p>
                      )}
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

export default Booking;
