// routes/loginRoute.js

import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const router = express.Router();

router.post("/", async (req, res, next) => {
  const { email, password } = req.body;

  try {
    // Check if all required fields are provided
    if (!email || !password) {
      throw new Error("Please provide email and password.");
    }

    // Find the user with the provided email
    const user = await User.findOne({ email });

    if (!user) {
      throw new Error("Invalid email or password!");
    }

    // Check if the password matches
    const isPasswordValid = await bcrypt.compare(password, user.password);
    
    if (!isPasswordValid) {
      throw new Error("Invalid email or password!");
    }

    // Generate JWT token
    const token = jwt.sign(
      { 
        userId: user._id, 
        email: user.email,
        username: user.username 
      },
      process.env.JWT_SECRET || "your-secret-key",
      { expiresIn: "24h" }
    );

    // Login successful
    res.status(200).json({ 
      success: true, 
      message: "Login successful!",
      token,
      user: {
        id: user._id,
        email: user.email,
        username: user.username
      }
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

export default router;