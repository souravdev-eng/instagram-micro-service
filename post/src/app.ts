import "express-async-errors";
import express from "express";
import { errorHandler } from "@instagram-dev/common";
import { UserCreatedListener } from "./events/listeners/userCreatedListener";
import { natsWrapper } from "./natsWrapper";

const app = express();

// @middleware
app.use(express.json());

// @routes
// app.use(UserRouter);

// @Global Error Handler
app.use(errorHandler);

export { app };
