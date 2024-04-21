import mongoose from "mongoose";
//for user
export enum userRole {
  User = "user",
  Admin = "admin",
}

export interface IUser extends Document {
  name: string;
  email: string;
  profile_pic: String;
  role: userRole;
}
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
