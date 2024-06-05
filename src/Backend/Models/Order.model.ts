import mongoose, { Schema } from "mongoose";

enum status {
    pending = "pending",
    complete = "complete"
}
const orderSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Users",
        required:true,
    },
    product:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Products",
        required:true,
    },
    total_amt:{
        type:Number,
        min:0,
    },
    status: {
        type:String,
        enum:status
    }
})

export const Order =
(mongoose.models.Reviews) ||
mongoose.model("Orders", orderSchema);