const express = require("express");
const { getAllRecipes } = require("../../Controllers/recipe");
const app = express.Router();

app.get("/", getAllRecipes);

module.exports = app;
