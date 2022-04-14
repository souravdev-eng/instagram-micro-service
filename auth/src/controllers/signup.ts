import { Request, Response, NextFunction } from "express";
import { BadRequestError } from "../errors/badRequestError";
import { User } from "../models/userModel";

export const signup = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password, userName, fullName } = req.body;

  const existUser = await User.findOne({ email });

  if (existUser) {
    return next(new BadRequestError("This email already exists"));
  }

  const user = User.build({ email, password, userName, fullName });
  await user.save();

  res.send(user);
};
