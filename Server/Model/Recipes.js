const mongoose = require("mongoose");
const recipeSchema = new mongoose.Schema({
  recipeName: {
    type: String,
    required: true,
  },
  instructions: {
    type: [String],
    required: true,
  },
  ingredients: {
    type: [String],
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  prepTime: {
    type: Number,
    required: true,
  },
  calories: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  difficulty: {
    type: String,
    required: true,
  },
});

const Recipe = new mongoose.model("recipes", recipeSchema);
module.exports = Recipe;
