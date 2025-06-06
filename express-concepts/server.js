require("dotenv").config();
const express = require("express");

const { configureCors } = require("./config/corsConfig");
const {
  requestLogger,
  addTimeStamp,
} = require("./middleware/customMiddleware");
const { globalErrorhandler } = require("./middleware/errorHandler");
const { urlVersioning } = require("./middleware/apiVersioning");
const app = express();
const PORT = process.env.PORT || 3000;

//express json middleware
app.use(requestLogger);
app.use(addTimeStamp);

app.use(configureCors());
app.use(express.json());

app.use(globalErrorhandler);

app.use('/api/v1', urlVersioning('v1'))

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
