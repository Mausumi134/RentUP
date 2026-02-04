import React, { useState, useEffect } from "react";
import "./header.css";
import { nav } from "../../data/Data";
import { Link } from "react-router-dom";

const Header = ({ cartCount }) => {
  const [navList, setNavList] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user is logged in
    const userData = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    
    if (userData && token) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("cartItems");
    localStorage.removeItem("favorites");
    setUser(null);
    window.location.href = "/landing";
  };

  return (
    <>
      <header>
        <div className='container flex'>
          <div className='logo'>
            <img src='./images/logo.png' alt='RentUP' />
          </div>
          <div className='nav'>
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='button flex'>
            <Link to="/cart" className="cart-icon">
              <i className='fa fa-shopping-cart'></i>
              <span className="cart-count">{cartCount}</span>
            </Link>
            
            {user ? (
              <div className="user-menu">
                <Link to="/dashboard" className="user-profile">
                  <i className='fa fa-user'></i>
                  <span>{user.username}</span>
                </Link>
                <button className='btn1 logout-btn' onClick={handleLogout}>
                  <i className='fa fa-sign-out'></i> Logout
                </button>
              </div>
            ) : (
              <button className='btn1'>
                <Link to="/landing" style={{ color: "inherit", textDecoration: "none" }}>
                  <i className='fa fa-sign-out'></i> Sign In
                </Link>
              </button>
            )}
          </div>

          <div className='toggle'>
            <button onClick={() => setNavList(!navList)}>
              {navList ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
