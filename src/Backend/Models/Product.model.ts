import mongoose, { Document, ObjectId } from "mongoose";
const { Schema } = mongoose;
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
    product_description: string;
    price: number;
    genre?: genres;
    company?: string;
    thumbnail: string;
    product_pics: [] | null;
    product_videos?: [] | null;
    reviews: Array<IReview>;
  }
const schemaProduct = new Schema<Iproduct>(
  {
    product_name: {
      type: String,
      required: [true, "product name must needed"],
      unique: true,
      lowercase: true,
      index: 1,
    },
    product_description:{
      type:String,
      required: [true,"minimum 5 word should be present"],
      lowercase:true
    },
    price: {
      type: Number,
      required: true,
      min: 0,
      max: 200,
    },
    genre: {
      type: String,
      enum: genres,
    },
    company: { type: String, index: 1 },
    thumbnail:{
      type:String,
      required:[true,"thumnail must provide"]
    },
    product_pics: [],
    product_videos: [],
    reviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Reviews",
      },
    ],
  },
  { timestamps: true },
);

export const Product =
  (mongoose.models.Products as mongoose.Model<Iproduct>) ||
  mongoose.model<Iproduct>("Products", schemaProduct);


