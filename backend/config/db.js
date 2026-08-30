import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDb connected ");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
  }
};
export default connectDb;
