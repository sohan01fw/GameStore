import mongoose from "mongoose";
import { IUser, userRole } from "../Types/server";

const { Schema } = mongoose;
const UserSchema = new Schema<IUser>({
  name: {
    type: String,
    required: [true, "please provide name!!!"],
    unique: true,
    lowercase: true,
    index: 1,
  },
  email: {
    type: String,
    required: [true, "please provide your email"],
    unique: true,
  },
  age: {
    type: Number,
    required: [true, "please provide age"],
    min: 18,
  },
  profile_pic: {
    type: String || null,
  },
  role: {
    type: String,
    enum: Object.values(userRole),
    default: userRole.User,
  },
});

export const User =
  (mongoose.models.Users as mongoose.Model<IUser>) ||
  mongoose.model<IUser>("Users", UserSchema);
