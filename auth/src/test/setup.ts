import mongoose from "mongoose";
import { MongoMemoryServer, MongoInstance } from "mongodb-memory-server";

let mongo: any;

beforeAll(async () => {
  jest.clearAllMocks();
  process.env.JWT_KEY = "kjdhskcvhdkjs";
  process.env.JWT_EXP = "90d";
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

  mongo = await MongoMemoryServer.create();
  const uri = mongo.getUri();

  await mongoose.connect(uri);
});

beforeEach(async () => {
  const collections = await mongoose.connection.db.collections();

  for (let collection of collections) {
    await collection.deleteMany({});
  }
});

afterAll(async () => {
  await mongo.stop();
  await mongoose.connection.close();
});
