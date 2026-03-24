import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// Initialize Upstash Redis client
// Note: In local development, if these are missing, we should fail gracefully or allow
const redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL || "",
    token: process.env.UPSTASH_REDIS_REST_TOKEN || "",
});

/**
 * Creates a rate limiter for a specific action (e.g., "login", "register", "api")
 */
export const createRateLimiter = (limit: number, window: string = "60 s") => {
    if (!process.env.UPSTASH_REDIS_REST_URL) {
        console.warn("UPSTASH_REDIS_REST_URL is not set. Rate limiting is DISABLED.");
        return null;
    }

    return new Ratelimit({
        redis: redis,
        limiter: Ratelimit.slidingWindow(limit, window as any),
        analytics: true,
        prefix: "@upstash/ratelimit",
    });
};

// Global API rate limiter (60 req/min)
export const globalRateLimiter = createRateLimiter(60, "60 s");

// Stricter limiter for sensitive actions like registration (3 req/min)
export const sensitiveActionLimiter = createRateLimiter(3, "60 s");
