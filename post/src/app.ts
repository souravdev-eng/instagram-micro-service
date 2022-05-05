import "express-async-errors";
import express from "express";

import { errorHandler } from "@instagram-dev/common";
import { postRoute } from "./routes/postRoute";

// specify the path

const app = express();

// @middleware
app.use(express.json());

// @routes
app.use(postRoute);

// @Global Error Handler
app.use(errorHandler);

export { app };
