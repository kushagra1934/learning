const cors = require("cors");

const configureCors = () => {
  return cors({
    //origin-> this will tell that which origins you want can access your api
    origin: (origin, callback) => {
      const allowedOrigins = [
        "http://localhost:3000", //local dev
        "http://yourcustomdomain.com", //production domain
      ];

      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true); //given permission so that request can be allowed
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },

    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization", "Accept-Version"],
    exposedHeaders: ["X-Total-Count", "Content-Range"],
    credentials: true, //enable support for cookies,
    preflightContinue: false,
    maxAge: 600, //cache pre flight responses for 10 min -> avoid sending options multiple times
    optionsSuccessStatus: 204,
  });
};

module.exports = {configureCors};
