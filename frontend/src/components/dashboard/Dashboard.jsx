import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "./dashboard.css";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [activeTab, setActiveTab] = useState("profile");
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const userData = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    
    if (!userData || !token) {
      toast.error("Please login to access dashboard");
      navigate("/");
      return;
    }

    setUser(JSON.parse(userData));
    
    // Load user orders
    const userOrders = JSON.parse(localStorage.getItem("orders") || "[]");
    setOrders(userOrders);
    
    // Load user favorites
    const userFavorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavorites(userFavorites);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("cartItems");
    toast.success("Logged out successfully");
    navigate("/");
  };

  const removeFromFavorites = (itemId) => {
    const updatedFavorites = favorites.filter(item => item.id !== itemId);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    toast.success("Removed from favorites");
  };

  if (!user) {
    return <div className="dashboard-loading">Loading...</div>;
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-sidebar">
        <div className="user-info">
          <div className="user-avatar">
            <i className="fa-solid fa-user"></i>
          </div>
          <h3>{user.username}</h3>
          <p>{user.email}</p>
        </div>
        
        <nav className="dashboard-nav">
          <button 
            className={`nav-item ${activeTab === "profile" ? "active" : ""}`}
            onClick={() => setActiveTab("profile")}
          >
            <i className="fa-solid fa-user"></i>
            Profile
          </button>
          <button 
            className={`nav-item ${activeTab === "bookings" ? "active" : ""}`}
            onClick={() => setActiveTab("bookings")}
          >
            <i className="fa-solid fa-calendar-check"></i>
            My Bookings
          </button>
          <button 
            className={`nav-item ${activeTab === "favorites" ? "active" : ""}`}
            onClick={() => setActiveTab("favorites")}
          >
            <i className="fa-solid fa-heart"></i>
            Favorites
          </button>
          <button 
            className={`nav-item ${activeTab === "settings" ? "active" : ""}`}
            onClick={() => setActiveTab("settings")}
          >
            <i className="fa-solid fa-cog"></i>
            Settings
          </button>
        </nav>
        
        <button className="logout-btn" onClick={handleLogout}>
          <i className="fa-solid fa-sign-out-alt"></i>
          Logout
        </button>
      </div>

      <div className="dashboard-content">
        {activeTab === "profile" && (
          <div className="tab-content">
            <h2>Profile Information</h2>
            <div className="profile-card">
              <div className="profile-field">
                <label>Username:</label>
                <span>{user.username}</span>
              </div>
              <div className="profile-field">
                <label>Email:</label>
                <span>{user.email}</span>
              </div>
              <div className="profile-field">
                <label>Member Since:</label>
                <span>{new Date().toLocaleDateString()}</span>
              </div>
              <div className="profile-stats">
                <div className="stat">
                  <h4>{orders.length}</h4>
                  <p>Total Bookings</p>
                </div>
                <div className="stat">
                  <h4>{favorites.length}</h4>
                  <p>Favorites</p>
                </div>
                <div className="stat">
                  <h4>4.8</h4>
                  <p>Rating</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "bookings" && (
          <div className="tab-content">
            <h2>My Bookings</h2>
            {orders.length === 0 ? (
              <div className="empty-state">
                <i className="fa-solid fa-calendar-xmark"></i>
                <h3>No Bookings Yet</h3>
                <p>Start exploring PGs and make your first booking!</p>
                <button 
                  className="cta-button"
                  onClick={() => navigate("/home")}
                >
                  Browse Properties
                </button>
              </div>
            ) : (
              <div className="bookings-list">
                {orders.map((order, index) => (
                  <div key={index} className="booking-card">
                    <div className="booking-header">
                      <h4>Order #{order.id}</h4>
                      <span className={`status ${order.status}`}>
                        {order.status}
                      </span>
                    </div>
                    <div className="booking-details">
                      <p><strong>Date:</strong> {new Date(order.orderDate).toLocaleDateString()}</p>
                      <p><strong>Total:</strong> ₹{order.total.toLocaleString('en-IN')}</p>
                      <p><strong>Items:</strong> {order.items.length} room(s)</p>
                      <p><strong>Payment:</strong> {order.paymentMethod}</p>
                    </div>
                    <div className="booking-items">
                      {order.items.map((item, idx) => (
                        <div key={idx} className="booking-item">
                          <span>{item.title}</span>
                          <span>x{item.quantity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === "favorites" && (
          <div className="tab-content">
            <h2>My Favorites</h2>
            {favorites.length === 0 ? (
              <div className="empty-state">
                <i className="fa-solid fa-heart-crack"></i>
                <h3>No Favorites Yet</h3>
                <p>Save your favorite PGs to easily find them later!</p>
                <button 
                  className="cta-button"
                  onClick={() => navigate("/home")}
                >
                  Explore PGs
                </button>
              </div>
            ) : (
              <div className="favorites-grid">
                {favorites.map((item, index) => (
                  <div key={index} className="favorite-card">
                    <img src={item.image} alt={item.title} />
                    <div className="favorite-info">
                      <h4>{item.title}</h4>
                      <p><i className="fa-solid fa-location-dot"></i> {item.location}</p>
                      <p className="price">{item.price}</p>
                    </div>
                    <div className="favorite-actions">
                      <button 
                        className="remove-btn"
                        onClick={() => removeFromFavorites(item.id)}
                      >
                        <i className="fa-solid fa-trash"></i>
                      </button>
                      <button 
                        className="view-btn"
                        onClick={() => navigate("/home")}
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === "settings" && (
          <div className="tab-content">
            <h2>Account Settings</h2>
            <div className="settings-card">
              <div className="setting-item">
                <h4>Notifications</h4>
                <p>Manage your notification preferences</p>
                <label className="toggle">
                  <input type="checkbox" defaultChecked />
                  <span className="slider"></span>
                </label>
              </div>
              <div className="setting-item">
                <h4>Email Updates</h4>
                <p>Receive booking confirmations and updates</p>
                <label className="toggle">
                  <input type="checkbox" defaultChecked />
                  <span className="slider"></span>
                </label>
              </div>
              <div className="setting-item">
                <h4>SMS Alerts</h4>
                <p>Get SMS notifications for important updates</p>
                <label className="toggle">
                  <input type="checkbox" />
                  <span className="slider"></span>
                </label>
              </div>
              <div className="setting-item danger">
                <h4>Delete Account</h4>
                <p>Permanently delete your account and all data</p>
                <button className="danger-btn">Delete Account</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;