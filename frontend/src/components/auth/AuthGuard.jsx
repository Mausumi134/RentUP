import React from "react";
import { Navigate } from "react-router-dom";

const AuthGuard = ({ children, requireAuth = false }) => {
  const user = localStorage.getItem("user");
  const token = localStorage.getItem("token");
  const isLoggedIn = user && token;
  
  if (requireAuth && !isLoggedIn) {
    // If authentication is required but user is not logged in, redirect to landing
    return <Navigate to="/" replace />;
  }
  
  if (!requireAuth && isLoggedIn) {
    // If user is logged in but trying to access login/register, redirect to dashboard
    return <Navigate to="/dashboard" replace />;
  }
  
  // Otherwise, render the component
  return children;
};

export default AuthGuard;