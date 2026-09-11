import mongoose from "mongoose";

const platformSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      default: 0,
    },
    offer: {
      type: String,
      default: "",
      trim: true,
    },
    finalPrice: {
      type: Number,
      required: true,
    },
    specialOffer: {
      type: Boolean,
      default: false,
    },
  },
  { _id: false }
);

const foodSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      default: "",
      trim: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      default: "",
    },
    restaurant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Restaurant",
      required: true,
      trim: true,
    },
    platforms: {
      type: [platformSchema],
      default: [],
    },
  },
  { timestamps: true }
);
const Food = mongoose.model("Food", foodSchema);
export default Food;

// import mongoose from "mongoose";

// const platformSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//       trim: true,
//     },

//     price: {
//       type: Number,
//       required: true,
//     },

//     discount: {
//       type: Number,
//       default: 0,
//     },

//     offer: {
//       type: String,
//       default: "",
//       trim: true,
//     },

//     finalPrice: {
//       type: Number,
//       required: true,
//     },

//     specialOffer: {
//       type: Boolean,
//       default: false,
//     },
//   },
//   { _id: false }
// );

// const restaurantFoodSchema = new mongoose.Schema(
//   {
//     restaurant: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Restaurant",
//       required: true,
//     },

//     platforms: {
//       type: [platformSchema],
//       default: [],
//     },
//   },
//   { _id: false }
// );

// const foodSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//       trim: true,
//     },

//     description: {
//       type: String,
//       default: "",
//       trim: true,
//     },

//     category: {
//       type: String,
//       required: true,
//       trim: true,
//     },

//     image: {
//       type: String,
//       default: "",
//     },

//     restaurants: {
//       type: [restaurantFoodSchema],
//       default: [],
//     },
//   },
//   { timestamps: true }
// );

// const Food = mongoose.model("Food", foodSchema);

// export default Food;
