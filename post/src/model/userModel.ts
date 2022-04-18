import mongoose from "mongoose";

interface UserAttars {
  id: string;
  email: string;
  fullName: string;
  userName: string;
  profileURL: string;
}

interface UserDocument extends mongoose.Document {
  id: string;
  email: string;
  fullName: string;
  userName: string;
  profileURL: string;
}

interface UserModel extends mongoose.Model<UserDocument> {
  build(attars: UserAttars): UserDocument;
}

const UserSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      trim: true,
    },
    profileURL: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
      },
    },
  }
);

UserSchema.statics.build = (attars: UserAttars) => {
  return new User({
    _id: attars.id,
    userName: attars.userName,
    fullName: attars.fullName,
    email: attars.email,
    profileURL: attars.profileURL,
  });
};

const User = mongoose.model<UserDocument, UserModel>("User", UserSchema);

export { User };
