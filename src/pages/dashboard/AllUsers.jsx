import { useQuery } from "@tanstack/react-query";
import React from "react";
import profile from "../../assets/unknown.png";
import { toast } from "react-toastify";

const AllUsers = () => {
  const { data = [], refetch } = useQuery({
    queryKey: ["allUsers"],
    queryFn: () =>
      fetch(`${process.env.REACT_APP_SERVER_API}/users`, {
        headers: {
          authorization: `bearar ${localStorage.getItem("access-token")}`,
        },
      }).then((res) => res.json()),
  });
  const deleteUser = (email) => {
    fetch(`${process.env.REACT_APP_SERVER_API}/admin/user?email=${email}`, {
      method: "DELETE",
      headers: {
        authorization: `bearar ${localStorage.getItem("access-token")}`,
      },
    })
      .then((res) => res.json)
      .then((data) => {
        toast.success("User Deleted");
        refetch();
      });
  };

  return (
    <div>
      <div className="my-28 w-4/5 mx-auto">
        <table className="mx-auto font-poppins text-sm">
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
                Delete
              </th>
            </tr>
          </thead>
          {data.length <= 0 ? (
            <div>No seller Found</div>
          ) : (
            data?.map((user, idx) => {
              const { name, img, email } = user;
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
                    <td className="py-4 px-6">
                      <button
                        className="bg-red-300 px-3 rounded-full"
                        onClick={() => deleteUser(email)}>
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

export default AllUsers;
