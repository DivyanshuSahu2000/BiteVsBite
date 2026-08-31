import Food from "../models/Food.js";

export const getFoods = async (req, res) => {
  try {
    const foods = await Food.find().populate("restaurant");

    res.status(200).json(foods);
  } catch (error) {
    res.status(500).json({
      message: "Failed to load Foods",
      error: error.message,
    });
  }
};
