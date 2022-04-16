import { NextFunction, Request, Response } from "express";
import { BaseError } from "../errors/baseError";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(err);
  console.log(err.stack);
  if (err instanceof BaseError) {
    return res.status(err.statusCode).send({ errors: err.errorResponse() });
  }
  res.status(500).send({ errors: [{ message: "Something went wrong" }] });
};
