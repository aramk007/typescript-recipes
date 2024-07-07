const express = require("express");
const app = express.Router();

app.use("/recipes", require("./Recipes"));
app.get("/", (req, res) => {
  res.send("ALOOOOO");
});
module.exports = app;
