import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/Loader";
import { AuthContext } from "../contexts/AuthProvider";

const RequireAuth = ({ children }) => {
  const { user: currUser, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <Loader />;
  }
  if (currUser && currUser?.email) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default RequireAuth;
