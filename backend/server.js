// const app=require("express")

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./config/db.js";

const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());
connectDb();
const PORT = process.env.PORT;
app.get("/", (req, res) => {
  res.send("Success");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/`);
});
