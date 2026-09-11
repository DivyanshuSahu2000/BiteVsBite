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

// import dotenv from "dotenv";
// import mongoose from "mongoose";
// import Restaurant from "./models/Restaurant.js";
// import Food from "./models/Food.js";

// dotenv.config();

// const seedData = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI);

//     console.log("MongoDB connected");

//     // Create restaurants
//     const restaurants = await Restaurant.create([
//       {
//         name: "Spice Hub",
//         location: "Kanpur",
//         cuisines: ["North Indian", "Chinese"],
//         rating: 4.3,
//         image: "",
//       },
//       {
//         name: "Hunger Spot",
//         location: "Kanpur",
//         cuisines: ["North Indian", "Chinese", "South Indian"],
//         rating: 4.2,
//         image: "",
//       },
//     ]);

//     // Create foods
//     await Food.create([
//       {
//         name: "Chicken Biryani",
//         description: "Aromatic chicken biryani with flavorful rice and spices.",
//         category: "Biryani",
//         image: "",

//         restaurants: [
//           {
//             restaurant: restaurants[0]._id,

//             platforms: [
//               {
//                 name: "Swiggy",
//                 price: 220,
//                 discount: 30,
//                 finalPrice: 190,
//                 offer: "₹30 off",
//                 specialOffer: false,
//               },
//               {
//                 name: "Zomato",
//                 price: 210,
//                 discount: 0,
//                 finalPrice: 210,
//                 offer: "",
//                 specialOffer: false,
//               },
//               {
//                 name: "MagicBite",
//                 price: 200,
//                 discount: 20,
//                 finalPrice: 180,
//                 offer: "₹20 off",
//                 specialOffer: false,
//               },
//             ],
//           },

//           {
//             restaurant: restaurants[1]._id,

//             platforms: [
//               {
//                 name: "Swiggy",
//                 price: 230,
//                 discount: 20,
//                 finalPrice: 210,
//                 offer: "₹20 off",
//                 specialOffer: false,
//               },
//               {
//                 name: "Zomato",
//                 price: 220,
//                 discount: 10,
//                 finalPrice: 210,
//                 offer: "₹10 off",
//                 specialOffer: false,
//               },
//               {
//                 name: "MagicBite",
//                 price: 205,
//                 discount: 25,
//                 finalPrice: 180,
//                 offer: "₹25 off",
//                 specialOffer: true,
//               },
//             ],
//           },
//         ],
//       },

//       {
//         name: "Veg Biryani",
//         description: "Aromatic Veg biryani with flavorful rice and spices.",
//         category: "Biryani",
//         image: "",

//         restaurants: [
//           {
//             restaurant: restaurants[0]._id,

//             platforms: [
//               {
//                 name: "Swiggy",
//                 price: 200,
//                 discount: 30,
//                 finalPrice: 170,
//                 offer: "₹30 off",
//                 specialOffer: true,
//               },
//               {
//                 name: "Zomato",
//                 price: 200,
//                 discount: 0,
//                 finalPrice: 200,
//                 offer: "",
//                 specialOffer: false,
//               },
//               {
//                 name: "MagicBite",
//                 price: 190,
//                 discount: 20,
//                 finalPrice: 170,
//                 offer: "₹20 off",
//                 specialOffer: true,
//               },
//             ],
//           },

//           {
//             restaurant: restaurants[1]._id,

//             platforms: [
//               {
//                 name: "Swiggy",
//                 price: 210,
//                 discount: 20,
//                 finalPrice: 190,
//                 offer: "₹20 off",
//                 specialOffer: false,
//               },
//               {
//                 name: "Zomato",
//                 price: 195,
//                 discount: 15,
//                 finalPrice: 180,
//                 offer: "₹15 off",
//                 specialOffer: true,
//               },
//               {
//                 name: "MagicBite",
//                 price: 185,
//                 discount: 10,
//                 finalPrice: 175,
//                 offer: "₹10 off",
//                 specialOffer: true,
//               },
//             ],
//           },
//         ],
//       },
//     ]);

//     console.log("Seed data added successfully");

//     await mongoose.connection.close();

//     console.log("MongoDB connection closed");
//   } catch (error) {
//     console.error("Error:", error.message);
//     process.exit(1);
//   }
// };

// seedData();
