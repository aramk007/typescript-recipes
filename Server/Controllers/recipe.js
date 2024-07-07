const Recipe = require("../Model/Recipes");

const getAllRecipes = async (req, res) => {
  try {
    const allRecipes = await Recipe.find();
    res.status(200).send(allRecipes);
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
};

module.exports = {
  getAllRecipes,
};
