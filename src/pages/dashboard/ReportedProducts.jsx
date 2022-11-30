import { useQuery } from "@tanstack/react-query";
import React from "react";
import { deleteReportedProd } from "../../api/reportAdmin";
import profile from "../../assets/unknown.png";

const ReportedProducts = () => {
  const { data = [], refetch } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch(`${process.env.REACT_APP_SERVER_API}/report`, {
        headers: {
          authorization: `bearar ${localStorage.getItem("access-token")}`,
        },
      }).then((res) => res.json()),
  });

  return (
    <div>
      <div className="my-28 w-4/5 mx-auto">
        <table className="mx-auto text-sm font-poppins">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                <span className="">Image</span>
              </th>
              <th scope="col" className="py-3 px-6">
                Product Name
              </th>
              <th scope="col" className="py-3 px-6">
                Seller Email
              </th>
              <th scope="col" className="py-3 px-6">
                Action
              </th>
            </tr>
          </thead>
          {data?.map((user, idx) => {
            const { productName, productImg, sellerEmail, _id, productId } =
              user;
            return (
              <tbody key={idx}>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="p-4 w-32">
                    <img
                      src={`${productImg ? productImg : profile}`}
                      className="w-10 h-10 mx-auto"
                      alt=""
                    />
                  </td>
                  <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                    {productName}
                  </td>
                  <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                    {sellerEmail}
                  </td>
                  <td className="py-4 px-6">
                    <button
                      onClick={() =>
                        deleteReportedProd(_id, productId, refetch)
                      }
                      className="bg-red-300 px-2 rounded-full font-poppins text-sm">
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default ReportedProducts;
