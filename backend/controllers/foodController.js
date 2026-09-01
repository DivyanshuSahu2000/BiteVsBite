import Food from "../models/Food.js";

export const getFoods = async (req, res) => {
  try {
    const { search } = req.query;
    let foods;

    if (search) {
      foods = await Food.find({
        name: { $regex: search, $options: "i" },
      }).populate("restaurant");
    } else {
      foods = await Food.find().populate("restaurant");
    }

    res.status(200).json(foods);
  } catch (error) {
    res.status(500).json({
      message: "Failed to load Foods",
      error: error.message,
    });
  }
};

export const getFoodById = async (req, res) => {
  try {
    const food = await Food.findById(req.params.id).populate("restaurant");
    if (!food) {
      return res.status(404).json({
        message: "Food not found",
      });
    }
    res.status(200).json(food);
  } catch (error) {
    res.status(500).json({
      message: "Failed to load food",
      error: error.message,
    });
  }
};
