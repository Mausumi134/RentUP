import React from "react";
import Header from "../common/header/Header";
import Login from "../common/header/Login";
import Register from "../common/header/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../home/Home";
import Footer from "../common/footer/Footer";
import About from "../about/About";
import Pricing from "../pricing/Pricing";
import Blog from "../blog/Blog";
import Services from "../services/Services";
import Contact from "../contact/Contact";
import Recent from "../home/recent/Recent";
import Checkout from "../home/recent/Checkout";
import CartPage from "../home/cart/CartPage";
import PaymentPage from "../home/cart/PaymentPage";
import PaymentSuccess from "../home/cart/PaymentSuccess";
import Dashboard from "../dashboard/Dashboard";
import PropertyDetails from "../property/PropertyDetails";
import Landing from "../landing/Landing";
import ProtectedRoute from "../auth/ProtectedRoute";
import AuthGuard from "../auth/AuthGuard";
import RootRedirect from "../auth/RootRedirect";

const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          {/* Root route - smart redirect based on auth status */}
          <Route path="/" element={<RootRedirect />} />
          
          {/* Public routes - only show when NOT logged in */}
          <Route path="/landing" element={
            <AuthGuard requireAuth={false}>
              <Landing />
            </AuthGuard>
          } />
          <Route path="/login" element={
            <AuthGuard requireAuth={false}>
              <Login />
            </AuthGuard>
          } />
          <Route path="/register" element={
            <AuthGuard requireAuth={false}>
              <Register />
            </AuthGuard>
          } />
          
          {/* Protected routes - require authentication */}
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path="/cart" element={
            <ProtectedRoute>
              <CartPage />
            </ProtectedRoute>
          } />
          <Route path="/payment" element={
            <ProtectedRoute>
              <PaymentPage />
            </ProtectedRoute>
          } />
          <Route path="/payment-success" element={
            <ProtectedRoute>
              <PaymentSuccess />
            </ProtectedRoute>
          } />
          
          {/* Semi-protected routes - can view but need login for actions */}
          <Route path="/home" element={<Home />} />
          <Route path="/browse" element={<Home />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
          <Route path="/recent/:roomCategory" element={<Recent />} />
          <Route path="/checkout" element={<Checkout />} />
          
          {/* Public info pages */}
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default Pages;
