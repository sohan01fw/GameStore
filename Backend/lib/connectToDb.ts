import mongoose from "mongoose";

const connURI = process.env.MONGODB_URI || "";

// Increase the maximum number of listeners for the NativeConnection event emitter
mongoose.connection.setMaxListeners(20); // Set the number according to your needs

export async function connectToDB(): Promise<void> {
  mongoose.set("strictQuery", true);

  if (!connURI) {
    throw new Error("Cannot get connection URI from environment variables");
  }

  try {
    await mongoose.connect(connURI);
    console.log("Successfully connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }

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
}
