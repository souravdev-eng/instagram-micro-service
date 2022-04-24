import { Request, Response, NextFunction } from "express";
import { Post } from "../../model/postModel";

export const showAllPost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const posts = await Post.find({}).populate({
    path: "userId",
    select: "userName profileURL",
  });
  res.send(posts);
};
