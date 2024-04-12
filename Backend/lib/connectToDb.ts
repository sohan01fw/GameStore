import mongoose from "mongoose";

type connObj = {
  isConnected?: number;
};
const connURI = process.env.NEXT_PUBLIC_MONGODB_URI || "";
const conection: connObj = {};
export async function connectToDB(): Promise<void> {
  if (conection.isConnected) {
    console.log("db is already connected");
    return;
  }
  mongoose.set("strictQuery", true);

  if (!connURI) {
    throw new Error("Cannot get connection URI from environment variables");
  }

  try {
    const db = await mongoose.connect(connURI);
    conection.isConnected = db.connections[0].readyState;
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
