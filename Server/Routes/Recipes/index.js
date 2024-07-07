const express = require("express");
const { getAllRecipes, addRecipe } = require("../../Controllers/recipe");
const app = express.Router();

app.get("/", getAllRecipes);

app.post("/", addRecipe);

module.exports = app;
