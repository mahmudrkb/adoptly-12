import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";

import { AuthContext } from "../Provider/AuthProvider";
import LoadingSpinner from "../components/LoadingSpinner";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();

  if (loading) return <LoadingSpinner />;
  if (user) return children;

  return <Navigate to="/login" state={location.pathname} />;
};

export default PrivateRoute;
