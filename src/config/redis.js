const { createClient } = require("redis");

let client;

const initRedis = async () => {
  try {
    client = createClient({
      socket: {
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT
      }
    });

    client.on("error", (err) => console.log("Redis Error", err));
    await client.connect();
    console.log("Redis connected");
  } catch (err) {
    console.log("Redis failed, continuing without cache");
  }
};

const getRedis = () => client;

module.exports = { initRedis, getRedis };