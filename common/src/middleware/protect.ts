import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { BadRequestError } from "../errors/badRequestError";

interface UserPayload {
  email: string;
  id: string;
  userName: string;
}

declare global {
  namespace Express {
    interface Request {
      currentUser?: UserPayload;
    }
  }
}

export const protect = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  if (!token) {
    return next(
      new BadRequestError("You are not logged in! Please login first")
    );
  }

  const decoded = jwt.verify(token, process.env.JWT_KEY!) as UserPayload;
  req.currentUser = decoded;
  next();
};
