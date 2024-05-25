import React from "react";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

const AdminRoutes = ({children}) => {
  const {user, loading} = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();

  if (loading || isAdminLoading) {
    return <div>Loading....</div>;
  }

  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/login" state={{ form: location }} replace></Navigate>;
};

export default AdminRoutes;
