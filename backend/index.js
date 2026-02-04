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

// CORS configuration
app.use(cors({
  origin: [process.env.FRONTEND_URL, "http://localhost:3000"],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/login", loginRouter);
app.use("/api/v1/register", registerRouter);
app.use("/api/v1/contact", contactRoute);
app.use("/api/v1/payment", paymentRoute);

dbConnection();
app.use(errorMiddleware);

app.listen(process.env.PORT, ()=>{
  console.log(`SERVER HAS STARTED AT PORT ${process.env.PORT}`);
})
