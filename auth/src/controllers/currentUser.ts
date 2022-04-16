import { Request, Response, NextFunction } from "express";

export const currentUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, id, fullName } = req.currentUser!;

  res.send({ currentUser: email, id, fullName });
};
