import express from "express";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import userRoutes from "./routes/user.routes.js";

dotenv.config();

const app = express();

//Middleware to parse JSON requests
app.use(express.json());

connectDB(); // Connect to MongoDB

//API routes
app.use("/api/v1/users", userRoutes);

//Root route
app.get("/", (req, res) => {
  res.send("Welcome to the CRUD API!");
});

//Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
