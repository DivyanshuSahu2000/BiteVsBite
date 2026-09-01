import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      reqired: true,
      trim: true,
    },
    email: {
      type: String,
      reqired: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      reqired: true,
      trim: true,
    },
  },
  { timestaps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
