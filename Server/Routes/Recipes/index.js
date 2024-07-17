const express = require("express");
const {
  getAllRecipes,
  addRecipe,
  getRecipeById,
  updateRecipe,
} = require("../../Controllers/recipe");
const app = express.Router();

app.get("/", getAllRecipes);

app.get("/:id", getRecipeById);

app.patch("/:id", updateRecipe);

app.post("/", addRecipe);

module.exports = app;
