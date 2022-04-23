import mongoose from "mongoose";
import bcrypt from "bcryptjs";

interface UserAttars {
  email: string;
  fullName: string;
  userName: string;
  password: string;
}

interface UserDoc extends mongoose.Document {
  email: string;
  fullName: string;
  userName: string;
  password: string;
  profileURL: string;
  numberOfPosts: number;
  followers: number;
  correctPassword(userPassword: string, dbPassword: string): Promise<boolean>;
}

interface UserModel extends mongoose.Model<UserDoc> {
  build(attars: UserAttars): UserDoc;
}

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
    },
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    userName: {
      type: String,
      required: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    numberOfPosts: {
      type: Number,
      default: 0,
    },
    followers: {
      type: Number,
      default: 0,
    },
    profileURL: {
      type: String,
      default:
        "https://www.pngfind.com/pngs/m/676-6764065_default-profile-picture-transparent-hd-png-download.png",
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.password;
        delete ret.__v;
      },
    },
  }
);

userSchema.statics.build = function (attars: UserAttars) {
  return new User(attars);
};

userSchema.methods.correctPassword = async function (
  userPassword: string,
  dbPassword: string
) {
  return await bcrypt.compare(userPassword, dbPassword);
};

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

const User = mongoose.model<UserDoc, UserModel>("User", userSchema);

export { User };
