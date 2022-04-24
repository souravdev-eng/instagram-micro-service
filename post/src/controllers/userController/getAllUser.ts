import { Request, Response } from "express";
import { User } from "../../model/userModel";

export const getAllUser = async (req: Request, res: Response) => {
  const users = await User.find({});
  res.send(users);
};
