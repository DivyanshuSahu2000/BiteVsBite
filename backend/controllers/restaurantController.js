import Restaurant from "../models/Restaurant.js";

export const getRestaurants = async (req, res) => {
  try {
    const { search } = req.query;
    let query = {};
    if (search) {
      query.name = {
        $regex: search,
        $options: "i",
      };
    }
    const restaurants = await Restaurant.find(query);
    res.status(200).json(restaurants);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch restaurants",
      error: error.message,
    });
  }
};
