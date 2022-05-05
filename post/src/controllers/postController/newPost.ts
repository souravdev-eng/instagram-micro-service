import { Request, Response, NextFunction } from "express";
import { PostCreatedPublisher } from "../../events/publishers/postCreatedPublisher";

import { natsWrapper } from "../../natsWrapper";
import { Post } from "../../model/postModel";
import { uploadFile } from "../../aws/s3";
import { PostTagCreatedPublisher } from "../../events/publishers/postTagCreatedPublisher";

export const newPost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let tags;
  const file = req.file;
  const result = await uploadFile(file, req);

  if (req.body.title) {
    tags = req.body.title.split(" ").filter((v: any) => v.startsWith("#"));
  }

  const post = Post.build({
    userId: req.currentUser!.id,
    photoUrl: result.Location,
    tags: tags,
    title: req.body.title,
  });
  await post.save();
  res.send(post);

  if (post.tags.length > 0) {
    new PostTagCreatedPublisher(natsWrapper.client).published({
      postId: post.id,
      userId: post.userId,
      tags: post.tags,
    });
  }

  new PostCreatedPublisher(natsWrapper.client).published({
    id: post.id,
    photoUrl: post.photoUrl,
    title: post.title,
    userId: post.userId,
  });
};
