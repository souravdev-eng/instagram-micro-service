import { Request, Response, NextFunction } from "express";
import { BadRequestError } from "@instagram-dev/common";
import jwt from "jsonwebtoken";

// @Events
import { UserCreatedPublisher } from "../events/publisher/userCreatedPublisher";
import { natsWrapper } from "../nats-wrapper";

// @models
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

  const token = jwt.sign(
    { id: user.id, email: user.email, userName: user.userName },
    process.env.JWT_KEY!,
    { expiresIn: process.env.JWT_EXP! }
  );

  await new UserCreatedPublisher(natsWrapper.client).published({
    id: user.id,
    email: user.email,
    fullName: user.fullName,
    profileURL: user.profileURL,
    userName: user.userName,
  });

  res.status(201).send({ token, user });
};
