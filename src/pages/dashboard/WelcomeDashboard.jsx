import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useContext } from "react";
import Loader from "../../components/Loader";
import { AuthContext } from "../../contexts/AuthProvider";

const WelcomeDashboard = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const { data = {}, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: () =>
      fetch(`${process.env.REACT_APP_SERVER_API}/user?email=${user?.email}`, {
        headers: {
          authorization: `bearar ${localStorage.getItem("access-token")}`,
        },
      }).then((res) => res.json()),
  });
  const { userRule } = data;

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="w-full flex-1">
      <div className="w-full h-screen flex justify-center items-center">
        <div>
          {userRule ? (
            <h1 className="text-xl font-poppins text-center">
              Welcome to {userRule} Dashboard
            </h1>
          ) : (
            <div>
              <h1 className="text-lg font-poppins text-red-500">
                Your Account has been suspended, please register again
              </h1>
              <div className="flex justify-center my-20">
                <button
                  onClick={() => logOutUser()}
                  className="bg-blue-300 px-3 py-1 rounded-full font-poppins">
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WelcomeDashboard;
