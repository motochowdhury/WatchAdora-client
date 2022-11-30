import { useQuery } from "@tanstack/react-query";
import React from "react";
import { deleteSeller, verifySeller } from "../../api/user";
import profile from "../../assets/unknown.png";

const AllSellers = () => {
  return (
    <div>
      <div className="my-28 w-4/5 mx-auto text-sm font-poppins">
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
                Email
              </th>
              <th scope="col" className="py-3 px-6">
                Verify
              </th>

              <th scope="col" className="py-3 px-6">
                Delete
              </th>
            </tr>
          </thead>
          {data?.length <= 0 ? (
            <tbody>
              <tr>
                <td>No data found</td>
              </tr>
            </tbody>
          ) : (
            data?.map((seller, idx) => {
              const { name, img, _id, status, email } = seller;
              return (
                <tbody key={idx}>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="p-4 w-20">
                      <img
                        src={`${img ? img : profile}`}
                        className="w-10 h-10 mx-auto"
                        alt=""
                      />
                    </td>
                    <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                      {name}
                    </td>
                    <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                      {email}
                    </td>
                    <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                      {status === "unverified" ? (
                        <button
                          onClick={() => verifySeller(email, refetch)}
                          className="bg-green-300 px-3 rounded-full">
                          Verify
                        </button>
                      ) : (
                        "varified"
                      )}
                    </td>
                    <td className="py-4 px-6">
                      <button
                        className="bg-red-300 px-3 rounded-full"
                        onClick={() => deleteSeller(_id, email, refetch)}>
                        remove
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

export default AllSellers;
