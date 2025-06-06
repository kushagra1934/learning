const rateLimit = require("express-rate-limit");

const createBasicRateLimiter=(maxRequests, time)=>{
    return rateLimit({
        windowMs: time, // 15 minutes
        max: maxRequests, // limit each IP to 100 requests per windowMs
        standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
        legacyHeaders: false, // Disable the `X-RateLimit-*` headers
        message: "Too many requests, please try again later",
      });

}


module.exports={createBasicRateLimiter}