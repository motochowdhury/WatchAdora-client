import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/Loader";
import { AuthContext } from "../contexts/AuthProvider";
import useAdmin from "../hook/useAdmin";

const RequireAdmin = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, proccessing] = useAdmin(user?.email);
  const location = useLocation();

  if (loading || proccessing) {
    return <Loader />;
  }

  if (user && isAdmin) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default RequireAdmin;
