import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";

const RootRedirect = () => {
  const user = localStorage.getItem("user");
  const token = localStorage.getItem("token");
  const isLoggedIn = user && token;
  
  useEffect(() => {
    // Optional: You can add any initialization logic here
    console.log("Checking authentication status...");
  }, []);
  
  // If user is logged in, redirect to dashboard
  if (isLoggedIn) {
    return <Navigate to="/dashboard" replace />;
  }
  
  // If user is not logged in, show landing page
  return <Navigate to="/landing" replace />;
};

export default RootRedirect;