import mongoose from "mongoose";

const connURI = process.env.MONGODB_URI;

export async function connectToDB() {
  mongoose.set("strictQuery", true);
  if (!connURI) {
    throw new Error("Cannot get connection URI");
  }

  await mongoose
    .connect(connURI)
    .then(() => {
      console.log("successfully connected");
    })
    .catch((error) => {
      console.log(error);
    });
}
