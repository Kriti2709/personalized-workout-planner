
process.env.NODE_ENV = "test";
process.env.JWT_SECRET = "testsecret";
process.env.JWT_REFRESH_SECRET = "refreshsecret";const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");

let mongo;

const connectTestDB = async () => {
  mongo = await MongoMemoryServer.create();
  const uri = mongo.getUri();
  await mongoose.connect(uri);
};

const disconnectTestDB = async () => {
  await mongoose.disconnect();
  await mongo.stop();
};

const clearCollections = async () => {
  const collections = mongoose.connection.collections;
  for (let key in collections) {
    await collections[key].deleteMany();
  }
};

module.exports = { connectTestDB, disconnectTestDB, clearCollections };