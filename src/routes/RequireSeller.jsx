import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/Loader";
import { AuthContext } from "../contexts/AuthProvider";
import useSeller from "../hook/useSeller";

const RequireSeller = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isSeller, proccessing] = useSeller(user?.email);
  const location = useLocation();

  if (loading || proccessing) {
    return <Loader />;
  }

  if (user && isSeller) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default RequireSeller;
