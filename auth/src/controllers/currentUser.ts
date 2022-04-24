import { Request, Response, NextFunction } from "express";

export const currentUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, id, userName } = req.currentUser!;

  res.send({ email, id, userName });
};
