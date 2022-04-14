import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import { RequestValidationError } from "../errors/requestValidation";

export const requestValidation = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return next(new RequestValidationError(errors.array()));
  }
  next();
};
