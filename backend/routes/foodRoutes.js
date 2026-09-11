import express from "express";
import {
  comparePrices,
  getFoodById,
  getFoods,
  getSpecialOffers,
} from "../controllers/foodController.js";
const router = express.Router();

router.get("/", getFoods);
// router.get("/compare/:foodId", comparePrices);
router.get("/compare/:id", comparePrices);
router.get("/special-offers", getSpecialOffers);
router.get("/:id", getFoodById);

export default router;
