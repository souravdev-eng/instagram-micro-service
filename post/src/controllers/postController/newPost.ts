import { Request, Response, NextFunction } from "express";
import { PostCreatedPublisher } from "../../events/publishers/postCreatedPublisher";
import { Post } from "../../model/postModel";
import { natsWrapper } from "../../natsWrapper";

export const newPost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const post = Post.build({
    userId: req.currentUser!.id,
    photoUrl: req.body.photoUrl,
    tags: req.body.tags,
    title: req.body.title,
  });
  await post.save();
  res.send(post);

  new PostCreatedPublisher(natsWrapper.client).published({
    id: post.id,
    photoUrl: post.photoUrl,
    title: post.title,
    userId: post.userId,
  });
};
