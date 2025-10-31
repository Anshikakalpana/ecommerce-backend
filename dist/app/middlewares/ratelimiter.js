import redis from "../config/redis.js";
async function ratelimiter(req, res, next) {
    try {
        const ip = req.ip;
        const key = `ratelimit:${ip}`;
        const limit = 10;
        const windowSeconds = 600;
        const requests = await redis.incr(key);
        if (requests === 1) {
            await redis.expire(key, windowSeconds);
        }
        if (requests > limit) {
            return res.status(429).json({
                success: false,
                message: `Too many requests. Please try again after 10 minutes.`,
            });
        }
        next();
    }
    catch (err) {
        console.error("Rate limiter error:", err);
        next();
    }
}
export default ratelimiter;
//# sourceMappingURL=ratelimiter.js.map