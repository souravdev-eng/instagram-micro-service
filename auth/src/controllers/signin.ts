import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { BadRequestError } from "@instagram-dev/common";
import { User } from "../models/userModel";

export const signIn = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(
      new BadRequestError("Invalid email or password! Please try again")
    );
  }

  const token = jwt.sign(
    { id: user.id, email: user.email, userName: user.userName },
    process.env.JWT_KEY!,
    { expiresIn: process.env.JWT_EXP! }
  );

  res.status(200).send({ token, user });
};
