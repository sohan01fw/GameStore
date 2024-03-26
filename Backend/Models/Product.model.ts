import mongoose, { mongo } from "mongoose";
import { genres, Iproduct, IReview } from "../../Types/server";

const { Schema } = mongoose;

const schemaProduct = new Schema<Iproduct>({
  product_name: {
    type: String,
    required: [true, "product name must needed"],
    unique: true,
    lowercase: true,
    index: 1,
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
  product_pic: [
    {
      type: URL,
    },
  ],
  product_video: [
    {
      type: URL,
    },
  ],
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Reviews",
    },
  ],
});

export const Product =
  mongoose.models.Products ||
  mongoose.model<Iproduct>("Products", schemaProduct);

//creating review model
const schemaReview = new Schema<IReview>({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "Users", required: true },
  ratings: { type: Number, min: 0, max: 5, required: true },
  comment: { type: String, required: true, lowercase: true },
});

export const Review = mongoose.model<IReview>("Reviews", schemaReview);
