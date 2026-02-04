// app.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleware } from "./error/error.js";
import loginRouter from "./routes/loginRoute.js";
import registerRouter from "./routes/registerRoute.js"; 
import contactRoute from "./routes/contactRoute.js";
import paymentRoute from "./routes/paymentRoute.js";

const app = express();

// Load environment variables first
dotenv.config({ path: "./config/config.env" });

// CORS configuration for production
const allowedOrigins = [
  process.env.FRONTEND_URL,
  "http://localhost:3000",
  "http://localhost:5173",
  // Add your frontend deployment URL here later
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (mobile apps, curl, etc.)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization"]
}));

// Handle preflight requests
app.options('*', cors());

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Health check endpoint for Render
app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'OK', 
    message: 'RentUP Backend is running',
    timestamp: new Date().toISOString()
  });
});

// API routes
app.use("/api/v1/login", loginRouter);
app.use("/api/v1/register", registerRouter);
app.use("/api/v1/contact", contactRoute);
app.use("/api/v1/payment", paymentRoute);

// Root endpoint
app.get('/', (req, res) => {
  res.json({ 
    message: 'RentUP Backend API',
    version: '1.0.0',
    endpoints: {
      health: '/health',
      auth: '/api/v1/login, /api/v1/register',
      contact: '/api/v1/contact',
      payment: '/api/v1/payment'
    }
  });
});

// Connect to database
dbConnection();

// Error handling middleware
app.use(errorMiddleware);

// Handle 404 routes
app.use('*', (req, res) => {
  res.status(404).json({ 
    success: false, 
    message: `Route ${req.originalUrl} not found` 
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 SERVER HAS STARTED AT PORT ${PORT}`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`📡 Health check: http://localhost:${PORT}/health`);
});
