import mongoose from "mongoose";
import { app } from "./app";
import { UserCreatedListener } from "./events/listenears/userCreatedListener";
import { natsWrapper } from "./natsWrapper";

const start = async () => {
  if (!process.env.NATS_CLUSTER) {
    throw new Error("NATS cluster id not found");
  }
  if (!process.env.NATS_CLIENT_ID) {
    throw new Error("NATS client id not found");
  }
  if (!process.env.NATS_URL) {
    throw new Error("NATS url is not found");
  }

  try {
    await natsWrapper.connect(
      process.env.NATS_CLUSTER!,
      process.env.NATS_CLIENT_ID!,
      process.env.NATS_URL!
    );

    natsWrapper.client.on("close", () => {
      console.log("NATS connection closed........");
      process.exit();
    });

    new UserCreatedListener(natsWrapper.client).listen();

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
    console.log("Followers Service is running on port 3000");
  });
};

start();
