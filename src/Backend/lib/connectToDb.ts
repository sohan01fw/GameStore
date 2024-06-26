import EventEmitter from "events";
import mongoose, { MongooseOptions } from "mongoose";

const connURI = process.env.MONGODB_URI;

let dbConnection:any;

export async function connectToDB() {
  mongoose.set("strictQuery", true);
  
  if (!connURI) {
    throw new Error("Cannot get connection URI");
  }
  try {
    dbConnection = await mongoose.connect(connURI);
    console.log("Successfully connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error; // Rethrow the error for handling at a higher level
  }
  // Increase the maximum number of listeners for the event emitter
  EventEmitter.setMaxListeners(100)
  // Graceful shutdown
  process.on("SIGINT", async () => {
    try {
      await mongoose.connection.close();
      console.log("MongoDB connection closed");
      process.exit(0);
    } catch (error) {
      console.error("Error closing MongoDB connection:", error);
      process.exit(1);
    }
  });

  return dbConnection;
}
