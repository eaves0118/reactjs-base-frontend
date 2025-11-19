import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children, requiredRole }) => {
  const { user, loading } = useContext(AuthContext);

  // Nếu đang load user từ localStorage → chờ
  if (loading) return null; // hoặc hiển thị spinner

  // Chưa login → redirect login
  if (!user) return <Navigate to="/login" replace />;

  // Login rồi nhưng không đủ role → redirect home
  if (requiredRole && !user?.roles?.includes(requiredRole)) {
    return <Navigate to="/" replace />;
  }

  // Login và đủ quyền → render children
  return children;
};

export default PrivateRoutes;
