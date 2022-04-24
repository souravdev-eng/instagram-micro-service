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
  likes: number;
}

interface PostModel extends mongoose.Model<PostDocument> {
  build(attars: PostAttars): PostDocument;
}

const postSchema = new mongoose.Schema(
  {
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
    likes: {
      type: Number,
      default: 0,
    },
    userId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

postSchema.statics.build = (attrs: PostAttars) => {
  return new Post(attrs);
};

const Post = mongoose.model<PostDocument, PostModel>("Post", postSchema);

export { Post };
