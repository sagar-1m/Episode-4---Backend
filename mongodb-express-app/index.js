import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express(); // express ki sarri shakti app k paas

dotenv.config(); // Load env variable from .env file

// Mongoose connection
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

// Sample route
app.get("/", (req, res) => {
  res.send("Hello, MongoDB with Express!");
});

const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
