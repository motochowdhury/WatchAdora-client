import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/Loader";
import { AuthContext } from "../contexts/AuthProvider";
import useUser from "../hook/useUser";

const RequireAuth = ({ children }) => {
  const { user: currUser, loading } = useContext(AuthContext);
  const [user, processing] = useUser(currUser?.email);
  const location = useLocation();
  if (loading || processing) {
    return <Loader />;
  }
  if (currUser?.email && user?.email) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default RequireAuth;
