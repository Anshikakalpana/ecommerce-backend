import { createClient, type RedisClientType } from "redis";

const redis: RedisClientType = createClient({
  socket: {
    host: process.env.REDIS_HOST! || 'localhost',  
    port: Number(process.env.REDIS_PORT!) || 6379,
  },

});

redis.on("error", (err) => console.error(" Redis Client Error:", err));

export const connectRedis = async () => {
  if (!redis.isOpen) {
    await redis.connect();
    console.log("Connected to Redis Cloud");
  }
};

export default redis;
