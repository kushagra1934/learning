require("dotenv").config();
const express = require("express");

const { configureCors } = require("./config/corsConfig");
const app = express();
const PORT = process.env.PORT || 3000;

//express json middleware
app.use(configureCors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
