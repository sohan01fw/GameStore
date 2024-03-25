import { ObjectId } from "mongoose";

//for user
export enum userRole {
  User = "user",
  Admin = "admin",
}

export interface IUser {
  name: string;
  email: string;
  age: number;
  profile_pic: URL;
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
type productUrl = URL[] | null;
type ProductVideo = URL[] | null;
type ProductReview = URL[] | null;

export interface Review {
  //Todo: will do it next time
}

export interface product {
  product_name: string;
  price: number;
  genre: genres;
  company: string;
  product_pic: productUrl;
  product_video: ProductVideo;
  reviews: ObjectId;
}
