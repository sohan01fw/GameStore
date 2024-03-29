import mongoose from "mongoose";

const connURI = process.env.NEXT_PUBLIC_MONGODB_URI || "";

export async function connectToDB() {
  mongoose.set("strictQuery", true);

  if (!connURI) {
    throw new Error("Cannot get connection URI from environment variables");
  }

  try {
    await mongoose.connect(connURI);
    console.log("Successfully connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    // Log to a file, send alerts, etc.
    throw new Error("Failed to connect to MongoDB");
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
