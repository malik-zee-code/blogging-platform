import mongoose from "mongoose";

// DEFINE THE ASYNC FUNCTION TO CONNECT TO MONGODB
const dbConnect = async () => {
  try {
    // CHECK IF THE DATABASE URL IS PROVIDED
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI is not defined in the environment variables");
    }

    // CHECK IF THE DATABASE NAME IS PROVIDED
    if (!process.env.DB_NAME) {
      throw new Error("DB_NAME is not defined in the environment variables");
    }

    // ATTEMPT TO CONNECT TO THE MONGODB DATABASE
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: process.env.DB_NAME, // USE THE SPECIFIED DATABASE NAME
    });

    console.log(`Connected to database: ${process.env.DB_NAME}`);

    console.log("Mongo connection successfully established");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw new Error("Error connecting to MongoDB");
  }
};

export default dbConnect;
