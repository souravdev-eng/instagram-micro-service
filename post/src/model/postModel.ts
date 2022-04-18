import mongoose from "mongoose";

interface PostAttars {
  userId: string;
  title?: string;
  photoUrl: string;
  tags?: string[];
}

interface PostDocument extends mongoose.Document {
  userId: string;
  title: string;
  photoUrl: string;
  tags: string[];
  createdAt: string;
}

interface PostModel extends mongoose.Model<PostDocument> {
  build(attars: PostAttars): PostDocument;
}

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
  },
  photoUrl: {
    type: String,
    trim: true,
    required: true,
  },
  tags: {
    type: [String],
    default: [],
  },
  userId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
});

const Post = mongoose.model<PostDocument, PostModel>("Post", postSchema);

export { Post };
