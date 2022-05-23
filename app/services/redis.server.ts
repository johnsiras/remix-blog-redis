import * as redis from "redis";

export const client = redis.createClient({
  url: process.env.REDIS_URL,
});

// client.connect();
client.on("error", (err) => console.error("Redis client error", err));
