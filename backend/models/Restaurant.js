import mongoose from "mongoose";
const restaurantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    location: {
      type: String,
      required: true,
      trim: true,
    },
    cuisines: {
      type: [String],
      required: true,
      trim: true,
    },
    rating: {
      type: Number,
      default: 0,
    },
    image: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const Restaurant = mongoose.model("Restaurant", restaurantSchema);
export default Restaurant;
