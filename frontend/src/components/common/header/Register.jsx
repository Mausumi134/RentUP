// Register.js

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import "./auth.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConf, setPasswordConf] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("Attempting registration with:", { email, username });
      const response = await axios.post(
        "http://localhost:5000/api/v1/register",
        { email, username, password, passwordConf },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Registration response:", response.data);
      toast.success(response.data.message);
      // Auto-login after successful registration
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (error) {
      console.error("Registration error:", error);
      if (error.response) {
        toast.error(error.response.data.message);
      } else if (error.request) {
        toast.error("Network error. Please check if the server is running.");
      } else {
        toast.error("An unexpected error occurred.");
      }
    }
  };

  return (
    <div className="app-container">
      <div className="auth-form-container">
        <h2>Register</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
          />
          <label htmlFor="username">Username</label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Your Username"
            id="username"
            name="username"
          />
          <label htmlFor="password">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="********"
            id="password"
            name="password"
          />
          <label htmlFor="passwordConf">Confirm Password</label>
          <input
            value={passwordConf}
            onChange={(e) => setPasswordConf(e.target.value)}
            type="password"
            placeholder="********"
            id="passwordConf"
            name="passwordConf"
          />
          <button type="submit">Register</button>
        </form>
        <Link to={"/"}>
          <button className="link-btn">Already have an account? Login here.</button>
        </Link>
      </div>
    </div>
  );
};

export default Register;
