// const app=require("express")

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./config/db.js";
import restaurantRoutes from "./routes/restaurantRoutes.js";
import foodRoutes from "./routes/foodRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());
connectDb();
const PORT = process.env.PORT;
app.get("/", (req, res) => {
  res.send("Success");
});
app.use("/api/restaurants/", restaurantRoutes);
app.use("/api/foods/", foodRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/`);
});
