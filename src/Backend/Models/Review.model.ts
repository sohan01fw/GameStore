import { IReview } from "@/@types/model";
import mongoose, { Schema } from "mongoose";

//creating review model
const schemaReview = new Schema<IReview>(
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        required: true,
      },
      ratings: { type: Number, min: 0, max: 5, required: true },
      comment: { type: String, required: true, lowercase: true },
    },
    { timestamps: true },
  );
  
  export const Review =
    (mongoose.models.Reviews as mongoose.Model<IReview>) ||
    mongoose.model<IReview>("Reviews", schemaReview);