import express from "express";
import {
  comparePrices,
  getFoodById,
  getFoods,
} from "../controllers/foodController.js";
const router = express.Router();

router.get("/", getFoods);
router.get("/:id", getFoodById);
router.get("/compare/:id", comparePrices);

export default router;
