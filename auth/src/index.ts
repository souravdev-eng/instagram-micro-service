import mongoose from "mongoose";
import { app } from "./app";

const start = async () => {
  try {
    await mongoose.connect(process.env.DB_URL!, {
      user: process.env.USER_NAME!,
      pass: process.env.DB_PASSWORD!,
    });
    console.log("Connected to MongoDB...");
  } catch (error) {
    console.log(error);
    process.exit();
  }

  app.listen(3000, () => {
    console.log("Auth Service is running on port 3000");
  });
};

start();
