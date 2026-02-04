import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem("user");
  const token = localStorage.getItem("token");
  
  // If user is not logged in, redirect to landing page
  if (!user || !token) {
    return <Navigate to="/" replace />;
  }
  
  // If user is logged in, render the protected component
  return children;
};

export default ProtectedRoute;