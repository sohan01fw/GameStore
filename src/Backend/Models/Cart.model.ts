import mongoose, { Schema } from "mongoose";

const cartSchema = new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Users",
        required:true
    },
    products:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Products",
        required:true
    }
},{timestamps:true})
export const Cart =
(mongoose.models.Reviews) ||
mongoose.model("Carts", cartSchema);