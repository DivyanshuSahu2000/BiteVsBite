import dotenv from "dotenv";
import mongoose from "mongoose";
import Restaurant from "./models/Restaurant.js";
import Food from "./models/Food.js";

dotenv.config();

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected");

    // Create restaurant
    const restaurant = await Restaurant.create({
      name: "Spice Hub",
      location: "Kanpur",
      cuisines: ["North Indian", "Chinese"],
      rating: 4.3,
      image: "",
    });

    // Create food
    await Food.create({
      name: "Chicken Biryani",
      description: "Aromatic chicken biryani with flavorful rice and spices.",
      category: "Biryani",
      image: "",
      restaurant: restaurant._id,

      platforms: [
        {
          name: "Swiggy",
          price: 220,
          discount: 30,
          finalPrice: 190,
          offer: "₹30 off",
          specialOffer: false,
        },
        {
          name: "Zomato",
          price: 210,
          discount: 0,
          finalPrice: 210,
          offer: "",
          specialOffer: false,
        },
        {
          name: "MagicBite",
          price: 200,
          discount: 20,
          finalPrice: 180,
          offer: "₹20 off",
          specialOffer: false,
        },
      ],
    });

    console.log("Seed data added successfully");

    await mongoose.connection.close();
    console.log("MongoDB connection closed");
  } catch (error) {
    console.error("Error:", error.message);
    process.exit(1);
  }
};

seedData();
