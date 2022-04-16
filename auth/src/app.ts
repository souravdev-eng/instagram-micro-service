import "express-async-errors";
import express from "express";
import { errorHandler } from "@instagram-dev/common";
import { UserRouter } from "./routes/user.routes";

const app = express();

// @middleware
app.use(express.json());

// @routes
app.use(UserRouter);

// @Global Error Handler
app.use(errorHandler);

export { app };
