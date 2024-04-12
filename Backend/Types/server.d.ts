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

// for products
export enum genres {
  Action = "action",
  Adventure = "adventure",
  Horror = "horror",
  Racing = "racing",
  Rpg = "rpg",
  Simulation = "simulation",
}

export interface IReview {
  //Todo: will do it next time
  user: ObjectId;
  ratings: number;
  comment: string;
}

export interface Iproduct extends Document {
  product_name: string;
  price: number;
  genre?: genres;
  company?: string;
  product_pics: [] | null;
  product_videos?: [] | null;
  thumnail?: String;
  reviews: Array<IReview>;
}
