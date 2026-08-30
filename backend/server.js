// const app=require("express")

import express from "express";
import dotenv from "dotenv";
import cors from "cors";

const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());
const PORT = 5000;
app.get("/", (req, res) => {
  res.send("Success");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/`);
});
