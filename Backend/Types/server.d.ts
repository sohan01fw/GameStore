import { Document, ObjectId } from "mongoose";

//for user
export enum userRole {
  User = "user",
  Admin = "admin",
}

export interface IUser extends Document {
  name: string;
  email: string;
  age: number;
  profile_pic: String;
  preference: boolean;
  role: userRole;
}
